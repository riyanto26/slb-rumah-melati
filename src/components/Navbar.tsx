import { useEffect, useState } from 'react'

const navigationLinks = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Tentang Kami', href: '#tentang' },
  { label: 'Layanan Terapi', href: '#terapi' },
  { label: 'Program & Vokasi', href: '#program' },
  { label: 'Fasilitas', href: '#galeri' },
  { label: 'Kontak', href: '#kontak' },
] as const

const mobileNavigationLinks = [
  { label: 'Beranda', href: '#beranda', icon: 'ri-home-5-line' },
  { label: 'Tentang', href: '#tentang', icon: 'ri-heart-3-line' },
  { label: 'Terapi', href: '#terapi', icon: 'ri-hand-heart-line' },
  { label: 'Program', href: '#program', icon: 'ri-book-open-line' },
  { label: 'Fasilitas', href: '#galeri', icon: 'ri-gallery-line' },
] as const

const registrationForm =
  'https://docs.google.com/forms/d/e/1FAIpQLSenQF6Q0M-4jSSQfPbalEezsyK3-k0J1-uxV7SRqxEV3SW1iw/viewform?usp=publish-editor'

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('beranda')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const updateActiveSection = () => {
      setIsScrolled(window.scrollY >= 120)

      if (window.scrollY < 120) {
        setActiveSection('beranda')
        return
      }

      const currentSection = navigationLinks.reduce((active, { href }) => {
        const section = document.getElementById(href.slice(1))
        return section && section.getBoundingClientRect().top <= 160
          ? href.slice(1)
          : active
      }, 'beranda')

      setActiveSection(currentSection)
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    return () => window.removeEventListener('scroll', updateActiveSection)
  }, [])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 hidden px-3 pt-4 sm:pt-5 lg:block">
        <nav
          className={`desktop-navbar rounded-full border border-white/20 bg-slate-950/55 text-white shadow-xl shadow-slate-950/15 backdrop-blur-2xl${
            isScrolled ? ' is-scrolled' : ''
          }`}
          aria-label="Navigasi utama"
        >
          <a className="flex shrink-0 items-center gap-2 text-sm font-semibold tracking-tight" href="#beranda">
            <img
              src="/logo.webp"
              alt="Logo SLB Rumah Melati"
              className="shrink-0"
              style={{ width: 32, height: 32, objectFit: 'contain' }}
            />
            <span className="font-georgia whitespace-nowrap font-extrabold">
              SLB Rumah Melati
            </span>
          </a>

          <div className="desktop-nav-menu text-[11px] font-medium tracking-wide xl:text-xs">
            {navigationLinks.map(({ label, href }) => (
              <a
                href={href}
                aria-current={activeSection === href.slice(1) ? 'location' : undefined}
                className={`whitespace-nowrap rounded-full border px-2.5 py-2 transition-colors ${
                  activeSection === href.slice(1)
                    ? 'border-white/25 bg-white/15 text-white shadow-inner'
                    : 'border-transparent text-white/85 hover:border-white/20 hover:text-white'
                }`}
                key={href}
                onClick={() => setActiveSection(href.slice(1))}
              >
                {label}
              </a>
            ))}
            <a
              href={registrationForm}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 inline-flex min-h-9 shrink-0 items-center justify-center whitespace-nowrap rounded-full border border-white/20 bg-[var(--primary)] px-4 text-[10px] font-bold uppercase tracking-wide text-white shadow-sm backdrop-blur-xl transition-colors hover:bg-[var(--primary-dark)]"
            >
              Daftar PPDB
            </a>
          </div>
        </nav>
      </header>

      <header className="mobile-header fixed inset-x-3 top-3 z-[60] flex items-center justify-between rounded-full border border-white/70 bg-white/85 px-3 py-1.5 shadow-lg backdrop-blur-2xl lg:hidden">
        <a className="mobile-header-brand flex min-w-0 items-center gap-2" href="#beranda">
          <img
            src="/logo.webp"
            alt=""
            className="shrink-0 object-contain"
          />
          <span className="font-georgia truncate text-xs font-bold tracking-tight text-white">
            SLB Rumah Melati
          </span>
        </a>
        <a
          href="#kontak"
          className="mobile-contact-link grid shrink-0 place-items-center rounded-full border border-slate-200 bg-white/90 text-slate-800 shadow-sm transition-transform duration-300 hover:scale-105"
          aria-label="Hubungi SLB Rumah Melati"
          title="Kontak"
        >
          <i className="ri-contacts-line text-lg" aria-hidden="true" />
        </a>
      </header>

      <nav
        className="mobile-bottom-nav fixed bottom-3 left-1/2 z-[60] grid w-[calc(100%-24px)] max-w-[440px] -translate-x-1/2 grid-cols-5 items-center rounded-full border border-white/20 bg-slate-950/55 px-2 py-2 shadow-xl backdrop-blur-2xl transition-all duration-300 lg:hidden"
        aria-label="Navigasi cepat"
      >
        {mobileNavigationLinks.map(({ label, href, icon }) => (
          <a
            href={href}
            key={href}
            aria-current={activeSection === href.slice(1) ? 'location' : undefined}
            className={`flex min-w-0 flex-col items-center justify-center gap-1 rounded-full px-1 py-2 text-[9px] font-semibold transition-colors ${
              activeSection === href.slice(1)
                ? 'bg-white/15 text-white'
                : 'text-white/80 hover:bg-white/10 hover:text-white'
            }`}
            onClick={() => setActiveSection(href.slice(1))}
          >
            <i className={`${icon} text-[19px] leading-none`} aria-hidden="true" />
            <span className="whitespace-nowrap">{label}</span>
          </a>
        ))}
      </nav>
    </>
  )
}
