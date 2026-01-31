import React from 'react'
import { cn } from '@/utils/cn'

export function Col({ children, sticky = false }: { children: React.ReactNode, sticky?: boolean }) {
  return (
    <div className={cn('w-full min-w-0', sticky && 'lg:sticky lg:top-24')}>
      {children}
    </div>
  )
}
