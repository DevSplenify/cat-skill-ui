import { useState } from 'react'
import SuccessModal from '../SignIn/SuccessModal'

const TOTAL_STEPS = 14

const CutsheetIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M13 8.92226L7.92226 3.84453C6.79623 2.71849 4.97056 2.71849 3.84453 3.84453C2.71849 4.97056 2.71849 6.79623 3.84453 7.92226L16.0777 20.1555C17.2038 21.2815 19.0294 21.2815 20.1555 20.1555C21.2815 19.0294 21.2815 17.2038 20.1555 16.0777L17.0777 13" stroke="#171A26" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M6 10L10 6" stroke="#171A26" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M16.1 2.30719C16.261 1.8976 16.8385 1.8976 16.9994 2.30719L17.4298 3.40247C17.479 3.52752 17.5776 3.62651 17.7022 3.67583L18.7934 4.1078C19.2015 4.26934 19.2015 4.849 18.7934 5.01054L17.7022 5.44252C17.5776 5.49184 17.479 5.59082 17.4298 5.71587L16.9995 6.81115C16.8385 7.22074 16.261 7.22074 16.1 6.81116L15.6697 5.71587C15.6205 5.59082 15.5219 5.49184 15.3973 5.44252L14.3061 5.01054C13.898 4.849 13.898 4.26934 14.3061 4.1078L15.3973 3.67583C15.5219 3.62651 15.6205 3.52752 15.6697 3.40247L16.1 2.30719Z" stroke="#171A26"/>
  <path d="M19.9691 9.12945C20.1301 8.71987 20.7076 8.71987 20.8685 9.12945L21.0255 9.5288C21.0746 9.65385 21.1732 9.75284 21.2978 9.80215L21.6957 9.95965C22.1038 10.1212 22.1038 10.7009 21.6957 10.8624L21.2978 11.0199C21.1732 11.0692 21.0746 11.1682 21.0255 11.2932L20.8685 11.6926C20.7076 12.1022 20.1301 12.1022 19.9691 11.6926L19.8122 11.2932C19.7631 11.1682 19.6645 11.0692 19.5399 11.0199L19.142 10.8624C18.7339 10.7009 18.7339 10.1212 19.142 9.95965L19.5399 9.80215C19.6645 9.75284 19.7631 9.65385 19.8122 9.5288L19.9691 9.12945Z" stroke="#171A26"/>
  <path d="M5.1332 15.3072C5.29414 14.8976 5.87167 14.8976 6.03261 15.3072L6.18953 15.7065C6.23867 15.8316 6.33729 15.9306 6.46188 15.9799L6.85975 16.1374C7.26783 16.2989 7.26783 16.8786 6.85975 17.0401L6.46188 17.1976C6.33729 17.2469 6.23867 17.3459 6.18953 17.471L6.03261 17.8703C5.87167 18.2799 5.29414 18.2799 5.1332 17.8703L4.97628 17.471C4.92714 17.3459 4.82852 17.2469 4.70393 17.1976L4.30606 17.0401C3.89798 16.8786 3.89798 16.2989 4.30606 16.1374L4.70393 15.9799C4.82852 15.9306 4.92714 15.8316 4.97628 15.7065L5.1332 15.3072Z" stroke="#171A26"/>
  </svg>
  
)

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.46448 6.46447L13.5355 13.5355" stroke="#69686D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.46445 13.5355L13.5355 6.46447" stroke="#69686D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// ─── Reusable choice component ───────────────────────────────────────────────
interface ChoiceOption { value: string; label: string; description?: string }
interface ChoiceStepProps {
  title: string
  subtitle?: string
  options: ChoiceOption[]
  value: string
  onChange: (v: string) => void
}

