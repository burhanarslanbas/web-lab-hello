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
          <figure>
            <img
              src="proje1.jpg"
              alt="E-ticaret sitesi ana sayfa ekran goruntusu"
            />
            <figcaption>E-Ticaret Sitesi</figcaption>
          </figure>
          <figure>
            <img
              src="proje2.jpg"
              alt="Blog uygulamasi liste sayfasi ekran goruntusu"
            />
            <figcaption>Blog Uygulamasi</figcaption>
          </figure>
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