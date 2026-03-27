import { useState } from 'react'

const EmailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
    <path d="M2.5 5.5L10 11L17.5 5.5" stroke="#69686D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="1.5" y="4" width="17" height="13" rx="2" stroke="#69686D" strokeWidth="1.5"/>
  </svg>
)

const UserIcon = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="7" r="3.5" stroke="#69686D" strokeWidth="1.5"/>
    <path d="M2.5 17.5C2.5 14.1863 5.18629 11.5 8.5 11.5H11.5C14.8137 11.5 17.5 14.1863 17.5 17.5" stroke="#69686D" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

export default function ProfileSection() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [emailFocused, setEmailFocused] = useState(false)
  const [nameFocused, setNameFocused] = useState(false)

  return (
    <div className="flex flex-col md:flex-row gap-8 py-6" style={{ borderBottom: '1px solid #E8E8E9' }}>
      {/* Left label */}
      <div className="md:w-48 shrink-0">
        <p className="text-base font-bold" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>Profile</p>
        <p className="text-sm mt-1" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>Your personal information and account security settings.</p>
      </div>

      {/* Right fields */}
      <div className="flex-1 flex flex-col gap-5">
        {/* Avatar */}
        <div>
          <p className="text-sm font-medium mb-2" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>Avatar</p>
          <div className="flex items-center gap-4">
            <img src="https://i.pravatar.cc/56?img=8" alt="avatar" className="w-14 h-14 rounded-full object-cover" />
            <button
              className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white"
              style={{ background: '#171A26', fontFamily: 'Aeonik' }}
            >
              Change
            </button>
          </div>
        </div>

        {/* Email */}
        <div>
          <p className="text-sm font-medium mb-2" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>Email</p>
          <div
            className="flex items-center gap-3 px-4 py-3 rounded-2xl"
            style={{ border: `1.5px solid ${emailFocused ? '#537F68' : '#E8E8E9'}`, background: '#fff', transition: 'border-color 0.15s' }}
          >
            <EmailIcon />
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
              placeholder="Input your email"
              className="flex-1 text-sm outline-none bg-transparent"
              style={{ color: '#171A26', fontFamily: 'Aeonik' }}
            />
          </div>
        </div>

        {/* Full Name */}
        <div>
          <p className="text-sm font-medium mb-2" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>Full Name</p>
          <div
            className="flex items-center gap-3 px-4 py-3 rounded-2xl"
            style={{ border: `1.5px solid ${nameFocused ? '#537F68' : '#E8E8E9'}`, background: '#fff', transition: 'border-color 0.15s' }}
          >
            <UserIcon />
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              onFocus={() => setNameFocused(true)}
              onBlur={() => setNameFocused(false)}
              placeholder="e.g, Noam Laish"
              className="flex-1 text-sm outline-none bg-transparent"
              style={{ color: '#171A26', fontFamily: 'Aeonik' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
