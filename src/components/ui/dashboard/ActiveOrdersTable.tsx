import { useState } from 'react'

const ROWS_PER_PAGE = 10

const allOrders = Array.from({ length: 100 }, (_, i) => {
  const clients = ['Dolly Parton', 'Tammy Waynette', 'Willie Wilson', 'Evelyn Grant', 'Rita Martinez', 'Tara Simmons', 'Samuel Cole', 'Jordan Baker', 'Oliver James', 'Willie Wilson']
  const species = ['Beef', 'Chicken', 'Lamb', 'Pork', 'Fish', 'Chicken', 'Tofu', 'Beef', 'Turkey', 'Lamb']
  const statuses = ['Harvested', 'Scheduled', 'Harvested', 'Harvested', 'Scheduled', 'Scheduled', 'Harvested', 'Harvested', 'Scheduled', 'Scheduled']
  const idx = i % 10
  return {
    id: `#${1561654 + i}`,
    client: clients[idx],
    headcount: 4,
    species: species[idx],
    dropoffDate: '12/05/2025',
    status: statuses[idx] as 'Harvested' | 'Scheduled',
  }
})

const Checkbox = ({ checked, onChange }: { checked: boolean; onChange: () => void }) => (
  <button
    type="button"
    onClick={onChange}
    className="shrink-0 w-5 h-5 rounded-md flex items-center justify-center transition-colors"
    style={{
      border: `1.5px solid ${checked ? '#537F68' : '#C8C7CB'}`,
      background: checked ? '#537F68' : 'white',
    }}
  >
    {checked && (
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )}
  </button>
)

const StatusBadge = ({ status }: { status: 'Harvested' | 'Scheduled' }) => {
  const isHarvested = status === 'Harvested'
  return (
    <span
      className="text-sm font-bold px-4 py-1 rounded-full inline-block"
      style={{
        color: isHarvested ? '#C98C00' : '#1A9C4E',
        background: isHarvested ? '#FFFBE6' : '#EDFBF3',
        border: `1.5px solid ${isHarvested ? '#FFE99A' : '#B4EDD0'}`,
      }}
    >
      {status}
    </span>
  )
}

const ViewDetailsBtn = () => (
  <button
    className="flex items-center justify-center gap-1.5 px-2 md:px-4 py-1 rounded-full text-xs md:text-sm font-medium transition-colors whitespace-nowrap"
    style={{ border: '1px solid #D1D0D2', color: '#1A1A1A', background: '#F0F0F0' }}
  >
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.72647 12.7461C2.0182 11.8259 1.66406 11.3658 1.66406 9.99967C1.66406 8.63353 2.0182 8.17345 2.72647 7.25328C4.1407 5.41597 6.51249 3.33301 9.9974 3.33301C13.4823 3.33301 15.8541 5.41597 17.2683 7.25328C17.9766 8.17345 18.3307 8.63353 18.3307 9.99967C18.3307 11.3658 17.9766 11.8259 17.2683 12.7461C15.8541 14.5834 13.4823 16.6663 9.9974 16.6663C6.51249 16.6663 4.1407 14.5834 2.72647 12.7461Z" stroke="#69686D" strokeWidth="1.5"/>
      <path d="M12.5 10C12.5 11.3807 11.3807 12.5 10 12.5C8.61929 12.5 7.5 11.3807 7.5 10C7.5 8.61929 8.61929 7.5 10 7.5C11.3807 7.5 12.5 8.61929 12.5 10Z" stroke="#171A26" strokeWidth="1.5"/>
    </svg>
    <span className="hidden sm:inline">View Details</span>
  </button>
)

const ChevronDown = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.25 6.75L9 11.25L3.75 6.75" stroke="#87868A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
    <circle cx="9.5" cy="9.5" r="7" stroke="#69686D" strokeWidth="1.5" />
    <path d="M15 15L18 18" stroke="#69686D" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

