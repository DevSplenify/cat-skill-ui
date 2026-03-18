import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler)

const labels = ['', '', '', '', '', '', '', '', '', '']

function makeData(values: number[], color: string) {
  return {
    labels,
    datasets: [
      {
        data: values,
        borderColor: color,
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
        fill: true,
        backgroundColor: (ctx: { chart: ChartJS }) => {
          const gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, 80)
          gradient.addColorStop(0, color + '33')
          gradient.addColorStop(1, color + '00')
          return gradient
        },
      },
    ],
  }
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { display: false }, tooltip: { enabled: false } },
  scales: {
    x: { display: false },
    y: { display: false },
  },
}

const TrendIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_381_24103)">
      <path d="M14.6654 4.66699L9.74559 9.55677C9.08048 10.2178 8.74792 10.5484 8.33543 10.5483C7.92294 10.5483 7.59046 10.2177 6.9255 9.55644L6.76593 9.39778C6.10039 8.73598 5.76762 8.40509 5.35484 8.40524C4.94207 8.40539 4.60954 8.73653 3.94448 9.39881L1.33203 12.0003M14.6654 4.66699V8.36421M14.6654 4.66699H10.9439" stroke="#11B14B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
    <defs>
      <clipPath id="clip0_381_24103">
        <rect width="16" height="16" fill="white"/>
      </clipPath>
    </defs>
  </svg>
)

interface StatCardProps {
  title: string
  value: string
  change: string
  color: string
  data: number[]
}

export default function StatCard({ title, value, change, color, data }: StatCardProps) {
  return (
    <div
      className="rounded-2xl p-4 flex flex-col gap-3"
      style={{ background: '#FCFBFA', border: '1px solid #E8E8E9' }}
    >
      <p style={{ fontFamily: 'Aeonik', fontWeight: 500, fontSize: '18px', lineHeight: '24px', letterSpacing: '0.005em', color: '#1A1A1A' }}>
        {title}
      </p>
      <div className="flex items-end justify-between gap-2">
        <span style={{ fontFamily: 'Aeonik', fontWeight: 600, fontSize: '28px', lineHeight: '38px', letterSpacing: '0.005em', color: '#1A1A1A' }}>
          {value}
        </span>
        <div className="h-[60px] w-[90px] shrink-0">
          <Line data={makeData(data, color)} options={chartOptions} />
        </div>
      </div>
      <div className="flex items-center gap-1.5">
        <span className="text-sm font-semibold" style={{ color: '#11B14B' }}>{change}</span>
        <TrendIcon />
        <span className="text-sm" style={{ color: '#69686D' }}>vs pervious week</span>
      </div>
    </div>
  )
}
