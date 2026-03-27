import { useState } from 'react'
import TicketStatusBadge from './TicketStatusBadge'

export const ROWS_PER_PAGE = 10

export type Status = 'In Progress' | 'Harvested' | 'Resolved' | 'Open'

export interface Ticket {
  id: string
  client: string
  title: string
  date: string
  status: Status
}

const tickets: Ticket[] = Array.from({ length: 50 }, (_, i) => {
  const clients = ['Dolly Parton', 'Tammy Waynette', 'Willie Wilson', 'Evelyn Grant', 'Rita Martinez', 'Tara Simmons', 'Samuel Cole', 'Jordan Baker', 'Oliver James', 'Willie Wilson']
  const titles = [
    'I have cutsheet issue ongoing',
    'I have payment issue that i am facing right...',
    'I need help with my account balance discre...',
    'Can you assist me with a refund request?',
    "I'm unable to access my transaction history",
    'I would like to update my payment method',
    'I have payment issue that i am facing right...',
    'I have payment issue that i am facing right...',
    'I have payment issue that i am facing right...',
    'I have payment issue that i am facing right...',
  ]
  const dates = ['10/25/2026', '01/10/2026', '09/20/2026', '02/15/2026', '08/15/2026', '05/30/2026', '07/10/2026', '03/20/2026', '06/05/2026', '04/18/2026']
  const statuses: Status[] = ['In Progress', 'In Progress', 'In Progress', 'In Progress', 'In Progress', 'In Progress', 'In Progress', 'Harvested', 'In Progress', 'In Progress']
  const idx = i % 10
  return { id: `#${1561654 + i}`, client: clients[idx], title: titles[idx], date: dates[idx], status: statuses[idx] }
})

const Checkbox = ({ checked, onChange }: { checked: boolean; onChange: () => void }) => (
  <button
    type="button"
    onClick={onChange}
    className="shrink-0 w-5 h-5 rounded-md flex items-center justify-center transition-colors"
    style={{ border: `1.5px solid ${checked ? '#537F68' : '#C8C7CB'}`, background: checked ? '#537F68' : 'white' }}
  >
    {checked && (
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )}
  </button>
)

const ChevronDown = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M14.25 6.75L9 11.25L3.75 6.75" stroke="#87868A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
    <circle cx="9.5" cy="9.5" r="7" stroke="#69686D" strokeWidth="1.5" />
    <path d="M15 15L18 18" stroke="#69686D" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

interface Props { onViewDetail: (ticket: Ticket) => void }

export default function TicketsTable({ onViewDetail }: Props) {
  const [page, setPage] = useState(1)
  const [selected, setSelected] = useState<Set<number>>(new Set())
  const [search, setSearch] = useState('')

  const totalPages = Math.ceil(tickets.length / ROWS_PER_PAGE)
  const start = (page - 1) * ROWS_PER_PAGE
  const rows = tickets.slice(start, start + ROWS_PER_PAGE)
  const pageNumbers = Array.from({ length: Math.min(5, totalPages) }, (_, i) => i + 1)

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
    <div className="rounded-2xl" style={{ border: '1px solid #E8E8E9', background: 'white', overflow: 'hidden' }}>
      {/* Table header */}
      <div className="px-4 sm:px-5 py-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="shrink-0">
            <p className="font-semibold" style={{ fontSize: 16, color: '#171A26', fontFamily: 'Aeonik' }}>All Tickets</p>
            <p className="text-sm mt-0.5" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>List of active jobs are here</p>
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-0.5 sm:pb-0">
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg shrink-0" style={{ border: '1px solid #E8E8E9' }}>
              <input
                type="text"
                placeholder="Search here"
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="text-sm outline-none bg-transparent w-28"
                style={{ color: '#1A1A1A', fontFamily: 'Aeonik' }}
              />
              <SearchIcon />
            </div>
            <button
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm shrink-0 whitespace-nowrap"
              style={{ border: '1px solid #E8E8E9', color: '#69686D', fontFamily: 'Aeonik' }}
            >
        <ChevronDown />      In Progress 
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-separate border-spacing-0">
          <thead>
            <tr style={{ background: '#F8F9FA' }}>
              <th className="px-5 py-3 text-left rounded-tl-2xl" style={{ borderTop: '1px solid #E8E8E9', borderBottom: '1px solid #E8E8E9' }}>
                <div className="flex items-center gap-2">
                  <Checkbox checked={allSelected} onChange={toggleAll} />
                  <span className="text-sm font-semibold" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>Ticket ID</span>
                  <ChevronDown />
                </div>
              </th>
              {[
                { label: 'Client', chevron: true },
                { label: 'Dispute Title', chevron: false },
                { label: 'Ticket Date', chevron: true },
                { label: 'Statuses', chevron: true },
                { label: 'Action', chevron: false },
              ].map(({ label, chevron }, i, arr) => (
                <th key={label} className={`px-5 py-3 text-left${i === arr.length - 1 ? ' rounded-tr-2xl' : ''}`} style={{ borderTop: '1px solid #E8E8E9', borderBottom: '1px solid #E8E8E9' }}>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-semibold" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>{label}</span>
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
                    <span style={{ color: '#69686D', fontSize: 13, fontFamily: 'Aeonik' }}>{row.id}</span>
                  </div>
                </td>
                <td className="px-5 py-4 font-medium" style={{ color: '#1A1A1A', fontFamily: 'Aeonik' }}>{row.client}</td>
                <td className="px-5 py-4" style={{ color: '#1A1A1A', fontFamily: 'Aeonik', maxWidth: 280 }}>{row.title}</td>
                <td className="px-5 py-4 whitespace-nowrap" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>{row.date}</td>
                <td className="px-5 py-4">
                  <TicketStatusBadge status={row.status} />
                </td>
                <td className="px-5 py-4">
                  <button
                    onClick={() => onViewDetail(row)}
                    className="px-4 py-1.5 rounded-xl text-sm font-medium whitespace-nowrap"
                    style={{ border: '1px solid #E8E8E9', color: '#171A26', background: '#fff', fontFamily: 'Aeonik' }}
                  >
                    View Detail
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between px-5 py-4" style={{ borderTop: '1px solid #E8E8E9' }}>
        <p className="text-sm" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>
          Showing {start + 1}-{Math.min(start + ROWS_PER_PAGE, tickets.length)} from {tickets.length}
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
                fontFamily: 'Aeonik',
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
