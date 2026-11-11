import { useEffect, useState } from 'react'
import { programs } from '../data/schoolData'

const programSlides = [
  {
    image: '/program-fun-cooking.webp',
    alt: 'Siswa dan guru mengikuti workshop pembuatan kue',
    title: 'Fun Cooking',
    caption: 'Belajar keterampilan hidup dan kreativitas melalui kegiatan membuat kue bersama.',
  },
  {
    image: '/program-field-trip-kai.webp',
    alt: 'Siswa dan guru mengikuti kunjungan edukatif ke KAI',
    title: 'Kunjungan & Kesenian',
    caption: 'Pembelajaran di luar kelas untuk mengenal lingkungan dan pengalaman baru bersama.',
  },
]

export default function Programs() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return

    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % programSlides.length)
    }, 5000)

    return () => window.clearInterval(intervalId)
  }, [isPaused])

  const showSlide = (index: number) => {
    setActiveSlide((index + programSlides.length) % programSlides.length)
  }

  return (
    <section className="program section shell" id="program">
      <div
        className="program-visual"
        role="region"
        aria-roledescription="carousel"
        aria-label="Dokumentasi kegiatan program dan vokasi"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false)
        }}
      >
        <div className="program-carousel-image" aria-live="polite">
          <img
            key={programSlides[activeSlide].image}
            src={programSlides[activeSlide].image}
            alt={programSlides[activeSlide].alt}
          />
          <div className="program-carousel-controls">
            <button type="button" onClick={() => showSlide(activeSlide - 1)} aria-label="Foto sebelumnya">
              Prev
            </button>
            <div className="program-carousel-dots" aria-label="Pilih foto">
              {programSlides.map((slide, index) => (
                <button
                  type="button"
                  key={slide.image}
                  className={index === activeSlide ? 'is-active' : ''}
                  onClick={() => showSlide(index)}
                  aria-label={`Tampilkan foto ${slide.title}`}
                  aria-current={index === activeSlide ? 'true' : undefined}
                />
              ))}
            </div>
            <button type="button" onClick={() => showSlide(activeSlide + 1)} aria-label="Foto berikutnya">
              Next
            </button>
          </div>
        </div>
        <div className="program-carousel-caption" aria-live="polite">
          <span>{programSlides[activeSlide].title}</span>
          <p>{programSlides[activeSlide].caption}</p>
        </div>
        <div className="visual-badge"><b>4+</b><span>Program aktivitas penunjang</span></div>
      </div>
      <div className="program-content">
        <div className="program-heading section-heading-stack">
          <p className="section-badge section-badge-on-dark">
            Program & Vokasi
          </p>
          <h2 className="font-georgia">Belajar dari pengalaman nyata.</h2>
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