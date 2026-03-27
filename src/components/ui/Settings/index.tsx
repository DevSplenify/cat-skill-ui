import { useState } from 'react'
import ProfileSection from './ProfileSection'
import SecuritySection from './SecuritySection'
import LanguageSection from './LanguageSection'
import MobilePageHeader from '../shared/MobilePageHeader'
import DeleteAccountModal from './DeleteAccountModal'

const BackIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M12.5 15L7.5 10L12.5 5" stroke="#171A26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function Settings() {
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  return (
    <>
      <MobilePageHeader title="Settings" subtitle="Manage your account settings here" />
      {/* Header — desktop only */}
      <div className="hidden md:flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <button
            className="flex items-center justify-center w-9 h-9 rounded-xl"
            style={{ border: '1.5px solid #E8E8E9', background: '#fff' }}
          >
            <BackIcon />
          </button>
          <h2 className="text-xl font-medium" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>Profile</h2>
        </div>
        <button
          className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white"
          style={{ background: '#537F68', fontFamily: 'Aeonik' }}
        >
          Save Changes
        </button>
      </div>

      {/* Card */}
      <div className="rounded-2xl p-6" style={{ background: '#fff', border: '1px solid #E8E8E9' }}>
        <p className="text-base font-bold mb-2" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>Availability Details</p>

        <ProfileSection />
        <SecuritySection />
        <LanguageSection />

        {/* Danger Zone */}
        <div className="flex flex-col md:flex-row gap-8 py-6">
          <div className="md:w-48 shrink-0">
            <p className="text-base font-bold" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>Danger Zone</p>
            <p className="text-sm mt-1" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>Irreversible and destructive actions.</p>
          </div>
          <div className="flex-1 flex items-start">
            <button
              onClick={() => setShowDeleteModal(true)}
              className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white"
              style={{ background: '#E53E3E', fontFamily: 'Aeonik' }}
            >
              Delete Account
            </button>
          </div>
        </div>
      </div>

      {showDeleteModal && <DeleteAccountModal onClose={() => setShowDeleteModal(false)} />}
    </>
  )
}
