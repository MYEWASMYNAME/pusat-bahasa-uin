import "./Layanan.css";
import { Link } from "react-router-dom";

function Layanan() {
  const layanan = [
    {
      kategori: "Tes Kemampuan Bahasa",
      judul: "Bahasa Arab dan Inggris Offline",
      deskripsi:
      "Mahasiswa D3 dan S1 (Paper-based)",
      tujuan: "/layanan/tes-bahasa",
      ikon: "Aa",
    },
    {
      nomor: "02",
      kategori: "PEMBELAJARAN",
      judul: "Kursus Bahasa",
      deskripsi:
        "Program pembelajaran bahasa untuk meningkatkan kemampuan komunikasi dan keterampilan berbahasa.",
      tujuan: "#",
      ikon: "文",
    },
    {
      nomor: "03",
      kategori: "PENERJEMAHAN",
      judul: "Layanan Terjemahan",
      deskripsi:
        "Layanan penerjemahan dokumen untuk mendukung kebutuhan akademik dan administrasi.",
      tujuan: "#",
      ikon: "文",
    },
  ];

  return (
    <main className="layanan-page">
      <section className="layanan-hero">
        <div className="container">
          <div className="layanan-breadcrumb">
            <Link to="/">Beranda</Link>
            <span>/</span>
            <span>Layanan</span>
          </div>

          <span className="page-label">PUSAT PENGEMBANGAN BAHASA</span>

          <h1>
            Layanan Bahasa
            <br />
            untuk Masa Depan Anda
          </h1>

          <p>
            Temukan berbagai layanan bahasa untuk mendukung
            perjalanan akademik, profesional, dan pengembangan
            kompetensi Anda bersama Pusat Pengembangan Bahasa UIN SUSKA RIAU.
          </p>

          <a href="#daftar-layanan" className="layanan-hero-btn">
            <span>Jelajahi Layanan</span>
          </a>
        </div>

        <div className="layanan-hero-decoration" aria-hidden="true">
          Aa
        </div>
      </section>

      <section className="layanan-content" id="daftar-layanan">
        <div className="container">
          <div className="layanan-section-heading">
            <div>
              <span className="page-label">Tes Bahasa Asing</span>
              <h2>Jelajahi Layanan Kami</h2>
              <p>
                Pilih layanan yang sesuai dengan kebutuhan Anda.
              </p>
            </div>

            <span className="layanan-count">
              03 Layanan
            </span>
          </div>

          <div className="layanan-grid">
            {layanan.map((item) => (
              <article className="layanan-card" key={item.nomor}>
                <div className="layanan-card-top">
                  <span className="layanan-card-number">
                    {item.nomor}
                  </span>

                  <span className="layanan-card-icon">
                    {item.ikon}
                  </span>
                </div>

                <span className="layanan-card-category">
                  {item.kategori}
                </span>

                <h3>{item.judul}</h3>

                <p>{item.deskripsi}</p>

                {item.tujuan.startsWith("/") ? (
                  <Link
                    to={item.tujuan}
                    className="layanan-card-link"
                  >
                    Lihat Layanan <span>→</span>
                  </Link>
                ) : (
                  <span className="layanan-card-coming">
                    Informasi segera tersedia
                  </span>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      
<section className="layanan-cta">
  <div className="container">
    <span className="page-label">MULAI LANGKAH ANDA</span>

    <h2>Tingkatkan Kompetensi Bahasa Anda</h2>

    <p>
      Jelajahi layanan tes bahasa dan temukan pilihan yang
      sesuai dengan kebutuhan Anda.
    </p>

    <Link to="/layanan/tes-bahasa" className="layanan-card-link">
      Lihat Tes Bahasa <span>→</span>
    </Link>
  </div>
</section>

    </main>
  );
}

export default Layanan;
