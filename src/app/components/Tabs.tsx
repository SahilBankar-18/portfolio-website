'use client'

import * as React from 'react'
import { useState } from 'react'

interface TabsProps {
  defaultValue: string
  className?: string
  onValueChange?: (value: string) => void
  children: React.ReactNode
}

export function Tabs({ defaultValue, className = '', onValueChange, children }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue)

  const handleChange = (value: string) => {
    setActiveTab(value)
    if (onValueChange) {
      onValueChange(value)
    }
  }

  return (
    <div className={`tabs-container ${className}`}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child) && (child.type === TabsList || child.type === TabsContent)
          ? React.cloneElement(child, { activeTab, onChange: handleChange } as any)
          : child
      )}
    </div>
  )
}

interface TabsListProps {
  className?: string
  activeTab?: string
  onChange?: (value: string) => void
  children: React.ReactNode
}

export function TabsList({ className = '', activeTab, onChange, children }: TabsListProps) {
  return (
    <div className={`tabs-list flex ${className}`}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child) && child.type === TabsTrigger
          ? React.cloneElement(child, { activeTab, onChange } as any)
          : child
      )}
    </div>
  )
}

interface TabsTriggerProps {
  value: string
  className?: string
  activeTab?: string
  onChange?: (value: string) => void
  children: React.ReactNode
}

export function TabsTrigger({ value, className = '', activeTab, onChange, children }: TabsTriggerProps) {
  const isActive = value === activeTab

  return (
    <button
      onClick={() => onChange?.(value)}
      className={`tabs-trigger px-4 py-2 rounded-lg ${
        isActive ? 'bg-purple text-white' : ''
      } ${className}`}
    >
      {children}
    </button>
  )
}

interface TabsContentProps {
  value: string
  className?: string
  activeTab?: string
  children: React.ReactNode
}

export function TabsContent({ value, className = '', activeTab, children }: TabsContentProps) {
  return activeTab === value ? <div className={`tabs-content ${className}`}>{children}</div> : null
}
