export default function LeftPanel() {
  return (
    <div className="hidden lg:flex lg:w-[44%] shrink-0 py-2">
      <img
        src="/Left.svg"
        alt="Catskill Slaughterhouse Management"
        className="w-full h-full object-contain"
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />
    </div>
  )
}
