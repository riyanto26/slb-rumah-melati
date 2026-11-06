import { services } from '../data/schoolData'

export default function Services() {
  const servicePhotos = [
    '/image-services1.png',
    '/image-services2.png',
    '/image-services3.png',
    '/image-services4.png',
  ]

  return (
    <section className="services section" id="terapi">
      <div className="shell">
        <div className="service-gallery-heading">
          <div className="section-heading-stack">
            <p className="section-badge">Layanan Terapi Khusus</p>
            <h2 className="font-georgia">Pendampingan tepat untuk setiap potensi.</h2>
            <p className="section-copy">
              Kolaborasi guru, terapis, dan orang tua dalam program yang terukur dan penuh empati.
            </p>
          </div>
          <a className="service-cta" href="#kontak">
            Konsultasi layanan <i className="ri-arrow-right-up-line" aria-hidden="true" />
          </a>
        </div>

        <div className="service-gallery">
          {services.map(([number, title, copy], index) => (
            <article className="service-gallery-card" key={number}>
              <img src={servicePhotos[index]} alt={`Kegiatan ${title}`} loading="lazy" />
              <div className="service-gallery-shade" />
              <a className="service-gallery-arrow" href="#kontak" aria-label={`Konsultasi ${title}`}>
                <i className="ri-arrow-right-up-line" aria-hidden="true" />
              </a>
              <div className="service-gallery-copy">
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}