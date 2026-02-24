import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div style={{ 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '20px',
      textAlign: 'left'
    }}>
      <header>
        <h1>Web Tasarimi ve Programlama </h1>
        <h2>LAB -1</h2>
      </header>
      
      <section style={{ marginTop: '20px' }}>
        <h3>Kişisel Bilgiler</h3>
        <p><strong>Ad Soyad:</strong> Burhanettin Arslanbaş</p>
        <p><strong>Ogrenci No:</strong> 220542021</p>
        <p><strong>Bölüm Adı:</strong> Yazılım Mühendisliği</p>
      </section>

      <section style={{ marginTop: '20px' }}>
        <h3>Hobiler</h3>
        <ul>
          <li>Backend ve Mimari Çalışmak</li>
          <li>Kahve</li>
          <li>Kitap</li>
          <li>Bisiklet</li>
        </ul>
      </section>

      <section style={{ marginTop: '20px' }}>
        <h3>Hakkımda</h3>
        <p>Merhaba, ben Burhanettin Arslanbaş. Yazılım Mühendisliği bölümünde okuyorum. Backend üzerinde çalışmayı seviyorum ve mimari konulara ilgi duyuyorum.</p>
      </section>
    </div>
    </>
  )
}

export default App
