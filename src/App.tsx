import './App.css'

import img_profile from './assets/profile.jpeg'
import img_ecommerce from './assets/projects/e-commerce.jpg'
import img_blog from './assets/projects/blog.jpg'
import img_weather from './assets/projects/weather.jpg'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col gap-12 p-4">
      {/* Uygulama-3: Basit kart */}
      <div className="flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-lg max-w-sm w-full p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Merhaba Tailwind!</h1>
          <p className="text-gray-600 mb-4">
            Bu benim ilk Tailwind CSS bileşenim. Her class tek bir iş yapar.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Devam Et
          </button>
        </div>
      </div>

      {/* Uygulama-4: Responsive Grid */}
      <section className="px-4 py-12 max-w-6xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-center mb-8">Projelerim</h2>

        {/* Mobil: 1 sütun, Tablet: 2 sütun, Desktop: 3 sütun */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <article className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={img_ecommerce} alt="E-Ticaret" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">E-Ticaret Sitesi</h3>
              <p className="text-gray-600 text-sm">React ve Node.js ile geliştirilmiş tam kapsamlı bir e-ticaret uygulaması.</p>
            </div>
          </article>

          <article className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={img_blog} alt="Blog Uygulaması" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">Blog Uygulaması</h3>
              <p className="text-gray-600 text-sm">Markdown destekli yazı editörü olan kişisel blog platformu.</p>
            </div>
          </article>

          <article className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={img_weather} alt="Hava Durumu" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">Hava Durumu</h3>
              <p className="text-gray-600 text-sm">OpenWeather API ile gerçek zamanlı hava durumu bilgisi gösteren arayüz.</p>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}

export default App