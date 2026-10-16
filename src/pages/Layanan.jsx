
import "./Layanan.css";
import { Link } from "react-router-dom";

function Layanan() {
  const layanan = [
    {
      nomor: "01",
      kategori: "TES KEMAMPUAN BAHASA",
      judul: "Tes Bahasa Arab dan Inggris",
      deskripsi:
        "Informasi layanan tes kemampuan bahasa Arab dan Inggris secara offline untuk mahasiswa D3 dan S1.",
      tujuan: "/layanan/tes-bahasa",
      ikon: "Aa",
      tombol: "Lihat Tes Bahasa",
    },
    {
      nomor: "02",
      kategori: "PEMBELAJARAN",
      judul: "Kursus Bahasa",
      deskripsi:
        "Program pembelajaran bahasa untuk mengembangkan kemampuan komunikasi dan keterampilan berbahasa.",
      tujuan: "/layanan/kursus",
      ikon: "文",
      tombol: "Jelajahi Kursus",
    },
    {
      nomor: "03",
      kategori: "PENERJEMAHAN",
      judul: "Layanan Terjemahan",
      deskripsi:
        "Informasi layanan penerjemahan dokumen untuk mendukung kebutuhan akademik dan administrasi.",
      tujuan: "/layanan/terjemahan",
      ikon: "文",
      tombol: "Lihat Terjemahan",
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

          <span className="page-label">
            PUSAT PENGEMBANGAN BAHASA
          </span>

          <h1>
            Layanan Bahasa
            <br />
            untuk Masa Depan Anda
          </h1>

          <p>
            Temukan berbagai layanan bahasa untuk mendukung
            perjalanan akademik, profesional, dan pengembangan
            kompetensi Anda bersama Pusat Pengembangan Bahasa
            UIN SUSKA RIAU.
          </p>

          <a href="#daftar-layanan" className="layanan-hero-btn">
            <span>Jelajahi Layanan</span>
          </a>
        </div>

        <div
          className="layanan-hero-decoration"
          aria-hidden="true"
        >
          Aa
        </div>
      </section>

      <section
        className="layanan-content"
        id="daftar-layanan"
      >
        <div className="container">
          <div className="layanan-section-heading">
            <div>
              <span className="page-label">
                LAYANAN KAMI
              </span>

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
              <article
                className="layanan-card"
                key={item.nomor}
              >
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

                <Link
                  to={item.tujuan}
                  className="layanan-card-link"
                >
                  {item.tombol} <span>→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="layanan-cta">
        <div className="container">
          <span className="page-label">
            MULAI LANGKAH ANDA
          </span>

          <h2>Tingkatkan Kompetensi Bahasa Anda</h2>

          <p>
            Jelajahi layanan yang tersedia dan temukan pilihan
            yang sesuai dengan kebutuhan Anda.
          </p>

          <Link
            to="/layanan/tes-bahasa"
            className="layanan-card-link"
          >
            Lihat Tes Bahasa <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Layanan;
