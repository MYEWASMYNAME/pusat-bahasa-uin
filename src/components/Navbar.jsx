
import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [testTrainingOpen, setTestTrainingOpen] = useState(false)
  const [translationOpen, setTranslationOpen] = useState(false)

  const dropdownRef = useRef(null)

  const closeMenu = () => {
    setMenuOpen(false)
    setServicesOpen(false)
    setTestTrainingOpen(false)
    setTranslationOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setServicesOpen(false)
        setTestTrainingOpen(false)
        setTranslationOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener(
        'mousedown',
        handleClickOutside
      )
    }
  }, [])

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setServicesOpen(false)
        setTestTrainingOpen(false)
        setTranslationOpen(false)
        setMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  const toggleServices = () => {
    setServicesOpen((prev) => !prev)
    setTestTrainingOpen(false)
    setTranslationOpen(false)
  }

  const toggleMobileMenu = () => {
    setMenuOpen((prev) => !prev)
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
          id="main-navigation"
          className={`nav-menu ${
            menuOpen ? 'nav-menu-open' : ''
          }`}
        >
          <Link to="/" onClick={closeMenu}>
            Beranda
          </Link>

          <Link to="/tentang" onClick={closeMenu}>
            Tentang
          </Link>

          {/* DROPDOWN LAYANAN */}
          <div
            ref={dropdownRef}
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
                  onClick={() => {
                    setTestTrainingOpen((prev) => !prev)
                    setTranslationOpen(false)
                  }}
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
                  onClick={() => {
                    setTranslationOpen((prev) => !prev)
                    setTestTrainingOpen(false)
                  }}
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
