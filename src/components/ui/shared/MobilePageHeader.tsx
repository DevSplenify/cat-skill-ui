const AppIcon = () => (
  <svg width="44" height="46" viewBox="0 0 44 46" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0.5H32C38.3513 0.5 43.5 5.64873 43.5 12V34C43.5 40.3513 38.3513 45.5 32 45.5H12C5.64873 45.5 0.5 40.3513 0.5 34V12C0.5 5.64873 5.64873 0.5 12 0.5Z" fill="white"/>
    <path d="M12 0.5H32C38.3513 0.5 43.5 5.64873 43.5 12V34C43.5 40.3513 38.3513 45.5 32 45.5H12C5.64873 45.5 0.5 40.3513 0.5 34V12C0.5 5.64873 5.64873 0.5 12 0.5Z" stroke="#E8E8E9"/>
    <path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M14.6404 16.4758C13.6641 17.4522 13.6641 19.0235 13.6641 22.1662V23.8329C13.6641 26.9756 13.6641 28.5469 14.6404 29.5232C15.6167 30.4995 17.188 30.4995 20.3307 30.4995H23.6641C23.7343 30.4995 24.4287 30.4996 24.4974 30.4996L24.4974 15.4996C24.4287 15.4996 23.7343 15.4995 23.6641 15.4995H20.3307C17.188 15.4995 15.6167 15.4995 14.6404 16.4758Z" fill="#537F68"/>
    <path d="M30.3333 23.8328V22.1662C30.3333 19.0235 30.3333 17.4521 29.357 16.4758C28.5451 15.6639 26.6966 15.5272 24.5 15.5042V30.4949C26.6966 30.4718 28.5451 30.3351 29.357 29.5232C30.3333 28.5469 30.3333 26.9755 30.3333 23.8328Z" fill="#537F68"/>
  </svg>
)

export default function MobilePageHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="flex items-center gap-3 md:hidden mb-4">
      <div className="shrink-0">
        <AppIcon />
      </div>
      <div>
        <h2 className="text-xl font-medium text-gray-900">{title}</h2>
        <p className="text-xs text-gray-400">{subtitle}</p>
      </div>
    </div>
  )
}
