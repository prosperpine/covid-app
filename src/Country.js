import React, { useState } from 'react'
import CountUp from 'react-countup';

export const Country = () => {
  const moment = require('moment');
  const [name, setName] = useState('')
  const [country, setCountry] = useState('')
  const [deaths, setDeaths] = useState('')
  const [confirmed, setConfirmed] = useState('')
  const [recovered, setRecovered] = useState('')
  const [lastChange, setLastChange] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const onChosen = () => {
    const API = `https://covid-19-data.p.rapidapi.com/country?format=json&name=${name}`

    fetch(API, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
        "x-rapidapi-key": '1e4b307fbemsh2a973cee1729cf8p1336a7jsnc52bf2386738'
      }
    })
      .then((response) => response.json())
      .then((response) => {
        setCountry(response[0].country)
        setDeaths(response[0].deaths)
        setConfirmed(response[0].confirmed)
        setRecovered(response[0].recovered)
        setLastChange(response[0].lastChange)
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage(errorMessage)
      })
    setName('')
  }
  return (
    <section className="country">
      <div className="inputField">
        <h3>Enter name of country for details.</h3>
        <p>Ie UK, Sweden, Vietnam, South Africa</p>
        <form onSubmit={(event) => {
          event.preventDefault()
          onChosen(name)
        }}>
          <label>
            <input
              className="input"
              required
              type='text'
              value={name}
              placeholder='Enter country'
              onChange={(event) => {
                event.preventDefault()
                setName(event.target.value)
              }}
            />
            <button type="submit">check</button>
          </label>
        </form>
      </div>



      <div className="countrySection">
        <div className="countryData">
          <h1>{country}</h1>
          <h2>Updated: {moment(lastChange).format('YYYY-MM-DD HH:MM')}</h2>
        </div>
        <div className="totals">
          <article>
            <h2>Confirmed cases:</h2>
            <CountUp
              className="numbers"
              end={confirmed}
              separator=" "
              duration={4} />
          </article>
          <article>
            <h2>Recovered:</h2>
            <CountUp
              className="numbers"
              end={recovered}
              separator=" "
              duration={4} />
          </article>
          <article>   <h2>Deaths:</h2>
            <CountUp
              className="numbers"
              end={deaths}
              separator=" "
              duration={4} />
          </article>
        </div>
      </div>
    </section>
  )
}