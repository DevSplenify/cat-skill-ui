import { useState } from 'react'
import AuthLayout from './AuthLayout'
import GoogleButton from './GoogleButton'
import TabSwitcher from './TabSwitcher'
import PhoneForm, { defaultCountry, type Country } from './PhoneForm'
import EmailForm from './EmailForm'
import OtpVerify from './OtpVerify'

type Tab = 'phone' | 'email'

export default function SignIn() {
  const [tab, setTab] = useState<Tab>('phone')
  const [country, setCountry] = useState<Country>(defaultCountry)
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [showOtp, setShowOtp] = useState(false)

  if (showOtp) {
    return <OtpVerify onBack={() => setShowOtp(false)} />
  }

  return (
    <AuthLayout>
      <h1 className="text-2xl font-semibold text-gray-900 text-center mb-1">
        Welcome Back
      </h1>
      <p className="text-md text-center mb-6" style={{ color: '#69686D' }}>
        Welcome back, please enter your details.
      </p>

      <GoogleButton />

      <div className="flex items-center gap-3 mb-5">
        <div className="flex-1 h-px bg-gray-200" />
        <span className="text-xs text-gray-400">or</span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      <TabSwitcher tab={tab} onChange={setTab} />

      {tab === 'phone' ? (
        <PhoneForm
          country={country}
          phone={phone}
          onCountrySelect={setCountry}
          onPhoneChange={setPhone}
        />
      ) : (
        <EmailForm email={email} onChange={setEmail} />
      )}

      <button
        type="button"
        onClick={() => setShowOtp(true)}
        className="w-full mt-5 py-3 bg-primary hover:bg-primary/90 text-white text-sm font-semibold rounded-lg transition-colors"
      >
        Continue
      </button>

      <p className="text-center text-md text-gray-500 mt-5">
        Don&apos;t have an account?{' '}
        <a href="/register" className="text-[#0167FF] font-semibold hover:underline">
          Register
        </a>
      </p>
    </AuthLayout>
  )
}
