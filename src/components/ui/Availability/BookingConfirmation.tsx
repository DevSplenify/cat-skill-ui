interface BookingConfirmationProps {
  onBack: () => void
  onAddToCalendar: () => void
}

const BackIcon = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0.5H32C38.3513 0.5 43.5 5.64873 43.5 12V32C43.5 38.3513 38.3513 43.5 32 43.5H12C5.64873 43.5 0.5 38.3513 0.5 32V12C0.5 5.64873 5.64873 0.5 12 0.5Z" stroke="#D1D0D2"/>
    <path d="M14.3359 17.833H23.5026C25.0603 17.833 25.8391 17.833 26.4193 18.1679C26.7993 18.3874 27.1149 18.703 27.3343 19.083C27.6693 19.6631 27.6693 20.442 27.6693 21.9997C27.6693 23.5574 27.6693 24.3362 27.3343 24.9163C27.1149 25.2964 26.7993 25.612 26.4193 25.8314C25.8391 26.1663 25.0603 26.1663 23.5026 26.1663H17.6693M14.3359 17.833L16.8359 15.333M14.3359 17.833L16.8359 20.333" stroke="#69686D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const CopyIcon = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M12.5 1.04199H9.11965C7.58819 1.04198 6.37516 1.04197 5.42582 1.16961C4.4488 1.30096 3.65801 1.57773 3.03437 2.20136C2.41073 2.825 2.13397 3.61579 2.00261 4.59281C1.87498 5.54215 1.87499 6.75518 1.875 8.28664V13.3337C1.875 14.8939 3.01838 16.187 4.51293 16.4209C4.6279 17.0576 4.84794 17.601 5.29029 18.0434C5.79189 18.545 6.42345 18.7607 7.17354 18.8616C7.89602 18.9587 8.81462 18.9587 9.95428 18.9587H12.5457C13.6854 18.9587 14.604 18.9587 15.3265 18.8616C16.0766 18.7607 16.7081 18.545 17.2097 18.0434C17.7113 17.5418 17.9271 16.9102 18.0279 16.1601C18.125 15.4376 18.125 14.519 18.125 13.3794V9.12127C18.125 7.98161 18.125 7.06301 18.0279 6.34053C17.9271 5.59044 17.7113 4.95888 17.2097 4.45728C16.7674 4.01493 16.2239 3.7949 15.5873 3.67992C15.3534 2.18537 14.0602 1.04199 12.5 1.04199ZM14.2744 3.55963C14.0221 2.82219 13.323 2.29199 12.5 2.29199H9.16667C7.57765 2.29199 6.44876 2.29332 5.59238 2.40846C4.75397 2.52118 4.27093 2.73257 3.91825 3.08525C3.56558 3.43792 3.35419 3.92096 3.24147 4.75937C3.12633 5.61575 3.125 6.74464 3.125 8.33366V13.3337C3.125 14.1566 3.6552 14.8558 4.39264 15.1081C4.37498 14.5998 4.37499 14.0251 4.375 13.3794V9.12126C4.37498 7.98161 4.37497 7.06301 4.4721 6.34053C4.57295 5.59044 4.7887 4.95888 5.29029 4.45728C5.79189 3.95569 6.42345 3.73994 7.17354 3.6391C7.89601 3.54196 8.81461 3.54198 9.95427 3.54199H12.5457C13.1914 3.54198 13.7661 3.54197 14.2744 3.55963ZM6.17418 5.34117C6.40481 5.11053 6.72862 4.96016 7.3401 4.87795C7.96956 4.79332 8.80382 4.79199 10 4.79199H12.5C13.6962 4.79199 14.5304 4.79332 15.1599 4.87795C15.7714 4.96016 16.0952 5.11053 16.3258 5.34117C16.5565 5.5718 16.7068 5.89561 16.789 6.50709C16.8737 7.13655 16.875 7.97081 16.875 9.16699V13.3337C16.875 14.5298 16.8737 15.3641 16.789 15.9936C16.7068 16.605 16.5565 16.9288 16.3258 17.1595C16.0952 17.3901 15.7714 17.5405 15.1599 17.6227C14.5304 17.7073 13.6962 17.7087 12.5 17.7087H10C8.80382 17.7087 7.96956 17.7073 7.3401 17.6227C6.72862 17.5405 6.40481 17.3901 6.17418 17.1595C5.94354 16.9288 5.79317 16.605 5.71096 15.9936C5.62633 15.3641 5.625 14.5298 5.625 13.3337V9.16699C5.625 7.97081 5.62633 7.13655 5.71096 6.50709C5.79317 5.89561 5.94354 5.5718 6.17418 5.34117Z" fill="#69686D"/>
  </svg>
)

const LinkIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.0659 2.19548C13.2611 0.99557 15.0095 0.97037 15.9774 1.94201C16.9471 2.91549 16.921 4.67486 15.7249 5.87558L13.7051 7.90329C13.4615 8.14784 13.4622 8.54356 13.7068 8.78717C13.9513 9.03077 14.347 9.03001 14.5906 8.78546L16.6105 6.75775C18.2032 5.15882 18.4032 2.60605 16.863 1.05985C15.3209 -0.488199 12.7738 -0.286438 11.1803 1.31331L7.14055 5.36869C5.5478 6.96762 5.34784 9.52042 6.88806 11.0666C7.13167 11.3112 7.52739 11.3119 7.77194 11.0683C8.01649 10.8247 8.01726 10.429 7.77366 10.1845C6.80395 9.21098 6.83006 7.45158 8.02614 6.25086L12.0659 2.19548Z" fill="#69686D"/>
    <path d="M11.0297 6.85112C10.786 6.60657 10.3903 6.60581 10.1458 6.84941C9.90122 7.09302 9.90045 7.48874 10.1441 7.73329C11.1138 8.70678 11.0877 10.4661 9.89157 11.6669L5.85189 15.7223C4.65662 16.9222 2.90822 16.9474 1.94033 15.9757C0.97061 15.0023 0.996728 13.2429 2.19281 12.0421L4.21268 10.0144C4.45629 9.76986 4.45552 9.37414 4.21097 9.13053C3.96642 8.88693 3.57069 8.88769 3.32709 9.13224L1.30722 11.16C-0.28553 12.7589 -0.485496 15.3117 1.05473 16.8579C2.59679 18.406 5.14392 18.2042 6.73748 16.6044L10.7772 12.549C12.3699 10.9501 12.5699 8.39733 11.0297 6.85112Z" fill="#69686D"/>
  </svg>
)

