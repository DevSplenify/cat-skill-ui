import { useState, useRef, useEffect } from 'react'
import ChevronDown from './ChevronDown'

interface SelectProps {
  label?: string
  value: string
  onChange: (val: string) => void
  options: string[]
  placeholder?: string
  minWidth?: number
}

export default function Select({ label, value, onChange, options, placeholder = 'Select', minWidth = 160 }: SelectProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div className="flex flex-col gap-1.5" ref={ref}>
      {label && <label className="text-sm font-medium" style={{ color: '#4B4A4D' }}>{label}</label>}
      <div className="relative">
        <button
          onClick={() => setOpen(o => !o)}
          className="flex items-center justify-between gap-2 w-full px-3 py-3 rounded-xl text-sm transition-colors hover:bg-gray-50"
          style={{ border: '1px solid #E8E8E9', color: value ? '#171A26' : '#69686D', background: '#fff', minWidth }}
        >
          <span>{value || placeholder}</span>
          <ChevronDown />
        </button>
        {open && (
          <div
            className="absolute z-20 mt-1 w-full rounded-xl overflow-hidden shadow-lg"
            style={{ border: '1px solid #E8E8E9', background: '#fff' }}
          >
            {options.map(opt => (
              <button
                key={opt}
                onClick={() => { onChange(opt); setOpen(false) }}
                className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 transition-colors"
                style={{ color: value === opt ? '#537F68' : '#171A26' }}
              >
                {opt}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
