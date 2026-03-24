import { useEffect } from 'react'
import type { CalendarEvent } from './MyCalendar'

const EVENT_STYLES = {
  dropoff: { bg: '#0167FF' },
  harvest: { bg: '#FA7522' },
  cut:     { bg: '#11B14B' },
}

interface EventPopoverProps {
  ev: CalendarEvent
  onClose: () => void
}

export default function EventPopover({ ev, onClose }: EventPopoverProps) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <>
      {/* Backdrop — closes popover on outside click */}
      <div
        className="fixed inset-0 z-40"
        onClick={onClose}
      />

      {/* Popover — fixed centered on mobile/tablet, absolute on desktop */}
      <div
        className="
          fixed z-50 inset-x-3 bottom-4 rounded-2xl shadow-2xl
          sm:absolute sm:inset-x-auto sm:bottom-[calc(100%+8px)] sm:left-1/2 sm:-translate-x-1/2 sm:w-[420px]
        "
        style={{
          background: '#fff',
          border: '1px solid #E8E8E9',
          padding: 20,
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Top actions row */}
        <div className="flex items-center justify-between mb-5">
          <button
            className="px-4 py-1.5 rounded-full text-sm font-medium cursor-pointer"
            style={{ background: '#FFF5EE', color: '#FA7522', border: '1.5px solid #FA7522', fontFamily: 'Aeonik' }}
          >
            Add Cutsheet
          </button>
          <div className="flex items-center gap-3">
            {/* Pencil */}
            <button className="cursor-pointer flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#ep-pencil)">
                  <path d="M13.77 6.05899L14.4652 5.36383C15.617 4.21206 17.4844 4.21206 18.6362 5.36383C19.7879 6.51561 19.7879 8.38301 18.6362 9.53479L17.941 10.23M13.77 6.05899C13.77 6.05899 13.8569 7.53621 15.1604 8.83963C16.4638 10.1431 17.941 10.23 17.941 10.23M13.77 6.05899L7.37912 12.4499C6.94625 12.8828 6.72981 13.0992 6.54367 13.3379C6.3241 13.6194 6.13585 13.924 5.98226 14.2463C5.85205 14.5195 5.75526 14.8099 5.56167 15.3906L4.74136 17.8516M17.941 10.23L11.5501 16.6209C11.1172 17.0538 10.9008 17.2702 10.6621 17.4563C10.3806 17.6759 10.076 17.8641 9.75373 18.0177C9.48052 18.1479 9.19014 18.2447 8.60938 18.4383L6.14844 19.2586M6.14844 19.2586L5.54688 19.4592C5.26108 19.5544 4.94599 19.48 4.73297 19.267C4.51995 19.054 4.44557 18.7389 4.54084 18.4531L4.74136 17.8516M6.14844 19.2586L4.74136 17.8516" stroke="#69686D" strokeWidth="1.5"/>
                </g>
                <defs>
                  <clipPath id="ep-pencil">
                    <rect width="18" height="18" fill="white" transform="translate(3 3)"/>
                  </clipPath>
                </defs>
              </svg>
            </button>
            {/* Trash */}
            <button className="cursor-pointer flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.87799 6C10.1869 5.12611 11.0203 4.5 12 4.5C12.9796 4.5 13.8131 5.12611 14.1219 6" stroke="#69686D" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M18.375 7.5H5.62494" stroke="#69686D" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M17.125 9.375L16.78 14.5493C16.6473 16.5405 16.5809 17.5361 15.9322 18.1431C15.2834 18.75 14.2856 18.75 12.29 18.75H11.71C9.71439 18.75 8.71659 18.75 8.06783 18.1431C7.41907 17.5361 7.3527 16.5405 7.21996 14.5493L6.875 9.375" stroke="#69686D" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M10.125 11.25L10.5 15" stroke="#69686D" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M13.875 11.25L13.5 15" stroke="#69686D" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
            {/* 3 dots */}
            <button className="cursor-pointer flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5.25C8.17157 5.25 7.5 4.57843 7.5 3.75C7.5 2.92157 8.17157 2.25 9 2.25C9.82843 2.25 10.5 2.92157 10.5 3.75C10.5 4.57843 9.82843 5.25 9 5.25Z" fill="#69686D"/>
                <path d="M9 10.5C8.17157 10.5 7.5 9.82843 7.5 9C7.5 8.17157 8.17157 7.5 9 7.5C9.82843 7.5 10.5 8.17157 10.5 9C10.5 9.82843 9.82843 10.5 9 10.5Z" fill="#69686D"/>
                <path d="M9 15.75C8.17157 15.75 7.5 15.0784 7.5 14.25C7.5 13.4216 8.17157 12.75 9 12.75C9.82843 12.75 10.5 13.4216 10.5 14.25C10.5 15.0784 9.82843 15.75 9 15.75Z" fill="#69686D"/>
              </svg>
            </button>
            {/* Close */}
            <button onClick={onClose} className="cursor-pointer flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.46448 6.46447L13.5355 13.5355" stroke="#69686D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.46445 13.5355L13.5355 6.46447" stroke="#69686D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Name + color square */}
        <div className="flex items-center gap-3 mb-1">
          <div className="w-7 h-7 rounded-lg shrink-0" style={{ background: EVENT_STYLES[ev.type].bg }} />
          <span className="text-xl font-bold" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>{ev.name || 'Willie Nelson'}</span>
        </div>

        {/* Sub info */}
        <div className="flex items-center gap-2 mb-5" style={{ paddingLeft: 40 }}>
          <span className="text-sm" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>{ev.item || 'Dop-off - 1xbeef'}</span>
          <span style={{ color: '#D1D0D2' }}>|</span>
          <span className="text-sm" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>{ev.status || 'Scheduled'}</span>
        </div>

        {/* Order details */}
        <div className="flex flex-col gap-2 mb-5">
          <div className="flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="8.33333" stroke="#69686D" strokeWidth="1.5"/>
              <path d="M10 14.1667V9.16667" stroke="#69686D" strokeWidth="1.5" strokeLinecap="round"/>
              <circle cx="0.833333" cy="0.833333" r="0.5" transform="matrix(1 0 0 -1 9.16667 7.5)" fill="#69686D" stroke="#69686D" strokeWidth="0.666667"/>
            </svg>
            <span className="text-sm font-bold" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>Order details</span>
          </div>
          <p className="text-sm" style={{ color: '#69686D', lineHeight: '22px', fontFamily: 'Aeonik' }}>
            Monthly Report Submission involves summarizing key activities, project progress, and performance highlights from the past month, along with plans for the next. Ensure all data is clear and organized for review.
          </p>
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-1 mb-5">
          <span className="text-sm font-bold" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>Phone number</span>
          <span className="text-sm" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>{ev.phone || '(0000)-00000-000'}</span>
        </div>

        {/* Head Count + Cut Date */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-bold" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>Head Count</span>
            <span className="text-sm" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>{ev.headCount ?? '02'}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-sm font-bold" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>Cut Date</span>
            <span className="text-sm" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>{ev.cutDate || 'Dec 22,2025'}</span>
          </div>
        </div>
      </div>
    </>
  )
}
