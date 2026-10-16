
import { Link } from 'react-router-dom'

function TerjemahanAbstrak() {
  return (
    <main className="layanan-page">
      <section className="layanan-hero">
        <div className="container">
          <div className="layanan-breadcrumb">
            <Link to="/">Beranda</Link>
            <span>/</span>
            <Link to="/layanan">Layanan</Link>
            <span>/</span>
            <span>Terjemahan Abstrak</span>
          </div>

          <span className="page-label">
            PUSAT PENGEMBANGAN BAHASA
          </span>

          <h1>
            Jasa Terjemahan
            <br />
            Abstrak
          </h1>

          <p>
            Layanan penerjemahan abstrak untuk mendukung kebutuhan
            akademik mahasiswa dan civitas akademika UIN SUSKA RIAU.
          </p>

          <a href="#informasi-terjemahan" className="layanan-hero-btn">
            Lihat Informasi
          </a>
        </div>

        <div className="layanan-hero-decoration" aria-hidden="true">
          Aa
        </div>
      </section>

      <section className="layanan-content" id="informasi-terjemahan">
        <div className="container">
          <div className="layanan-section-heading">
            <div>
              <span className="page-label">LAYANAN PENERJEMAHAN</span>
              <h2>Jasa Terjemahan Abstrak</h2>
              <p>
                Informasi mengenai persyaratan dokumen, prosedur
                pengajuan, waktu pengerjaan, dan biaya layanan.
              </p>
            </div>
          </div>

          <article className="layanan-card">
            <div className="layanan-card-top">
              <span className="layanan-card-icon">Aa</span>
            </div>

            <h3>Informasi dan Pengajuan</h3>

            <p>
              Untuk mengetahui persyaratan dan prosedur resmi
              penerjemahan abstrak, silakan hubungi Pusat
              Pengembangan Bahasa.
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

export default TerjemahanAbstrak
