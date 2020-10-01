import React from 'react'
import { Header } from './Header'
import { Total } from './Total'
import { Country } from './Country'
import { Footer } from './Footer'

export const App = () => {
  return (
    <section>
      <Header />
      <Total />
      <Country />
      <Footer />
    </section>
  )
}
