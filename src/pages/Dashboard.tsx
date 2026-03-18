import DashboardHeader from '../components/ui/dashboard/DashboardHeader'
import StatsGrid from '../components/ui/dashboard/StatsGrid'
import ActiveOrdersTable from '../components/ui/dashboard/ActiveOrdersTable'

export default function Dashboard() {
  return (
    <div>
      <DashboardHeader />
      <StatsGrid />
      <ActiveOrdersTable />
    </div>
  )
}
