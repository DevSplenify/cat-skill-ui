import { useState } from 'react'
import SuccessModal from '../SignIn/SuccessModal'

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M6.46448 6.46447L13.5355 13.5355" stroke="#69686D" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M6.46445 13.5355L13.5355 6.46447" stroke="#69686D" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const ChevronDown = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M14.25 6.75L9 11.25L3.75 6.75" stroke="#171A26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const REASONS = ['Payment Issue', 'Cutsheet Issue', 'Account Issue', 'Refund Request', 'Other']

interface Props { onClose: () => void }

export default function CreateTicketModal({ onClose }: Props) {
  const [reason, setReason] = useState('Payment Issue')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [showDropdown, setShowDropdown] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-50 bg-black/40" onClick={onClose} />

      {/* Modal */}
      <div
        className="fixed z-50 inset-x-4 top-1/2 -translate-y-1/2 sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 sm:w-full sm:max-w-xl bg-white rounded-2xl flex flex-col"
        style={{ maxHeight: '90vh' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5" style={{ borderBottom: '1px solid #E8E8E9' }}>
          <h2 className="text-base font-semibold" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>Create Ticket</h2>
          <button onClick={onClose} className="cursor-pointer flex items-center justify-center"><CloseIcon /></button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-5">
          {/* Select Reason */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>Select Reason</label>
            <div className="relative">
              <button
                onClick={() => setShowDropdown(s => !s)}
                className="w-full flex items-center justify-between px-4 py-3.5 rounded-2xl text-sm text-left"
                style={{ background: '#F8F8FA', border: '1px solid #F0F0F0', color: '#171A26', fontFamily: 'Aeonik' }}
              >
                <span>{reason}</span>
                <ChevronDown />
              </button>
              {showDropdown && (
                <div className="absolute top-full left-0 right-0 mt-1 rounded-2xl z-10 overflow-hidden" style={{ background: '#fff', border: '1px solid #E8E8E9', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
                  {REASONS.map(r => (
                    <button
                      key={r}
                      onClick={() => { setReason(r); setShowDropdown(false) }}
                      className="w-full px-4 py-3 text-sm text-left transition-colors hover:bg-[#F8F8FA]"
                      style={{ color: r === reason ? '#537F68' : '#171A26', fontFamily: 'Aeonik' }}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Ticket Title */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>Ticket Title</label>
            <input
              type="text"
              placeholder="Title here"
              value={title}
              onChange={e => setTitle(e.target.value)}
              className="w-full px-4 py-3.5 rounded-2xl text-sm outline-none"
              style={{ background: '#F8F8FA', border: '1px solid #F0F0F0', color: '#171A26', fontFamily: 'Aeonik' }}
            />
          </div>

          {/* Ticket Description */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>Ticket Description</label>
            <textarea
              placeholder="Title here"
              value={description}
              onChange={e => setDescription(e.target.value)}
              rows={6}
              className="w-full px-4 py-3.5 rounded-2xl text-sm outline-none resize-none"
              style={{ background: '#F8F8FA', border: '1px solid #F0F0F0', color: '#171A26', fontFamily: 'Aeonik' }}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-5" style={{ borderTop: '1px solid #E8E8E9' }}>
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl text-sm font-medium cursor-pointer"
            style={{ border: '1px solid #F0F0F0', color: '#69686D', background: '#FCFBFA', fontFamily: 'Aeonik' }}
          >
            Cancel
          </button>
          <button
            onClick={() => setShowSuccess(true)}
            className="px-6 py-2.5 rounded-xl text-sm font-medium text-white cursor-pointer"
            style={{ background: '#537F68', fontFamily: 'Aeonik' }}
          >
            Create Ticket
          </button>
        </div>
      </div>
      {showSuccess && (
        <SuccessModal
          title="Ticket Generated Successfully"
          message="Your selected jobs are successfully drop-off you can view in actives job table there"
          onCancel={() => { setShowSuccess(false); onClose() }}
          onOkay={() => { setShowSuccess(false); onClose() }}
        />
      )}
    </>
  )
}