export default function ActiveOrdersTable() {
  const [page, setPage] = useState(1)
  const [selected, setSelected] = useState<Set<number>>(new Set())
  const totalPages = Math.ceil(allOrders.length / ROWS_PER_PAGE)
  const start = (page - 1) * ROWS_PER_PAGE
  const rows = allOrders.slice(start, start + ROWS_PER_PAGE)
  const pageNumbers = [1, 2, 3, 4, 5]

  const allSelected = rows.every((_, i) => selected.has(start + i))
  const toggleAll = () => {
    const next = new Set(selected)
    if (allSelected) rows.forEach((_, i) => next.delete(start + i))
    else rows.forEach((_, i) => next.add(start + i))
    setSelected(next)
  }
  const toggleRow = (i: number) => {
    const next = new Set(selected)
    next.has(i) ? next.delete(i) : next.add(i)
    setSelected(next)
  }

  return (
    <div className="mt-6 rounded-2xl" style={{ border: '1px solid #E8E8E9', background: 'white', overflow: 'hidden' }}>
      {/* Header */}
      <div className="px-4 sm:px-5 py-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="shrink-0">
            <p className="font-semibold text-[#171A26]" style={{ fontSize: '16px' }}>Active Orders</p>
            <p className="text-sm mt-0.5" style={{ color: '#69686D' }}>List of active jobs are here</p>
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-0.5 sm:pb-0">
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg shrink-0" style={{ border: '1px solid #E8E8E9' }}>
              <input type="text" placeholder="Search here" className="text-sm outline-none bg-transparent w-28" style={{ color: '#1A1A1A' }} />
              <SearchIcon />
            </div>
            <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm shrink-0 whitespace-nowrap" style={{ border: '1px solid #E8E8E9', color: '#1A1A1A' }}>
              All Species <ChevronDown />
            </button>
            <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm shrink-0 whitespace-nowrap" style={{ border: '1px solid #E8E8E9', color: '#1A1A1A' }}>
              All Statuses <ChevronDown />
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-separate border-spacing-0">
          <thead>
            <tr style={{ background: '#F8F9FA' }}>
              <th className="px-5 py-3 text-left rounded-tl-2xl" style={{ borderTop: '1px solid #E8E8E9', borderBottom: '1px solid #E8E8E9', color: '#69686D' }}>
                <div className="flex items-center gap-2">
                  <Checkbox checked={allSelected} onChange={toggleAll} />
                  <span className="text-sm font-semibold" style={{ color: '#69686D' }}>Job ID</span>
                  <ChevronDown />
                </div>
              </th>
              {[
                { label: 'Client', chevron: true },
                { label: 'Headcount', chevron: false },
                { label: 'Species', chevron: true },
                { label: 'Dropoff Date', chevron: true },
                { label: 'Statuses', chevron: true },
                { label: 'Action', chevron: true },
              ].map(({ label, chevron }, i, arr) => (
                <th
                  key={label}
                  className={`px-5 py-3 text-left${i === arr.length - 1 ? ' rounded-tr-2xl' : ''}`}
                  style={{ borderTop: '1px solid #E8E8E9', borderBottom: '1px solid #E8E8E9', color: '#69686D' }}
                >
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-semibold" style={{ color: '#69686D' }}>{label}</span>
                    {chevron && <ChevronDown />}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} style={{ borderBottom: '1px solid #F0F0F0' }}>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-2">
                    <Checkbox checked={selected.has(start + i)} onChange={() => toggleRow(start + i)} />
                    <span style={{ color: '#69686D', fontSize: '13px' }}>{row.id}</span>
                  </div>
                </td>
                <td className="px-5 py-4 font-medium" style={{ color: '#1A1A1A' }}>{row.client}</td>
                <td className="px-5 py-4" style={{ color: '#1A1A1A' }}>{row.headcount}</td>
                <td className="px-5 py-4 font-semibold" style={{ color: '#1A1A1A' }}>{row.species}</td>
                <td className="px-5 py-4" style={{ color: '#69686D' }}>{row.dropoffDate}</td>
                <td className="px-5 py-4"><StatusBadge status={row.status} /></td>
                <td className="px-5 py-4"><ViewDetailsBtn /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between px-5 py-4" style={{ borderTop: '1px solid #E8E8E9' }}>
        <p className="text-sm" style={{ color: '#69686D' }}>
          Showing {start + 1}-{Math.min(start + ROWS_PER_PAGE, allOrders.length)} from {allOrders.length}
        </p>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page === 1}
            className="w-8 h-8 flex items-center justify-center rounded-lg transition-colors disabled:opacity-40"
            style={{ border: '1px solid #E8E8E9', background: 'white' }}
          >
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
              <path d="M12.5 15L7.5 10L12.5 5" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {pageNumbers.map(n => (
            <button
              key={n}
              onClick={() => setPage(n)}
              className="w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium transition-colors"
              style={{
                background: page === n ? '#537F68' : 'white',
                color: page === n ? 'white' : '#1A1A1A',
                border: page === n ? 'none' : '1px solid #E8E8E9',
              }}
            >
              {n}
            </button>
          ))}
          <button
            className="w-8 h-8 flex items-center justify-center rounded-lg text-sm"
            style={{ border: '1px solid #E8E8E9', color: '#69686D', background: 'white' }}
          >
            ...
          </button>
          <button
            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="w-8 h-8 flex items-center justify-center rounded-lg transition-colors disabled:opacity-40"
            style={{ border: '1px solid #E8E8E9', background: 'white' }}
          >
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
