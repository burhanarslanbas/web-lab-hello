import { useEffect, useState } from 'react'
import './App.css'

import img_profile from './assets/profile.jpeg'
import Button from './components/Button'
import Input from './components/Input'
import Card from './components/Card'
import Alert from './components/Alert'
import type { Project } from './types/project'
import { fetchProjects } from './services/projectService'

function App() {
  const [showSuccess, setShowSuccess] = useState(false)
  const [projects, setProjects] = useState<Project[]>([])
  const [projectsLoading, setProjectsLoading] = useState(true)
  const [projectsError, setProjectsError] = useState<string | null>(null)

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark')
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setShowSuccess(true)
  }

  useEffect(() => {
    let cancelled = false

    async function loadProjects() {
      try {
        setProjectsLoading(true)
        setProjectsError(null)
        const data = await fetchProjects()
        if (!cancelled) {
          setProjects(data)
        }
      } catch (err) {
        console.error('Veri çekme hatası:', err)
        if (!cancelled) {
          setProjectsError(
            err instanceof Error ? err.message : 'Bilinmeyen hata',
          )
        }
      } finally {
        if (!cancelled) {
          setProjectsLoading(false)
        }
      }
    }

    void loadProjects()
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {/* Skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-800 text-white p-2 z-50"
      >
        Ana içeriğe atla
      </a>

      {/* Dark mode toggle */}
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
        aria-label="Tema değiştir"
        type="button"
      >
        <span className="dark:hidden">🌙</span>
        <span className="hidden dark:inline">☀️</span>
      </button>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
          <h1 className="text-xl font-bold text-blue-800 dark:text-blue-300">
            Burhanettin Arslanbaş
          </h1>
          <nav aria-label="Ana navigasyon">
            <ul className="flex flex-wrap gap-2">
              <li>
                <a
                  href="#hakkimda"
                  className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors"
                >
                  Hakkımda
                </a>
              </li>
              <li>
                <a
                  href="#projeler"
                  className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors"
                >
                  Projeler
                </a>
              </li>
              <li>
                <a
                  href="#iletisim"
                  className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors"
                >
                  İletişim
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content" className="max-w-6xl mx-auto px-4 space-y-16 py-10">
        {/* Hakkımda */}
        <section id="hakkimda" className="py-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
            <figure className="shrink-0">
              <img
                src={img_profile}
                alt="Burhanettin Arslanbaş profil fotoğrafı"
                className="w-40 h-40 rounded-full object-cover shadow-lg"
              />
            </figure>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center md:text-left">
                Hakkımda
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Merhaba, ben Burhanettin Arslanbaş. Yazılım Mühendisliği öğrencisiyim ve
                ağırlıklı olarak backend geliştirme üzerine çalışıyorum. .NET (C#), Clean
                Architecture, CQRS ve Web API ile ölçeklenebilir ve bakımı kolay sistemler
                geliştirmeye odaklanıyorum.
              </p>
              <ul className="flex flex-wrap gap-2">
                {['C#', '.NET', 'Clean Architecture', 'CQRS', 'React', 'SQL Server', 'Git'].map(
                  (skill) => (
                    <li
                      key={skill}
                      className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </section>

        {/* Projeler */}
        <section id="projeler" className="py-4 bg-gray-50 dark:bg-gray-900 rounded-2xl">
          <div className="px-4 py-10">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
              Projelerim
            </h2>

            {projectsError && (
              <div className="mb-6">
                <Alert variant="error" title="Projeler yüklenemedi">
                  {projectsError}
                </Alert>
              </div>
            )}

            {projectsLoading && (
              <p className="text-center text-gray-500 dark:text-gray-400">Yükleniyor...</p>
            )}

            {!projectsLoading && !projectsError && projects.length === 0 && (
              <p className="text-center text-gray-500 dark:text-gray-400">
                Liste boş.
              </p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {!projectsLoading &&
                projects.map((project) => (
                  <Card
                    key={project.id}
                    variant="outlined"
                    title={project.title}
                    image={project.image}
                    imageAlt={`${project.title} ekran görüntüsü`}
                    footer={<Button size="sm">İncele</Button>}
                  >
                    <p className="mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-0.5 rounded-full"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-gray-400 dark:text-gray-500">
                      {project.year} · {project.category}
                      {project.featured ? ' · Öne çıkan' : ''}
                    </p>
                  </Card>
                ))}
            </div>
          </div>
        </section>

        {/* İletişim */}
        <section id="iletisim" className="py-4">
          <div className="max-w-lg mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
              İletişim
            </h2>

            {showSuccess && (
              <Alert
                variant="success"
                title="Mesaj gönderildi"
                dismissible
                onDismiss={() => setShowSuccess(false)}
              >
                En kısa sürede geri dönüş yapacağım.
              </Alert>
            )}

            <form className="space-y-4" onSubmit={handleSubmit}>
              <Input id="name" label="Ad Soyad" required placeholder="Adınız Soyadınız" />
              <Input
                id="email"
                label="E-posta"
                type="email"
                required
                helpText="Örnek: ad@mail.com"
              />
              <div className="space-y-1">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600"
                />
              </div>
              <Button variant="primary" size="lg" type="submit">
                Gönder
              </Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 text-center py-6 px-4 text-gray-500 dark:text-gray-400 text-sm mt-10">
        <p>&copy; 2025 Burhanettin Arslanbaş. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  )
}

export default App