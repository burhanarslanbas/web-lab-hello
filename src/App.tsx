import './App.css'

import img_profile from './assets/profile.jpeg'
import img_ecommerce from './assets/projects/e-commerce.jpg'
import img_blog from './assets/projects/blog.jpg'
import img_weather from './assets/projects/weather.jpg'
import Button from './components/Button'

function App() {
  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 flex flex-col gap-12 p-4">
      {/* Dark mode toggle */}
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
        aria-label="Tema degistir"
      >
        <span className="dark:hidden">🌙</span>
        <span className="hidden dark:inline">☀️</span>
      </button>

      {/* Uygulama-3: Basit kart */}
      <div className="flex items-center justify-center">
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg max-w-sm w-full p-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Merhaba Tailwind!</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Bu benim ilk Tailwind CSS bileşenim. Her class tek bir iş yapar.
          </p>
          <Button variant="primary" size="md">
            Devam Et
          </Button>
        </div>
      </div>

      {/* Uygulama-4: Responsive Grid */}
      <section className="px-4 py-12 max-w-6xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Projelerim</h2>

        {/* Mobil: 1 sütun, Tablet: 2 sütun, Desktop: 3 sütun */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <article className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
            <img src={img_ecommerce} alt="E-Ticaret" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">E-Ticaret Sitesi</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                React ve Node.js ile geliştirilmiş tam kapsamlı bir e-ticaret uygulaması.
              </p>
            </div>
          </article>

          <article className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
            <img src={img_blog} alt="Blog Uygulaması" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">Blog Uygulaması</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Markdown destekli yazı editörü olan kişisel blog platformu.
              </p>
            </div>
          </article>

          <article className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
            <img src={img_weather} alt="Hava Durumu" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">Hava Durumu</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                OpenWeather API ile gerçek zamanlı hava durumu bilgisi gösteren arayüz.
              </p>
              <div className="mt-4 flex gap-2">
                <Button size="sm" variant="secondary">
                  Detay
                </Button>
                <Button size="sm" variant="ghost">
                  Kodu Gör
                </Button>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}

export default App