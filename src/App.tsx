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
      <h1>Web Tasarimi ve Programlama </h1>
      <h2>LAB -1</h2>
      <p><strong>Ad Soyad:</strong> Burhanettin Arslanbaş</p>
      <p><strong>Ogrenci No:</strong> 220542021</p>
      <p><strong>Bölüm Adı:</strong> Yazılım Mühendisliği</p>
      <p><strong>Hobiler:</strong></p>
      <ul>
        <li>Backend ve Mimari Çalışmak</li>
        <li>Kahve</li>
        <li>Kitap</li>
        <li>Bisiklet</li>
      </ul>
      <p><strong>Tanıtım:</strong> Merhaba, ben Burhanettin Arslanbaş. Yazılım Mühendisliği bölümünde okuyorum. Backend üzerinde çalışmayı seviyorum ve mimari konulara ilgi duyuyorum.</p>
    </div>
    </>
  )
}

export default App
