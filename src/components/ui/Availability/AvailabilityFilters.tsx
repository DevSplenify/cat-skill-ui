import { useState } from 'react'
import Select from '../common/Select'

const species = ['Beef', 'Chicken', 'Lamb', 'Pork', 'Fish', 'Turkey', 'Tofu']
const inspectionLevels = ['Standard', 'Premium', 'Organic', 'USDA Certified']

export default function AvailabilityFilters({ onRequestAnimal }: { onRequestAnimal?: () => void }) {
  const [specie, setSpecie] = useState('Beef')
  const [animals, setAnimals] = useState(1)
  const [inspection, setInspection] = useState('')

  return (
    <div className="flex flex-wrap items-end gap-6 p-6" style={{ border: '1px solid #E8E8E9', borderRadius: 16, background: '#FCFBFA' }}>
      {/* 3 equal-width fields */}
      <div style={{ flex: '1 1 0', minWidth: 100 }}>
        <Select label="Specie" value={specie} onChange={setSpecie} options={species} minWidth={0} />
      </div>

      <div style={{ flex: '1 1 0', minWidth: 100 }} className="flex flex-col gap-1.5">
        <label className="text-xs font-medium" style={{ color: '#69686D' }}>Number Of Animals</label>
        <div
          className="flex items-center justify-between px-3 rounded-xl py-3"
          style={{ border: '1px solid #E8E8E9', background: '#fff' }}
        >
          <button
            onClick={() => setAnimals(a => Math.max(1, a - 1))}
            className="shrink-0 cursor-pointer"
            style={{ width: 20, height: 20, borderRadius: '50%', background: '#171A26', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0, border: 'none' }}
          >
            <svg width="8" height="8" viewBox="0 0 10 2" fill="none"><path d="M1 1H9" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/></svg>
          </button>
          <span className="text-sm font-medium" style={{ color: '#171A26' }}>{animals}</span>
          <button
            onClick={() => setAnimals(a => a + 1)}
            className="shrink-0 cursor-pointer"
            style={{ width: 20, height: 20, borderRadius: '50%', background: '#171A26', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0, border: 'none' }}
          >
            <svg width="8" height="8" viewBox="0 0 10 10" fill="none"><path d="M5 1V9M1 5H9" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/></svg>
          </button>
        </div>
      </div>

      <div style={{ flex: '1 1 0', minWidth: 140 }}>
        <Select label="Inspection Level" value={inspection} onChange={setInspection} options={inspectionLevels} placeholder="Select Here" minWidth={0} />
      </div>

      {/* Request Animal */}
      <div className="shrink-0">
        <button
          className="px-5 py-3 rounded-xl text-sm font-medium text-white cursor-pointer flex items-center"
          style={{ background: '#537F68' }}
          onClick={onRequestAnimal}
        >
          Request Animal
        </button>
      </div>
    </div>
  )
}
