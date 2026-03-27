export default function DeleteAccountModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.4)' }}
    >
      <div className="relative bg-white rounded-3xl p-6 sm:p-8 w-full max-w-xl text-center">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 text-xl font-light"
          style={{ fontFamily: 'Aeonik' }}
        >
          ✕
        </button>

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="5" width="90" height="90" rx="45" fill="#EA4949"/>
            <rect x="5" y="5" width="90" height="90" rx="45" stroke="#FCE8E8" strokeWidth="10"/>
            <g clipPath="url(#trash_clip)">
              <path d="M60.6667 43.3333V60.6667C60.6667 61.3739 60.3857 62.0522 59.8856 62.5523C59.3855 63.0524 58.7072 63.3333 58 63.3333H42C41.2928 63.3333 40.6145 63.0524 40.1144 62.5523C39.6143 62.0522 39.3333 61.3739 39.3333 60.6667V43.3333H36.6667V40.6667H63.3333V43.3333H60.6667ZM42 43.3333V60.6667H58V43.3333H42ZM48.6667 46H51.3333V48.6667H48.6667V46ZM48.6667 50H51.3333V52.6667H48.6667V50ZM48.6667 54H51.3333V56.6667H48.6667V54ZM43.3333 36.6667H56.6667V39.3333H43.3333V36.6667Z" fill="white"/>
            </g>
            <defs>
              <clipPath id="trash_clip">
                <rect width="32" height="32" fill="white" transform="translate(34 34)"/>
              </clipPath>
            </defs>
          </svg>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-3" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>
          Do you want to Delete Account?
        </h2>

        {/* Subtitle */}
        <p className="text-base mb-8" style={{ color: '#87868A', fontFamily: 'Aeonik' }}>
          It will delete all your account details from this device and it will autologout session from your device
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={onClose}
            className="flex-1 py-4 rounded-2xl text-base font-bold text-white whitespace-nowrap"
            style={{ background: '#171A26', fontFamily: 'Aeonik' }}
          >
            No , Cancel
          </button>
          <button
            className="flex-1 py-4 rounded-2xl text-base font-bold text-white whitespace-nowrap"
            style={{ background: '#EA4949', fontFamily: 'Aeonik' }}
          >
            Yes Delete Account
          </button>
        </div>
      </div>
    </div>
  )
}
