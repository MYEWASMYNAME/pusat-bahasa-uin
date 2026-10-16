
import { Link } from 'react-router-dom'

function PelatihanBahasa() {
  return (
    <main className="layanan-page">
      <section className="layanan-hero">
        <div className="container">
          <div className="layanan-breadcrumb">
            <Link to="/">Beranda</Link>
            <span>/</span>
            <Link to="/layanan">Layanan</Link>
            <span>/</span>
            <span>Pelatihan Bahasa</span>
          </div>

          <span className="page-label">
            PUSAT PENGEMBANGAN BAHASA
          </span>

          <h1>
            Pelatihan
            <br />
            Bahasa Asing
          </h1>

          <p>
            Program pelatihan bahasa asing untuk membantu
            meningkatkan kemampuan komunikasi dan keterampilan
            berbahasa dalam kebutuhan akademik maupun profesional.
          </p>

          <a href="#informasi-pelatihan" className="layanan-hero-btn">
            Lihat Informasi
          </a>
        </div>

        <div className="layanan-hero-decoration" aria-hidden="true">
          Aa
        </div>
      </section>

      <section className="layanan-content" id="informasi-pelatihan">
        <div className="container">
          <div className="layanan-section-heading">
            <div>
              <span className="page-label">PROGRAM PELATIHAN</span>
              <h2>Pelatihan Bahasa Asing</h2>
              <p>
                Informasi program, jadwal, persyaratan, dan
                pendaftaran akan ditampilkan di halaman ini.
              </p>
            </div>
          </div>

          <article className="layanan-card">
            <div className="layanan-card-top">
              <span className="layanan-card-icon">文</span>
            </div>

            <h3>Informasi Pelatihan</h3>

            <p>
              Silakan hubungi Pusat Pengembangan Bahasa UIN SUSKA
              RIAU untuk memperoleh informasi resmi mengenai
              program pelatihan yang tersedia.
            </p>

            <Link to="/kontak" className="layanan-card-link">
              Hubungi Kami <span>→</span>
            </Link>
          </article>
        </div>
      </section>
    </main>
  )
}

export default PelatihanBahasa
