import { Link, useLocation } from 'react-router-dom'

export interface NavItemConfig {
  label: string
  href: string
  icon: React.ReactNode
  activeIcon?: React.ReactNode
  badge?: string
  hasDropdown?: boolean
}

interface Props extends NavItemConfig {}

export default function NavItem({ label, href, icon, activeIcon, badge, hasDropdown }: Props) {
  const { pathname } = useLocation()
  const isActive = pathname === href

  return (
    <Link
      to={href}
      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
        isActive
          ? 'bg-white text-[#171A26]'
          : 'text-[#2C2C2E] hover:bg-white/60'
      }`}
      style={{ border: `1px solid ${isActive ? '#F0F0F0' : 'transparent'}` }}
    >
      <span className={`shrink-0 ${isActive ? 'text-[#171A26]' : 'text-[#69686D]'}`}>
        {isActive && activeIcon ? activeIcon : icon}
      </span>
      <span className="flex-1">{label}</span>
      {badge && (
        <span
          className="text-xs text-white font-semibold inline-flex items-center justify-center"
          style={{
            background: 'linear-gradient(160deg, #F2897D 0%, #E52B16 100%)',
            width: '25px',
            height: '18px',
            borderRadius: '9999px',
            fontSize: '11px',
            lineHeight: '18px',
          }}
        >
          {badge}
        </span>
      )}
      {hasDropdown && (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.8346 7.5L10.0013 12.5L4.16797 7.5" stroke="#69686D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
    </Link>
  )
}
