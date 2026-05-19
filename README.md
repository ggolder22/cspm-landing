# CSPM — Landing Page
## Instrucciones para subir a Vercel

### Archivos incluidos
- `index.html` — la landing page completa
- `vercel.json` — configuración de Vercel
- `README.md` — este archivo

---

### OPCIÓN A — Subir sin cuenta de GitHub (más fácil)

1. Entrá a **vercel.com**
2. Hacé clic en "Sign Up" → elegí "Continue with Email"
3. Una vez dentro, hacé clic en "Add New" → "Project"
4. Elegí **"Deploy from your computer"** o arrastrá la carpeta completa
5. Subí esta carpeta entera (`cspm-vercel`)
6. Vercel detecta el `vercel.json` y despliega automáticamente
7. En 30 segundos tenés una URL tipo `cspm-landing.vercel.app`

---

### OPCIÓN B — Con GitHub (recomendado para actualizaciones fáciles)

1. Creá una cuenta en **github.com**
2. Creá un repositorio nuevo llamado `cspm-landing`
3. Subí los dos archivos (`index.html` y `vercel.json`)
4. Entrá a **vercel.com** → "Sign Up" → "Continue with GitHub"
5. Autorizá Vercel → "Add New Project" → seleccioná el repo `cspm-landing`
6. Hacé clic en "Deploy" — listo

**Ventaja:** cada vez que quieras cambiar algo, solo actualizás el archivo en GitHub y Vercel redesplega solo.

---

### Conectar tu dominio propio (ej: cspm.com.ar)

Una vez que el sitio esté en Vercel:

1. En el panel de Vercel → tu proyecto → "Settings" → "Domains"
2. Escribí tu dominio (ej: `cspm.com.ar`) → "Add"
3. Vercel te muestra los registros DNS a configurar
4. En Google Domains / Squarespace → DNS → agregás esos registros
5. En 24-48hs el dominio apunta a tu landing

---

### Soporte
Si algo no funciona, el chat de soporte de Vercel está en **vercel.com/support**
