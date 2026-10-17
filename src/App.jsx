
import { useEffect } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom'

import Navbar from './components/Navbar'

import Home from './pages/Home'
import Tentang from './pages/Tentang'
import VisiMisi from './pages/VisiMisi'
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

const seoPages = {
  '/': {
    title:
      'Pusat Pengembangan Bahasa UIN Sultan Syarif Kasim Riau',
    description:
      'Website resmi Pusat Pengembangan Bahasa UIN Sultan Syarif Kasim Riau. Informasi kelembagaan, layanan kebahasaan, program, kegiatan, dan berita.',
  },

  '/tentang': {
    title:
      'Tentang Kami | Pusat Pengembangan Bahasa UIN Suska Riau',
    description:
      'Kenali Pusat Pengembangan Bahasa UIN Sultan Syarif Kasim Riau, profil kelembagaan, peran, dan informasi layanan kebahasaan.',
  },

  '/tentang/visi-misi': {
    title:
      'Visi dan Misi | Pusat Pengembangan Bahasa UIN Suska Riau',
    description:
      'Informasi visi dan misi Pusat Pengembangan Bahasa Universitas Islam Negeri Sultan Syarif Kasim Riau.',
  },

  '/layanan': {
    title:
      'Layanan Kebahasaan | Pusat Pengembangan Bahasa UIN Suska Riau',
    description:
      'Informasi layanan kebahasaan Pusat Pengembangan Bahasa UIN Sultan Syarif Kasim Riau untuk mendukung kebutuhan akademik dan pengembangan kompetensi bahasa.',
  },

  '/layanan/tes-bahasa': {
    title:
      'Layanan Tes Bahasa | Pusat Pengembangan Bahasa UIN Suska Riau',
    description:
      'Informasi layanan tes kompetensi bahasa di Pusat Pengembangan Bahasa UIN Sultan Syarif Kasim Riau.',
  },

  '/layanan/tes-bahasa/d3-s1': {
    title:
      'Tes Bahasa D3 dan S1 | Pusat Pengembangan Bahasa UIN Suska Riau',
    description:
      'Informasi layanan tes bahasa bagi mahasiswa program D3 dan S1 di Pusat Pengembangan Bahasa UIN Sultan Syarif Kasim Riau.',
  },

  '/layanan/tes-bahasa/s2-s3': {
    title:
      'Tes Bahasa S2 dan S3 | Pusat Pengembangan Bahasa UIN Suska Riau',
    description:
      'Informasi layanan tes bahasa bagi mahasiswa program magister dan doktor di UIN Sultan Syarif Kasim Riau.',
  },

  '/layanan/tes-bahasa/online': {
    title:
      'Tes Bahasa Online | Pusat Pengembangan Bahasa UIN Suska Riau',
    description:
      'Informasi mengenai layanan tes bahasa online di Pusat Pengembangan Bahasa UIN Sultan Syarif Kasim Riau.',
  },

  '/layanan/pelatihan-bahasa': {
    title:
      'Pelatihan Bahasa | Pusat Pengembangan Bahasa UIN Suska Riau',
    description:
      'Informasi program pelatihan dan pengembangan kompetensi bahasa di Pusat Pengembangan Bahasa UIN Sultan Syarif Kasim Riau.',
  },

  '/layanan/terjemahan-abstrak': {
    title:
      'Layanan Terjemahan Abstrak | Pusat Pengembangan Bahasa UIN Suska Riau',
    description:
      'Informasi layanan terjemahan abstrak akademik di Pusat Pengembangan Bahasa UIN Sultan Syarif Kasim Riau.',
  },

  '/program': {
    title:
      'Program Pengembangan Bahasa | Pusat Pengembangan Bahasa UIN Suska Riau',
    description:
      'Jelajahi informasi program pembelajaran dan pengembangan kompetensi bahasa di Pusat Pengembangan Bahasa UIN Sultan Syarif Kasim Riau.',
  },

  '/berita': {
    title:
      'Berita dan Informasi | Pusat Pengembangan Bahasa UIN Suska Riau',
    description:
      'Berita, pengumuman, kegiatan, dan informasi terbaru dari Pusat Pengembangan Bahasa UIN Sultan Syarif Kasim Riau.',
  },

  '/kontak': {
    title:
      'Kontak | Pusat Pengembangan Bahasa UIN Suska Riau',
    description:
      'Informasi kontak Pusat Pengembangan Bahasa Universitas Islam Negeri Sultan Syarif Kasim Riau, Pekanbaru, Riau.',
  },
}

function PageSEO() {
  const location = useLocation()

  useEffect(() => {
    const page = seoPages[location.pathname] ?? {
      title:
        'Pusat Pengembangan Bahasa UIN Sultan Syarif Kasim Riau',
      description:
        'Informasi resmi Pusat Pengembangan Bahasa UIN Sultan Syarif Kasim Riau.',
    }

    document.title = page.title

    let descriptionTag = document.querySelector(
      'meta[name="description"]',
    )

    if (!descriptionTag) {
      descriptionTag = document.createElement('meta')
      descriptionTag.setAttribute('name', 'description')
      document.head.appendChild(descriptionTag)
    }

    descriptionTag.setAttribute(
      'content',
      page.description,
    )

    let canonicalTag = document.querySelector(
      'link[rel="canonical"]',
    )

    if (!canonicalTag) {
      canonicalTag = document.createElement('link')
      canonicalTag.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalTag)
    }

    canonicalTag.setAttribute(
      'href',
      `https://pusatbahasa.uin-suska.com${location.pathname}`,
    )

    let ogTitle = document.querySelector(
      'meta[property="og:title"]',
    )

    if (!ogTitle) {
      ogTitle = document.createElement('meta')
      ogTitle.setAttribute('property', 'og:title')
      document.head.appendChild(ogTitle)
    }

    ogTitle.setAttribute('content', page.title)

    let ogDescription = document.querySelector(
      'meta[property="og:description"]',
    )

    if (!ogDescription) {
      ogDescription = document.createElement('meta')
      ogDescription.setAttribute(
        'property',
        'og:description',
      )
      document.head.appendChild(ogDescription)
    }

    ogDescription.setAttribute(
      'content',
      page.description,
    )

    let ogUrl = document.querySelector(
      'meta[property="og:url"]',
    )

    if (!ogUrl) {
      ogUrl = document.createElement('meta')
      ogUrl.setAttribute('property', 'og:url')
      document.head.appendChild(ogUrl)
    }

    ogUrl.setAttribute(
      'content',
      `https://pusatbahasa.uin-suska.com${location.pathname}`,
    )
  }, [location.pathname])

  return null
}

function AppRoutes() {
  return (
    <>
      <PageSEO />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/tentang" element={<Tentang />} />

        <Route
          path="/tentang/visi-misi"
          element={<VisiMisi />}
        />

        <Route path="/layanan" element={<Layanan />} />

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
          path="/layanan/terjemahan-abstrak"
          element={<TerjemahanAbstrak />}
        />

        <Route path="/program" element={<Program />} />

        <Route path="/berita" element={<Berita />} />

        <Route path="/kontak" element={<Kontak />} />
      </Routes>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
