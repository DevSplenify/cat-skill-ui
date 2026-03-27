import { useState, useRef, useEffect } from 'react'
import TicketStatusBadge from './TicketStatusBadge'

type Tab = 'Ticket Details' | 'Chat'

const BackIcon = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0.5H32C38.3513 0.5 43.5 5.64873 43.5 12V32C43.5 38.3513 38.3513 43.5 32 43.5H12C5.64873 43.5 0.5 38.3513 0.5 32V12C0.5 5.64873 5.64873 0.5 12 0.5Z" stroke="#D1D0D2" />
    <path d="M14.3359 17.833H23.5026C25.0603 17.833 25.8391 17.833 26.4193 18.1679C26.7993 18.3874 27.1149 18.703 27.3343 19.083C27.6693 19.6631 27.6693 20.442 27.6693 21.9997C27.6693 23.5574 27.6693 24.3362 27.3343 24.9163C27.1149 25.2964 26.7993 25.612 26.4193 25.8314C25.8391 26.1663 25.0603 26.1663 23.5026 26.1663H17.6693M14.3359 17.833L16.8359 15.333M14.3359 17.833L16.8359 20.333" stroke="#69686D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

interface Ticket {
  id: string
  client: string
  title: string
  date: string
  status: 'In Progress' | 'Harvested' | 'Resolved' | 'Open'
}

interface Props {
  ticket: Ticket
  onBack: () => void
}

type MessageSide = 'left' | 'right'
interface Message {
  id: number
  side: MessageSide
  text: string
  time: string
  file?: { name: string; size: string }
}

