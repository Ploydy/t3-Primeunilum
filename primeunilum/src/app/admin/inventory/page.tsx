import React from 'react'
import AluminumCard from '~/app/ui/cards/products/aluminum'
import GlassCard from '~/app/ui/cards/products/glass'

export default function Stocks() {
  return (
    <div>
      <h1>Aluminum</h1>
      <AluminumCard />
      <h1>Glass</h1>
      <GlassCard />
    </div>
  )
}