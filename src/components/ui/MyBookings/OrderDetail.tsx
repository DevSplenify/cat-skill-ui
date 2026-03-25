const BackIcon = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0.5H32C38.3513 0.5 43.5 5.64873 43.5 12V32C43.5 38.3513 38.3513 43.5 32 43.5H12C5.64873 43.5 0.5 38.3513 0.5 32V12C0.5 5.64873 5.64873 0.5 12 0.5Z" stroke="#D1D0D2"/>
    <path d="M14.3359 17.833H23.5026C25.0603 17.833 25.8391 17.833 26.4193 18.1679C26.7993 18.3874 27.1149 18.703 27.3343 19.083C27.6693 19.6631 27.6693 20.442 27.6693 21.9997C27.6693 23.5574 27.6693 24.3362 27.3343 24.9163C27.1149 25.2964 26.7993 25.612 26.4193 25.8314C25.8391 26.1663 25.0603 26.1663 23.5026 26.1663H17.6693M14.3359 17.833L16.8359 15.333M14.3359 17.833L16.8359 20.333" stroke="#69686D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const cutsheets = [
  { id: 1, name: 'Cutsheet 1', type: 'Custom Cutsheet', lastUsed: '26 October 2026', inspection: 'USDA' },
  { id: 2, name: 'Cutsheet 1', type: 'Custom Cutsheet', lastUsed: '26 October 2026', inspection: 'USDA' },
]

type Tab = 'buyer' | 'house' | 'custom'

import { useState } from 'react'
import CutsheetWizard from './CutsheetWizard'

interface OrderDetailProps {
  onBack: () => void
}

export default function OrderDetail({ onBack }: OrderDetailProps) {
  const [activeTab, setActiveTab] = useState<Tab>('house')
  const [showWizard, setShowWizard] = useState(false)

  const tabs: { key: Tab; label: string }[] = [
    { key: 'buyer', label: 'Buyer cutsheet (1)' },
    { key: 'house', label: 'House cutsheets (2)' },
    { key: 'custom', label: 'Your Custom Cutsheets (4)' },
  ]

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <button onClick={onBack} className="cursor-pointer shrink-0"><BackIcon /></button>
        <h2 className="font-medium text-xl" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>
          1 Beef 02/18/2026 Heinrich Paul
        </h2>
      </div>

      {/* Two column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[480px_1fr] gap-6 items-start">

        {/* Left — Order Summary */}
        <div className="rounded-2xl p-5 flex flex-col gap-4" style={{ border: '1px solid #E8E8E9' }}>
          <span className="text-base font-semibold" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>Order Summary</span>

          {/* Processor Details inner card */}
          <div className="rounded-2xl p-5 flex flex-col gap-5" style={{ border: '1px solid #E8E8E9', background: '#F8F8FA' }}>
            <span className="text-base font-semibold" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>Processor Details</span>

            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
              <div>
                <p className="text-sm font-semibold" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>Catskill</p>
                <p className="text-sm" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>Name</p>
              </div>
              <div>
                <p className="text-sm font-semibold" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>(0000)-00000-000</p>
                <p className="text-sm" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>Phone number</p>
              </div>
              <div>
                <p className="text-sm font-semibold" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>Beef</p>
                <p className="text-sm" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>Animal</p>
              </div>
              <div>
                <p className="text-sm font-semibold" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>02/10/2026</p>
                <p className="text-sm" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>Drop-Off-Date</p>
              </div>
              <div>
                <p className="text-sm font-semibold" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>02/10/2026</p>
                <p className="text-sm" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>Last date to cancel</p>
              </div>
              <div>
                <p className="text-sm font-semibold" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>02</p>
                <p className="text-sm" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>Total Head Count</p>
              </div>
              <div>
                <p className="text-sm font-semibold" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>-</p>
                <p className="text-sm" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>Deposit</p>
              </div>
              <div>
                <p className="text-sm font-semibold" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>$50</p>
                <p className="text-sm" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>Kill slot Price</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right — Cutsheet Details */}
        <div className="rounded-2xl p-5 flex flex-col gap-4" style={{ border: '1px solid #E8E8E9' }}>
          {/* Header row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <span className="text-base font-semibold" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>Cutsheet Details</span>
            <button
              onClick={() => setShowWizard(true)}
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-2.5 rounded-xl text-sm font-medium text-white cursor-pointer shrink-0"
              style={{ background: '#537F68', fontFamily: 'Aeonik' }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1V13M1 7H13" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              Add New Cutsheet
            </button>
          </div>

          {/* Tabs — scrollable on mobile */}
          <div className="flex items-center gap-0 border-b overflow-x-auto [&::-webkit-scrollbar]:hidden" style={{ borderColor: '#E8E8E9', scrollbarWidth: 'none' }}>
            {tabs.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className="pb-2.5 px-1 mr-5 text-sm cursor-pointer transition-colors whitespace-nowrap"
                style={{
                  fontFamily: 'Aeonik',
                  color: activeTab === tab.key ? '#537F68' : '#69686D',
                  fontWeight: activeTab === tab.key ? 600 : 400,
                  borderBottom: activeTab === tab.key ? '2px solid #537F68' : '2px solid transparent',
                  marginBottom: -1,
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Cutsheet cards */}
          <div className="flex flex-col gap-4 overflow-y-auto [&::-webkit-scrollbar]:hidden" style={{ maxHeight: 480, scrollbarWidth: 'none' }}>
            {cutsheets.map(cs => (
              <div key={cs.id} className="rounded-2xl p-5 flex flex-col gap-4" style={{ border: '1px solid #E8E8E9', background: '#F8F8FA' }} >
                <div>
                  <p className="text-base font-semibold" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>{cs.name}</p>
                  <p className="text-sm my-4" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>{cs.type}</p>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div className='my-4'>
                    <p className="text-sm font-semibold" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>{cs.lastUsed}</p>
                    <p className="text-sm" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>Last Used</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>{cs.inspection}</p>
                    <p className="text-sm" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>Inspection Levels</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  <button
                    className="px-4 py-3 rounded-xl text-sm font-medium cursor-pointer"
                    style={{ border: '1px solid #D1D0D2', background: 'transparent', color: '#69686D', fontFamily: 'Aeonik',fontWeight:600 }}
                  >
                    Clone & customize
                  </button>
                  <button
                    className="px-4 py-3 rounded-xl text-sm font-medium cursor-pointer"
                    style={{ border: '1px solid #D1D0D2', background: '#F0F0F0', color: '#69686D', fontFamily: 'Aeonik',fontWeight:600 }}
                  >
                    Details
                  </button>
                  <button
                    className="px-4 py-3 rounded-xl text-sm font-medium text-white cursor-pointer"
                    style={{ background: '#537F68', fontFamily: 'Aeonik',fontWeight:600}}
                  >
                    Select
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {showWizard && <CutsheetWizard onClose={() => setShowWizard(false)} />}
    </div>
  )
}