const INITIAL_MESSAGES: Message[] = [
  { id: 1, side: 'right', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac augue eu odio tempor commodo. Nullam ut mattis eros. Cras ut orci nisi.', time: '1 day ago' },
  { id: 2, side: 'left', text: 'Lorem ipsum dolor si amet', time: '1 day ago' },
  { id: 3, side: 'right', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac augue eu odio tempor commodo. Nullam ut mattis eros. Cras ut orci nisi.', time: '1 day ago', file: { name: 'Website Design.fig', size: '300kb' } },
  { id: 4, side: 'left', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac augue eu odio tempor commodo. Nullam ut mattis eros. Cras ut orci nisi.', time: '1 day ago' },
]

export default function TicketDetail({ ticket, onBack }: Props) {
  const [tab, setTab] = useState<Tab>('Ticket Details')
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES)
  const [input, setInput] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, tab])

  const sendMessage = () => {
    const text = input.trim()
    if (!text) return
    setMessages(prev => [...prev, { id: Date.now(), side: 'right', text, time: 'Just now' }])
    setInput('')
    // Simulate reply after 1s
    setTimeout(() => {
      setMessages(prev => [...prev, { id: Date.now() + 1, side: 'left', text: 'Thanks for your message! We will get back to you shortly.', time: 'Just now' }])
    }, 1000)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage() }
  }

  return (
    <div>
      {/* Page header */}
      <div className="flex items-center gap-3 mb-6 flex-wrap">
        <button onClick={onBack} className="cursor-pointer shrink-0">
          <BackIcon />
        </button>
        <h2 className="text-xl font-medium whitespace-nowrap" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>Ticket Details</h2>
        <div className="flex items-center gap-2 flex-wrap">
          <TicketStatusBadge status={ticket.status} />
          <span
            className="text-sm font-semibold px-3 py-1 rounded-full whitespace-nowrap"
            style={{ color: '#0167FF', background: '#EEF4FF', border: '1.5px solid #93C2FD', fontFamily: 'Aeonik' }}
          >
            Payment Issue
          </span>
        </div>
      </div>

      {/* Two-column layout */}
      <div className="flex flex-col lg:flex-row gap-5 items-start">
        {/* Left: Customer Details card */}
        <div className="w-full lg:w-[420px] shrink-0 rounded-2xl p-5" style={{ border: '1px solid #E8E8E9', background: '#F8F8FA' }}>
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-semibold" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>Customer Details</p>
            <button
              className="px-4 py-1.5 rounded-xl text-sm font-medium"
              style={{ border: '1px solid #E8E8E9', color: '#171A26', background: '#fff', fontFamily: 'Aeonik' }}
            >
              Edit
            </button>
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-5">
            <div>
              <p className="text-sm font-semibold" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>{ticket.client}</p>
              <p className="text-xs mt-0.5" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>Name</p>
            </div>
            <div>
              <p className="text-sm font-semibold" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>(0000)-00000-000</p>
              <p className="text-xs mt-0.5" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>Phone number</p>
            </div>
            <div>
              <p className="text-sm font-semibold" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>user123@gmail.com</p>
              <p className="text-xs mt-0.5" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>Email Address</p>
            </div>
            <div>
              <p className="text-sm font-semibold" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>--</p>
              <p className="text-xs mt-0.5" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>Category</p>
            </div>
          </div>
        </div>

        {/* Right: Tabs + content */}
        <div className="flex-1 w-full">
          {/* Tabs */}
          <div className="flex gap-6" style={{ borderBottom: '1px solid #E8E8E9' }}>
            {(['Ticket Details', 'Chat'] as Tab[]).map(t => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className="pb-3 text-sm font-medium relative cursor-pointer"
                style={{ color: tab === t ? '#537F68' : '#69686D', fontFamily: 'Aeonik' }}
              >
                {t}
                {tab === t && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full" style={{ background: '#537F68' }} />
                )}
              </button>
            ))}
          </div>

          {/* Tab content */}
          {tab === 'Ticket Details' && (
            <div className="mt-4 rounded-2xl p-6" style={{ border: '1px solid #E8E8E9', background: '#fff', minHeight: '70vh' }}>
              <p className="text-sm font-semibold mb-3" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>Payment Issue Ticket</p>
              <p className="text-sm font-bold mb-4 leading-relaxed" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>
                I am experiencing a payment issue that needs urgent attention. Please assist me in resolving this matter.
              </p>
              <p className="text-sm mb-4 leading-relaxed" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>
                I hope you're doing well! I wanted to reach out regarding a payment issue I faced while using the system. It appears that my latest transaction didn't process successfully. I would greatly appreciate your assistance in looking into this matter. Thank you for your quick attention to this issue!
              </p>
              <p className="text-sm leading-relaxed" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>
                Additionally, I would like to mention that this is not the first time I've encountered a problem with transactions. It's becoming a bit concerning, and I'm eager to understand what might be causing these issues. If there are any steps I can take on my end to prevent this from happening in the future, please let me know. Your support is invaluable to me!
              </p>
            </div>
          )}

          {tab === 'Chat' && (
            <div className="mt-4 rounded-2xl overflow-hidden flex flex-col" style={{ border: '1px solid #E8E8E9', height: '70vh' }}>
              {/* Chat header */}
              <div className="flex items-center justify-between px-5 py-4 shrink-0" style={{ background: '#FCFBFA', borderBottom: '1px solid #E8E8E9' }}>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img src="https://i.pravatar.cc/40?img=12" alt="avatar" className="w-10 h-10 rounded-full object-cover" />
                    <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white" style={{ background: '#22C55E' }} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>Lucas Bennet</p>
                    <p className="text-xs" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>Online 3 minutes ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <button className="cursor-pointer">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_357_92742)">
                        <path d="M17.2509 10.2781V9.75C17.2509 6.85051 14.9004 4.5 12.0009 4.5C9.10141 4.5 6.7509 6.85051 6.7509 9.75V10.2781C6.7509 10.9118 6.56331 11.5314 6.21178 12.0587L5.35032 13.3509C4.56347 14.5311 5.16417 16.1354 6.5327 16.5087C10.1128 17.4851 13.889 17.4851 17.4691 16.5087C18.8376 16.1354 19.4383 14.5311 18.6515 13.3509L17.79 12.0587C17.4385 11.5314 17.2509 10.9118 17.2509 10.2781Z" stroke="#69686D" stroke-width="1.5" />
                        <path d="M8.625 17.25C9.11627 18.5608 10.4418 19.5 12 19.5C13.5582 19.5 14.8837 18.5608 15.375 17.25" stroke="#69686D" stroke-width="1.5" stroke-linecap="round" />
                      </g>
                      <defs>
                        <clipPath id="clip0_357_92742">
                          <rect width="18" height="18" fill="white" transform="translate(3 3)" />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                  <button className="cursor-pointer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="#69686D" strokeWidth="1.5" /><path d="M16.5 16.5L21 21" stroke="#69686D" strokeWidth="1.5" strokeLinecap="round" /></svg>
                  </button>
                  <button className="cursor-pointer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="5" r="1.5" fill="#69686D" /><circle cx="12" cy="12" r="1.5" fill="#69686D" /><circle cx="12" cy="19" r="1.5" fill="#69686D" /></svg>
                  </button>
                </div>
              </div>

              {/* Messages area */}
              <div className="flex-1 px-5 py-5 flex flex-col gap-5 overflow-y-auto" style={{ background: '#F8F8FA', minHeight: 0 }}>
                {messages.map(msg => (
                  <div key={msg.id} className={`flex flex-col gap-1 ${msg.side === 'right' ? 'items-end' : 'items-start'}`}>
                    <div className={`flex items-end gap-2 ${msg.side === 'right' ? 'flex-row-reverse' : 'flex-row'}`}>
                      <img
                        src={msg.side === 'right' ? 'https://i.pravatar.cc/32?img=8' : 'https://i.pravatar.cc/32?img=12'}
                        alt="avatar"
                        className="w-8 h-8 rounded-full object-cover shrink-0"
                      />
                      <div
                        className="max-w-xs rounded-2xl px-4 py-3 text-sm"
                        style={{
                          background: msg.side === 'right' ? '#EBEBEB' : '#fff',
                          color: '#171A26',
                          fontFamily: 'Aeonik',
                          border: msg.side === 'left' ? '1px solid #E8E8E9' : 'none',
                          borderRadius: msg.side === 'right' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                        }}
                      >
                        {msg.text}
                      </div>
                    </div>
                    {msg.file && (
                      <div className={`flex items-center gap-3 px-4 py-3 rounded-2xl ${msg.side === 'right' ? 'mr-10' : 'ml-10'}`} style={{ background: '#F0F0F0' }}>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                          <path fillRule="evenodd" clipRule="evenodd" d="M25.7026 5.28661C24.4524 4.03636 22.7567 3.33398 20.9886 3.33398H10.4167C6.73477 3.33398 3.75 6.31875 3.75 10.0007V30.0007C3.75 33.6825 6.73477 36.6673 10.4167 36.6673H27.0833C30.7652 36.6673 33.75 33.6825 33.75 30.0007V16.0954C33.75 14.3273 33.0476 12.6316 31.7974 11.3814L25.7026 5.28661Z" fill="#F24E1E"/>
                          <path fillRule="evenodd" clipRule="evenodd" d="M25.7026 5.28661C24.4524 4.03636 22.7567 3.33398 20.9886 3.33398H10.4167C6.73477 3.33398 3.75 6.31875 3.75 10.0007V30.0007C3.75 33.6825 6.73477 36.6673 10.4167 36.6673H27.0833C30.7652 36.6673 33.75 33.6825 33.75 30.0007V16.0954C33.75 14.3273 33.0476 12.6316 31.7974 11.3814L25.7026 5.28661Z" fill="white" fillOpacity="0.8"/>
                          <path fillRule="evenodd" clipRule="evenodd" d="M23.75 3.93359C24.4699 4.26121 25.1326 4.71736 25.7026 5.28742L31.7974 11.3822C31.7976 11.3824 31.7978 11.3825 31.7979 11.3827C32.3677 11.9527 32.8237 12.6151 33.1512 13.3348H27.9167C25.6155 13.3348 23.75 11.4693 23.75 9.16813V3.93359Z" fill="#F24E1E"/>
                          <path d="M16.25 21.2513C16.25 20.1007 17.1827 19.168 18.3333 19.168H34.1667C35.3173 19.168 36.25 20.1007 36.25 21.2513V28.7513C36.25 29.9019 35.3173 30.8346 34.1667 30.8346H18.3333C17.1827 30.8346 16.25 29.9019 16.25 28.7513V21.2513Z" fill="#F24E1E"/>
                          <path d="M29.5156 27.9978C29.1601 27.9978 28.8312 27.9333 28.529 27.8044C28.2267 27.6755 27.9623 27.4955 27.7356 27.2644C27.509 27.0333 27.3312 26.7622 27.2023 26.4511C27.0778 26.14 27.0156 25.8 27.0156 25.4311C27.0156 25.0622 27.0756 24.7222 27.1956 24.4111C27.3201 24.0955 27.4934 23.8244 27.7156 23.5978C27.9423 23.3666 28.2067 23.1889 28.509 23.0644C28.8112 22.9355 29.1401 22.8711 29.4956 22.8711C29.8512 22.8711 30.169 22.9311 30.449 23.0511C30.7334 23.1711 30.9734 23.3311 31.169 23.5311C31.3645 23.7266 31.5045 23.9422 31.589 24.1778L30.7823 24.5644C30.689 24.3066 30.5312 24.0978 30.309 23.9378C30.0867 23.7778 29.8156 23.6978 29.4956 23.6978C29.1845 23.6978 28.909 23.7711 28.669 23.9178C28.4334 24.0644 28.249 24.2666 28.1156 24.5244C27.9867 24.7822 27.9223 25.0844 27.9223 25.4311C27.9223 25.7778 27.989 26.0822 28.1223 26.3444C28.2601 26.6022 28.449 26.8044 28.689 26.9511C28.929 27.0978 29.2045 27.1711 29.5156 27.1711C29.769 27.1711 30.0023 27.1222 30.2156 27.0244C30.429 26.9222 30.6001 26.78 30.729 26.5978C30.8578 26.4111 30.9223 26.1911 30.9223 25.9378V25.5578L31.3356 25.9178H29.4956V25.1511H31.829V25.6511C31.829 26.0333 31.7645 26.3711 31.6356 26.6644C31.5067 26.9578 31.3312 27.2044 31.109 27.4044C30.8912 27.6 30.6445 27.7489 30.369 27.8511C30.0934 27.9489 29.809 27.9978 29.5156 27.9978Z" fill="white"/>
                          <path d="M25.2656 27.9178V22.9512H26.1723V27.9178H25.2656Z" fill="white"/>
                          <path d="M21.3281 27.9178V22.9512H24.6415V23.7512H22.2348V25.1245H24.3415V25.9245H22.2348V27.9178H21.3281Z" fill="white"/>
                        </svg>
                        <div>
                          <p className="text-sm font-semibold" style={{ color: '#171A26', fontFamily: 'Aeonik' }}>{msg.file.name}</p>
                          <p className="text-xs" style={{ color: '#69686D', fontFamily: 'Aeonik' }}>{msg.file.size}</p>
                        </div>
                      </div>
                    )}
                    <p className={`text-xs ${msg.side === 'right' ? 'pr-10' : 'pl-10'}`} style={{ color: '#69686D', fontFamily: 'Aeonik' }}>{msg.time}</p>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Input area */}
              <div className="px-4 py-4 shrink-0" style={{ background: '#FCFBFA', borderTop: '1px solid #E8E8E9' }}>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-3 flex-1 px-4 py-3 rounded-2xl" style={{ background: '#fff', border: '1px solid #E8E8E9' }}>
                    <input
                      type="text"
                      value={input}
                      onChange={e => setInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Type your message. . ."
                      className="flex-1 text-sm outline-none bg-transparent"
                      style={{ color: '#171A26', fontFamily: 'Aeonik' }}
                    />
                    <button className="cursor-pointer shrink-0">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_428_40553)">
                          <path d="M6.59792 14.8384L13.1736 8.54397C13.9631 7.78825 13.9631 6.56299 13.1736 5.80727C12.3842 5.05155 11.1041 5.05155 10.3146 5.80727L3.78656 12.0561C2.28652 13.4919 2.28652 15.8199 3.78656 17.2558C5.2866 18.6916 7.71864 18.6916 9.21868 17.2558L15.8421 10.9158C18.0526 8.79976 18.0526 5.36903 15.8421 3.25302C13.6315 1.13701 10.0474 1.13701 7.83682 3.25302L2.5 8.36152" stroke="#69686D" stroke-width="1.5" stroke-linecap="round" />
                        </g>
                        <defs>
                          <clipPath id="clip0_428_40553">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                  </div>
                  <button
                    onClick={sendMessage}
                    className="w-12 h-10 rounded-xl flex items-center justify-center shrink-0 cursor-pointer transition-opacity"
                    style={{ background: input.trim() ? '#537F68' : '#A0B8AF' }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
