import { useState } from 'react'

const therapyInquiryForm =
  'https://docs.google.com/forms/d/e/1FAIpQLScQjU5oRuYpg7ruC0CUCsPwDiGiQ9qUnDY_Gfm-Z_liLaCbVQ/viewform?usp=publish-editor'

const therapyCategories = [
  {
    id: 'wicara',
    title: 'Terapi Wicara',
    description:
      'Layanan terapi yang bertujuan membantu anak mengembangkan kemampuan komunikasi secara optimal, meliputi kemampuan berbicara, memahami dan menggunakan bahasa, berkomunikasi secara fungsional, serta meningkatkan kejelasan pengucapan sesuai dengan kebutuhan dan tahap perkembangan anak.',
    photos: [
      {
        src: '/therapy-gallery/speech-1.webp',
        alt: 'Terapis mendampingi anak berlatih komunikasi',
        caption: 'Latihan komunikasi bersama terapis',
      },
      {
        src: '/therapy-gallery/speech-2.webp',
        alt: 'Anak berlatih berinteraksi dengan pendamping',
        caption: 'Membangun interaksi secara bertahap',
      },
    ],
  },
  {
    id: 'perilaku',
    title: 'Terapi Perilaku',
    description:
      'Layanan intervensi yang bertujuan membantu anak mengembangkan perilaku adaptif dan keterampilan fungsional dalam kehidupan sehari-hari, mencakup kemampuan mengikuti instruksi, meningkatkan perhatian/konsentrasi, mengelola emosi, dan membangun kemandirian.',
    photos: [
      {
        src: '/therapy-gallery/behavior-1.webp',
        alt: 'Anak berlatih koordinasi dan fokus menggunakan papan aktivitas',
        caption: 'Latihan koordinasi dan fokus',
      },
      {
        src: '/therapy-gallery/behavior-2.webp',
        alt: 'Anak menyusun manik-manik dalam aktivitas terapi',
        caption: 'Menyusun manik-manik dengan teliti',
      },
      {
        src: '/therapy-gallery/behavior-3.webp',
        alt: 'Anak berlatih meronce manik-manik',
        caption: 'Meronce untuk melatih ketekunan',
      },
      {
        src: '/therapy-gallery/behavior-4.webp',
        alt: 'Anak mencocokkan bentuk dan warna saat terapi',
        caption: 'Mencocokkan bentuk dan warna',
      },
      {
        src: '/therapy-gallery/behavior-5.webp',
        alt: 'Anak berlatih aktivitas terarah bersama guru',
        caption: 'Aktivitas terarah bersama pendamping',
      },
    ],
  },
  {
    id: 'remedial',
    title: 'Terapi Remedial',
    description:
      'Layanan intervensi yang bertujuan membantu anak mengembangkan dan memperkuat kemampuan akademik dasar sesuai kebutuhan dan tahap perkembangannya, meliputi membaca, menulis, berhitung, serta strategi belajar yang optimal.',
    photos: [
      {
        src: '/therapy-gallery/remedial-1.webp',
        alt: 'Anak belajar mengenali materi dengan pendampingan',
        caption: 'Belajar dengan media visual',
      },
      {
        src: '/therapy-gallery/remedial-2.webp',
        alt: 'Anak mengerjakan lembar latihan bersama guru',
        caption: 'Latihan akademik bersama guru',
      },
    ],
  },
] as const

