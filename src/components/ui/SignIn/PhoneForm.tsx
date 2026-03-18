import { useState, useRef, useEffect } from 'react'
import { allCountries } from 'country-telephone-data'

export type Country = {
  name: string
  iso2: string
  dialCode: string
}

function FlagImg({ iso2 }: { iso2: string }) {
  return (
    <img
      src={`https://flagcdn.com/w20/${iso2.toLowerCase()}.png`}
      width={20}
      height={15}
      alt={iso2}
      className="rounded-sm object-cover shrink-0"
    />
  )
}

function cleanName(name: string): string {
  return name.replace(/\s*\(.*?\)\s*/g, '').trim()
}

interface Props {
  country: Country
  phone: string
  onCountrySelect: (c: Country) => void
  onPhoneChange: (v: string) => void
}

export const defaultCountry: Country =
  allCountries.find((c) => c.iso2 === 'us') ?? allCountries[0]

export default function PhoneForm({ country, phone, onCountrySelect, onPhoneChange }: Props) {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')
  const dropdownRef = useRef<HTMLDivElement>(null)

  const filtered = search
    ? allCountries.filter(
        (c) =>
          cleanName(c.name).toLowerCase().includes(search.toLowerCase()) ||
          c.dialCode.includes(search)
      )
    : allCountries

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false)
        setSearch('')
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <div className="space-y-3">
      {/* Country selector */}
      <div className="relative" ref={dropdownRef}>
        <button
          type="button"
          onClick={() => { setOpen((p) => !p); setSearch('') }}
          className="w-full flex items-center justify-between px-3 py-3 bg-gray-50 border rounded-lg text-sm hover:bg-gray-100 transition-colors"
          style={{ borderColor: '#E8E8E9' }}
        >
          <span className="flex items-center gap-2">
            <FlagImg iso2={country.iso2} />
            <span style={{ color: '#69686D' }}>{cleanName(country.name)}</span>
            <span style={{ color: '#69686D' }}>+{country.dialCode}</span>
          </span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
            <path d="M15.8307 7.5L9.9974 12.5L4.16406 7.5" stroke="#69686D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {open && (
          <div className="absolute z-20 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
            {/* Search */}
            <div className="p-2 border-b border-gray-100">
              <input
                autoFocus
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search country..."
                className="w-full px-2 py-3 text-sm bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:border-primary"
              />
            </div>
            {/* List */}
            <ul className="max-h-52 overflow-y-auto">
              {filtered.map((c) => (
                <li key={`${c.iso2}-${c.dialCode}`}>
                  <button
                    type="button"
                    onClick={() => { onCountrySelect(c); setOpen(false); setSearch('') }}
                    className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    <FlagImg iso2={c.iso2} />
                    <span className="flex-1 text-left">{cleanName(c.name)}</span>
                    <span className="text-gray-400 shrink-0">+{c.dialCode}</span>
                  </button>
                </li>
              ))}
              {filtered.length === 0 && (
                <li className="px-3 py-4 text-sm text-gray-400 text-center">No results</li>
              )}
            </ul>
          </div>
        )}
      </div>

      {/* Phone input */}
      <div>
        <label className="block text-sm text-gray-600 mb-1">Phone Number</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => onPhoneChange(e.target.value)}
          placeholder={`+${country.dialCode}-000-000-0000`}
          className="w-full px-3 py-2.5 bg-gray-50 border rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
          style={{ borderColor: '#E8E8E9', color: '#69686D' }}
        />
      </div>
    </div>
  )
}
