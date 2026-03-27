type Status = 'In Progress' | 'Harvested' | 'Resolved' | 'Open'

const statusStyle: Record<Status, { color: string; background: string; border: string }> = {
  'In Progress': { color: '#C98C00', background: '#FFFBE6', border: '1.5px solid #FFE99A' },
  'Harvested':   { color: '#1A9C4E', background: '#EDFBF3', border: '1.5px solid #B4EDD0' },
  'Resolved':    { color: '#1A9C4E', background: '#EDFBF3', border: '1.5px solid #B4EDD0' },
  'Open':        { color: '#0167FF', background: '#EEF4FF', border: '1.5px solid #93C2FD' },
}

export default function TicketStatusBadge({ status }: { status: Status }) {
  const s = statusStyle[status]
  return (
    <span
      className="text-sm font-semibold px-3 py-1 rounded-full whitespace-nowrap"
      style={{ color: s.color, background: s.background, border: s.border, fontFamily: 'Aeonik' }}
    >
      {status}
    </span>
  )
}
