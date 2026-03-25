import { useRef, useState, useCallback, useEffect } from 'react'

interface TableScrollProps {
  children: React.ReactNode
}

export default function TableScroll({ children }: TableScrollProps) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [thumbLeft, setThumbLeft] = useState(0)
  const [thumbWidth, setThumbWidth] = useState(100)
  const [isOverflowing, setIsOverflowing] = useState(false)
  const isDragging = useRef(false)
  const dragStartX = useRef(0)
  const dragStartScroll = useRef(0)

  const updateThumb = useCallback(() => {
    const el = contentRef.current
    if (!el) return
    const overflows = el.scrollWidth > el.clientWidth
    setIsOverflowing(overflows)
    if (overflows) {
      const ratio = el.clientWidth / el.scrollWidth
      setThumbWidth(ratio * 100)
      setThumbLeft((el.scrollLeft / el.scrollWidth) * 100)
    }
  }, [])

  useEffect(() => {
    updateThumb()
    const ro = new ResizeObserver(updateThumb)
    if (contentRef.current) ro.observe(contentRef.current)
    return () => ro.disconnect()
  }, [updateThumb])

  const onScroll = () => updateThumb()

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true
    dragStartX.current = e.clientX
    dragStartScroll.current = contentRef.current?.scrollLeft ?? 0
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
  }

  const onMouseMove = (e: MouseEvent) => {
    if (!isDragging.current || !contentRef.current) return
    const el = contentRef.current
    const scrollRange = el.scrollWidth - el.clientWidth
    const dx = e.clientX - dragStartX.current
    const scrollDelta = (dx / el.clientWidth) * el.scrollWidth
    el.scrollLeft = Math.max(0, Math.min(scrollRange, dragStartScroll.current + scrollDelta))
  }

  const onMouseUp = () => {
    isDragging.current = false
    window.removeEventListener('mousemove', onMouseMove)
    window.removeEventListener('mouseup', onMouseUp)
  }

  return (
    <div>
      <div
        ref={contentRef}
        onScroll={onScroll}
        style={{ overflowX: 'auto', scrollbarWidth: 'none' }}
        className="[&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>

      {/* Only render scrollbar when content overflows */}
      {isOverflowing && (
        <div style={{ margin: '6px 20px 8px', height: 10, background: '#F0EBE3', position: 'relative' }}>
          <div
            onMouseDown={onMouseDown}
            style={{
              position: 'absolute',
              top: 0,
              left: `${thumbLeft}%`,
              width: `${thumbWidth}%`,
              height: '100%',
              background: '#537F68',
              cursor: 'grab',
            }}
          />
        </div>
      )}
    </div>
  )
}
