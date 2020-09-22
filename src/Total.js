import React, { useState, useEffect } from 'react'
import CountUp from 'react-countup';

export const Total = () => {
  const [totalDeaths, setTotalDeaths] = useState('')
  const [totalConfirmed, setTotalConfirmed] = useState('')
  const [totalRecovered, setTotalRecovered] = useState('')
  const [toatalLastChange, setTotalLastChange] = useState('')


  useEffect(() => {
    fetch("https://covid-19-data.p.rapidapi.com/totals?format=json", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
        "x-rapidapi-key": "1e4b307fbemsh2a973cee1729cf8p1336a7jsnc52bf2386738"
      }
    })
      .then((response) => response.json())
      .then((response) => {

        setTotalConfirmed(response[0].confirmed)
        setTotalDeaths(response[0].deaths)
        setTotalRecovered(response[0].recovered)
        console.log(response)
        console.log(response[0].confirmed)
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <section className="totals">
      <article>
        <h2>Total confirmed cases:</h2>
        <CountUp
          className="numbers"
          end={totalConfirmed}
          separator=" "
          duration={4} />
      </article>
      <article>
        <h2>Total recovered:</h2>
        <CountUp
          className="numbers"
          end={totalRecovered}
          separator=" "
          duration={4} />
      </article>
      <article>
        <h2>Total deaths:</h2>
        <CountUp
          className="numbers"
          end={totalDeaths}
          separator=" "
          duration={4} />
      </article>
    </section>
  )
}
