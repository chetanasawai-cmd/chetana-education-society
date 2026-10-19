export default function MeritList() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-navy-950">
      <div className="bg-navy-900 dark:bg-navy-950 text-white py-10 px-4 text-center border-b-4 border-gold-500">
        <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-2">Chetana Shikshan Mahavidyalay, Wardha</p>
        <h1 className="text-2xl sm:text-3xl font-bold font-serif mb-2">B.Ed Admission Merit List 2026–27</h1>
        <p className="text-gray-300 text-sm">Institute Level Round · Date: 19/10/2026</p>
      </div>
      <div className="max-w-5xl mx-auto mt-6 px-4 pb-10">
        <div className="bg-white dark:bg-navy-900 rounded-xl shadow-lg overflow-hidden">
          <div className="flex items-center justify-between px-5 py-3 bg-navy-800 text-white text-sm">
            <span className="font-medium">📄 Merit List — Institute Level Round</span>
            <a href="/merit-list.pdf" download="CES_BEd_MeritList_2026-27.pdf" className="bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold px-4 py-1.5 rounded-full text-xs transition">⬇ Download PDF</a>
          </div>
          <iframe src="/merit-list.pdf" className="w-full" style={{ height: '80vh', minHeight: '600px' }} title="B.Ed Merit List 2026-27" />
        </div>
        <p className="text-center text-sm text-gray-500 mt-4">Can't see the PDF?{' '}<a href="/merit-list.pdf" target="_blank" className="text-blue-600 underline font-medium">Click here to open it</a></p>
      </div>
    </div>
  )
}
