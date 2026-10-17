import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [testTrainingOpen, setTestTrainingOpen] = useState(false)
  const [translationOpen, setTranslationOpen] = useState(false)

  const dropdownRef = useRef(null)

  // Tutup semua menu
  const closeMenu = () => {
    setMenuOpen(false)
    setAboutOpen(false)
    setServicesOpen(false)
    setTestTrainingOpen(false)
    setTranslationOpen(false)
  }

  // Tutup dropdown ketika klik di luar navigasi
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setAboutOpen(false)
        setServicesOpen(false)
        setTestTrainingOpen(false)
        setTranslationOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Tutup menu dengan tombol Escape
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        closeMenu()
      }
    }

    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  // Dropdown Tentang
  const toggleAbout = () => {
    setAboutOpen((prev) => !prev)
    setServicesOpen(false)
    setTestTrainingOpen(false)
    setTranslationOpen(false)
  }

  // Dropdown Layanan
  const toggleServices = () => {
    setServicesOpen((prev) => !prev)
    setAboutOpen(false)
    setTestTrainingOpen(false)
    setTranslationOpen(false)
  }

  // Submenu Tes dan Pelatihan
  const toggleTestTraining = () => {
    setTestTrainingOpen((prev) => !prev)
    setTranslationOpen(false)
  }

  // Submenu Terjemahan
  const toggleTranslation = () => {
    setTranslationOpen((prev) => !prev)
    setTestTrainingOpen(false)
  }

  // Hamburger menu mobile
  const toggleMobileMenu = () => {
    setMenuOpen((prev) => !prev)
    setAboutOpen(false)
    setServicesOpen(false)
    setTestTrainingOpen(false)
    setTranslationOpen(false)
  }

  return (
    <header className="navbar">
      <div className="container nav-container">

        {/* LOGO */}
        <Link to="/" className="logo" onClick={closeMenu}>
          <img
            src="/UIN.png"
            alt="Logo UIN SUSKA RIAU"
            className="logo-image"
          />

          <div className="logo-text">
            <span>PUSAT PENGEMBANGAN BAHASA</span>
            <strong>UIN SUSKA RIAU</strong>
          </div>
        </Link>

        {/* HAMBURGER MOBILE */}
        <button
          className="nav-toggle"
          type="button"
          aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={toggleMobileMenu}
        >
          <span />
          <span />
          <span />
        </button>

        {/* NAVIGASI */}
        <nav
          ref={dropdownRef}
          id="main-navigation"
          className={`nav-menu ${
            menuOpen ? 'nav-menu-open' : ''
          }`}
        >
          {/* BERANDA */}
          <Link to="/" onClick={closeMenu}>
            Beranda
          </Link>

          {/* DROPDOWN TENTANG */}
          <div
            className={`nav-dropdown ${
              aboutOpen ? 'dropdown-open' : ''
            }`}
          >
            <button
              type="button"
              className="nav-dropdown-toggle"
              aria-expanded={aboutOpen}
              aria-haspopup="true"
              onClick={toggleAbout}
            >
              Tentang
              <span className="dropdown-arrow" aria-hidden="true">
                ⌄
              </span>
            </button>

            <div className="dropdown-menu">
              <Link to="/tentang" onClick={closeMenu}>
                Profil P2B
              </Link>

              <Link to="/tentang/sejarah" onClick={closeMenu}>
                Sejarah
              </Link>

              <Link to="/tentang/visi-misi" onClick={closeMenu}>
                Visi dan Misi
              </Link>

              <Link
                to="/tentang/struktur-organisasi"
                onClick={closeMenu}
              >
                Struktur Organisasi
              </Link>
            </div>
          </div>

          {/* DROPDOWN LAYANAN */}
          <div
            className={`nav-dropdown ${
              servicesOpen ? 'dropdown-open' : ''
            }`}
          >
            <button
              type="button"
              className="nav-dropdown-toggle"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onClick={toggleServices}
            >
              Layanan
              <span className="dropdown-arrow" aria-hidden="true">
                ⌄
              </span>
            </button>

            <div className="dropdown-menu">

              {/* TES DAN PELATIHAN */}
              <div
                className={`nav-subdropdown ${
                  testTrainingOpen ? 'subdropdown-open' : ''
                }`}
              >
                <button
                  type="button"
                  className="nav-subdropdown-toggle"
                  aria-expanded={testTrainingOpen}
                  onClick={toggleTestTraining}
                >
                  Tes dan Pelatihan
                  <span aria-hidden="true">›</span>
                </button>

                <div className="dropdown-submenu">
                  <Link
                    to="/layanan/tes-bahasa"
                    onClick={closeMenu}
                  >
                    Tes Bahasa Asing
                  </Link>

                  <Link
                    to="/layanan/pelatihan-bahasa"
                    onClick={closeMenu}
                  >
                    Pelatihan Bahasa Asing
                  </Link>
                </div>
              </div>

              {/* TERJEMAHAN */}
              <div
                className={`nav-subdropdown ${
                  translationOpen ? 'subdropdown-open' : ''
                }`}
              >
                <button
                  type="button"
                  className="nav-subdropdown-toggle"
                  aria-expanded={translationOpen}
                  onClick={toggleTranslation}
                >
                  Terjemahan
                  <span aria-hidden="true">›</span>
                </button>

                <div className="dropdown-submenu">
                  <Link
                    to="/layanan/terjemahan-abstrak"
                    onClick={closeMenu}
                  >
                    Jasa Terjemahan Abstrak
                  </Link>
                </div>
              </div>

            </div>
          </div>

          {/* MENU LAINNYA */}
          <Link to="/program" onClick={closeMenu}>
            Program
          </Link>

          <Link to="/berita" onClick={closeMenu}>
            Berita
          </Link>

          <Link to="/kontak" onClick={closeMenu}>
            Kontak
          </Link>

          {/* TOMBOL DAFTAR MOBILE */}
          <Link
            to="/kontak"
            className="nav-mobile-button"
            onClick={closeMenu}
          >
            Daftar Sekarang
          </Link>
        </nav>

        {/* TOMBOL DAFTAR DESKTOP */}
        <Link
          to="/kontak"
          className="nav-button"
          onClick={closeMenu}
        >
          Daftar Sekarang
        </Link>

      </div>
    </header>
  )
}

export default Navbar