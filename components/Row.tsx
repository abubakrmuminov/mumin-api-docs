import React from 'react'

export function Row({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8 items-start">
      {children}
    </div>
  )
}