export default function Services() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0)
  const [activePhotoIndex, setActivePhotoIndex] = useState(0)
  const activeCategory = therapyCategories[activeCategoryIndex]
  const activePhoto = activeCategory.photos[activePhotoIndex]

  const showPhoto = (index: number) => {
    setActivePhotoIndex((index + activeCategory.photos.length) % activeCategory.photos.length)
  }

  return (
    <section className="services section" id="terapi">
      <div className="shell">
        <div className="therapy-section-heading">
          <div className="section-heading-stack section-heading-stack-center">
            <p className="section-badge">Layanan Terapi Khusus</p>
            <h2 className="font-georgia">Setiap proses tumbuh punya ceritanya.</h2>
            <p className="section-copy">
              Kenali layanan dan lihat momen belajar anak dalam album kegiatan terapi kami.
            </p>
          </div>
          <a
            className="service-cta"
            href="https://wa.me/6285779096272"
            target="_blank"
            rel="noopener noreferrer"
          >
            Konsultasi layanan Terapi <i className="ri-arrow-right-up-line" aria-hidden="true" />
          </a>
        </div>

        <div className="therapy-content-grid">
          <div className="therapy-album">
            <div className="therapy-tabs" aria-label="Pilih kategori terapi">
              {therapyCategories.map((category, index) => (
                <button
                  type="button"
                  className={`therapy-tab${index === activeCategoryIndex ? ' is-active' : ''}`}
                  key={category.id}
                  aria-pressed={index === activeCategoryIndex}
                  onClick={() => {
                    setActiveCategoryIndex(index)
                    setActivePhotoIndex(0)
                  }}
                >
                  <span className="therapy-tab-number">0{index + 1}</span>
                  <span>{category.title}</span>
                </button>
              ))}
            </div>

            <div className="therapy-album-panel" aria-live="polite">
              <div className="therapy-featured-photo">
                <img
                  key={activePhoto.src}
                  src={activePhoto.src}
                  alt={activePhoto.alt}
                />
                <span className="therapy-photo-count">
                  {String(activePhotoIndex + 1).padStart(2, '0')} /{' '}
                  {String(activeCategory.photos.length).padStart(2, '0')}
                </span>
                {activeCategory.photos.length > 1 && (
                  <div className="therapy-photo-controls">
                    <button
                      type="button"
                      aria-label="Foto sebelumnya"
                      onClick={() => showPhoto(activePhotoIndex - 1)}
                    >
                      <i className="ri-arrow-left-line" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      aria-label="Foto berikutnya"
                      onClick={() => showPhoto(activePhotoIndex + 1)}
                    >
                      <i className="ri-arrow-right-line" aria-hidden="true" />
                    </button>
                  </div>
                )}
              </div>

              <div className="therapy-album-caption">
                <div>
                  <span className="therapy-album-eyebrow">Album kegiatan</span>
                  <h3>{activePhoto.caption}</h3>
                </div>
                <span className="therapy-duration">
                  <i className="ri-time-line" aria-hidden="true" />
                  60 menit / sesi
                </span>
              </div>

              <div className="therapy-thumbnails" aria-label={`Foto ${activeCategory.title}`}>
                {activeCategory.photos.map((photo, index) => (
                  <button
                    type="button"
                    className={`therapy-thumbnail${index === activePhotoIndex ? ' is-active' : ''}`}
                    key={photo.src}
                    aria-label={`Tampilkan foto ${index + 1}: ${photo.caption}`}
                    aria-pressed={index === activePhotoIndex}
                    onClick={() => showPhoto(index)}
                  >
                    <img src={photo.src} alt="" loading="lazy" />
                  </button>
                ))}
              </div>
            </div>

            <div className="therapy-description">
              <span className="therapy-album-eyebrow">Tentang layanan</span>
              <p>{activeCategory.description}</p>
            </div>
          </div>

          <div className="therapy-pricing-slot">
            <aside
              className="therapy-pricing"
              aria-labelledby="therapy-pricing-title"
            >
              <div className="therapy-pricing-heading">
                <span className="therapy-pricing-icon">
                  <i className="ri-wallet-3-line" aria-hidden="true" />
                </span>
                <div>
                  <span className="therapy-album-eyebrow">Informasi biaya</span>
                  <h3 id="therapy-pricing-title">Biaya & Paket Terapi</h3>
                </div>
              </div>

              <div className="therapy-price-row">
                <div>
                  <span>Pendaftaran & asesmen</span>
                  <small>Formulir + asesmen</small>
                </div>
                <strong>Rp300.000</strong>
              </div>
              <div className="therapy-price-row">
                <div>
                  <span>Biaya terapi</span>
                  <small>Wicara, perilaku, dan remedial</small>
                </div>
                <strong>Rp120.000 <small>/ sesi</small></strong>
              </div>

              <div className="therapy-deposit-note">
                <span className="therapy-album-eyebrow">Minimal deposit 4 pertemuan</span>
                <p>4 × Rp120.000 = Rp480.000</p>
                <p>Deposit Rp480.000 + biaya awal Rp300.000</p>
              </div>

              <div className="therapy-total">
                <span>Total biaya awal</span>
                <strong>Rp780.000</strong>
              </div>

              <p className="therapy-pricing-footnote">
                Durasi setiap sesi terapi adalah 60 menit.
              </p>
              <a className="therapy-pricing-cta" href={therapyInquiryForm} target="_blank" rel="noopener noreferrer">
                Daftar Terapi                <i className="ri-arrow-right-up-line" aria-hidden="true" />
              </a>
            </aside>
          </div>
        </div>
      </div>
    </section>
  )
}
