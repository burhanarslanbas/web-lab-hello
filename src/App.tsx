import './App.css'

function App() {
  return (
    <>
      <header>
        <div className="site-title">Ahmet Yilmaz</div>
        <nav>
          <ul>
            <li>
              <a href="#hakkimda">Hakkimda</a>
            </li>
            <li>
              <a href="#projeler">Projeler</a>
            </li>
            <li>
              <a href="#iletisim">Iletisim</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <h1>Ahmet Yilmaz - Kisisel Portfolyo</h1>

        <section id="hakkimda">
          <h2>Hakkimda</h2>
          <figure>
            <img
              src="profil.jpg"
              alt="Ahmet Yilmaz'in vesikalik fotografi"
            />
            <figcaption>Ahmet Yilmaz</figcaption>
          </figure>

          <ul className="skill-tags" role="list" aria-label="Beceri etiketleri">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>TypeScript</li>
            <li>Git</li>
          </ul>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>
          <div className="project-grid">
            <article className="project-card">
              <img
                src="proje1.jpg"
                alt="E-Ticaret sitesi anasayfa ekran goruntusu"
              />
              <h3>E-Ticaret Sitesi</h3>
              <p>
                React ve Node.js ile gelistirilmis tam kapsamli bir e-ticaret
                uygulamasi.
              </p>
              <ul className="skill-tags">
                <li>React</li>
                <li>Node.js</li>
                <li>MongoDB</li>
              </ul>
            </article>

            <article className="project-card">
              <img
                src="proje2.jpg"
                alt="Blog uygulamasi yazi listesi gorunumu"
              />
              <h3>Blog Uygulamasi</h3>
              <p>
                Kisisel blog platformu. Markdown destekli yazi editoru ile
                icerik yonetimi.
              </p>
              <ul className="skill-tags">
                <li>TypeScript</li>
                <li>Next.js</li>
              </ul>
            </article>

            <article className="project-card">
              <img
                src="proje3.jpg"
                alt="Hava durumu uygulamasi arayuzu"
              />
              <h3>Hava Durumu</h3>
              <p>
                OpenWeather API ile anlik hava durumu bilgisi sunan web
                uygulamasi.
              </p>
              <ul className="skill-tags">
                <li>JavaScript</li>
                <li>API</li>
              </ul>
            </article>
          </div>
        </section>

        <section id="iletisim">
          <h2>Iletisim</h2>
          {/* form buraya */}
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Ad Soyad. Tum haklari saklidir.</p>
      </footer>
    </>
  )
}

export default App