function ChoiceStep({ title, subtitle, options, value, onChange }: ChoiceStepProps) {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h3 className="text-base font-bold" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>{title}</h3>
        {subtitle && <p className="text-sm mt-1" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>{subtitle}</p>}
      </div>
      <div className="flex flex-col gap-3">
        {options.map(opt => {
          const selected = value === opt.value
          return (
            <button
              key={opt.value}
              onClick={() => onChange(opt.value)}
              className="flex items-center gap-4 px-4 py-5 rounded-2xl text-left w-full cursor-pointer transition-colors"
              style={{
                border: `1.5px solid ${selected ? '#537F68' : '#F0F0F0'}`,
                background: '#F8F8FA',
              }}
            >
              {/* Radio circle */}
              <div
                className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                style={{ border: `2px solid ${selected ? '#537F68' : '#D1D0D2'}`, background: selected ? '#537F68' : '#fff' }}
              >
                {selected && (
                  <div className="w-2 h-2 rounded-full" style={{ background: '#fff' }} />
                )}
              </div>
              <div>
                <p className="text-sm font-semibold" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>{opt.label}</p>
                {opt.description && (
                  <p className="text-xs mt-0.5" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>{opt.description}</p>
                )}
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

// ─── Extras step ──────────────────────────────────────────────────────────────
interface ExtraItem {
  key: string
  title: string
  tag: string
  price: string
  hasQty?: boolean
}

interface ExtrasStepProps {
  selected: Record<string, boolean>
  qty: Record<string, number>
  onToggle: (key: string) => void
  onQty: (key: string, v: number) => void
}

const EXTRA_ITEMS: ExtraItem[] = [
  { key: 'hide', title: 'Keep Hide', tag: 'Ya !', price: '$100' },
  { key: 'organs', title: 'Keep Organs', tag: 'Yuck', price: '$10. per lb + 10 lbs minimum', hasQty: true },
]

function ExtrasStep({ selected, qty, onToggle, onQty }: ExtrasStepProps) {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h3 className="text-base font-bold" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>Extras</h3>
        <p className="text-sm mt-1" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>We Offer extra services for processing the animal so you can get the best from your beef</p>
      </div>
      <div className="flex flex-col gap-3">
        {EXTRA_ITEMS.map(item => {
          const isSelected = !!selected[item.key]
          const quantity = qty[item.key] ?? 0
          const estimatedTotal = `$${quantity * 10}`
          return (
            <div key={item.key} className="rounded-2xl p-4 flex flex-col gap-3" style={{ border: `1.5px solid ${isSelected ? '#537F68' : '#F0F0F0'}`, background: '#F8F8FA' }}>
              <p className="text-sm font-semibold" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>{item.title}</p>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onToggle(item.key)}
                  className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                  style={{ border: `2px solid ${isSelected ? '#537F68' : '#D1D0D2'}`, background: isSelected ? '#537F68' : '#fff' }}
                >
                  {isSelected && <div className="w-2 h-2 rounded-full" style={{ background: '#fff' }} />}
                </button>
                <div className="flex-1 min-w-0">
                  <p className="text-sm" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>{item.tag}</p>
                  <p className="text-sm font-semibold" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>{item.price}</p>
                </div>
                {item.hasQty && (
                  <input
                    type="text" value={qty[item.key] !== undefined ? String(qty[item.key]) : ''}
                    onChange={e => { const n = parseInt(e.target.value); onQty(item.key, isNaN(n) ? 1 : Math.max(1, n)) }}
                    className="w-full sm:w-20 px-3 py-1.5 rounded-xl text-sm outline-none"
                    style={{ border: '1.5px solid #E8E8E9', fontFamily: 'Aeonik', color: '#171A26', background: '#fff' }}
                    placeholder="Qty 1"
                  />
                )}
              </div>
              {item.hasQty && (
                <div>
                  <p className="text-xs" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>Estimated Total</p>
                  <p className="text-sm font-semibold" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>{estimatedTotal}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ─── Trim step ────────────────────────────────────────────────────────────────
interface TrimItem { key: string; title: string; tag: string; price: string }

const TRIM_ITEMS: TrimItem[] = [
  { key: 'sausages', title: 'Sausages', tag: 'Yummy!', price: '$150 per lb . 10 lbs minimum' },
  { key: 'patties', title: 'Patties', tag: 'Double Yummy', price: '$10. per lb + 10 lbs minimum' },
]

interface TrimStepProps {
  selected: Record<string, boolean>
  pct: Record<string, number>
  onToggle: (key: string) => void
  onPct: (key: string, v: number) => void
}

function TrimStep({ selected, pct, onToggle, onPct }: TrimStepProps) {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h3 className="text-base font-bold" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>Trim</h3>
        <p className="text-sm mt-1" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>What would you like to do with your trim? Trim not dedicated to a below option will be ground.</p>
      </div>
      <div className="flex flex-col gap-3">
        {TRIM_ITEMS.map(item => {
          const isSelected = !!selected[item.key]
          return (
            <div key={item.key} className="rounded-2xl p-4" style={{ border: `1.5px solid ${isSelected ? '#537F68' : '#F0F0F0'}`, background: '#F8F8FA' }}>
              <p className="text-sm font-semibold mb-3" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>{item.title}</p>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onToggle(item.key)}
                  className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                  style={{ border: `2px solid ${isSelected ? '#537F68' : '#D1D0D2'}`, background: isSelected ? '#537F68' : '#fff' }}
                >
                  {isSelected && <div className="w-2 h-2 rounded-full" style={{ background: '#fff' }} />}
                </button>
                <div className="flex-1 min-w-0">
                  <p className="text-sm" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>{item.tag}</p>
                  <p className="text-sm font-semibold" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>{item.price}</p>
                </div>
                <div className="flex items-center w-full sm:w-auto sm:flex-1 rounded-xl overflow-hidden" style={{ border: '1.5px solid #E8E8E9', background: '#fff' }}>
                  <input
                    type="number" min={0} max={100}
                    value={pct[item.key] ?? 50}
                    onChange={e => onPct(item.key, Math.min(100, Math.max(0, Number(e.target.value))))}
                    className="w-12 px-3 py-2 text-sm outline-none"
                    style={{ fontFamily: 'Aeonik', color: '#171A26' }}
                  />
                  <span className="flex-1 px-3 py-2 text-sm text-right" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>Percentage (%)</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ─── Review step ──────────────────────────────────────────────────────────────
interface ReviewStepProps {
  answers: Answers
  extrasSelected: Record<string, boolean>
  trimSelected: Record<string, boolean>
  onEdit: (stepIndex: number) => void
}

function ReviewStep({ answers, extrasSelected, trimSelected, onEdit }: ReviewStepProps) {
  const selectedExtras = EXTRA_ITEMS.filter(i => extrasSelected[i.key])
  const selectedTrim = TRIM_ITEMS.filter(i => trimSelected[i.key])

  const rows: { label: string; value: string; step: number }[] = [
    { label: 'Ground Beef Pack Size', value: answers.groundBeefSize ? `${answers.groundBeefSize} pounds` : '—', step: 1 },
    { label: 'Roast Size', value: answers.roastSize ? `${answers.roastSize} pounds` : '—', step: 2 },
    { label: 'Steak Thickness', value: answers.steakThickness ? `${answers.steakThickness} inches` : '—', step: 3 },
    { label: 'Steaks/Pack', value: answers.cutPreference ? `${answers.cutPreference} none` : '—', step: 4 },
    { label: 'Loin Steaks', value: answers.ribs || '—', step: 5 },
    { label: 'Plate Steaks', value: answers.brisket || '—', step: 6 },
    { label: 'Same Subcategory', value: [answers.organs, answers.bones, answers.fat].filter(Boolean).join('\n') || '—', step: 7 },
    { label: 'Extras', value: selectedExtras.map(i => i.title).join('\n') || '—', step: 10 },
    { label: 'Trim', value: selectedTrim.map(i => i.title).join('\n') || 'Trim', step: 11 },
  ]

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h3 className="text-base font-bold" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>Review Your Selections</h3>
        <p className="text-sm mt-1" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>Please review your selections below before submitting your cutsheet</p>
      </div>

      {/* Financial Summary */}
      <div className="rounded-2xl p-4 flex flex-col gap-3" style={{ border: '1px solid #E8E8E9', background: '#F6F2EE' }}>
        <p className="text-sm font-bold" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>Financial Summary</p>
        <div className="flex items-center justify-between" style={{ borderBottom: '1px solid #E8E8E9', paddingBottom: 10 }}>
          <p className="text-sm" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>Base Processing Price:</p>
          <p className="text-sm font-bold" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>$51.00</p>
        </div>
        <div>
          <p className="text-sm mb-2" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>Selected Options:</p>
          <div className="flex flex-col gap-1">
            {selectedExtras.map(item => (
              <div key={item.key} className="flex justify-between">
                <p className="text-sm" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>{item.title}:</p>
                <p className="text-sm" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>{item.price}</p>
              </div>
            ))}
            {selectedTrim.map(item => (
              <div key={item.key} className="flex justify-between">
                <p className="text-sm" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>{item.title}:</p>
                <p className="text-sm" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>{item.price}</p>
              </div>
            ))}
            {selectedExtras.length === 0 && selectedTrim.length === 0 && (
              <p className="text-sm" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>No extras selected</p>
            )}
          </div>
        </div>
      </div>

      {/* Answer rows */}
      <div className="flex flex-col gap-3">
        {rows.map(row => (
          <div key={row.label} className="rounded-2xl px-4 py-4 flex items-start justify-between gap-4" style={{ border: '1px solid #E8E8E9', background: '#F8F8FA' }}>
            <div>
              <p className="text-sm font-semibold" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>{row.label}</p>
              {row.value.split('\n').map((v, i) => (
                <p key={i} className="text-sm" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>{v}</p>
              ))}
            </div>
            <button
              onClick={() => onEdit(row.step)}
              className="shrink-0 px-4 py-1.5 rounded-xl text-sm font-medium cursor-pointer"
              style={{ border: '1px solid #E8E8E9', background: '#fff', color: '#171A26', fontFamily: 'Aeonik' }}
            >
              Edit
            </button>
          </div>
        ))}
      </div>

      {/* Info note */}
      <div className="rounded-2xl px-4 py-4" style={{ background: '#F0F5FF' }}>
        <p className="text-sm" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>
          This is a preview of the cutsheet wizard your customers will see. Click "Complete" to finish the preview and reset for another walkthrough.
        </p>
      </div>
    </div>
  )
}

// ─── Reusable text input step ─────────────────────────────────────────────────
interface TextStepProps { title: string; subtitle?: string; placeholder: string; multiline?: boolean; value: string; onChange: (v: string) => void }
function TextStep({ title, subtitle, placeholder, multiline, value, onChange }: TextStepProps) {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h3 className="text-base font-bold" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>{title}</h3>
        {subtitle && <p className="text-sm mt-1" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>{subtitle}</p>}
      </div>
      {multiline ? (
        <textarea
          value={value} onChange={e => onChange(e.target.value)}
          placeholder={placeholder} rows={4}
          className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
          style={{ border: '1.5px solid #E8E8E9', fontFamily: 'Aeonik', color: '#171A26', background: '#fff' }}
        />
      ) : (
        <input
          type="text" value={value} onChange={e => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full px-4 py-3 rounded-xl text-sm outline-none"
          style={{ border: '1.5px solid #E8E8E9', fontFamily: 'Aeonik', color: '#171A26', background: '#fff' }}
        />
      )}
    </div>
  )
}

// ─── Step 1 — Welcome ─────────────────────────────────────────────────────────
function WelcomeStep() {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-base font-bold" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>Hi There !</h3>
      <p className="text-sm" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>This will take 5-10 minutes.</p>
      <ol className="flex flex-col gap-3 list-decimal pl-5">
        {[
          'You will see picture and descriptions for every cut.',
          "We'll explain the trade-offs between different options.",
          'You can go back and change your mind at any time',
          'We will show you a complete summary before submitting',
        ].map((item, i) => (
          <li key={i} className="text-sm" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>{item}</li>
        ))}
      </ol>
    </div>
  )
}

// ─── Wizard state ─────────────────────────────────────────────────────────────
interface Answers {
  animalType: string
  groundBeefSize: string
  cutPreference: string
  steakThickness: string
  roastSize: string
  ribs: string
  brisket: string
  organs: string
  bones: string
  fat: string
  packaging: string
  inspection: string
  notes: string
}

interface CutsheetWizardProps { onClose: () => void }

export default function CutsheetWizard({ onClose }: CutsheetWizardProps) {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Answers>({
    animalType: '', groundBeefSize: '', cutPreference: '',
    steakThickness: '', roastSize: '', ribs: '', brisket: '',
    organs: '', bones: '', fat: '', packaging: '', inspection: '', notes: '',
  })
  const [extrasSelected, setExtrasSelected] = useState<Record<string, boolean>>({})
  const [extrasQty, setExtrasQty] = useState<Record<string, number>>({})
  const [trimSelected, setTrimSelected] = useState<Record<string, boolean>>({})
  const [trimPct, setTrimPct] = useState<Record<string, number>>({})
  const [showSuccess, setShowSuccess] = useState(false)

  const set = (key: keyof Answers) => (v: string) => setAnswers(a => ({ ...a, [key]: v }))
  const toggleExtra = (key: string) => setExtrasSelected(s => ({ ...s, [key]: !s[key] }))
  const setExtraQty = (key: string, v: number) => setExtrasQty(q => ({ ...q, [key]: v }))
  const toggleTrim = (key: string) => setTrimSelected(s => ({ ...s, [key]: !s[key] }))
  const setTrimPctVal = (key: string, v: number) => setTrimPct(q => ({ ...q, [key]: v }))

  const progress = ((step + 1) / TOTAL_STEPS) * 100
  const isLast = step === TOTAL_STEPS - 1

  const steps = [
    <WelcomeStep key={0} />,
    <ChoiceStep key={1}
      title="Ground Beef Pack Size"
      subtitle="Pick ground meat based on family size"
      value={answers.groundBeefSize}
      onChange={set('groundBeefSize')}
      options={[
        { value: '1lb', label: '1 lb', description: 'perfect for household of 1-2 people' },
        { value: '1.5lb', label: '1.5 lb', description: 'recommended for households eating ground beef once a week' },
        { value: '2lb', label: '2 lb', description: 'great for families & entertainers' },
      ]}
    />,
    <ChoiceStep key={2}
      title="Roast Size"
      subtitle="Roasts can be cut in various sizes to fit the needs of your household"
      value={answers.roastSize}
      onChange={set('roastSize')}
      options={[
        { value: '2-3lb', label: '2-3 lb.' },
        { value: '3-4lb', label: '3-4 lb.' },
        { value: '4-5lb', label: '4-5 lb' },
      ]}
    />,
    <ChoiceStep key={3}
      title="Steak Thickness"
      subtitle="Steak thickness preferences can vary greatly. The thickness impacts how quickly your steak will cook & the juice it retains."
      value={answers.steakThickness}
      onChange={set('steakThickness')}
      options={[
        { value: '0.75in', label: '0.75 in.' },
        { value: '1in', label: '1 in.' },
        { value: '1.25in', label: '1.25 in.' },
        { value: '1.5in', label: '1.5 in.' },
        { value: '1.75in', label: '1.75 in.' },
        { value: '2in', label: '2 in.' },
      ]}
    />,
    <ChoiceStep key={4}
      title="Steaks/Pack"
      subtitle="Steak thickness preferences can vary greatly. The thickness impacts how quickly your steak will cook & the juice it retains."
      value={answers.cutPreference}
      onChange={set('cutPreference')}
      options={[
        { value: '1', label: '1' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
      ]}
    />,
    <ChoiceStep key={5}
      title="Loin Steaks"
      subtitle="Please select at least one cut in loin steaks"
      value={answers.ribs}
      onChange={set('ribs')}
      options={[
        { value: 'porterhouse', label: 'Porterhouse', description: 'Best for juicy steaks' },
        { value: 'usda-tbone', label: 'USDA-T Bone', description: 'Best for T Bone' },
      ]}
    />,
    <ChoiceStep key={6}
      title="Plate Steaks"
      subtitle="Please select at least one cut in loin steaks"
      value={answers.brisket}
      onChange={set('brisket')}
      options={[
        { value: 'skirt', label: 'Skirt' },
        { value: 'hanger', label: 'Hanger' },
      ]}
    />,
    <ChoiceStep key={7}
      title="Same Subcategory"
      subtitle="Please select a cut for the offal"
      value={answers.organs}
      onChange={set('organs')}
      options={[
        { value: 'suet', label: 'Suet' },
        { value: 'heart', label: 'Heart' },
        { value: 'liver', label: 'Liver' },
        { value: 'tongue', label: 'Tongue' },
        { value: 'oxtail', label: 'Oxtail' },
      ]}
    />,
    <ChoiceStep key={8}
      title="Same Subcategory"
      subtitle="Please select a cut for the offal"
      value={answers.bones}
      onChange={set('bones')}
      options={[
        { value: 'whole', label: 'Whole' },
        { value: 'cross-cut', label: 'Cross-cut' },
      ]}
    />,
    <ChoiceStep key={9}
      title="Same Subcategory"
      value={answers.fat}
      onChange={set('fat')}
      options={[
        { value: 'all-bones', label: 'All Bones' },
        { value: 'all-steak', label: 'All Steak' },
      ]}
    />,
    <ExtrasStep key={10}
      selected={extrasSelected}
      qty={extrasQty}
      onToggle={toggleExtra}
      onQty={setExtraQty}
    />,
    <TrimStep key={11}
      selected={trimSelected}
      pct={trimPct}
      onToggle={toggleTrim}
      onPct={setTrimPctVal}
    />,
    <ReviewStep key={12}
      answers={answers}
      extrasSelected={extrasSelected}
      trimSelected={trimSelected}
      onEdit={i => setStep(i)}
    />,
    <TextStep key={13}
      title="Additional Notes"
      subtitle="Any special instructions for the processor?"
      placeholder="Enter any special requests or notes..."
      multiline
      value={answers.notes}
      onChange={set('notes')}
    />,
  ]

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-50 bg-black/40" onClick={onClose} />

      {/* Modal */}
      <div
        className="fixed z-50 inset-x-4 top-1/2 -translate-y-1/2 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-3xl rounded-2xl bg-white flex flex-col"
        style={{ maxHeight: '90vh' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5" style={{ borderBottom: '1px solid #E8E8E9' }}>
          <div className="flex items-center gap-2">
            <CutsheetIcon />
            <span className="text-base font-semibold" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>Add Cutsheet</span>
          </div>
          <button onClick={onClose} className="cursor-pointer flex items-center justify-center"><CloseIcon /></button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6 [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none' }}>
          <div className="rounded-2xl p-5 flex flex-col gap-4" style={{ background: '#F8F8FA', border: '1px solid #E8E8E9' }}>
            <span className="text-base font-bold" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>Cutsheet Wizard</span>
            <span className="text-sm" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>Step {step + 1}/{TOTAL_STEPS}</span>

            {/* Progress bar */}
            <div className="w-full rounded-full overflow-hidden" style={{ height: 8, background: '#E8E8E9' }}>
              <div
                className="h-full rounded-full transition-all duration-300"
                style={{ width: `${progress}%`, background: 'linear-gradient(90deg, #93C2FD 0%, #0167FF 100%)' }}
              />
            </div>

            {/* Step card */}
            <div className="rounded-2xl p-5 bg-white" style={{ border: '1px solid #E8E8E9' }}>
              {steps[step]}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-5" style={{ borderTop: '1px solid #E8E8E9' }}>
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl text-sm font-medium cursor-pointer"
            style={{ border: '1px solid #E8E8E9', color: '#171A26', background: '#fff', fontFamily: 'Aeonik' }}
          >
            Cancel
          </button>
          <div className="flex items-center gap-3">
            {step > 0 && (
              <button
                onClick={() => setStep(s => s - 1)}
                className="px-6 py-2.5 rounded-xl text-sm font-medium cursor-pointer"
                style={{ border: '1px solid #E8E8E9', color: '#171A26', background: '#fff', fontFamily: 'Aeonik' }}
              >
                Back
              </button>
            )}
            <button
              onClick={() => isLast ? setShowSuccess(true) : setStep(s => s + 1)}
              className="px-6 py-2.5 rounded-xl text-sm font-medium text-white cursor-pointer"
              style={{ background: '#537F68', fontFamily: 'Aeonik' }}
            >
              {isLast ? 'Submit' : 'Next Step'}
            </button>
          </div>
        </div>
      </div>
      {showSuccess && (
        <SuccessModal
          title="Successfully Created"
          message="Your cutsheet created successfully"
          onCancel={() => { setShowSuccess(false); onClose() }}
          onOkay={() => { setShowSuccess(false); onClose() }}
        />
      )}
    </>
  )
}
