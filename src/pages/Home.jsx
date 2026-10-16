function Home() {
  return (
    <>
      {/* ================= HERO ================= */}
      <main>

        <section className="hero" id="beranda">
          <div className="container hero-container">

            <div className="hero-content">

              <div className="hero-badge">
                PUSAT PENGEMBANGAN BAHASA UIN SUSKA RIAU
              </div>

              <h1>
                Tingkatkan Kemampuan
                <span>Bahasa Anda.</span>
              </h1>

              <p>
                Pusat Bahasa UIN Sultan Syarif Kasim Riau
                hadir untuk mendukung kebutuhan pembelajaran,
                pengujian, dan layanan bahasa bagi sivitas
                akademika maupun masyarakat umum.
              </p>

              <div className="hero-buttons">
                <a href="#layanan" className="primary-button">
                  Jelajahi Layanan
                  <span></span>
                </a>

                <a href="#tentang" className="secondary-button">
                  Tentang Kami
                </a>
              </div>

            </div>

            <div className="hero-decoration">
              <div className="decoration-circle circle-one"></div>
              <div className="decoration-circle circle-two"></div>

              <div className="hero-floating-card">
                <span className="floating-icon">Aa</span>
                <strong>Language</strong>
                <small>Learning Center</small>
              </div>
            </div>

          </div>
        </section>


        {/* ================= STATISTIK ================= */}
        <section className="stats-section">
          <div className="container stats-container">

            <div className="stat-item">
              <strong>37</strong>
              <span>Program Bahasa</span>
            </div>

            <div className="stat-divider"></div>

            <div className="stat-item">
              <strong>9</strong>
              <span>Jenis Tes Bahasa</span>
            </div>

            <div className="stat-divider"></div>

            <div className="stat-item">
              <strong>3</strong>
              <span>Layanan Terjemahan</span>
            </div>

            <div className="stat-divider"></div>

            <div className="stat-item">
              <strong>∞</strong>
              <span>Kesempatan Belajar</span>
            </div>

          </div>
        </section>


        {/* ================= LAYANAN ================= */}
        <section className="services-section" id="layanan">

          <div className="section-heading container">

            <div>
              <span className="section-label">
                LAYANAN KAMI
              </span>

              <h2>
                Semua kebutuhan bahasa
                <br />
                dalam satu tempat.
              </h2>
            </div>

            <p>
              Temukan berbagai program pembelajaran,
              tes kemampuan bahasa, dan layanan
              terjemahan yang tersedia di Pusat Bahasa.
            </p>

          </div>


          <div className="services-container">

            {/* CARD 1 */}
            <article className="service-showcase-card course-card">

              <div className="service-card-content">

                <div className="service-card-top">

                  <div className="service-number">
                    <strong>37</strong>
                    <span>Program</span>
                  </div>

                  <h3>
                    Kursus
                    <br />
                    Bahasa
                  </h3>

                </div>

                <div className="service-tags">
                  <span>Bahasa Inggris</span>
                  <span>Bahasa Arab</span>
                  <span>Bahasa Asing Lain</span>
                  <span>English for Academic Purposes</span>
                  <span>Test Preparation</span>
                  <span>Short Course</span>
                  <span>BIPA</span>
                  <span>Bahasa Isyarat</span>
                </div>

              </div>

              <a href="#program" className="service-card-link">
                <span>Lihat Layanan</span>
                <span className="arrow">↗</span>
              </a>

            </article>


            {/* CARD 2 */}
            <article className="service-showcase-card test-card">

              <div className="service-card-content">

                <div className="service-card-top">

                  <div className="service-number">
                    <strong>9</strong>
                    <span>Jenis Tes</span>
                  </div>

                  <h3>
                    Tes
                    <br />
                    Bahasa
                  </h3>

                </div>

                <div className="test-logos">
                  <span>EPT</span>
                  <span>ECCT</span>
                  <span>TOEFL ITP</span>
                  <span>TOEFL IBT</span>
                  <span>TOEIC</span>
                  <span>IELTS</span>
                  <span>TelU EEE</span>
                </div>

              </div>

              <a href="#program" className="service-card-link">
                <span>Lihat Layanan</span>
                <span className="arrow">↗</span>
              </a>

            </article>


            {/* CARD 3 */}
            <article className="service-showcase-card translation-card">

              <div className="service-card-content">

                <div className="service-card-top">

                  <div className="service-number">
                    <strong>3</strong>
                    <span>Layanan</span>
                  </div>

                  <h3>
                    Terjemahan
                  </h3>

                </div>

                <div className="translation-description">
                  <p>
                    Layanan terjemahan yang cepat,
                    akurat, dan terpercaya untuk
                    kebutuhan akademik,
                    penelitian, dan kelembagaan.
                  </p>
                </div>

                <div className="translation-symbol">
                  <span>文</span>
                  <span>A</span>
                </div>

              </div>

              <a href="#kontak" className="service-card-link">
                <span>Lihat Layanan</span>
                <span className="arrow">↗</span>
              </a>

            </article>

          </div>

        </section>


        {/* ================= TENTANG ================= */}
        <section className="about-section" id="tentang">

          <div className="container about-grid">

            <div className="about-visual">

              <div className="about-big-text">
                BAHASA
              </div>

              <div className="about-card">
                <span>Tentang Kami</span>
                <strong>Pusat Bahasa</strong>
                <small>UIN SUSKA RIAU</small>
              </div>

            </div>

            <div className="about-content">

              <span className="section-label">
                TENTANG PUSAT BAHASA
              </span>

              <h2>
                Ruang untuk belajar,
                berkembang, dan terhubung.
              </h2>

              <p>
                Pusat Bahasa UIN Sultan Syarif Kasim Riau
                merupakan wadah untuk mendukung pengembangan
                kemampuan bahasa melalui pembelajaran,
                pengujian kompetensi, dan berbagai layanan
                kebahasaan.
              </p>

              <p>
                Kami menyediakan program yang dapat digunakan
                untuk kebutuhan akademik, profesional,
                maupun pengembangan kemampuan pribadi.
              </p>

              <a href="#kontak" className="text-button">
                Kenali Kami Lebih Dekat
                <span>→</span>
              </a>

            </div>

          </div>

        </section>


        {/* ================= PROGRAM ================= */}
        <section className="program-section" id="program">

          <div className="container">

            <div className="section-heading centered">

              <span className="section-label">
                PROGRAM UNGGULAN
              </span>

              <h2>
                Pilih program sesuai
                kebutuhan Anda.
              </h2>

              <p>
                Berbagai pilihan program bahasa untuk
                membantu mencapai tujuan belajar Anda.
              </p>

            </div>


            <div className="program-grid">

              <div className="program-card">
                <span className="program-number">01</span>

                <h3>Academic English</h3>

                <p>
                  Program bahasa Inggris untuk mendukung
                  kebutuhan akademik dan perkuliahan.
                </p>

                <a href="#kontak">Pelajari →</a>
              </div>


              <div className="program-card">
                <span className="program-number">02</span>

                <h3>Test Preparation</h3>

                <p>
                  Persiapan menghadapi berbagai tes
                  kemampuan bahasa.
                </p>

                <a href="#kontak">Pelajari →</a>
              </div>


              <div className="program-card">
                <span className="program-number">03</span>

                <h3>Bahasa Arab</h3>

                <p>
                  Program pembelajaran bahasa Arab
                  untuk berbagai tingkat kemampuan.
                </p>

                <a href="#kontak">Pelajari →</a>
              </div>

            </div>

          </div>

        </section>


        {/* ================= BERITA ================= */}
        <section className="news-section" id="berita">

          <div className="container">

            <div className="news-heading">

              <div>
                <span className="section-label">
                  BERITA & INFORMASI
                </span>

                <h2>
                  Kabar terbaru dari
                  Pusat Bahasa.
                </h2>
              </div>

              <a href="#berita">
                Lihat Semua Berita →
              </a>

            </div>


            <div className="news-grid">

              <article className="news-card">

                <div className="news-image yellow">
                  KURSUS
                </div>

                <div className="news-body">

                  <span>PROGRAM</span>

                  <h3>
                    Informasi program kursus bahasa
                  </h3>

                  <p>
                    Temukan program pembelajaran bahasa
                    yang sesuai dengan kebutuhan Anda.
                  </p>

                  <a href="#kontak">
                    Baca Selengkapnya →
                  </a>

                </div>

              </article>


              <article className="news-card">

                <div className="news-image green">
                  TES
                </div>

                <div className="news-body">

                  <span>TES BAHASA</span>

                  <h3>
                    Jadwal dan informasi tes bahasa
                  </h3>

                  <p>
                    Informasi mengenai layanan dan
                    pelaksanaan tes kemampuan bahasa.
                  </p>

                  <a href="#kontak">
                    Baca Selengkapnya →
                  </a>

                </div>

              </article>


              <article className="news-card">

                <div className="news-image pink">
                  INFO
                </div>

                <div className="news-body">

                  <span>INFORMASI</span>

                  <h3>
                    Informasi terbaru Pusat Bahasa
                  </h3>

                  <p>
                    Ikuti informasi dan kegiatan terbaru
                    dari Pusat Bahasa.
                  </p>

                  <a href="#kontak">
                    Baca Selengkapnya →
                  </a>

                </div>

              </article>

            </div>

          </div>

        </section>


        {/* ================= CONTACT ================= */}
        <section className="contact-section" id="kontak">

          <div className="container contact-box">

            <div>

              <span className="section-label">
                MULAI SEKARANG
              </span>

              <h2>
                Siap mengembangkan
                kemampuan bahasa Anda?
              </h2>

              <p>
                Hubungi Pusat Bahasa untuk mendapatkan
                informasi mengenai program dan layanan
                yang tersedia.
              </p>

            </div>

            <a href="#beranda" className="contact-button">
              Daftar Sekarang
              <span>↗</span>
            </a>

          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}
      <footer className="footer">

        <div className="container footer-grid">

          <div className="footer-brand">

            <div className="logo">

              <div className="logo-mark">
                U
              </div>

              <div className="logo-text">
                <strong>UIN SUSKA RIAU</strong>
                <span>PUSAT BAHASA</span>
              </div>

            </div>

            <p>
              Pusat Bahasa UIN Sultan Syarif Kasim Riau.
            </p>

          </div>


          <div className="footer-links">

            <strong>Menu</strong>

            <a href="#beranda">Beranda</a>
            <a href="#tentang">Tentang</a>
            <a href="#layanan">Layanan</a>
            <a href="#program">Program</a>

          </div>


          <div className="footer-links">

            <strong>Informasi</strong>

            <a href="#berita">Berita</a>
            <a href="#kontak">Kontak</a>
            <a href="#kontak">Pendaftaran</a>

          </div>


          <div className="footer-links">

            <strong>Kontak</strong>

            <span>UIN SUSKA RIAU</span>
            <span>Pekanbaru, Riau</span>

          </div>

        </div>


        <div className="container footer-bottom">

          <span>
            © 2026 Pusat Bahasa UIN SUSKA RIAU
          </span>

          <span>
            All rights reserved.
          </span>

        </div>

      </footer>
    </>
  )
}

export default Home