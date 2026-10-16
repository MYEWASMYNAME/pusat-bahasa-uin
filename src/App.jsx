
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Tentang from './pages/Tentang'
import Layanan from './pages/Layanan'
import Program from './pages/Program'
import Berita from './pages/Berita'
import Kontak from './pages/Kontak'
import TesBahasa from './pages/TesBahasa'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/layanan" element={<Layanan />} />
        <Route
          path="/layanan/tes-bahasa"
          element={<TesBahasa />}
        />
        <Route path="/program" element={<Program />} />
        <Route path="/berita" element={<Berita />} />
        <Route path="/kontak" element={<Kontak />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
