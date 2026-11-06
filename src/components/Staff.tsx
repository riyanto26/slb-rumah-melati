export default function Teachers() {
  const staffList = [
    { name: "Joko Retno, S.Pd.", role: "Kepala Sekolah" },
    { name: "Pravita Sosia, S.Pd.", role: "Wakil Kepala Sekolah" },
    { name: "Risci Desmita, S.Pd.", role: "Kurikulum" },
    { name: "Novia Nindri Astuti, S.Psi.", role: "Kesiswaan" },
    { name: "Dede Jamaludin", role: "Sarpras / Staf Umum" },
    { name: "Nonik Muzayanah, S.Sos.I.", role: "Humas" },
    { name: "Saridoni Batubara, S.Pd.", role: "Bendahara" },
    { name: "Yayen, S.Pd.", role: "Sekretaris / Staf Guru" },
    { name: "Narni Astriani, S.Pd.", role: "Staf Guru" },
    { name: "Shannaz Pratiwi", role: "Staf Guru" },
    { name: "Dedik Kurniawan, S.Pd.", role: "Koord. Olahraga / Staf Guru" },
    { name: "Rann Utomo, A.Md.", role: "Koord. Kesenian / Staf Guru" },
    { name: "Nova Pramesti, M.Pd.", role: "Tata Usaha" },
  ]

  return (
    <section className="bg-[#f7f7f6] py-20 sm:py-28" id="guru">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="section-heading-stack section-heading-stack-center mb-16 text-center sm:mb-20">
          <span className="section-badge">
            Staf & Pengajar
          </span>
          <h2 className="font-georgia text-3xl font-normal leading-[1.12] tracking-tight text-gray-900 sm:text-5xl">
            Hadir dengan hati, mendampingi dengan ilmu.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm font-light leading-relaxed text-gray-600 sm:text-base">
            Tenaga pendidik profesional dan berdedikasi tinggi dalam membersamai tumbuh kembang buah hati Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 border-r border-gray-300 sm:grid-cols-2 lg:grid-cols-4">
          {staffList.map((staff) => (
            <div
              key={staff.name}
              className="border-l border-gray-300 px-5 py-6 sm:px-6"
            >
              <span className="mb-1 block text-sm font-medium leading-snug text-gray-900">
                {staff.name}
              </span>
              <span className="block text-sm font-light leading-snug text-gray-500">
                  {staff.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}