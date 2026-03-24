import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignIn from './components/ui/SignIn/index.tsx'
import AppLayout from './layouts/AppLayout.tsx'
import Dashboard from './pages/Dashboard.tsx'
import Availability from './pages/Availability.tsx'

const router = createBrowserRouter([
  // Auth routes
  { path: '/', element: <SignIn /> },

  // App routes
  {
    element: <AppLayout />,
    children: [
      { path: '/dashboard', element: <Dashboard />, handle: { title: 'Dashboard' } },
      { path: '/scheduling', element: <Availability />, handle: { title: 'Scheduling' } },
      { path: '/bookings', element: <Dashboard />, handle: { title: 'My Bookings' } },
      { path: '/messages', element: <Dashboard />, handle: { title: 'Messages' } },
      { path: '/settings', element: <Dashboard />, handle: { title: 'Settings' } },
      { path: '/support', element: <Dashboard />, handle: { title: 'Support & News' } },
    ],
  },

  // Catch-all — redirect unknown routes to dashboard
  { path: '*', element: <Dashboard /> },
])

export default function App() {
  return <RouterProvider router={router} />
}
