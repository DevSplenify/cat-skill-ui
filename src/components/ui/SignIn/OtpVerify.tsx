import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthLayout from './AuthLayout'
import SuccessModal from './SuccessModal'

const OTP_LENGTH = 5

interface Props {
  onBack: () => void
}

export default function OtpVerify({ onBack }: Props) {
  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(''))
  const [showSuccess, setShowSuccess] = useState(false)
  const inputs = useRef<(HTMLInputElement | null)[]>([])
  const navigate = useNavigate()

  function handleChange(value: string, index: number) {
    if (!/^\d?$/.test(value)) return
    const next = [...otp]
    next[index] = value
    setOtp(next)
    if (value && index < OTP_LENGTH - 1) {
      inputs.current[index + 1]?.focus()
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>, index: number) {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus()
    }
  }

  function handlePaste(e: React.ClipboardEvent) {
    e.preventDefault()
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, OTP_LENGTH)
    const next = [...otp]
    pasted.split('').forEach((char, i) => { next[i] = char })
    setOtp(next)
    inputs.current[Math.min(pasted.length, OTP_LENGTH - 1)]?.focus()
  }

  return (
    <>
      {showSuccess && (
        <SuccessModal
          onCancel={() => setShowSuccess(false)}
          onOkay={() => navigate('/dashboard')}
        />
      )}

      <AuthLayout>
        <h1 className="text-2xl font-semibold text-gray-900 text-center mb-1">
          Verify Your Identity
        </h1>
        <p className="text-sm text-center mb-6" style={{ color: '#69686D' }}>
          We have sent you a message at your provided number you can enter that OTP to continue
        </p>

        {/* OTP inputs */}
        <div className="mb-3">
          <label className="block text-sm text-gray-600 mb-3">Enter OTP</label>
          <div className="flex gap-1 justify-between" onPaste={handlePaste}>
            {otp.map((digit, i) => (
              <input
                key={i}
                ref={(el) => { inputs.current[i] = el }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e.target.value, i)}
                onKeyDown={(e) => handleKeyDown(e, i)}
                placeholder="-"
                className="text-center text-base font-medium rounded-xl bg-[#F8F8FA] focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors placeholder-gray-400"
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 12,
                  border: '1px solid #E8E8E9',
                  paddingTop: 12,
                  paddingBottom: 12,
                  paddingLeft: 16,
                  paddingRight: 16,
                  color: '#69686D',
                  flexShrink: 0,
                }}
              />
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={() => setShowSuccess(true)}
          className="w-full mt-5 py-3 bg-primary hover:bg-primary/90 text-white text-sm font-semibold rounded-lg transition-colors"
        >
          Verify Account
        </button>

        <p className="text-center text-sm text-gray-500 mt-5">
          Back to sign in page?{' '}
          <button type="button" onClick={onBack} className="text-primary font-semibold hover:underline">
            Back to Sign In
          </button>
        </p>
      </AuthLayout>
    </>
  )
}
