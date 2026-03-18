import StatCard from './StatCard'

const cards = [
  {
    title: 'Total Orders',
    value: '1,420',
    change: '2%',
    color: '#4A90E2',
    data: [30, 45, 28, 55, 40, 60, 35, 70, 50, 65],
  },
  {
    title: 'Animal Scheduled',
    value: '198',
    change: '10%',
    color: '#E8873A',
    data: [50, 65, 45, 70, 55, 40, 60, 45, 55, 50],
  },
  {
    title: 'Total Clients',
    value: '3',
    change: '5%',
    color: '#4CAF7D',
    data: [20, 35, 25, 40, 30, 50, 35, 55, 45, 60],
  },
]

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-1 min-[480px]:grid-cols-2 min-[700px]:grid-cols-3 gap-3">
      {cards.map((card) => (
        <StatCard key={card.title} {...card} />
      ))}
    </div>
  )
}
