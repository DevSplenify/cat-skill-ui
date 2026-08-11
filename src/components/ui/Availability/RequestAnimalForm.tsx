import { useState, useEffect } from 'react'
import AnimalGroupCard from './AnimalGroupCard'
import BookingConfirmation from './BookingConfirmation'
import { JobAnimal, CreateJobDto, CreateAnimalDto, JobResponse } from '../../../types/job'
import { createJob } from '../../../services/jobsService'

const BackIcon = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0.5H32C38.3513 0.5 43.5 5.64873 43.5 12V32C43.5 38.3513 38.3513 43.5 32 43.5H12C5.64873 43.5 0.5 38.3513 0.5 32V12C0.5 5.64873 5.64873 0.5 12 0.5Z" stroke="#D1D0D2"/>
    <path d="M14.3359 17.833H23.5026C25.0603 17.833 25.8391 17.833 26.4193 18.1679C26.7993 18.3874 27.1149 18.703 27.3343 19.083C27.6693 19.6631 27.6693 20.442 27.6693 21.9997C27.6693 23.5574 27.6693 24.3362 27.3343 24.9163C27.1149 25.2964 26.7993 25.612 26.4193 25.8314C25.8391 26.1663 25.0603 26.1663 23.5026 26.1663H17.6693M14.3359 17.833L16.8359 15.333M14.3359 17.833L16.8359 20.333" stroke="#69686D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

interface RequestAnimalFormProps {
  specie?: string
  numberOfAnimals?: number
  inspectionLevel?: string
  dropoffDate?: string
  onBack: () => void
  onAddToCalendar: () => void
}

const getTodayString = () => new Date().toISOString().split('T')[0]

const createDefaultAnimal = (id: string): JobAnimal => ({
  id,
  sex: 'Male',
  isOver30Months: false,
  isKillAndChill: true,
  animalIdentifiers: '',
  splitInfo: 'Whole',
})

