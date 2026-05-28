module.exports = async function handler(req, res) {
  const { code, provider } = req.query;
  const clientId     = process.env.OAUTH_CLIENT_ID;
  const clientSecret = process.env.OAUTH_CLIENT_SECRET;
  const origin       = `https://${req.headers.host}`;

  // Paso 1: Decap abre el popup → redirigimos a GitHub para login
  if (provider === 'github') {
    const params = new URLSearchParams({
      client_id:    clientId,
      redirect_uri: `${origin}/api/auth`,
      scope:        'repo,user',
      state:        Math.random().toString(36).slice(2)
    });
    return res.redirect(`https://github.com/login/oauth/authorize?${params}`);
  }

  // Paso 2: GitHub redirige de vuelta con el código → lo canjeamos por token
  if (code) {
    try {
      const response = await fetch('https://github.com/login/oauth/access_token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code })
      });
      const data = await response.json();

      if (data.access_token) {
        // GitHub usa COOP: same-origin, lo que corta window.opener en el popup.
        // Redirigimos al relay en la misma origen que el admin para comunicar via BroadcastChannel.
        const token = encodeURIComponent(data.access_token);
        return res.redirect(`https://www.cspm.com.ar/admin/auth-success.html#token=${token}`);
      }

      return res.status(401).json({ error: 'Token exchange failed', detail: data });

    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  return res.status(400).json({ error: 'Parámetro inválido' });
};
