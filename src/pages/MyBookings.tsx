import { useState } from 'react'
import BookingStatCard from '../components/ui/MyBookings/BookingStatCard'
import ActiveOrdersTable from '../components/ui/dashboard/ActiveOrdersTable'
import AllOrders from '../components/ui/MyBookings/AllOrders'

const TotalOrdersIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#paint0_diamond_190_24660_clip_path)" data-figma-skip-parse="true"><g transform="matrix(-0.0266476 0.04 -0.0426354 -0.0612925 26.6476 3.46157e-06)"><rect x="0" y="0" width="1124.51" height="559.075" fill="url(#paint0_diamond_190_24660)" opacity="1" shape-rendering="crispEdges" /><rect x="0" y="0" width="1124.51" height="559.075" transform="scale(1 -1)" fill="url(#paint0_diamond_190_24660)" opacity="1" shape-rendering="crispEdges" /><rect x="0" y="0" width="1124.51" height="559.075" transform="scale(-1 1)" fill="url(#paint0_diamond_190_24660)" opacity="1" shape-rendering="crispEdges" /><rect x="0" y="0" width="1124.51" height="559.075" transform="scale(-1)" fill="url(#paint0_diamond_190_24660)" opacity="1" shape-rendering="crispEdges" /></g></g><path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" data-figma-gradient-fill="{&#34;type&#34;:&#34;GRADIENT_DIAMOND&#34;,&#34;stops&#34;:[{&#34;color&#34;:{&#34;r&#34;:0.57799065113067627,&#34;g&#34;:0.75991785526275635,&#34;b&#34;:0.99382424354553223,&#34;a&#34;:1.0},&#34;position&#34;:0.0},{&#34;color&#34;:{&#34;r&#34;:0.0039215688593685627,&#34;g&#34;:0.40392157435417175,&#34;b&#34;:1.0,&#34;a&#34;:1.0},&#34;position&#34;:1.0}],&#34;stopsVar&#34;:[{&#34;color&#34;:{&#34;r&#34;:0.57799065113067627,&#34;g&#34;:0.75991785526275635,&#34;b&#34;:0.99382424354553223,&#34;a&#34;:1.0},&#34;position&#34;:0.0},{&#34;color&#34;:{&#34;r&#34;:0.0039215688593685627,&#34;g&#34;:0.40392157435417175,&#34;b&#34;:1.0,&#34;a&#34;:1.0},&#34;position&#34;:1.0}],&#34;transform&#34;:{&#34;m00&#34;:-53.295127868652344,&#34;m01&#34;:-85.270835876464844,&#34;m02&#34;:95.930549621582031,&#34;m10&#34;:79.999984741210938,&#34;m11&#34;:-122.58498382568359,&#34;m12&#34;:21.292503356933594},&#34;opacity&#34;:1.0,&#34;blendMode&#34;:&#34;NORMAL&#34;,&#34;visible&#34;:true}" />
    <path d="M16.2052 12.5C16.5171 12.5 16.7699 12.7432 16.7699 13.0431V14.1387C17.2709 14.1293 17.8324 14.1293 18.4641 14.1293H21.4761C22.1078 14.1293 22.6693 14.1293 23.1703 14.1387V13.0431C23.1703 12.7432 23.4231 12.5 23.735 12.5C24.0469 12.5 24.2997 12.7432 24.2997 13.0431V14.1867C25.3835 14.2702 26.095 14.475 26.6177 14.9777C27.1404 15.4804 27.3534 16.1646 27.4402 17.2069L27.5 17.75H13.1934H12.5V17.2069C12.5868 16.1646 12.7998 15.4804 13.3225 14.9777C13.8452 14.475 14.5567 14.2702 15.6405 14.1867V13.0431C15.6405 12.7432 15.8933 12.5 16.2052 12.5Z" fill="white" />
    <path opacity="0.5" d="M27.5004 21.5001V20.0001C27.5004 19.3708 27.4979 18.2489 27.4883 17.75H12.5076C12.4979 18.2489 12.5004 19.3708 12.5004 20.0001V21.5001C12.5004 24.3285 12.5004 25.7427 13.3791 26.6214C14.2577 27.5001 15.6719 27.5001 18.5004 27.5001H21.5004C24.3288 27.5001 25.743 27.5001 26.6217 26.6214C27.5004 25.7427 27.5004 24.3285 27.5004 21.5001Z" fill="white" />
    <path d="M24.5 23.75C24.5 24.1642 24.1642 24.5 23.75 24.5C23.3358 24.5 23 24.1642 23 23.75C23 23.3358 23.3358 23 23.75 23C24.1642 23 24.5 23.3358 24.5 23.75Z" fill="white" />
    <path d="M24.5 20.75C24.5 21.1642 24.1642 21.5 23.75 21.5C23.3358 21.5 23 21.1642 23 20.75C23 20.3358 23.3358 20 23.75 20C24.1642 20 24.5 20.3358 24.5 20.75Z" fill="white" />
    <path d="M20.75 23.75C20.75 24.1642 20.4142 24.5 20 24.5C19.5858 24.5 19.25 24.1642 19.25 23.75C19.25 23.3358 19.5858 23 20 23C20.4142 23 20.75 23.3358 20.75 23.75Z" fill="white" />
    <path d="M20.75 20.75C20.75 21.1642 20.4142 21.5 20 21.5C19.5858 21.5 19.25 21.1642 19.25 20.75C19.25 20.3358 19.5858 20 20 20C20.4142 20 20.75 20.3358 20.75 20.75Z" fill="white" />
    <path d="M17 23.75C17 24.1642 16.6642 24.5 16.25 24.5C15.8358 24.5 15.5 24.1642 15.5 23.75C15.5 23.3358 15.8358 23 16.25 23C16.6642 23 17 23.3358 17 23.75Z" fill="white" />
    <path d="M17 20.75C17 21.1642 16.6642 21.5 16.25 21.5C15.8358 21.5 15.5 21.1642 15.5 20.75C15.5 20.3358 15.8358 20 16.25 20C16.6642 20 17 20.3358 17 20.75Z" fill="white" />
    <defs>
      <clipPath id="paint0_diamond_190_24660_clip_path"><path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" /></clipPath><linearGradient id="paint0_diamond_190_24660" x1="0" y1="0" x2="500" y2="500" gradientUnits="userSpaceOnUse">
        <stop stop-color="#93C2FD" />
        <stop offset="1" stop-color="#0167FF" />
      </linearGradient>
    </defs>
  </svg>

)

const PendingCutsheetsIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#paint0_diamond_190_24682_clip_path)" data-figma-skip-parse="true"><g transform="matrix(-0.0266476 0.04 -0.0426354 -0.0612925 26.6476 3.46157e-06)"><rect x="0" y="0" width="1124.51" height="559.075" fill="url(#paint0_diamond_190_24682)" opacity="1" shape-rendering="crispEdges" /><rect x="0" y="0" width="1124.51" height="559.075" transform="scale(1 -1)" fill="url(#paint0_diamond_190_24682)" opacity="1" shape-rendering="crispEdges" /><rect x="0" y="0" width="1124.51" height="559.075" transform="scale(-1 1)" fill="url(#paint0_diamond_190_24682)" opacity="1" shape-rendering="crispEdges" /><rect x="0" y="0" width="1124.51" height="559.075" transform="scale(-1)" fill="url(#paint0_diamond_190_24682)" opacity="1" shape-rendering="crispEdges" /></g></g><path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" data-figma-gradient-fill="{&#34;type&#34;:&#34;GRADIENT_DIAMOND&#34;,&#34;stops&#34;:[{&#34;color&#34;:{&#34;r&#34;:0.80290508270263672,&#34;g&#34;:0.63999998569488525,&#34;b&#34;:1.0,&#34;a&#34;:1.0},&#34;position&#34;:0.0},{&#34;color&#34;:{&#34;r&#34;:0.61494266986846924,&#34;g&#34;:0.29989573359489441,&#34;b&#34;:1.0,&#34;a&#34;:1.0},&#34;position&#34;:1.0}],&#34;stopsVar&#34;:[{&#34;color&#34;:{&#34;r&#34;:0.80290508270263672,&#34;g&#34;:0.63999998569488525,&#34;b&#34;:1.0,&#34;a&#34;:1.0},&#34;position&#34;:0.0},{&#34;color&#34;:{&#34;r&#34;:0.61494266986846924,&#34;g&#34;:0.29989573359489441,&#34;b&#34;:1.0,&#34;a&#34;:1.0},&#34;position&#34;:1.0}],&#34;transform&#34;:{&#34;m00&#34;:-53.295127868652344,&#34;m01&#34;:-85.270835876464844,&#34;m02&#34;:95.930549621582031,&#34;m10&#34;:79.999984741210938,&#34;m11&#34;:-122.58498382568359,&#34;m12&#34;:21.292503356933594},&#34;opacity&#34;:1.0,&#34;blendMode&#34;:&#34;NORMAL&#34;,&#34;visible&#34;:true}" />
    <g clip-path="url(#clip0_190_24682)">
      <path opacity="0.5" d="M15.9904 12.2244C15.8382 11.9536 15.4952 11.8575 15.2244 12.0098C14.9536 12.162 14.8575 12.505 15.0098 12.7758L22.7781 26.5925C23.2546 27.4683 24.183 28.0626 25.2501 28.0626C26.8034 28.0626 28.0626 26.8034 28.0626 25.2501C28.0626 23.6968 26.8034 22.4376 25.2501 22.4376C24.1006 22.4376 23.1121 23.1272 22.6759 24.1153L15.9904 12.2244Z" fill="white" />
      <path d="M24.0097 12.2244C24.1619 11.9536 24.5049 11.8575 24.7757 12.0098C25.0465 12.162 25.1426 12.505 24.9903 12.7758L17.222 26.5925C16.7455 27.4683 15.8171 28.0626 14.75 28.0626C13.1967 28.0626 11.9375 26.8034 11.9375 25.2501C11.9375 23.6968 13.1967 22.4376 14.75 22.4376C15.8995 22.4376 16.888 23.1272 17.3242 24.1153L24.0097 12.2244Z" fill="white" />
    </g>
    <defs>
      <clipPath id="paint0_diamond_190_24682_clip_path"><path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" /></clipPath><linearGradient id="paint0_diamond_190_24682" x1="0" y1="0" x2="500" y2="500" gradientUnits="userSpaceOnUse">
        <stop stop-color="#CDA3FF" />
        <stop offset="1" stop-color="#9D4CFF" />
      </linearGradient>
      <clipPath id="clip0_190_24682">
        <rect width="18" height="18" fill="white" transform="translate(11 11)" />
      </clipPath>
    </defs>
  </svg>

)

const CompletedOrdersIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#paint0_diamond_190_24671_clip_path)" data-figma-skip-parse="true"><g transform="matrix(-0.0266476 0.04 -0.0426354 -0.0612925 26.6476 3.46157e-06)"><rect x="0" y="0" width="1124.51" height="559.075" fill="url(#paint0_diamond_190_24671)" opacity="1" shape-rendering="crispEdges" /><rect x="0" y="0" width="1124.51" height="559.075" transform="scale(1 -1)" fill="url(#paint0_diamond_190_24671)" opacity="1" shape-rendering="crispEdges" /><rect x="0" y="0" width="1124.51" height="559.075" transform="scale(-1 1)" fill="url(#paint0_diamond_190_24671)" opacity="1" shape-rendering="crispEdges" /><rect x="0" y="0" width="1124.51" height="559.075" transform="scale(-1)" fill="url(#paint0_diamond_190_24671)" opacity="1" shape-rendering="crispEdges" /></g></g><path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" data-figma-gradient-fill="{&#34;type&#34;:&#34;GRADIENT_DIAMOND&#34;,&#34;stops&#34;:[{&#34;color&#34;:{&#34;r&#34;:0.99596774578094482,&#34;g&#34;:0.88709676265716553,&#34;b&#34;:0.50403225421905518,&#34;a&#34;:1.0},&#34;position&#34;:0.0},{&#34;color&#34;:{&#34;r&#34;:0.96470588445663452,&#34;g&#34;:0.75294119119644165,&#34;b&#34;:0.0078431377187371254,&#34;a&#34;:1.0},&#34;position&#34;:1.0}],&#34;stopsVar&#34;:[{&#34;color&#34;:{&#34;r&#34;:0.99596774578094482,&#34;g&#34;:0.88709676265716553,&#34;b&#34;:0.50403225421905518,&#34;a&#34;:1.0},&#34;position&#34;:0.0},{&#34;color&#34;:{&#34;r&#34;:0.96470588445663452,&#34;g&#34;:0.75294119119644165,&#34;b&#34;:0.0078431377187371254,&#34;a&#34;:1.0},&#34;position&#34;:1.0}],&#34;transform&#34;:{&#34;m00&#34;:-53.295127868652344,&#34;m01&#34;:-85.270835876464844,&#34;m02&#34;:95.930549621582031,&#34;m10&#34;:79.999984741210938,&#34;m11&#34;:-122.58498382568359,&#34;m12&#34;:21.292503356933594},&#34;opacity&#34;:1.0,&#34;blendMode&#34;:&#34;NORMAL&#34;,&#34;visible&#34;:true}" />
    <path opacity="0.5" d="M27.5 20C27.5 24.1421 24.1421 27.5 20 27.5C15.8579 27.5 12.5 24.1421 12.5 20C12.5 15.8579 15.8579 12.5 20 12.5C24.1421 12.5 27.5 15.8579 27.5 20Z" fill="white" />
    <path d="M23.0227 17.7273C23.2424 17.9469 23.2424 18.3031 23.0227 18.5227L19.2727 22.2727C19.0531 22.4924 18.6969 22.4924 18.4773 22.2727L16.9773 20.7727C16.7576 20.5531 16.7576 20.1969 16.9773 19.9773C17.1969 19.7576 17.5531 19.7576 17.7727 19.9773L18.875 21.0795L20.5511 19.4034L22.2273 17.7273C22.4469 17.5076 22.8031 17.5076 23.0227 17.7273Z" fill="white" />
    <defs>
      <clipPath id="paint0_diamond_190_24671_clip_path"><path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" /></clipPath><linearGradient id="paint0_diamond_190_24671" x1="0" y1="0" x2="500" y2="500" gradientUnits="userSpaceOnUse">
        <stop stop-color="#FEE281" />
        <stop offset="1" stop-color="#F6C002" />
      </linearGradient>
    </defs>
  </svg>

)

