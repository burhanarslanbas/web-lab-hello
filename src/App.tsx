import './App.css'
import profileImage from './assets/profile.jpeg'
import project1Image from './assets/projects/e-commerce.jpg'
import project2Image from './assets/projects/blog.jpg'
import project3Image from './assets/projects/weather.jpg'

function App() {
  return (
    <>
      <header>
        <div className="site-title">Burhanettin Arslanbaş</div>
        <nav>
          <ul>
            <li>
              <a href="#hakkimda">Hakkımda</a>
            </li>
            <li>
              <a href="#projeler">Projeler</a>
            </li>
            <li>
              <a href="#iletisim">İletişim</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <h1>Burhanettin Arslanbaş - Kişisel Portfolyo</h1>

        <section id="hakkimda">
          <h2>Hakkimda</h2>
          <div className="about-content">
            <figure>
              <img
                src={profileImage}
                alt="Burhanettin Arslanbaş'in vesikalik fotografi"
              />
              <figcaption>Burhanettin Arslanbaş</figcaption>
            </figure>

            <div>
              <p>
                Merhaba, ben Burhanettin Arslanbaş. Yazilim Muhendisligi öğrencisiyim
                ve ağırlıklı olarak backend geliştirme üzerine çalışıyorum.
              </p>
              <p>
                .NET (C#), Clean Architecture, CQRS ve Web API ile ölçeklenebilir ve bakımı kolay sistemler geliştirmeye odaklanıyorum.
              </p>

              <ul
                className="skill-tags"
                role="list"
                aria-label="Beceri etiketleri"
              >
                <li>HTML5</li>
                <li>CSS3</li>
                <li>C#</li>
                <li>.NET</li>
                <li>Clean Architecture</li>
                <li>CQRS</li>
                <li>React</li>
                <li>Git</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>
          <div className="project-grid">
            <article className="project-card">
              <img
                src={project1Image}
                alt="E-Ticaret sitesi anasayfa ekran goruntusu"
              />
              <h3>E-Ticaret API</h3>
              <p>
                .NET ve Clean Architecture ile gelistirilmis, urun, siparis ve
                odeme yonetimi iceren bir e-ticaret backend API'si.
              </p>
              <ul className="skill-tags">
                <li>C#</li>
                <li>ASP.NET Core</li>
                <li>SQL Server</li>
              </ul>
            </article>

            <article className="project-card">
              <img
                src={project2Image}
                alt="Blog uygulamasi yazi listesi gorunumu"
              />
              <h3>Blog Platformu</h3>
              <p>
                Kisisel blog platformu. JWT tabanli kimlik dogrulama ve
                role-based yetkilendirme icerir.
              </p>
              <ul className="skill-tags">
                <li>ASP.NET Core</li>
                <li>Entity Framework Core</li>
              </ul>
            </article>

            <article className="project-card">
              <img
                src={project3Image}
                alt="Hava durumu uygulamasi arayuzu"
              />
              <h3>Hava Durumu Servisi</h3>
              <p>
                OpenWeather API uzerinden veri cekip cache'leyen ve farkli
                istemcilere JSON formatinda sunan microservice.
              </p>
              <ul className="skill-tags">
                <li>JavaScript</li>
                <li>API</li>
              </ul>
            </article>
          </div>
        </section>

        <section id="iletisim">
          <h2>İletişim</h2>
          {/* form buraya */}
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Burhanettin Arslanbaş. Tüm hakları saklıdır.</p>
      </footer>
    </>
  )
}

export default App