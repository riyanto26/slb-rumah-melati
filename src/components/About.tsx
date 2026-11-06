import { useState } from 'react'

export default function About() {
  const galleryStrips = [
    '/gallery-1.png',
    '/gallery-2.png',
    '/gallery-3.png',
    '/gallery-4.png',
  ]

  const galleryItems = [
    { src: galleryStrips[0], alt: 'Aktivitas siswa SLB Rumah Melati' },
    { src: galleryStrips[1], alt: 'Kegiatan belajar bersama di SLB Rumah Melati' },
    { src: galleryStrips[2], alt: 'Suasana kegiatan sekolah SLB Rumah Melati' },
    { src: galleryStrips[3], alt: 'Momen belajar siswa SLB Rumah Melati' },
    { src: galleryStrips[0], alt: 'Lingkungan belajar SLB Rumah Melati' },
  ]
  const [featuredGalleryIndex, setFeaturedGalleryIndex] = useState(2)
  const orderedGalleryItems = [
    ...galleryItems.filter((_, index) => index !== featuredGalleryIndex).slice(0, 2),
    galleryItems[featuredGalleryIndex],
    ...galleryItems.filter((_, index) => index !== featuredGalleryIndex).slice(2),
  ]

  const missionSteps = [
    {
      step: "01",
      duration: "Kecakapan Hidup",
      title: "Meningkatkan Kemandirian Harian",
      desc: "Melatih keterampilan motorik, regulasi emosi, dan kecakapan hidup agar siswa siap beradaptasi dalam keseharian."
    },
    {
      step: "02",
      duration: "Lingkungan Inklusif",
      title: "Ruang Belajar Penuh Kasih",
      desc: "Menciptakan suasana sekolah yang aman, kondusif, ramah anak, dan mendukung penuh ritme belajar setiap ananda."
    },
    {
      step: "03",
      duration: "Kolaborasi Sosial",
      title: "Kesadaran & Dukungan Publik",
      desc: "Membangun citra positif serta kolaborasi erat bersama orang tua dan masyarakat untuk mendukung inklusivitas."
    }
  ]

  return (
    <section className="py-24 bg-[#fbfbfa] overflow-hidden" id="tentang">
      {/* Top Section - Mengikuti lebar Quick Info */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="section-heading-stack lg:col-span-6">
            <span className="section-badge">
              Tentang Kami
            </span>
            <h2 className="font-georgia text-3xl sm:text-5xl font-normal text-gray-900 tracking-tight leading-[1.12]">
              Lingkungan aman untuk bertumbuh tanpa batas.
            </h2>
          </div>
          <div className="lg:col-span-6 space-y-4 text-sm sm:text-base text-gray-600 font-light leading-relaxed">
            <p>
              SLB Rumah Melati hadir dengan komitmen mendalam untuk memberikan pelayanan pendidikan khusus yang berfokus pada potensi unik setiap anak. Kami percaya bahwa setiap anak istimewa memiliki ritme dan cara belajarnya sendiri.
            </p>
            <p>
              Didukung oleh tenaga pendidik profesional, terapis berpengalaman, serta lingkungan yang hangat dan penuh kasih, kami membimbing siswa melangkah menuju kemandirian dan rasa percaya diri yang utuh.
            </p>
          </div>
        </div>
      </div>

      <div className="about-gallery-wrap">
        <div className="about-gallery" aria-label="Galeri kegiatan SLB Rumah Melati">
          {orderedGalleryItems.map((item, index) => {
            const itemIndex = galleryItems.indexOf(item)
            const isFeatured = itemIndex === featuredGalleryIndex

            return (
              <button
                type="button"
                className={`about-gallery-item${isFeatured ? ' about-gallery-item-featured' : ''}`}
                key={`${item.src}-${itemIndex}`}
                aria-label={`${isFeatured ? 'Foto utama' : 'Perbesar foto'}: ${item.alt}`}
                aria-pressed={isFeatured}
                onClick={() => setFeaturedGalleryIndex(itemIndex)}
              >
                <img src={item.src} alt={item.alt} loading="lazy" />
              </button>
            )
          })}
        </div>
      </div>

      {/* Process Steps Section - Mengikuti lebar Quick Info */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="mb-12 p-6 sm:p-10 rounded-3xl bg-[#1d4ed8] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
          <div className="section-heading-stack w-full max-w-3xl">
            <span className="section-badge section-badge-on-dark shrink-0 whitespace-nowrap">
              Visi Utama
            </span>
            <blockquote className="font-georgia w-full self-center text-lg sm:text-2xl font-normal leading-relaxed text-gray-100">
              “Mengembangkan potensi diri anak berkebutuhan khusus untuk menjadi pribadi yang mandiri dan berdaya.”
            </blockquote>
          </div>
          <div className="px-5 py-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium text-amber-200">
            SLB Rumah Melati • Bekasi Utara
          </div>
        </div>

        <div className="grid grid-cols-1 border-r border-gray-300 bg-[#f7f7f6] md:grid-cols-3">
          {missionSteps.map((item, idx) => (
            <div 
              key={idx} 
              className="flex flex-col justify-between border-l border-gray-300 px-5 py-6 sm:px-6"
            >
              <div>
                <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-2xl font-normal text-gray-900 tracking-tight font-sans">
                    {item.step} <span className="text-gray-400 text-lg">Misi</span>
                  </span>
                  <span className="rounded-full border border-blue-200/70 bg-blue-50 px-3 py-1 text-xs font-semibold tracking-wide text-[#1d4ed8]">
                    {item.duration}
                  </span>
                </div>
                <h3 className="text-base font-medium text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-gray-200 pt-4 text-xs font-light text-gray-500">
                <span>Pendidikan Inklusif Terpadu</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}