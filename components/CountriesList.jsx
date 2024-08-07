import React, { useEffect, useState } from 'react'
import CountryCard from './CountryCard'
import CountryListShimmer from './shimmer/CountryListShimmer'

export default function CountriesList({ query }) {
  const [CountriesData, setCountriesData] = useState([])

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data)
      })
  }, [])
  if (!CountriesData.length) {
    return <CountryListShimmer />
  }
  const filteredData = CountriesData.filter((country) => country.name.common.toLowerCase().includes(query) ||
    country.region.toLowerCase().includes(query))


  if (!filteredData.length) {
    return (<>
    <div>Country not found!!</div>
    <div>Try searching for something else.</div>
    </>)
  }
  return (
    <div className='countries-container'>
      {
        filteredData.map((country) => {
          return (
            <CountryCard
              key={country.altSpellings}
              name={country.name.common}
              image={country.flags.svg}
              capital={country.capital}
              population={country.population.toLocaleString('en-IN')}
              region={country.region}
              data={country}
            />
          )
        }

        )}
    </div>
  )
}

