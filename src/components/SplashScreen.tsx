import { useEffect, useState } from 'react'

const splashSeenKey = 'slb-rumah-melati-splash-seen'

export default function SplashScreen() {
  const [hasSeenSplash] = useState(
    () => sessionStorage.getItem(splashSeenKey) === 'true',
  )
  const [isLoading, setIsLoading] = useState(!hasSeenSplash)
  const [isVisible, setIsVisible] = useState(!hasSeenSplash)

  useEffect(() => {
    if (hasSeenSplash) return

    sessionStorage.setItem(splashSeenKey, 'true')
    const fadeTimer = window.setTimeout(() => setIsLoading(false), 2100)
    const removeTimer = window.setTimeout(() => setIsVisible(false), 2500)

    return () => {
      window.clearTimeout(fadeTimer)
      window.clearTimeout(removeTimer)
    }
  }, [hasSeenSplash])

  if (!isVisible) return null

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#fbfbfa] text-slate-800 transition-[opacity,transform] duration-[400ms] ease-out motion-reduce:transition-none ${
        isLoading
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none -translate-y-2 opacity-0'
      }`}
      role="status"
      aria-live="polite"
      aria-label="Memuat SLB Rumah Melati"
    >
      <div className="mb-5 grid h-24 w-24 place-items-center rounded-[28px] border border-blue-100 bg-white shadow-2xl shadow-slate-900/10 animate-pulse motion-reduce:animate-none">
        <img
          src="/logo.webp"
          alt="Logo SLB Rumah Melati"
          style={{ width: 68, height: 68, objectFit: 'contain' }}
        />
      </div>
      <p className="font-georgia text-lg font-bold tracking-wide">
        SLB Rumah Melati
      </p>
      <p className="mt-2 text-sm text-slate-500">
        Mendampingi ananda bertumbuh
      </p>
    </div>
  )
}
