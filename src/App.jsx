import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'

import Home from './pages/Home'
import Tentang from './pages/Tentang'
import Layanan from './pages/Layanan'

import TesBahasa from './pages/TesBahasa'
import PelatihanBahasa from './pages/PelatihanBahasa'
import TerjemahanAbstrak from './pages/TerjemahanAbstrak'
import TesBahasaD3S1 from './pages/TesBahasaD3S1'
import TesBahasaS2S3 from './pages/TesBahasaS2S3'
import TesBahasaOnline from './pages/TesBahasaOnline'

import Program from './pages/Program'
import Berita from './pages/Berita'
import Kontak from './pages/Kontak'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* HALAMAN UTAMA */}
        <Route path="/" element={<Home />} />
        <Route path="/tentang" element={<Tentang />} />

        {/* HALAMAN LAYANAN */}
        <Route path="/layanan" element={<Layanan />} />

        {/* TES DAN PELATIHAN */}
        <Route
          path="/layanan/tes-bahasa"
          element={<TesBahasa />}
        />

         <Route
          path="/layanan/tes-bahasa/d3-s1"
          element={<TesBahasaD3S1 />}
        />

        <Route
  path="/layanan/tes-bahasa/s2-s3"
  element={<TesBahasaS2S3 />}
/>

<Route
  path="/layanan/tes-bahasa/online"
  element={<TesBahasaOnline />}
/>

<Route
  path="/layanan/pelatihan-bahasa"
  element={<PelatihanBahasa />}
/>

        <Route
          path="/layanan/pelatihan-bahasa"
          element={<PelatihanBahasa />}
        />

        {/* TERJEMAHAN */}
        <Route
          path="/layanan/terjemahan-abstrak"
          element={<TerjemahanAbstrak />}
        />

        {/* MENU LAINNYA */}
        <Route path="/program" element={<Program />} />
        <Route path="/berita" element={<Berita />} />
        <Route path="/kontak" element={<Kontak />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App