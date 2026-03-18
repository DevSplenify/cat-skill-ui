interface Props {
  email: string
  onChange: (v: string) => void
}

export default function EmailForm({ email, onChange }: Props) {
  return (
    <div>
      <label className="block text-sm text-gray-600 mb-1">Email Address</label>
      <input
        type="email"
        value={email}
        onChange={(e) => onChange(e.target.value)}
        placeholder="you@example.com"
        className="w-full px-3 py-3 bg-gray-50 border rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
        style={{ borderColor: '#E8E8E9', color: '#69686D' }}
      />
    </div>
  )
}
