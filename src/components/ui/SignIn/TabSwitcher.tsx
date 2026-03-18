type Tab = 'phone' | 'email'

interface Props {
  tab: Tab
  onChange: (tab: Tab) => void
}

export default function TabSwitcher({ tab, onChange }: Props) {
  return (
    <div className="flex border-b border-gray-200 mb-5">
      <button
        type="button"
        onClick={() => onChange('phone')}
        className={`flex-1 pb-2.5 text-sm font-medium transition-colors ${
          tab === 'phone'
            ? 'text-primary border-b-2 border-primary'
            : 'text-gray-400 hover:text-gray-600'
        }`}
      >
        Phone Number
      </button>
      <button
        type="button"
        onClick={() => onChange('email')}
        className={`flex-1 pb-2.5 text-sm font-medium transition-colors ${
          tab === 'email'
            ? 'text-primary border-b-2 border-primary'
            : 'text-gray-400 hover:text-gray-600'
        }`}
      >
        Email Address
      </button>
    </div>
  )
}