export default function BookingConfirmation({ onBack, onAddToCalendar }: BookingConfirmationProps) {
  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="cursor-pointer shrink-0">
            <BackIcon />
          </button>
          <h2 className="text-xl font-semibold" style={{ color: '#171A26' }}>Heinrich's Processing Details</h2>
        </div>
        <button
          className="px-5 py-3 rounded-xl text-sm font-medium text-white cursor-pointer shrink-0"
          style={{ background: '#537F68' }}
          onClick={onAddToCalendar}
        >
          Add to Calendar
        </button>
      </div>

      {/* Details card */}
      <div
        className="p-5 rounded-2xl flex flex-col gap-4"
        style={{ border: '1px solid #E8E8E9', background: '#F8F8FA' }}
      >
        <span style={{ color: '#171A26', fontFamily: 'Aeonik', fontWeight: 500, fontSize: 16, lineHeight: '24px', letterSpacing: '0.005em' }}>Details</span>

        <div style={{ display: 'grid', gridTemplateColumns: '110px auto 1fr', gap: '12px', alignItems: 'center' }}>
          {/* Row 1 */}
          <span className="text-sm" style={{ color: '#69686D' }}>Status</span>
          <div
            className="flex items-center gap-1.5 px-3 py-1 rounded-full text-sm"
            style={{ border: '1px solid #FFA07A', color: '#FA7522', background: '#FFF5EE', width: 'fit-content' }}
          >
            <span>Scheduled</span>
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
              <path d="M15.8346 7.5L10.0013 12.5L4.16797 7.5" stroke="#FA7522" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-sm font-medium" style={{ color: '#171A26' }}>Scheduled at February 09, 2026 at 3am</span>

          {/* Row 2 */}
          <span className="text-sm" style={{ color: '#69686D' }}>Item</span>
          <div />
          <span className="text-sm font-medium" style={{ color: '#171A26' }}>1USDA, Beef</span>

          {/* Row 3 */}
          <span className="text-sm" style={{ color: '#69686D' }}>Drop Off Date</span>
          <div />
          <span className="text-sm font-medium" style={{ color: '#171A26' }}>February 26, 2026</span>
        </div>
      </div>

      {/* Processor Contact Details card */}
      <div
        className="p-5 rounded-2xl flex flex-col gap-4"
        style={{ border: '1px solid #E8E8E9', background: '#F8F8FA' }}
      >
        <span style={{ color: '#171A26', fontFamily: 'Aeonik', fontWeight: 500, fontSize: 16, lineHeight: '24px', letterSpacing: '0.005em' }}>Processor Contact Details</span>

        <div className="flex items-center gap-3 flex-wrap">
          {/* Name pill */}
          <div
            className="px-3 py-2 rounded-xl text-sm font-medium"
            style={{ border: '1px solid #E8E8E9', color: '#171A26', background: '#fff' }}
          >
            Nelson Weilso
          </div>

          {/* Email */}
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl" style={{ border: '1px solid #E8E8E9', background: '#fff' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C21.8063 19.2647 21.9744 17.3219 21.9966 13.75H18.8397C17.8659 13.75 17.6113 13.766 17.3975 13.8644C17.1838 13.9627 17.0059 14.1456 16.3722 14.8849L15.7667 15.5913L15.6794 15.6933C15.1773 16.2803 14.7796 16.7453 14.2292 16.9984C13.6789 17.2515 13.067 17.2509 12.2945 17.2501L12.1603 17.25H11.8397L11.7055 17.2501C10.933 17.2509 10.3211 17.2515 9.77076 16.9984C9.22038 16.7453 8.82271 16.2803 8.32058 15.6933L8.23327 15.5913L7.62784 14.8849C6.9941 14.1456 6.81622 13.9627 6.60245 13.8644C6.38869 13.766 6.13407 13.75 5.16026 13.75H2.00339C2.02561 17.3219 2.19367 19.2647 3.46447 20.5355Z" fill="#FA7522"/>
              <path d="M20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12L2.00001 12.25H5.16026L5.29454 12.2499H5.29455C6.06705 12.2491 6.67886 12.2485 7.22924 12.5016C7.77961 12.7547 8.17729 13.2197 8.67941 13.8067L8.76673 13.9087L9.37216 14.6151C10.0059 15.3544 10.1838 15.5373 10.3975 15.6356C10.6113 15.734 10.8659 15.75 11.8397 15.75H12.1603C13.1341 15.75 13.3887 15.734 13.6025 15.6356C13.8162 15.5373 13.9941 15.3544 14.6278 14.6151L15.2333 13.9087L15.3206 13.8067C15.8227 13.2197 16.2204 12.7547 16.7708 12.5016C17.3211 12.2485 17.933 12.2491 18.7055 12.2499L18.8397 12.25H22L22 12C22 7.28595 22 4.92893 20.5355 3.46447Z" fill="#FA7522"/>
            </svg>
            <span className="text-sm" style={{ color: '#171A26' }}>info123@gmail.com</span>
            <button className="cursor-pointer"><CopyIcon /></button>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl" style={{ border: '1px solid #E8E8E9', background: '#fff' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z" fill="#0167FF"/>
            </svg>
            <span className="text-sm" style={{ color: '#171A26' }}>(0000)-(000)-(00)</span>
            <button className="cursor-pointer"><CopyIcon /></button>
          </div>

          {/* FAQ's */}
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl" style={{ border: '1px solid #E8E8E9', background: '#fff' }}>
            <div className="w-6 h-6 rounded-lg flex items-center justify-center text-white text-xs font-bold" style={{ background: '#A855F7' }}>?</div>
            <span className="text-sm" style={{ color: '#171A26' }}>FAQ's</span>
            <button className="cursor-pointer"><LinkIcon /></button>
          </div>
        </div>
      </div>

      {/* Important Information */}
      <div className="flex flex-col gap-3">
        <span style={{ color: '#171A26', fontFamily: 'Aeonik', fontWeight: 500, fontSize: 16, lineHeight: '24px', letterSpacing: '0.005em' }}>Important Information</span>
        <ul className="flex flex-col gap-3" style={{ paddingLeft: 20, listStyleType: 'disc' }}>
          <li className="text-sm" style={{ color: '#69686D' }}>
            If you need to cancel or edit the processing job, please contact the processor using this information listed above.
          </li>
          <li className="text-sm" style={{ color: '#69686D' }}>
            You have untill February 15, 2026 to cancel and receive a refund. If you cancel after this date, you will not be refunded your deposit.
          </li>
        </ul>
      </div>
    </div>
  )
}
