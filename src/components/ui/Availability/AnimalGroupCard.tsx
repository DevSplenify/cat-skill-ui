import { useState } from 'react'
import Select from '../common/Select'

interface AnimalGroupCardProps {
  onDelete: () => void
  canDelete: boolean
}

const inspectionOptions = ['Standard', 'Premium', 'Organic', 'USDA Certified']
const sexOptions = ['Male', 'Female']
const splitOptions = ['Whole', 'Half', 'Quarter']

const DeleteIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 6.52381C3 6.12932 3.32671 5.80952 3.72973 5.80952H8.51787C8.52437 4.9683 8.61554 3.81504 9.45037 3.01668C10.1074 2.38839 11.0081 2 12 2C12.9919 2 13.8926 2.38839 14.5496 3.01668C15.3844 3.81504 15.4756 4.9683 15.4821 5.80952H20.2703C20.6733 5.80952 21 6.12932 21 6.52381C21 6.9183 20.6733 7.2381 20.2703 7.2381H3.72973C3.32671 7.2381 3 6.9183 3 6.52381Z" fill="#EA5545"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M11.5956 22H12.4044C15.1871 22 16.5785 22 17.4831 21.1141C18.3878 20.2281 18.4803 18.7749 18.6654 15.8685L18.9321 11.6806C19.0326 10.1036 19.0828 9.31511 18.6289 8.81545C18.1751 8.31579 17.4087 8.31579 15.876 8.31579H8.12404C6.59127 8.31579 5.82488 8.31579 5.37105 8.81545C4.91722 9.31511 4.96744 10.1036 5.06788 11.6806L5.33459 15.8685C5.5197 18.7749 5.61225 20.2281 6.51689 21.1141C7.42153 22 8.81289 22 11.5956 22ZM10.2463 12.1885C10.2051 11.7546 9.83753 11.4381 9.42537 11.4815C9.01321 11.5249 8.71251 11.9117 8.75372 12.3456L9.25372 17.6087C9.29494 18.0426 9.66247 18.3591 10.0746 18.3157C10.4868 18.2724 10.7875 17.8855 10.7463 17.4516L10.2463 12.1885ZM14.5746 11.4815C14.9868 11.5249 15.2875 11.9117 15.2463 12.3456L14.7463 17.6087C14.7051 18.0426 14.3375 18.3591 13.9254 18.3157C13.5132 18.2724 13.2125 17.8855 13.2537 17.4516L13.7537 12.1885C13.7949 11.7546 14.1625 11.4381 14.5746 11.4815Z" fill="#EA5545"/>
  </svg>
)

const ChevronUpDown = ({ up }: { up: boolean }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{ transform: up ? 'rotate(0deg)' : 'rotate(180deg)', transition: 'transform 0.2s' }}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M4.43057 15.4881C4.161 15.1736 4.19743 14.7001 4.51192 14.4305L11.5119 8.43054C11.7928 8.1898 12.2072 8.1898 12.4881 8.43054L19.4881 14.4305C19.8026 14.7001 19.839 15.1736 19.5695 15.4881C19.2999 15.8026 18.8264 15.839 18.5119 15.5694L12 9.98779L5.48811 15.5694C5.17361 15.839 4.70014 15.8026 4.43057 15.4881Z" fill="#171A26"/>
  </svg>
)

const CrossIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
    <path d="M4 4L12 12M12 4L4 12" stroke="#69686D" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M2.5 6L5 8.5L9.5 3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function AnimalGroupCard({ onDelete, canDelete }: AnimalGroupCardProps) {
  const [quantity, setQuantity] = useState(1)
  const [inspection, setInspection] = useState('')
  const [sex, setSex] = useState('')
  const [over30, setOver30] = useState(true)
  const [killChill, setKillChill] = useState(true)
  const [identifier, setIdentifier] = useState('')
  const [split, setSplit] = useState('Whole')
  const [splitOpen, setSplitOpen] = useState(false)
  const [expanded, setExpanded] = useState(true)
  const [specie] = useState('Beef')

  return (
    <div
      className="rounded-2xl p-5 flex flex-col gap-4"
      style={{ border: '1px solid #E8E8E9'}}
    >
      {/* Card header: specie name + delete + chevron */}
      <div className="flex items-center justify-between">
        <span className="text-base font-semibold" style={{ color: '#171A26' }}>{specie}</span>
        <div className="flex items-center gap-3">
          {canDelete && (
            <button onClick={onDelete} className="cursor-pointer">
              <DeleteIcon />
            </button>
          )}
          <button onClick={() => setExpanded(e => !e)} className="cursor-pointer">
            <ChevronUpDown up={expanded} />
          </button>
        </div>
      </div>

      {expanded && (
        <>
          {/* Two-column: Details left, Identifiers right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Left: Beef Details card */}
            <div
              className="p-4 rounded-2xl flex flex-col gap-4"
              style={{ border: '1px solid #E8E8E9', background: '#F8F8FA' }}
            >
              <span className="text-sm font-semibold" style={{ color: '#171A26' }}>{specie} Details</span>

              {/* Quantity + Inspection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Quantity */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium" style={{ color: '#4B4A4D' }}>Quantity</label>
                  <div
                    className="flex items-center justify-between px-3 py-3 rounded-xl"
                    style={{ border: '1px solid #E8E8E9', background: '#fff' }}
                  >
                    <button
                      onClick={() => setQuantity(q => Math.max(1, q - 1))}
                      className="shrink-0 cursor-pointer"
                      style={{ width: 20, height: 20, borderRadius: '50%', background: '#171A26', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0, border: 'none' }}
                    >
                      <svg width="8" height="8" viewBox="0 0 10 2" fill="none"><path d="M1 1H9" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/></svg>
                    </button>
                    <span className="text-sm font-medium" style={{ color: '#171A26' }}>{quantity}</span>
                    <button
                      onClick={() => setQuantity(q => q + 1)}
                      className="shrink-0 cursor-pointer"
                      style={{ width: 20, height: 20, borderRadius: '50%', background: '#171A26', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0, border: 'none' }}
                    >
                      <svg width="8" height="8" viewBox="0 0 10 10" fill="none"><path d="M5 1V9M1 5H9" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/></svg>
                    </button>
                  </div>
                </div>
                <Select label="Inspection Level" value={inspection} onChange={setInspection} options={inspectionOptions} placeholder="Select Here" minWidth={0} />
              </div>

              {/* Sex + Over 30 + Kill & Chill */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <Select label="Sex" value={sex} onChange={setSex} options={sexOptions} placeholder="Select here" minWidth={0} />

                {/* Over 30 months */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium" style={{ color: '#4B4A4D' }}>Over 30 months old?</label>
                  <div
                    className="flex items-center justify-between px-3 py-3 rounded-xl cursor-pointer"
                    style={{ border: '1px solid #E8E8E9', background: '#fff' }}
                    onClick={() => setOver30(o => !o)}
                  >
                    <span className="text-sm" style={{ color: '#171A26' }}>Selected</span>
                    <div
                      className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: over30 ? '#171A26' : '#fff', border: over30 ? 'none' : '1.5px solid #D1D0D2' }}
                    >
                      {over30 && <CheckIcon />}
                    </div>
                  </div>
                </div>

                {/* Kill & Chill */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium" style={{ color: '#4B4A4D' }}>Beef is for kill & chill</label>
                  <div
                    className="flex items-center justify-between px-3 py-3 rounded-xl cursor-pointer"
                    style={{ border: '1px solid #E8E8E9', background: '#fff' }}
                    onClick={() => setKillChill(k => !k)}
                  >
                    <span className="text-sm" style={{ color: '#171A26' }}>Selected</span>
                    <div
                      className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: killChill ? '#171A26' : '#fff', border: killChill ? 'none' : '1.5px solid #D1D0D2' }}
                    >
                      {killChill && <CheckIcon />}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Animal Identifiers card */}
            <div
              className="p-4 rounded-2xl flex flex-col gap-3"
              style={{ border: '1px solid #E8E8E9', background: '#F8F8FA' }}
            >
              <span className="text-sm font-semibold" style={{ color: '#171A26' }}>Animal Identifiers (Ear Tags) ({quantity} animal{quantity > 1 ? 's' : ''})</span>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium" style={{ color: '#4B4A4D' }}>Identifier</label>
                <input
                  type="text"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  placeholder="Write here"
                  className="px-3 py-3 rounded-xl text-sm outline-none w-full"
                  style={{ border: '1px solid #E8E8E9', color: '#171A26', background: '#fff' }}
                />
              </div>
            </div>
          </div>

          {/* Split & Customer Info card */}
          <div
            className="p-4 rounded-2xl flex flex-col gap-3"
            style={{ border: '1px solid #E8E8E9', background: '#F8F8FA' }}
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold" style={{ color: '#171A26' }}>Split & Customer Info</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium" style={{ color: '#4B4A4D' }}>Split</label>
              <div className="relative">
                <button
                  onClick={() => setSplitOpen(o => !o)}
                  className="flex items-center justify-between gap-2 w-full px-3 py-3 rounded-xl text-sm"
                  style={{ border: '1px solid #E8E8E9', color: split ? '#171A26' : '#69686D', background: '#fff' }}
                >
                  <span>{split || 'Select'}</span>
                  <div className="flex items-center gap-2">
                    {split && (
                      <button
                        onClick={(e) => { e.stopPropagation(); setSplit('') }}
                        className="cursor-pointer"
                      >
                        <CrossIcon />
                      </button>
                    )}
                    <ChevronUpDown up={false} />
                  </div>
                </button>
                {splitOpen && (
                  <div
                    className="absolute z-20 mt-1 w-full rounded-xl overflow-hidden shadow-lg"
                    style={{ border: '1px solid #E8E8E9', background: '#fff' }}
                  >
                    {splitOptions.map(opt => (
                      <button
                        key={opt}
                        onClick={() => { setSplit(opt); setSplitOpen(false) }}
                        className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50"
                        style={{ color: split === opt ? '#537F68' : '#171A26' }}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
