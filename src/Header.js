import React from 'react'

export const Header = () => {
  const moment = require('moment');
  return (
    <section className="header">
      <h1>Covid-19 in the world today</h1>
      <h2>{moment().format('YYYY-MM-DD')}</h2>
    </section>
  )
}