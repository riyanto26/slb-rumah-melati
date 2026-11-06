export default function QuickInfo() {
  const stats = [
    {
      number: "01",
      label: "Jam Belajar Inklusif",
      desc: "Sesi TK, SD, SMP, hingga Lanjutan"
    },
    {
      number: "02",
      label: "Gelombang PPDB",
      desc: "Pendaftaran tahun ajaran baru dibuka"
    },
    {
      number: "03",
      label: "Assessment Khusus",
      desc: "Materi disesuaikan potensi ananda"
    },
    {
      number: "100%",
      label: "Pendampingan Kasih",
      desc: "Tenaga pendidik & terapis berpengalaman"
    }
  ]

  return (
    <section className="py-16 sm:py-20 px-6 sm:px-12 bg-[#fdfbf7] border-b border-gray-200/60" id="ppdb">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((item, idx) => (
            <div key={idx} className="flex flex-col justify-start">
              {/* Angka / Stat Besar & Tipis */}
              <span className="font-georgia mb-3 text-4xl font-normal tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                {item.number}
              </span>
              
              {/* Label Judul */}
              <h3 className="text-sm font-medium text-gray-900 mb-1">
                {item.label}
              </h3>
              
              {/* Deskripsi Singkat Minimalis */}
              <p className="text-xs text-gray-500 font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}