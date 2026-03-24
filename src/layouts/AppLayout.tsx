import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

export default function AppLayout() {
  return (
    <div className="flex h-screen overflow-hidden bg-white">
      <Sidebar />
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <div className="hidden md:block">
          <Navbar />
        </div>
        <main className="flex-1 overflow-y-auto p-3 md:p-6 bg-white">
          <div className="max-w-8xl mx-auto w-full">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}
