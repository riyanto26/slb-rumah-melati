import { useEffect, useRef, useState } from 'react'

export default function Navbar() {
  const [isHidden, setIsHidden] = useState(false)
  const previousScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrollDifference = currentScrollY - previousScrollY.current

      if (currentScrollY < 80 || scrollDifference < -4) {
        setIsHidden(false)
      } else if (scrollDifference > 4) {
        setIsHidden(true)
      }

      previousScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 sm:px-12 transition-transform duration-300 ease-in-out ${
        isHidden ? '-translate-y-full pointer-events-none' : 'translate-y-0'
      }`}
      onFocusCapture={() => setIsHidden(false)}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-3 px-6 rounded-2xl bg-black/30 backdrop-blur-md border border-white/15 shadow-lg text-white">
        {/* Brand Logo & Name */}
        <a className="flex items-center gap-3 text-sm font-semibold tracking-tight" href="#beranda">
          <img
            src="/logo-slb.png"
            alt="Logo SLB Rumah Melati"
            className="shrink-0"
            style={{ width: 38, height: 38, objectFit: 'contain' }}
          />
          <span className="hidden sm:inline font-sans">SLB Rumah Melati</span>
        </a>

        {/* Links Navigation */}
        <div className="hidden md:flex items-center gap-8 text-xs font-medium text-gray-200">
          <a href="#beranda" className="hover:text-white transition-colors">Beranda</a>
          <a href="#tentang" className="hover:text-white transition-colors">Tentang Kami</a>
          <a href="#terapi" className="hover:text-white transition-colors">Layanan Terapi</a>
          <a href="#program" className="hover:text-white transition-colors">Program & Vokasi</a>
          <a href="#galeri" className="hover:text-white transition-colors">Fasilitas</a>
          <a href="#kontak" className="hover:text-white transition-colors">Kontak</a>
        </div>

        {/* CTA Button */}
        <a 
          href="#ppdb" 
          className="px-4 py-2 rounded-xl bg-[#1d4ed8] text-white font-medium text-xs hover:bg-[#1e40af] transition-all shadow-md"
        >
          Daftar PPDB
        </a>
      </nav>
    </header>
  )
}