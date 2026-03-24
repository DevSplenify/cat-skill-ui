import { useState } from 'react'
import ChevronDownIcon from '../common/ChevronDown'
import EventPopover from './EventPopover'

type ViewMode = 'Days' | 'Week' | 'Month'

export interface CalendarEvent {
  year: number
  month: number
  day: number
  type: 'dropoff' | 'harvest' | 'cut'
  name?: string
  item?: string
  status?: string
  headCount?: number
  cutDate?: string
  phone?: string
}

interface MyCalendarProps {
  events: CalendarEvent[]
}

const DAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December']

const EVENT_STYLES = {
  dropoff: { bg: '#0167FF', label: 'Drop-off Date' },
  harvest: { bg: '#FA7522', label: 'Harvest Date' },
  cut:     { bg: '#11B14B', label: 'Cut Date' },
}

const ChevronLeft = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
    <path d="M12.5 15L7.5 10L12.5 5" stroke="#69686D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)
const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
    <path d="M7.5 15L12.5 10L7.5 5" stroke="#69686D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate()
}
function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay()
}

export default function MyCalendar({ events }: MyCalendarProps) {
  const today = new Date()
  const [year, setYear] = useState(today.getFullYear())
  const [month, setMonth] = useState(today.getMonth())
  const [tooltip, setTooltip] = useState<{ cellIdx: number; evIdx: number } | null>(null)
  const [selected, setSelected] = useState<{ year: number; month: number; day: number }>({
    year: today.getFullYear(),
    month: today.getMonth(),
    day: today.getDate(),
  })
  const [viewMode, setViewMode] = useState<ViewMode>('Month')
  const [monthPickerOpen, setMonthPickerOpen] = useState(false)

  const daysInMonth = getDaysInMonth(year, month)
  const firstDay = getFirstDayOfMonth(year, month)
  const prevMonthIndex = month === 0 ? 11 : month - 1
  const prevMonthYear = month === 0 ? year - 1 : year
  const daysInPrevMonth = getDaysInMonth(prevMonthYear, prevMonthIndex)

  const prevMonthFn = () => {
    if (month === 0) { setMonth(11); setYear(y => y - 1) }
    else setMonth(m => m - 1)
  }
  const nextMonthFn = () => {
    if (month === 11) { setMonth(0); setYear(y => y + 1) }
    else setMonth(m => m + 1)
  }

  const cells: { day: number; currentMonth: boolean; isToday: boolean }[] = []
  for (let i = firstDay - 1; i >= 0; i--) {
    cells.push({ day: daysInPrevMonth - i, currentMonth: false, isToday: false })
  }
  for (let d = 1; d <= daysInMonth; d++) {
    const isToday = d === today.getDate() && month === today.getMonth() && year === today.getFullYear()
    cells.push({ day: d, currentMonth: true, isToday })
  }
  const remaining = 42 - cells.length
  for (let d = 1; d <= remaining; d++) {
    cells.push({ day: d, currentMonth: false, isToday: false })
  }

  const stripeStyle: React.CSSProperties = {
    backgroundImage: 'repeating-linear-gradient(135deg, #f0f0f0 0px, #f0f0f0 1px, transparent 1px, transparent 8px)',
    background: '#FAFAFA',
  }

  const getEventsForDay = (day: number) =>
    events.filter(e => e.year === year && e.month === month && e.day === day)

  return (
    <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid #E8E8E9', background: '#fff' }}>
      {/* Calendar header */}
      <div className="flex flex-col gap-3 px-3 md:px-5 py-3 md:py-4" style={{ borderBottom: '1px solid #E8E8E9', background: '#FCFBFA' }}>

        {/* Row 1: nav + (legend+switcher on lg only) */}
        <div className="flex items-center justify-between gap-2">
          {/* Month nav */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={prevMonthFn}
              className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer shrink-0"
              style={{ border: '1px solid #E8E8E9' }}
            >
              <ChevronLeft />
            </button>
            <div className="relative">
              <button
                onClick={() => setMonthPickerOpen(o => !o)}
                className="flex items-center gap-1 px-2 md:px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium hover:bg-gray-50 transition-colors cursor-pointer whitespace-nowrap"
                style={{ border: '1px solid #E8E8E9', color: '#171A26', background: '#fff' }}
              >
                {MONTHS[month].slice(0, 3)} {year}
                <ChevronDownIcon size={12} />
              </button>
              {monthPickerOpen && (
                <div className="absolute z-30 top-full mt-1 left-0 rounded-xl shadow-lg overflow-hidden" style={{ border: '1px solid #E8E8E9', background: '#fff', minWidth: 200 }}>
                  <div className="flex items-center justify-between px-3 py-2" style={{ borderBottom: '1px solid #E8E8E9' }}>
                    <button onClick={() => setYear(y => y - 1)} className="w-6 h-6 flex items-center justify-center rounded hover:bg-gray-100 cursor-pointer"><ChevronLeft /></button>
                    <span className="text-sm font-semibold" style={{ color: '#171A26' }}>{year}</span>
                    <button onClick={() => setYear(y => y + 1)} className="w-6 h-6 flex items-center justify-center rounded hover:bg-gray-100 cursor-pointer"><ChevronRight /></button>
                  </div>
                  <div className="grid grid-cols-3 p-2 gap-1">
                    {MONTHS.map((m, i) => (
                      <button
                        key={m}
                        onClick={() => { setMonth(i); setMonthPickerOpen(false) }}
                        className="px-2 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer"
                        style={{
                          background: month === i ? '#537F68' : 'transparent',
                          color: month === i ? '#fff' : '#171A26',
                        }}
                      >
                        {m.slice(0, 3)}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <button
              onClick={nextMonthFn}
              className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer shrink-0"
              style={{ border: '1px solid #E8E8E9' }}
            >
              <ChevronRight />
            </button>
          </div>

          {/* Legend + view switcher — only on large screens */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <span className="px-3 py-1 rounded-full text-sm font-medium" style={{ color: '#FA7522', background: '#FFF5EE', border: '1px solid #FA7522' }}>Harvest</span>
            <span className="px-3 py-1 rounded-full text-sm font-medium" style={{ color: '#0167FF', background: '#EEF4FF', border: '1px solid #0167FF' }}>Drop-off</span>
            <span className="px-3 py-1 rounded-full text-sm font-medium" style={{ color: '#11B14B', background: '#EDFBF3', border: '1px solid #11B14B' }}>Cut date</span>
            <div className="flex items-center rounded-xl p-1 gap-1" style={{ border: '1px solid #E8E8E9', background: '#fff' }}>
              {(['Days', 'Week', 'Month'] as ViewMode[]).map(v => (
                <button
                  key={v}
                  onClick={() => setViewMode(v)}
                  className="px-4 py-1.5 text-sm font-medium transition-colors cursor-pointer rounded-lg"
                  style={{ background: viewMode === v ? '#537F68' : 'transparent', color: viewMode === v ? '#fff' : '#69686D' }}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* View switcher compact — md to lg */}
          <div className="hidden md:flex lg:hidden items-center rounded-xl p-1 gap-1 shrink-0" style={{ border: '1px solid #E8E8E9', background: '#fff' }}>
            {(['Days', 'Week', 'Month'] as ViewMode[]).map(v => (
              <button
                key={v}
                onClick={() => setViewMode(v)}
                className="px-2.5 py-1.5 text-xs font-medium transition-colors cursor-pointer rounded-lg"
                style={{ background: viewMode === v ? '#537F68' : 'transparent', color: viewMode === v ? '#fff' : '#69686D' }}
              >
                {v}
              </button>
            ))}
          </div>
        </div>

        {/* Row 2: full-width switcher on mobile/tablet (<md) */}
        <div className="flex md:hidden w-full rounded-xl p-1 gap-1" style={{ border: '1px solid #E8E8E9', background: '#fff' }}>
          {(['Days', 'Week', 'Month'] as ViewMode[]).map(v => (
            <button
              key={v}
              onClick={() => setViewMode(v)}
              className="flex-1 py-2 text-sm font-medium transition-colors cursor-pointer rounded-lg"
              style={{ background: viewMode === v ? '#537F68' : 'transparent', color: viewMode === v ? '#fff' : '#69686D' }}
            >
              {v}
            </button>
          ))}
        </div>

        {/* Row 3: legend tags on mobile/tablet (<lg) */}
        <div className="flex lg:hidden items-center gap-2 flex-wrap">
          <span className="px-3 py-1 rounded-full text-xs font-medium" style={{ color: '#FA7522', background: '#FFF5EE', border: '1px solid #FA7522' }}>Harvest</span>
          <span className="px-3 py-1 rounded-full text-xs font-medium" style={{ color: '#0167FF', background: '#EEF4FF', border: '1px solid #0167FF' }}>Drop-off</span>
          <span className="px-3 py-1 rounded-full text-xs font-medium" style={{ color: '#11B14B', background: '#EDFBF3', border: '1px solid #11B14B' }}>Cut date</span>
        </div>

      </div>

      {/* Day headers */}
      <div className="grid grid-cols-7" style={{ borderBottom: '1px solid #E8E8E9' }}>
        {DAYS.map(d => (
          <div key={d} className="py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold tracking-wide" style={{ color: '#69686D' }}>
            {d}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7">
        {cells.map((cell, idx) => {
          const isSelected = cell.currentMonth && cell.day === selected.day && month === selected.month && year === selected.year
          const isLastRow = idx >= 35
          const isLastCol = (idx + 1) % 7 === 0
          const dayEvents = cell.currentMonth ? getEventsForDay(cell.day) : []
          return (
            <div
              key={idx}
              onClick={() => {
                if (!cell.currentMonth) return
                setSelected({ year, month, day: cell.day })
                setTooltip(null)
              }}
              className="relative flex flex-col items-center p-1 md:p-2 min-h-[70px] md:min-h-[110px] lg:min-h-[120px]"
              style={{
                borderBottom: isLastRow ? 'none' : '1px solid #E8E8E9',
                borderRight: isLastCol ? 'none' : '1px solid #E8E8E9',
                cursor: cell.currentMonth ? 'pointer' : 'default',
                ...(cell.currentMonth ? {} : stripeStyle),
              }}
            >
              {cell.currentMonth ? (
                <>
                  <span
                    className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-full text-xs font-medium shrink-0"
                    style={{
                      background: isSelected ? '#0167FF' : 'transparent',
                      color: isSelected ? '#fff' : '#69686D',
                      border: isSelected ? 'none' : '1.5px solid #E8E8E9',
                    }}
                  >
                    {String(cell.day).padStart(2, '0')}
                  </span>

                  {/* Pills — mobile: ••• compact, desktop: full label */}
                  {dayEvents.length > 0 && (
                    <div className="flex flex-col gap-0.5 w-full mt-1 items-center">
                      {dayEvents.map((ev, ei) => {
                        const active = tooltip?.cellIdx === idx && tooltip?.evIdx === ei
                        return (
                          <div key={ei} className="relative w-[90%]">
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                setTooltip(active ? null : { cellIdx: idx, evIdx: ei })
                              }}
                              className="w-full rounded-md flex items-center cursor-pointer"
                              style={{ background: EVENT_STYLES[ev.type].bg, padding: '3px 6px', border: 'none' }}
                            >
                              <span className="md:hidden text-white font-bold" style={{ fontSize: 10, letterSpacing: 2, lineHeight: '16px' }}>•••</span>
                              <span className="hidden md:block text-white text-xs font-medium text-left truncate" style={{ lineHeight: '18px' }}>{EVENT_STYLES[ev.type].label}</span>
                            </button>

                            {/* Rich popover */}
                            {active && (
                              <EventPopover ev={ev} onClose={() => setTooltip(null)} />
                            )}
                          </div>
                        )
                      })}
                    </div>
                  )}
                </>
              ) : (
                <span className="w-7 h-7 flex items-center justify-center rounded-full text-xs sm:text-sm" style={{ color: '#C0C0C0' }}>
                  {String(cell.day).padStart(2, '0')}
                </span>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