export default function RequestAnimalForm({
  specie = 'Beef',
  numberOfAnimals = 1,
  inspectionLevel = 'Standard',
  dropoffDate = getTodayString(),
  onBack,
  onAddToCalendar,
}: RequestAnimalFormProps) {
  const [notifyEmail, setNotifyEmail] = useState(true)
  const [animals, setAnimals] = useState<JobAnimal[]>(() => {
    const count = Math.max(1, numberOfAnimals)
    return Array.from({ length: count }, (_, i) => createDefaultAnimal((i + 1).toString()))
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [responseData, setResponseData] = useState<JobResponse | null>(null)

  useEffect(() => {
    const count = Math.max(1, numberOfAnimals)
    setAnimals(Array.from({ length: count }, (_, i) => createDefaultAnimal((i + 1).toString())))
  }, [numberOfAnimals])

  if (responseData) {
    return (
      <BookingConfirmation
        response={responseData}
        onBack={() => setResponseData(null)}
        onAddToCalendar={onAddToCalendar}
      />
    )
  }

  const addAnimal = () => {
    const nextId = (animals.length + 1).toString()
    setAnimals(a => [...a, createDefaultAnimal(nextId)])
  }

  const removeAnimal = (id: string) => {
    if (animals.length > 1) {
      setAnimals(a => a.filter(item => item.id !== id))
    }
  }

  const updateAnimal = (updated: JobAnimal) => {
    setAnimals(a => a.map(item => (item.id === updated.id ? updated : item)))
  }

  const handleSubmit = async () => {
    setError(null)

    // Validate that sex is specified for each animal
    const unselectedSex = animals.some(a => !a.sex)
    if (unselectedSex) {
      setError('Please select Sex for all animals before submitting.')
      return
    }

    setLoading(true)

    try {
      const mappedAnimals: CreateAnimalDto[] = animals.map(a => {
        let splitInfo: string | undefined = undefined
        if (a.splitInfo) {
          const lower = a.splitInfo.toLowerCase()
          if (lower === 'whole' || lower === 'full') splitInfo = 'full'
          else if (lower === 'half') splitInfo = 'half'
          else if (lower === 'quarter') splitInfo = 'quarter'
        }

        return {
          sex: a.sex ? a.sex.toLowerCase() : undefined,
          isOver30Months: Boolean(a.isOver30Months),
          isKillAndChill: Boolean(a.isKillAndChill),
          animalIdentifiers: a.animalIdentifiers.trim() || undefined,
          splitInfo: splitInfo || undefined,
        }
      })

      let mappedInspection = 'standard'
      if (inspectionLevel) {
        const lower = inspectionLevel.toLowerCase().replace(/ /g, '_')
        if (['standard', 'premium', 'organic', 'usda_certified'].includes(lower)) {
          mappedInspection = lower
        }
      }

      const payload: CreateJobDto = {
        specie: specie.toLowerCase(),
        inspectionLevel: mappedInspection,
        dropoffDate: dropoffDate || getTodayString(),
        animals: mappedAnimals,
      }

      const res = await createJob(payload)
      setResponseData(res)
    } catch (err: any) {
      console.error('Failed to create job:', err)
      const msg = err.response?.data?.message || err.message || 'Failed to create booking request'
      setError(Array.isArray(msg) ? msg.join(', ') : msg)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <button onClick={onBack} className="cursor-pointer shrink-0">
          <BackIcon />
        </button>
        <div>
          <h2 className="text-xl font-medium" style={{ color: '#171A26' }}>Schedule New Processing</h2>
        </div>
      </div>

      {error && (
        <div className="p-4 rounded-xl text-sm font-medium bg-red-50 text-red-600 border border-red-200">
          {error}
        </div>
      )}

      {/* Processor Details card */}
      <div
        className="p-4 rounded-2xl flex flex-col gap-3"
        style={{ border: '1px solid #E8E8E9' }}
      >
        {/* Title row */}
        <div className="flex items-center justify-between">
          <span className="text-md font-medium" style={{ color: '#171A26' }}>Processor Details</span>
          <div className="flex items-center gap-2">
            {/* Blue gradient toggle */}
            <button
              type="button"
              onClick={() => setNotifyEmail(n => !n)}
              className="relative cursor-pointer transition-all shrink-0"
              style={{
                width: 36,
                height: 20,
                borderRadius: 100,
                padding: 4,
                background: notifyEmail
                  ? 'radial-gradient(circle at 80% 50%, #93C2FD 0%, #0167FF 70%)'
                  : '#D1D0D2',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <span
                className="absolute bg-white rounded-full transition-all"
                style={{
                  width: 12,
                  height: 12,
                  top: 4,
                  left: notifyEmail ? 20 : 4,
                }}
              />
            </button>
            <span className="text-sm" style={{ color: '#2C2C2E' }}>Add on All animal Groups</span>
          </div>
        </div>

        {/* Contact info row */}
        <div className="flex items-center gap-6 flex-wrap">
          {/* Email */}
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl" style={{ border: '1px solid #E8E8E9' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C21.8063 19.2647 21.9744 17.3219 21.9966 13.75H18.8397C17.8659 13.75 17.6113 13.766 17.3975 13.8644C17.1838 13.9627 17.0059 14.1456 16.3722 14.8849L15.7667 15.5913L15.6794 15.6933C15.1773 16.2803 14.7796 16.7453 14.2292 16.9984C13.6789 17.2515 13.067 17.2509 12.2945 17.2501L12.1603 17.25H11.8397L11.7055 17.2501C10.933 17.2509 10.3211 17.2515 9.77076 16.9984C9.22038 16.7453 8.82271 16.2803 8.32058 15.6933L8.23327 15.5913L7.62784 14.8849C6.9941 14.1456 6.81622 13.9627 6.60245 13.8644C6.38869 13.766 6.13407 13.75 5.16026 13.75H2.00339C2.02561 17.3219 2.19367 19.2647 3.46447 20.5355Z" fill="#FA7522"/>
              <path d="M20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12L2.00001 12.25H5.16026L5.29454 12.2499H5.29455C6.06705 12.2491 6.67886 12.2485 7.22924 12.5016C7.77961 12.7547 8.17729 13.2197 8.67941 13.8067L8.76673 13.9087L9.37216 14.6151C10.0059 15.3544 10.1838 15.5373 10.3975 15.6356C10.6113 15.734 10.8659 15.75 11.8397 15.75H12.1603C13.1341 15.75 13.3887 15.734 13.6025 15.6356C13.8162 15.5373 13.9941 15.3544 14.6278 14.6151L15.2333 13.9087L15.3206 13.8067C15.8227 13.2197 16.2204 12.7547 16.7708 12.5016C17.3211 12.2485 17.933 12.2491 18.7055 12.2499L18.8397 12.25H22L22 12C22 7.28595 22 4.92893 20.5355 3.46447Z" fill="#FA7522"/>
            </svg>
            <span className="text-sm" style={{ color: '#171A26' }}>info123@gmail.com</span>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl" style={{ border: '1px solid #E8E8E9' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z" fill="#0167FF"/>
            </svg>
            <span className="text-sm" style={{ color: '#171A26' }}>(0000)-(000)-(00)</span>
          </div>
        </div>
      </div>

      {/* Description card */}
      <div className="px-4 rounded-2xl flex flex-col gap-1">
        <span className="text-md font-medium" style={{ color: '#171A26' }}>Scheduled Animals</span>
        <span className="text-xs" style={{ color: '#69686D' }}>
          Scheduling {animals.length} animal{animals.length > 1 ? 's' : ''} in 1 job for {specie} on {dropoffDate}.
        </span>
      </div>

      {/* Animal Cards */}
      {animals.map((item, idx) => (
        <AnimalGroupCard
          key={item.id}
          group={item}
          specieName={specie}
          index={idx}
          onChange={updateAnimal}
          onDelete={() => removeAnimal(item.id)}
          canDelete={animals.length > 1}
        />
      ))}

      {/* Add Animal Group button */}
      <button
        type="button"
        onClick={addAnimal}
        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium cursor-pointer w-fit transition-colors hover:bg-gray-100"
        style={{ border: '1px solid #F0F0F0', color: '#69686D', background: '#FCFBFA' }}
      >
        <span style={{ fontSize: 16, lineHeight: 1 }}>+</span>
        Add Animal Group
      </button>

      {/* Bottom actions */}
      <div className="flex justify-end items-center gap-3">
        <button
          type="button"
          onClick={onBack}
          disabled={loading}
          className="px-5 py-2.5 rounded-xl text-sm font-medium cursor-pointer disabled:opacity-50"
          style={{ border: '1px solid #F0F0F0', color: '#69686D', background: '#FCFBFA' }}
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          disabled={loading}
          className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-white cursor-pointer disabled:opacity-50 transition-colors hover:opacity-90"
          style={{ background: '#537F68' }}
        >
          {loading ? (
            <span>Submitting...</span>
          ) : (
            <>
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.975 7.96389C3.75278 7.96389 3.54167 7.875 3.38611 7.71944L0.241667 4.575C-0.0805555 4.25278 -0.0805555 3.71944 0.241667 3.39722C0.563889 3.075 1.09722 3.075 1.41944 3.39722L3.975 5.95278L9.68611 0.241667C10.0083 -0.0805555 10.5417 -0.0805555 10.8639 0.241667C11.1861 0.563889 11.1861 1.09722 10.8639 1.41944L4.56389 7.71944C4.40833 7.875 4.19722 7.96389 3.975 7.96389Z" fill="white"/>
              </svg>
              Send Booking Request
            </>
          )}
        </button>
      </div>
    </div>
  )
}
