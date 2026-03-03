import './App.css'

function App() {
  return (
    <>
      <header>
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