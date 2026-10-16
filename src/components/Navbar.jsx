import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const dropdownRef = useRef(null)

  const closeMenu = () => {
    setMenuOpen(false)
    setServicesOpen(false)
  }

  // Tutup dropdown jika klik di luar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setServicesOpen(false)
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

  // Tutup menu dengan tombol Escape
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setServicesOpen(false)
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
  }

  const toggleMobileMenu = () => {
    setMenuOpen((prev) => !prev)
    setServicesOpen(false)
  }

  return (
    <header className="navbar">
      <div className="container nav-container">

        {/* LOGO */}
        <Link to="/" className="logo" onClick={closeMenu}>
          <div className="logo-mark">U</div>

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
              <Link to="/layanan" onClick={closeMenu}>
                Tes Dan Pelatihan
              </Link>

              <Link to="/layanan/kursus" onClick={closeMenu}>
                Terjemahan
              </Link>

              {/* <Link to="/layanan/tes" onClick={closeMenu}>
                Tes Kemampuan Bahasa
              </Link>

              <Link to="/layanan/terjemahan" onClick={closeMenu}>
                Jasa Terjemahan
              </Link> */}
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