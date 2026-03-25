import { useState } from 'react'
import TableScroll from '../common/TableScroll'
import OrderDetail from './OrderDetail'

const BackIcon = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0.5H32C38.3513 0.5 43.5 5.64873 43.5 12V32C43.5 38.3513 38.3513 43.5 32 43.5H12C5.64873 43.5 0.5 38.3513 0.5 32V12C0.5 5.64873 5.64873 0.5 12 0.5Z" stroke="#D1D0D2"/>
    <path d="M14.3359 17.833H23.5026C25.0603 17.833 25.8391 17.833 26.4193 18.1679C26.7993 18.3874 27.1149 18.703 27.3343 19.083C27.6693 19.6631 27.6693 20.442 27.6693 21.9997C27.6693 23.5574 27.6693 24.3362 27.3343 24.9163C27.1149 25.2964 26.7993 25.612 26.4193 25.8314C25.8391 26.1663 25.0603 26.1663 23.5026 26.1663H17.6693M14.3359 17.833L16.8359 15.333M14.3359 17.833L16.8359 20.333" stroke="#69686D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const EyeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.72904 12.7464C2.02076 11.8262 1.66663 11.3661 1.66663 9.99998C1.66663 8.63383 2.02076 8.17375 2.72904 7.25359C4.14326 5.41628 6.51505 3.33331 9.99996 3.33331C13.4849 3.33331 15.8567 5.41628 17.2709 7.25359C17.9792 8.17375 18.3333 8.63383 18.3333 9.99998C18.3333 11.3661 17.9792 11.8262 17.2709 12.7464C15.8567 14.5837 13.4849 16.6666 9.99996 16.6666C6.51505 16.6666 4.14326 14.5837 2.72904 12.7464Z" stroke="#69686D" strokeWidth="1.5"/>
    <path d="M12.5 10C12.5 11.3807 11.3807 12.5 10 12.5C8.61929 12.5 7.5 11.3807 7.5 10C7.5 8.61929 8.61929 7.5 10 7.5C11.3807 7.5 12.5 8.61929 12.5 10Z" stroke="#171A26" strokeWidth="1.5"/>
  </svg>
)

const CrossIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#cross-clip)">
      <path d="M1.66663 10C1.66663 6.07165 1.66663 4.10746 2.88701 2.88708C4.1074 1.66669 6.07159 1.66669 9.99996 1.66669C13.9283 1.66669 15.8925 1.66669 17.1129 2.88708C18.3333 4.10746 18.3333 6.07165 18.3333 10C18.3333 13.9284 18.3333 15.8926 17.1129 17.113C15.8925 18.3334 13.9283 18.3334 9.99996 18.3334C6.07159 18.3334 4.1074 18.3334 2.88701 17.113C1.66663 15.8926 1.66663 13.9284 1.66663 10Z" stroke="#69686D" strokeWidth="1.5"/>
      <path d="M12.0833 7.9167L7.91663 12.0834M7.91661 7.91669L12.0833 12.0833" stroke="#171A26" strokeWidth="1.5" strokeLinecap="round"/>
    </g>
    <defs>
      <clipPath id="cross-clip"><rect width="20" height="20" fill="white"/></clipPath>
    </defs>
  </svg>
)

const AddCutsheetIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M7 1V13M1 7H13" stroke="#FA7522" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

const PENDING_CUTSHEETS = Array.from({ length: 4 }, (_, i) => ({ id: i, order: '1 Beef', date: 'December 22, 2025' }))
const PENDING_APPROVALS = Array.from({ length: 4 }, (_, i) => ({ id: i, order: '1 Beef', date: 'December 22, 2025' }))
const COMPLETED_BOOKINGS = Array.from({ length: 4 }, (_, i) => ({ id: i, order: '1 Beef', date: 'December 22, 2025' }))

interface AllOrdersProps {
  onBack: () => void
}

