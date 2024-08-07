import React from 'react'
import { Link } from "react-router-dom";
import CountryDetails from "./CountryDetails";

export default function CountryCard(props) {
//    e.log(props)
const {name,image,population,region,capital,data}=props;
  return (
    <Link className="country-card" to={`/${name}`} state={data} >
       <div className='flag-container'>
        <img src={image} alt={name + ' Flag'} />
      </div>
            <div className="card-text">
                <h3 className="card-title">{name}</h3>
                <p><b>Population: </b>{population}</p>
                <p><b>Region: </b>{region}</p>
                <p><b>Capital: </b>{capital}  </p>
            </div>
    </Link>
  )
}
