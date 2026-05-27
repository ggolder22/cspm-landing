export default async function handler(req, res) {
  const { code } = req.query;

  if (!code) {
    return res.status(400).json({ error: "Falta el código de autorización" });
  }

  const clientId     = process.env.OAUTH_CLIENT_ID;
  const clientSecret = process.env.OAUTH_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return res.status(500).json({ error: "Variables de entorno OAUTH no configuradas" });
  }

  try {
    const response = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code })
    });

    const data = await response.json();

    if (data.access_token) {
      // Redirige al admin con el token — Decap CMS lo captura del hash
      return res.redirect(
        `${req.headers.origin || "https://cspm-landing.vercel.app"}/admin/#access_token=${data.access_token}&token_type=${data.token_type}`
      );
    } else {
      return res.status(400).json({ error: "GitHub rechazó el código", details: data });
    }
  } catch (err) {
    return res.status(500).json({ error: "Error al contactar GitHub", message: err.message });
  }
}