const CARDS = [
  { title: 'Total Orders', value: '400', subtext: 'Jobs Ready of 5 scheduled', icon: <TotalOrdersIcon />, btnLabel: 'View Orders', showOrders: true },
  { title: 'Pending CutSheets', value: '4', subtext: 'Jobs Ready of 5 scheduled', icon: <PendingCutsheetsIcon />, btnLabel: 'View Cutsheets', showOrders: false },
  { title: 'Completed Orders', value: '45', subtext: 'Jobs Ready of 5 scheduled', icon: <CompletedOrdersIcon />, btnLabel: 'View Orders', showOrders: true },
]

export default function MyBookings() {
  const [showAllOrders, setShowAllOrders] = useState(false)

  if (showAllOrders) return <AllOrders onBack={() => setShowAllOrders(false)} />

  return (
    <div>
      {/* Desktop header */}
      <div className="hidden md:block mb-6">
        <h2 className="text-xl font-medium" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>My Bookings</h2>
        <p className="text-sm mt-1" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>View all your booking details here and manage them.</p>
      </div>

      {/* Mobile header */}
      <div className="flex items-center gap-3 md:hidden mb-4">
        <div className="shrink-0">
          <svg width="44" height="46" viewBox="0 0 44 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0.5H32C38.3513 0.5 43.5 5.64873 43.5 12V34C43.5 40.3513 38.3513 45.5 32 45.5H12C5.64873 45.5 0.5 40.3513 0.5 34V12C0.5 5.64873 5.64873 0.5 12 0.5Z" fill="white" />
            <path d="M12 0.5H32C38.3513 0.5 43.5 5.64873 43.5 12V34C43.5 40.3513 38.3513 45.5 32 45.5H12C5.64873 45.5 0.5 40.3513 0.5 34V12C0.5 5.64873 5.64873 0.5 12 0.5Z" stroke="#E8E8E9" />
            <path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M14.6404 16.4758C13.6641 17.4522 13.6641 19.0235 13.6641 22.1662V23.8329C13.6641 26.9756 13.6641 28.5469 14.6404 29.5232C15.6167 30.4995 17.188 30.4995 20.3307 30.4995H23.6641C23.7343 30.4995 24.4287 30.4996 24.4974 30.4996L24.4974 15.4996C24.4287 15.4996 23.7343 15.4995 23.6641 15.4995H20.3307C17.188 15.4995 15.6167 15.4995 14.6404 16.4758Z" fill="#537F68" />
            <path d="M30.3333 23.8328V22.1662C30.3333 19.0235 30.3333 17.4521 29.357 16.4758C28.5451 15.6639 26.6966 15.5272 24.5 15.5042V30.4949C26.6966 30.4718 28.5451 30.3351 29.357 29.5232C30.3333 28.5469 30.3333 26.9755 30.3333 23.8328Z" fill="#537F68" />
          </svg>
        </div>
        <div>
          <h2 className="text-xl font-medium" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>My Bookings</h2>
          <p className="text-xs" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>View all your booking details here and manage them.</p>
        </div>
      </div>

      {/* Stat cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {CARDS.map(card => (
          <BookingStatCard
            key={card.title}
            title={card.title}
            value={card.value}
            subtext={card.subtext}
            icon={card.icon}
            btnLabel={card.btnLabel}
            onBtnClick={card.showOrders ? () => setShowAllOrders(true) : undefined}
          />
        ))}
      </div>

      {/* Active orders table with pagination */}
      <ActiveOrdersTable />
    </div>
  )
}
