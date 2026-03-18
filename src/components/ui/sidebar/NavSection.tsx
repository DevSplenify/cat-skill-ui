import NavItem, { type NavItemConfig } from './NavItem'

interface Props {
  label: string
  items: NavItemConfig[]
}

export default function NavSection({ label, items }: Props) {
  return (
    <div className="px-3 mb-2 mt-3">
      <p className="text-xs font-medium text-[#87868A] px-1 mb-2">{label}</p>
      <div className="flex flex-col gap-0.5">
        {items.map((item) => (
          <NavItem key={item.href} {...item} />
        ))}
      </div>
    </div>
  )
}
