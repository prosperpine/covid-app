import React, { useState, useEffect } from 'react'
import { useParams, Link } from "react-router-dom";



export const Country = () => {

  const [name, setName] = useState('')
  const [country, setCountry] = useState('')
  const [deaths, setDeaths] = useState('')
  const [recovered, setRecovered] = useState('')
  const [lastChange, setLastChange] = useState('')

  const onChosen = () => {
    const API = `https://covid-19-data.p.rapidapi.com/country?format=json&name=${name}`

    fetch(API, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
        "x-rapidapi-key": "1e4b307fbemsh2a973cee1729cf8p1336a7jsnc52bf2386738"
      }
    })
      .then((response) => response.json())
      .then((response) => {
        setCountry(response[0].country)
        setDeaths(response[0].deaths)
        setRecovered(response[0].recovered)
        setLastChange(response[0].lastChange)
      })
      .then((response) => {
        console.log(response);
        console.log(country)
        console.log(response[0].deaths)
        console.log(response[0].recovered)
        console.log(response[0].lastUpdate)
      })
      .catch(err => {
        console.log(err);
      })
  }
  return (
    <section>
      <div>
        <h1>hello</h1>
        <form onSubmit={(event) => {
          onChosen(name)
          event.preventDefault()
        }}>
          <label>
            <input
              required
              type='text'
              value={name}
              placeholder='Enter country'
              onChange={(event) => setName(event.target.value)}
            />
          </label>
        </form>
      </div>
      <div>

        <p>{country}</p>
        <p>{deaths}</p>
        <p>{recovered}</p>
        <p>{lastChange}</p>
      </div>
    </section>
  )
}