import { useState } from 'react'
import AvailabilityFilters from './AvailabilityFilters'
import AvailabilityCalendar from './AvailabilityCalendar'
import RequestAnimalForm from './RequestAnimalForm'
import MyCalendar, { CalendarEvent } from './MyCalendar'

type Tab = 'Availability' | 'My Calendar'

interface AvailabilityTabsProps {
  showRequestForm: boolean
  onShowRequestForm: () => void
  onHideRequestForm: () => void
}

const getTodayString = () => new Date().toISOString().split('T')[0]

export default function AvailabilityTabs({ showRequestForm, onShowRequestForm, onHideRequestForm }: AvailabilityTabsProps) {
  const [tab, setTab] = useState<Tab>('Availability')
  const [events, setEvents] = useState<CalendarEvent[]>([])

  // Screen 1 Selection State
  const [specie, setSpecie] = useState('Beef')
  const [numberOfAnimals, setNumberOfAnimals] = useState(1)
  const [inspectionLevel, setInspectionLevel] = useState('Standard')
  const [selectedDate, setSelectedDate] = useState(getTodayString())

  const handleAddToCalendar = () => {
    const today = new Date()
    const y = today.getFullYear()
    const m = today.getMonth()
    const d = today.getDate()
    setEvents(prev => [
      ...prev,
      { year: y, month: m, day: d, type: 'dropoff' },
      { year: y, month: m, day: d, type: 'harvest' },
      { year: y, month: m, day: d, type: 'cut' },
    ])
    onHideRequestForm()
    setTab('My Calendar')
  }

  if (showRequestForm) {
    return (
      <RequestAnimalForm
        specie={specie}
        numberOfAnimals={numberOfAnimals}
        inspectionLevel={inspectionLevel}
        dropoffDate={selectedDate}
        onBack={onHideRequestForm}
        onAddToCalendar={handleAddToCalendar}
      />
    )
  }

  return (
    <div>
      {/* Tabs */}
      <div className="flex gap-6 mb-6" style={{ borderBottom: '1px solid #E8E8E9' }}>
        {(['Availability', 'My Calendar'] as Tab[]).map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className="pb-3 text-sm font-medium relative cursor-pointer"
            style={{ color: tab === t ? '#537F68' : '#69686D' }}
          >
            {t}
            {tab === t && (
              <span
                className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                style={{ background: '#537F68' }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab content */}
      {tab === 'Availability' && (
        <div className="flex flex-col gap-5">
          <AvailabilityFilters
            specie={specie}
            onSpecieChange={setSpecie}
            numberOfAnimals={numberOfAnimals}
            onAnimalsChange={setNumberOfAnimals}
            inspectionLevel={inspectionLevel}
            onInspectionChange={setInspectionLevel}
            onRequestAnimal={onShowRequestForm}
          />
          <AvailabilityCalendar
            selectedDate={selectedDate}
            onDateSelect={setSelectedDate}
          />
        </div>
      )}
      {tab === 'My Calendar' && (
        <MyCalendar events={events} />
      )}
    </div>
  )
}

