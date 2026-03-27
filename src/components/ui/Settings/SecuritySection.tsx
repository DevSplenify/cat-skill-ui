import { useState } from 'react'

const LockIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#lock_clip)">
      <path d="M18.5547 10H19.5547C19.8199 10 20.0743 10.1054 20.2618 10.2929C20.4493 10.4804 20.5547 10.7348 20.5547 11V21C20.5547 21.2652 20.4493 21.5196 20.2618 21.7071C20.0743 21.8946 19.8199 22 19.5547 22H3.55469C3.28947 22 3.03512 21.8946 2.84758 21.7071C2.66004 21.5196 2.55469 21.2652 2.55469 21V11C2.55469 10.7348 2.66004 10.4804 2.84758 10.2929C3.03512 10.1054 3.28947 10 3.55469 10H4.55469V9C4.55469 8.08075 4.73575 7.1705 5.08753 6.32122C5.43931 5.47194 5.95493 4.70026 6.60494 4.05025C7.25495 3.40024 8.02662 2.88463 8.8759 2.53284C9.72518 2.18106 10.6354 2 11.5547 2C12.4739 2 13.3842 2.18106 14.2335 2.53284C15.0828 2.88463 15.8544 3.40024 16.5044 4.05025C17.1544 4.70026 17.6701 5.47194 18.0218 6.32122C18.3736 7.1705 18.5547 8.08075 18.5547 9V10ZM4.55469 12V20H18.5547V12H4.55469ZM10.5547 14H12.5547V18H10.5547V14ZM16.5547 10V9C16.5547 7.67392 16.0279 6.40215 15.0902 5.46447C14.1525 4.52678 12.8808 4 11.5547 4C10.2286 4 8.95684 4.52678 8.01915 5.46447C7.08147 6.40215 6.55469 7.67392 6.55469 9V10H16.5547Z" fill="#87868A"/>
    </g>
    <defs>
      <clipPath id="lock_clip"><rect width="24" height="24" fill="white"/></clipPath>
    </defs>
  </svg>
)

const EyeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#eye_clip)">
      <path d="M11.5534 3C16.9454 3 21.4314 6.88 22.3724 12C21.4324 17.12 16.9454 21 11.5534 21C6.16138 21 1.67537 17.12 0.734375 12C1.67437 6.88 6.16138 3 11.5534 3ZM11.5534 19C13.5928 18.9996 15.5718 18.3068 17.1662 17.0352C18.7607 15.7635 19.8763 13.9883 20.3304 12C19.8746 10.0133 18.7583 8.24 17.164 6.97003C15.5697 5.70005 13.5917 5.00853 11.5534 5.00853C9.51507 5.00853 7.53706 5.70005 5.94275 6.97003C4.34844 8.24 3.23214 10.0133 2.77638 12C3.23047 13.9883 4.34605 15.7635 5.94052 17.0352C7.53499 18.3068 9.51391 18.9996 11.5534 19ZM11.5534 16.5C10.3599 16.5 9.21531 16.0259 8.3714 15.182C7.52748 14.3381 7.05338 13.1935 7.05338 12C7.05338 10.8065 7.52748 9.66193 8.3714 8.81802C9.21531 7.97411 10.3599 7.5 11.5534 7.5C12.7468 7.5 13.8914 7.97411 14.7354 8.81802C15.5793 9.66193 16.0534 10.8065 16.0534 12C16.0534 13.1935 15.5793 14.3381 14.7354 15.182C13.8914 16.0259 12.7468 16.5 11.5534 16.5ZM11.5534 14.5C12.2164 14.5 12.8523 14.2366 13.3211 13.7678C13.79 13.2989 14.0534 12.663 14.0534 12C14.0534 11.337 13.79 10.7011 13.3211 10.2322C12.8523 9.76339 12.2164 9.5 11.5534 9.5C10.8903 9.5 10.2544 9.76339 9.78561 10.2322C9.31677 10.7011 9.05338 11.337 9.05338 12C9.05338 12.663 9.31677 13.2989 9.78561 13.7678C10.2544 14.2366 10.8903 14.5 11.5534 14.5Z" fill="#87868A"/>
    </g>
    <defs>
      <clipPath id="eye_clip"><rect width="24" height="24" fill="white"/></clipPath>
    </defs>
  </svg>
)

const EyeOffIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#eyeoff_clip)">
      <path d="M11.5534 3C16.9454 3 21.4314 6.88 22.3724 12C21.4324 17.12 16.9454 21 11.5534 21C6.16138 21 1.67537 17.12 0.734375 12C1.67437 6.88 6.16138 3 11.5534 3ZM11.5534 19C13.5928 18.9996 15.5718 18.3068 17.1662 17.0352C18.7607 15.7635 19.8763 13.9883 20.3304 12C19.8746 10.0133 18.7583 8.24 17.164 6.97003C15.5697 5.70005 13.5917 5.00853 11.5534 5.00853C9.51507 5.00853 7.53706 5.70005 5.94275 6.97003C4.34844 8.24 3.23214 10.0133 2.77638 12C3.23047 13.9883 4.34605 15.7635 5.94052 17.0352C7.53499 18.3068 9.51391 18.9996 11.5534 19ZM11.5534 16.5C10.3599 16.5 9.21531 16.0259 8.3714 15.182C7.52748 14.3381 7.05338 13.1935 7.05338 12C7.05338 10.8065 7.52748 9.66193 8.3714 8.81802C9.21531 7.97411 10.3599 7.5 11.5534 7.5C12.7468 7.5 13.8914 7.97411 14.7354 8.81802C15.5793 9.66193 16.0534 10.8065 16.0534 12C16.0534 13.1935 15.5793 14.3381 14.7354 15.182C13.8914 16.0259 12.7468 16.5 11.5534 16.5ZM11.5534 14.5C12.2164 14.5 12.8523 14.2366 13.3211 13.7678C13.79 13.2989 14.0534 12.663 14.0534 12C14.0534 11.337 13.79 10.7011 13.3211 10.2322C12.8523 9.76339 12.2164 9.5 11.5534 9.5C10.8903 9.5 10.2544 9.76339 9.78561 10.2322C9.31677 10.7011 9.05338 11.337 9.05338 12C9.05338 12.663 9.31677 13.2989 9.78561 13.7678C10.2544 14.2366 10.8903 14.5 11.5534 14.5Z" fill="#87868A" opacity="0.4"/>
      <path d="M3 3L21 21" stroke="#87868A" strokeWidth="2" strokeLinecap="round"/>
    </g>
    <defs>
      <clipPath id="eyeoff_clip"><rect width="24" height="24" fill="white"/></clipPath>
    </defs>
  </svg>
)

function PasswordInput({ placeholder }: { placeholder: string }) {
  const [value, setValue] = useState('')
  const [show, setShow] = useState(false)
  const [focused, setFocused] = useState(false)

  return (
    <div
      className="flex items-center gap-3 px-4 py-3 rounded-2xl"
      style={{ border: `1.5px solid ${focused ? '#537F68' : '#E8E8E9'}`, background: '#F8F8FA', transition: 'border-color 0.15s' }}
    >
      <LockIcon />
      <input
        type={show ? 'text' : 'password'}
        value={value}
        onChange={e => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
        className="flex-1 text-sm outline-none bg-transparent"
        style={{ color: '#171A26', fontFamily: 'Aeonik' }}
      />
      <button onClick={() => setShow(s => !s)} className="cursor-pointer shrink-0">
        {show ? <EyeOffIcon /> : <EyeIcon />}
      </button>
    </div>
  )
}

export default function SecuritySection() {
  return (
    <div className="flex flex-col md:flex-row gap-8 py-6" style={{ borderBottom: '1px solid #E8E8E9' }}>
      <div className="md:w-48 shrink-0">
        <p className="text-base font-bold" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>Security Options</p>
        <p className="text-sm mt-1" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>Update your password and security logins here</p>
      </div>

      <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <p className="text-sm font-medium mb-2" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>Old Password</p>
          <PasswordInput placeholder="••••••" />
        </div>
        <div>
          <p className="text-sm font-medium mb-2" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>New Password</p>
          <PasswordInput placeholder="••••••" />
        </div>
        <div>
          <p className="text-sm font-medium mb-2" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>Confirm New Password</p>
          <PasswordInput placeholder="••••••" />
        </div>
      </div>
    </div>
  )
}
