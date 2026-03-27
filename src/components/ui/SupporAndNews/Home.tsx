import { useState } from 'react'
import TicketsTable, { type Ticket } from './TicketsTable'
import CreateTicketModal from './CreateTicketModal'
import TicketDetail from './TicketDetail'
import MobilePageHeader from '../shared/MobilePageHeader'

const CalendarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_357_88997)">
      <path d="M1.66406 10.0007C1.66406 6.85795 1.66406 5.28661 2.64037 4.3103C3.61668 3.33398 5.18803 3.33398 8.33073 3.33398H11.6641C14.8068 3.33398 16.3781 3.33398 17.3544 4.3103C18.3307 5.28661 18.3307 6.85795 18.3307 10.0007V11.6673C18.3307 14.81 18.3307 16.3814 17.3544 17.3577C16.3781 18.334 14.8068 18.334 11.6641 18.334H8.33073C5.18803 18.334 3.61668 18.334 2.64037 17.3577C1.66406 16.3814 1.66406 14.81 1.66406 11.6673V10.0007Z" stroke="#171A26" stroke-width="1.5" />
      <path d="M5.83594 3.33398V2.08398" stroke="#171A26" stroke-width="1.5" stroke-linecap="round" />
      <path d="M14.1641 3.33398V2.08398" stroke="#171A26" stroke-width="1.5" stroke-linecap="round" />
      <path d="M2.08594 7.5H17.9193" stroke="#171A26" stroke-width="1.5" stroke-linecap="round" />
      <path d="M15.0026 14.1667C15.0026 14.6269 14.6295 15 14.1693 15C13.709 15 13.3359 14.6269 13.3359 14.1667C13.3359 13.7064 13.709 13.3333 14.1693 13.3333C14.6295 13.3333 15.0026 13.7064 15.0026 14.1667Z" fill="#171A26" />
      <path d="M15.0026 10.8333C15.0026 11.2936 14.6295 11.6667 14.1693 11.6667C13.709 11.6667 13.3359 11.2936 13.3359 10.8333C13.3359 10.3731 13.709 10 14.1693 10C14.6295 10 15.0026 10.3731 15.0026 10.8333Z" fill="#171A26" />
      <path d="M10.8307 14.1667C10.8307 14.6269 10.4576 15 9.9974 15C9.53716 15 9.16406 14.6269 9.16406 14.1667C9.16406 13.7064 9.53716 13.3333 9.9974 13.3333C10.4576 13.3333 10.8307 13.7064 10.8307 14.1667Z" fill="#171A26" />
      <path d="M10.8307 10.8333C10.8307 11.2936 10.4576 11.6667 9.9974 11.6667C9.53716 11.6667 9.16406 11.2936 9.16406 10.8333C9.16406 10.3731 9.53716 10 9.9974 10C10.4576 10 10.8307 10.3731 10.8307 10.8333Z" fill="#171A26" />
      <path d="M6.66667 14.1667C6.66667 14.6269 6.29357 15 5.83333 15C5.3731 15 5 14.6269 5 14.1667C5 13.7064 5.3731 13.3333 5.83333 13.3333C6.29357 13.3333 6.66667 13.7064 6.66667 14.1667Z" fill="#171A26" />
      <path d="M6.66667 10.8333C6.66667 11.2936 6.29357 11.6667 5.83333 11.6667C5.3731 11.6667 5 11.2936 5 10.8333C5 10.3731 5.3731 10 5.83333 10C6.29357 10 6.66667 10.3731 6.66667 10.8333Z" fill="#171A26" />
    </g>
    <defs>
      <clipPath id="clip0_357_88997">
        <rect width="20" height="20" rx="5" fill="white" />
      </clipPath>
    </defs>
  </svg>

)

export default function SupportHome() {
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null)

  if (selectedTicket) {
    return <TicketDetail ticket={selectedTicket} onBack={() => setSelectedTicket(null)} />
  }

  return (
    <div>
      <MobilePageHeader title="Support & News" subtitle="View and manage your support tickets here" />
      {/* Page header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl font-medium hidden md:block" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>Manage Tickets</h2>
          <p className="text-sm mt-1" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>You can view and manage all your ongoing disputes and tickets here.</p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium"
            style={{ border: '1px solid #E8E8E9', color: '#69686D', background: '#fff', fontFamily: 'Aeonik' }}
          >
            <CalendarIcon />
            Last Month
          </button>
          <button
            onClick={() => setShowCreateModal(true)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-white"
            style={{ background: '#537F68', fontFamily: 'Aeonik' }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1V13M1 7H13" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            Create Ticket
          </button>
        </div>
      </div>

      <TicketsTable onViewDetail={t => setSelectedTicket(t)} />
      {showCreateModal && <CreateTicketModal onClose={() => setShowCreateModal(false)} />}
    </div>
  )
}