export default function AllOrders({ onBack }: AllOrdersProps) {
  const [showOrder, setShowOrder] = useState(false)

  if (showOrder) return <OrderDetail onBack={() => setShowOrder(false)} />

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <button onClick={onBack} className="cursor-pointer shrink-0">
          <BackIcon />
        </button>
        <h2 className="font-medium" style={{ fontFamily: 'Aeonik', fontSize: 20, color: '#171A26' }}>All Orders</h2>
      </div>

      {/* Pending Cutsheets */}
      <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid #E8E8E9' }}>
        <div className="px-5 py-4" style={{ borderBottom: '1px solid #E8E8E9' }}>
          <span className="font-semibold" style={{ fontFamily: 'Aeonik', fontSize: 16, color: '#171A26' }}>
            Pending Cutsheets&nbsp;&nbsp;<span style={{ color: '#69686D', fontWeight: 400 }}>(3)</span>
          </span>
        </div>
        <TableScroll>
          <div style={{ minWidth: 480 }}>
            <div className="grid px-5 py-3" style={{ gridTemplateColumns: '1fr 1fr 1fr 80px', borderBottom: '1px solid #E8E8E9', background: '#FAFAFA' }}>
              <span className="text-sm" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>Order</span>
              <span className="text-sm" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>Drop Of Date</span>
              <span className="text-sm" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>Need Attention</span>
              <span className="text-sm text-right" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>Action</span>
            </div>
            {PENDING_CUTSHEETS.map(row => (
              <div key={row.id} className="grid items-center px-5 py-4" style={{ gridTemplateColumns: '1fr 1fr 1fr 80px', borderBottom: '1px solid #F5F5F5' }}>
                <button onClick={() => setShowOrder(true)} className="text-sm font-medium text-left cursor-pointer" style={{ color: '#0167FF', fontFamily: 'Aeonik' }}>1 Beef</button>
                <span className="text-sm" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>{row.date}</span>
                <div>
                  <button
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium cursor-pointer whitespace-nowrap"
                    style={{ background: '#FFF5EE', color: '#FA7522', border: '1.5px solid #FA7522', fontFamily: 'Aeonik' }}
                  >
                    <AddCutsheetIcon />
                    Add Cutsheet
                  </button>
                </div>
                <div className="flex justify-end">
                  <button className="cursor-pointer"><EyeIcon /></button>
                </div>
              </div>
            ))}
          </div>
        </TableScroll>
      </div>

      {/* Pending Approvals */}
      <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid #E8E8E9' }}>
        <div className="px-5 py-4" style={{ borderBottom: '1px solid #E8E8E9' }}>
          <span className="font-semibold" style={{ fontFamily: 'Aeonik', fontSize: 16, color: '#171A26' }}>Pending Approvals</span>
        </div>
        <TableScroll>
          <div style={{ minWidth: 480 }}>
            <div className="grid px-5 py-3" style={{ gridTemplateColumns: '1fr 1fr 1fr 100px', borderBottom: '1px solid #E8E8E9', background: '#FAFAFA' }}>
              <span className="text-sm" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>Order</span>
              <span className="text-sm" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>Drop Of Date</span>
              <span className="text-sm" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>Status</span>
              <span className="text-sm text-right" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>Action</span>
            </div>
            {PENDING_APPROVALS.map(row => (
              <div key={row.id} className="grid items-center px-5 py-4" style={{ gridTemplateColumns: '1fr 1fr 1fr 100px', borderBottom: '1px solid #F5F5F5' }}>
                <button onClick={() => setShowOrder(true)} className="text-sm font-medium text-left cursor-pointer" style={{ color: '#0167FF', fontFamily: 'Aeonik' }}>1 Beef</button>
                <span className="text-sm" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>{row.date}</span>
                <div>
                  <span className="px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap" style={{ color: '#9D4CFF', background: '#F5EEFF', border: '1.5px solid #CDA3FF', fontFamily: 'Aeonik' }}>
                    Pending
                  </span>
                </div>
                <div className="flex justify-end items-center gap-2">
                  <button className="cursor-pointer"><EyeIcon /></button>
                  <button className="cursor-pointer"><CrossIcon /></button>
                </div>
              </div>
            ))}
          </div>
        </TableScroll>
      </div>

      {/* Completed Bookings */}
      <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid #E8E8E9' }}>
        <div className="px-5 py-4" style={{ borderBottom: '1px solid #E8E8E9' }}>
          <span className="font-semibold" style={{ fontFamily: 'Aeonik', fontSize: 16, color: '#171A26' }}>Completed Bookings</span>
        </div>
        <TableScroll>
          <div style={{ minWidth: 480 }}>
            <div className="grid px-5 py-3" style={{ gridTemplateColumns: '1fr 1fr 1fr 80px', borderBottom: '1px solid #E8E8E9', background: '#FAFAFA' }}>
              <span className="text-sm" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>Order</span>
              <span className="text-sm" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>Drop Of Date</span>
              <span className="text-sm" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>Status</span>
              <span className="text-sm text-right" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>Action</span>
            </div>
            {COMPLETED_BOOKINGS.map(row => (
              <div key={row.id} className="grid items-center px-5 py-4" style={{ gridTemplateColumns: '1fr 1fr 1fr 80px', borderBottom: '1px solid #F5F5F5' }}>
                <button onClick={() => setShowOrder(true)} className="text-sm font-medium text-left cursor-pointer" style={{ color: '#0167FF', fontFamily: 'Aeonik' }}>1 Beef</button>
                <span className="text-sm" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>{row.date}</span>
                <div>
                  <span className="px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap" style={{ color: '#1A9C4E', background: '#EDFBF3', border: '1.5px solid #B4EDD0', fontFamily: 'Aeonik' }}>
                    Completed
                  </span>
                </div>
                <div className="flex justify-end">
                  <button className="cursor-pointer"><EyeIcon /></button>
                </div>
              </div>
            ))}
          </div>
        </TableScroll>
      </div>
    </div>
  )
}
