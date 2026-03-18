export default function PromoCard() {
  return (
    <div className="rounded-2xl bg-primary p-4 text-white mx-3 mb-6">
      <p className="text-sm font-semibold leading-snug mb-4">
        Streamline your Catskill process here easily
      </p>
      <button
        type="button"
        className="flex items-center gap-1.5 text-xs font-bold bg-white text-primary rounded-lg px-4 py-2 w-full justify-center hover:bg-gray-50 transition-colors"
      >
        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline', verticalAlign: 'middle' }}>
          <path d="M10 16.6663L10 3.33301M10 3.33301L15 8.33301M10 3.33301L5 8.33301" stroke="#0A0B10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        Explore Now
      </button>
    </div>
  )
}
