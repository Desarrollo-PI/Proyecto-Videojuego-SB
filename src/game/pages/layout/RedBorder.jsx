import React from 'react'

const RedBorder = ({ isPoisoned, isOneHearth, isOpenGameOver }) => {
  const borderColor =
    (isPoisoned && 'rgba(0, 255, 0, 0.5)') ||
    (isOneHearth && 'rgba(255, 0, 0, 0.5)')
  const secondaryBorderColor =
    (isPoisoned && 'rgba(0, 255, 0, 0.2)') ||
    (isOneHearth && 'rgba(255, 0, 0, 0.2)')

  const isVisible = isPoisoned || isOneHearth
  const className = isVisible ? 'red-border' : 'red-border hidden'

  if (isOpenGameOver) {
    return null
  }

  return (
    <div
      className={className}
      style={{
        background: `radial-gradient(circle, rgba(255, 0, 0, 0) 60%, ${secondaryBorderColor} 80%, ${borderColor} 100%)`,
      }}
    />
  )
}

export default RedBorder
