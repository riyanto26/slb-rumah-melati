export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden pt-28 pb-16 px-6 sm:px-12 md:px-16" id="beranda">
      {/* Full Screen Background Image & Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-image.png" 
          alt="Suasana Sekolah SLB Rumah Melati" 
          className="w-full h-full object-cover"
        />
        {/* Cinematic Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30" />
      </div>

      {/* Hero Content Wrapper */}
      <div className="relative z-10 max-w-4xl mx-auto w-full flex flex-col items-center gap-8 text-center text-white">
        
        {/* Left Side: Headline & Copy & CTAs */}
        <div className="max-w-3xl">
          {/* Main Headline (Aksen warna kuning disesuaikan dengan warna logo YPP ABKI) */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight leading-[1.16] mb-6">
            Mendampingi Ananda Istimewa Menuju <span className="font-medium text-[#facc15]">Kemandirian.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed font-light">
            Sekolah khusus terpadu untuk anak Autisme, Down Syndrome, dan Hambatan Belajar dengan pendekatan penuh kasih sayang, ramah anak, dan profesional.
          </p>

          {/* Action Buttons (Menggunakan warna --primary Biru Elektrik dari logo) */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a 
              href="#ppdb" 
              className="px-6 py-3 rounded-xl bg-[#1d4ed8] hover:bg-[#1e40af] text-white font-medium text-xs sm:text-sm transition-all shadow-lg hover:shadow-blue-600/30"
            >
              Daftar PPDB Sekarang ↗
            </a>
            <a 
              href="https://wa.me/6280000000000" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3 rounded-xl bg-neutral-900/80 hover:bg-neutral-800 text-white font-medium text-xs sm:text-sm border border-white/20 backdrop-blur-md transition-all shadow-lg"
            >
              Konsultasi via WhatsApp
            </a>
          </div>
        </div>

        {/* Right Side: Bottom Tag Highlights */}
        <div className="text-xs text-gray-300 tracking-wider font-medium opacity-80">
          Autisme. Down Syndrome. Hambatan Belajar.
        </div>

      </div>
    </section>
  )
}