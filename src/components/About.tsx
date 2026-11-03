export default function About() {
  const galleryStrips = [
    '/about1.png',
    '/about2.png',
    '/about3.png',
    '/about4.png',
  ]

  const stripStyles = [
    { rotate: 'rotate-[-10deg]', translate: 'translate-y-3' },
    { rotate: 'rotate-[8deg]', translate: 'translate-y-1' },
    { rotate: 'rotate-[-6deg]', translate: 'translate-y-0' },
    { rotate: 'rotate-[8deg]', translate: 'translate-y-0' },
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
          <div className="lg:col-span-6 flex items-center gap-5">
            <span className="h-32 w-10 shrink-0 py-4 text-center text-xs font-semibold uppercase tracking-widest text-[#1d4ed8] underline decoration-2 underline-offset-4 [writing-mode:vertical-rl] rotate-180">
              Tentang Kami
            </span>
            <h2 className="text-3xl sm:text-5xl font-normal text-gray-900 tracking-tight leading-[1.12]">
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

      {/* Full-Bleed Infinite Marquee Animation */}
      <div className="w-full overflow-hidden py-10 mb-20">
        <div className="animate-marquee flex items-center gap-4 sm:gap-6">
          {[...galleryStrips, ...galleryStrips].map((imgSrc, index) => {
            const style = stripStyles[index % stripStyles.length]

            return (
              <div 
                key={index} 
                className={`w-[180px] sm:w-[240px] md:w-[270px] h-[130px] sm:h-[175px] md:h-[195px] rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:rotate-0 flex-shrink-0 ${style.rotate} ${style.translate}`}
              >
                <img 
                  src={imgSrc} 
                  alt={`Dokumentasi kegiatan SLB Rumah Melati ${index + 1}`} 
                  className="w-full h-full object-cover" 
                />
              </div>
            )
          })}
        </div>
      </div>

      {/* Process Steps Section - Mengikuti lebar Quick Info */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="mb-12 p-6 sm:p-10 rounded-3xl bg-[#1d4ed8] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
          <div className="w-full max-w-3xl flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-5 md:-translate-y-4">
            <span className="shrink-0 whitespace-nowrap text-xs font-semibold uppercase tracking-widest text-white underline decoration-2 underline-offset-4">
              Visi Utama
            </span>
            <blockquote className="w-full self-center text-lg sm:text-2xl font-normal leading-relaxed text-gray-100">
              “Mengembangkan potensi diri anak berkebutuhan khusus untuk menjadi pribadi yang mandiri dan berdaya.”
            </blockquote>
          </div>
          <div className="px-5 py-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium text-amber-200">
            SLB Rumah Melati • Bekasi Utara
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {missionSteps.map((item, idx) => (
            <div 
              key={idx} 
              className="relative p-8 rounded-3xl bg-white border border-gray-200/80 shadow-sm flex flex-col justify-between overflow-hidden group hover:border-blue-600/40 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-normal text-gray-900 tracking-tight font-sans">
                    {item.step} <span className="text-gray-400 text-lg">Misi</span>
                  </span>
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-[#1d4ed8] text-xs font-semibold tracking-wide border border-blue-200/50">
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

              <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400 font-light">
                <span>Pendidikan Inklusif Terpadu</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}