import { useState } from 'react'

const ChevronDown = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M14.25 6.75L9 11.25L3.75 6.75" stroke="#171A26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

function SelectField({ value, options, onChange }: { value: string; options: string[]; onChange: (v: string) => void }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative">
      <button
        onClick={() => setOpen(s => !s)}
        className="w-full flex items-center justify-between px-4 py-3 rounded-2xl text-sm text-left"
        style={{ border: '1.5px solid #E8E8E9', background: '#F8F8FA', color: '#171A26', fontFamily: 'Aeonik' }}
      >
        {value}
        <ChevronDown />
      </button>
      {open && (
        <div className="absolute top-full left-0 right-0 mt-1 rounded-2xl z-10 overflow-hidden" style={{ background: '#fff', border: '1px solid #E8E8E9', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
          {options.map(o => (
            <button
              key={o}
              onClick={() => { onChange(o); setOpen(false) }}
              className="w-full px-4 py-3 text-sm text-left hover:bg-[#F8F8FA] transition-colors"
              style={{ color: o === value ? '#537F68' : '#171A26', fontFamily: 'Aeonik' }}
            >
              {o}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default function LanguageSection() {
  const [language, setLanguage] = useState('English')
  const [region, setRegion] = useState('Asia, Pakistan')

  return (
    <div className="flex flex-col md:flex-row gap-8 py-6" style={{ borderBottom: '1px solid #E8E8E9' }}>
      <div className="md:w-48 shrink-0">
        <p className="text-base font-bold" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>Language & Region</p>
        <p className="text-sm mt-1" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>Customize your language and region.</p>
      </div>

      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <p className="text-sm font-medium mb-2" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>Language</p>
          <SelectField value={language} options={['English', 'Spanish', 'French', 'Arabic']} onChange={setLanguage} />
        </div>
        <div>
          <p className="text-sm font-medium mb-2" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>Region</p>
          <SelectField value={region} options={['Asia, Pakistan', 'North America', 'Europe', 'Middle East']} onChange={setRegion} />
        </div>
      </div>
    </div>
  )
}
