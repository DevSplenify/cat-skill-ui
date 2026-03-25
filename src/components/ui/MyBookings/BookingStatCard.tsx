interface BookingStatCardProps {
  title: string
  value: string | number
  subtext: string
  icon: React.ReactNode
  btnLabel?: string
  onBtnClick?: () => void
}

export default function BookingStatCard({ title, value, subtext, icon, btnLabel = 'Tertiary', onBtnClick }: BookingStatCardProps) {
  return (
    <div
      className="flex flex-col rounded-2xl p-5 gap-3"
      style={{ border: '1px solid #E8E8E9' }}
    >
      {/* Top row: title + icon */}
      <div className="flex items-start justify-between">
        <span
          className="font-medium"
          style={{ fontFamily: 'Aeonik', fontSize: 16, color: '#171A26' }}
        >
          {title}
        </span>
        <div className="shrink-0">{icon}</div>
      </div>

      {/* Value */}
      <div>
        <span
          className="font-medium"
          style={{ fontFamily: 'Aeonik', fontWeight: 600, fontSize: '28px', lineHeight: '38px', letterSpacing: '0.005em', color: '#1A1A1A' }}>

          {value}
        </span>
        <p className="text-sm mt-1" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>
          {subtext}
        </p>
      </div>

      {/* Tertiary button */}
      <button
        onClick={onBtnClick}
        className="w-full py-2.5 rounded-xl text-sm font-medium cursor-pointer transition-colors hover:bg-gray-50"
        style={{
          border: '1px solid #E8E8E9',
          background: '#fff',
          color: '#171A26',
          fontFamily: 'Aeonik',
        }}
      >
        {btnLabel}
      </button>
    </div>
  )
}
