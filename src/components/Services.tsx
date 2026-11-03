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
        <div className="service-layout">
          <div className="service-intro">
            <p className="mb-6 inline-block text-xs font-semibold uppercase tracking-widest text-[#1d4ed8] underline decoration-2 underline-offset-4">
              Layanan Terapi Khusus
            </p>
            <h2>Penanganan profesional, sesuai kebutuhan anak.</h2>
            <p className="section-copy">Kolaborasi guru, terapis, dan orang tua dalam program yang terukur dan penuh empati.</p>
            <a className="service-cta" href="#kontak">Konsultasi layanan</a>
          </div>
          <div className="service-grid">
            {services.map(([number, title, copy], index) => (
              <article className="service-card" key={number}>
                <img src={servicePhotos[index]} alt={`Kegiatan ${title}`} />
                <div className="service-card-copy">
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}