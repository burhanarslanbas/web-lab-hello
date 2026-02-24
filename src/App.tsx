import './App.css'

function App() {
  return (
    <>
      <header>
        <h1>Burhanettin Arslanbaş - Kişisel Portföy</h1>
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
        <section id="hakkimda">
          <h2>Hakkimda</h2>
          <p>Merhaba, ben Burhanettin. Yazılım Mühendisliği öğrencisiyim.</p>
          <p>Backend geliştirme ve yazılım mimarisi ile ilgileniyorum.</p>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>
          <p>Yakında projelerimi bu bölümde paylaşacağım.</p>
        </section>

        <section id="iletisim">
          <h2>Iletisim</h2>
          <p>E-posta: ornek@mail.com</p>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Burhanettin Arslanbaş. Tum haklari saklidir.</p>
      </footer>
    </>
  )
}

export default App