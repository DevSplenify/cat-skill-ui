import type { ReactNode } from 'react'
import LeftPanel from './LeftPanel'

interface Props {
  children: ReactNode
}

export default function AuthLayout({ children }: Props) {
  return (
    <div className="h-screen flex bg-white lg:items-center lg:justify-center lg:px-2 lg:py-4">
      <div className="flex w-full h-full max-w-7xl lg:h-[calc(100vh-32px)]">
        <LeftPanel />
        <div className="flex flex-1 flex-col items-center justify-start pt-10 px-6 md:justify-center md:pt-0 lg:px-16">
          <div className="w-full max-w-sm">

            {/* Logo – mobile/tablet only */}
            <div className="flex justify-center mb-6 lg:hidden">
              <img src="/logo-svg.png" alt="Catskill Packing" className="h-14 object-contain" />
            </div>

            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
