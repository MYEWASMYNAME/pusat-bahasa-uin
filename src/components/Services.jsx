function Services() {
  return (
    <section className="services-section" id="layanan">

      <div className="services-container">

        <article className="service-showcase-card course-card">

          <div className="service-card-content">

            <div className="service-card-top">

              <div className="service-number">
                <strong>37</strong>
                <span>Program</span>
              </div>

              <h3>Kursus Bahasa</h3>

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


        <article className="service-showcase-card test-card">

          <div className="service-card-content">

            <div className="service-card-top">

              <div className="service-number">
                <strong>9</strong>
                <span>Jenis Tes</span>
              </div>

              <h3>Tes Bahasa</h3>

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


        <article className="service-showcase-card translation-card">

          <div className="service-card-content">

            <div className="service-card-top">

              <div className="service-number">
                <strong>3</strong>
                <span>Layanan</span>
              </div>

              <h3>Terjemahan</h3>

            </div>

            <div className="translation-description">
              <p>
                Layanan terjemahan yang cepat, akurat,
                dan terpercaya untuk kebutuhan akademik
                dan kelembagaan.
              </p>
            </div>

          </div>

          <a href="#kontak" className="service-card-link">
            <span>Lihat Layanan</span>
            <span className="arrow">↗</span>
          </a>

        </article>

      </div>

    </section>
  )
}

export default Services