import './App.css';

function App() {
  return (
    <div className="app">
      <header className="hero">
        <p className="tag">academia.blockchaintechnologysas.com</p>
        <h1>Academia Blockchain</h1>
        <p className="subtitle">
          Plataforma educativa lista para web, Android y iOS usando React con Vite y Capacitor.
        </p>
        <div className="cta-row">
          <a className="button primary" href="#temario">Ver temario</a>
          <a className="button secondary" href="#native">Guía móvil</a>
        </div>
      </header>

      <main className="content">
        <section className="card" id="temario">
          <h2>Plan de la app</h2>
          <ul>
            <li>Onboarding de usuarios con autenticación híbrida.</li>
            <li>Catálogo de cursos y lecciones con progreso guardado.</li>
            <li>Recordatorios push y sincronización offline usando Capacitor.</li>
            <li>Soporte multilenguaje y accesibilidad desde un solo código.</li>
          </ul>
        </section>

        <section className="card" id="native">
          <h2>Preparada para Android e iOS</h2>
          <p>
            El proyecto incluye configuración de Capacitor para generar contenedores nativos.
            Ejecuta los comandos <code>npm run android</code> o <code>npm run ios</code> después de instalar las dependencias
            para compilar las apps móviles desde la misma base React.
          </p>
          <ol className="steps">
            <li>Instala dependencias con <code>npm install</code>.</li>
            <li>Compila el frontend con <code>npm run build</code>.</li>
            <li>Usa <code>npx cap add android</code> o <code>npx cap add ios</code> para generar los proyectos nativos.</li>
            <li>Abre el proyecto nativo en Android Studio o Xcode para firmar y publicar.</li>
          </ol>
        </section>

        <section className="card" id="server">
          <h2>Servidor listo para desarrollo</h2>
          <p>
            El servidor de Vite se inicia en el puerto <strong>3324</strong> y puede vincularse al subdominio
            <strong>academia.blockchaintechnologysas.com</strong> para entornos de prueba o staging.
          </p>
          <pre className="snippet">npm run dev -- --host --port 3324</pre>
        </section>
      </main>
    </div>
  );
}

export default App;
