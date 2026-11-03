import { photos, programs } from '../data/schoolData'

export default function Programs() {
  return (
    <section className="program section shell" id="program">
      <div className="program-visual">
        <img src={photos.class} alt="Pendamping belajar membantu siswa di kelas" />
        <div className="visual-badge"><b>4+</b><span>Program aktivitas penunjang</span></div>
      </div>
      <div className="program-content">
        <div className="program-heading">
          <p className="mb-6 inline-block text-xs font-semibold uppercase tracking-widest text-gray-100 underline decoration-2 underline-offset-4">
            Program & Vokasi
          </p>
          <h2>Belajar dari pengalaman nyata.</h2>
          <p className="section-copy">Aktivitas menyenangkan dirancang untuk melatih keterampilan sosial, motorik, dan kemandirian.</p>
        </div>
        <div className="program-list">
          {programs.map(([title, copy], index) => (
            <article className="program-card" key={title}>
              <span className="program-card-icon" aria-hidden="true">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}