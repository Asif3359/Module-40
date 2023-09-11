import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import "./Countries.css"

const Countries = () => {
    const [countries , setCountries] = useState([]);

    useEffect( ()=> {
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    const [visitedCountries, setVisitedCountries] = useState([]);
    const handleVisitedCountries = (country) =>{
        const newVisitedCountries=[...visitedCountries,country];
        setVisitedCountries(newVisitedCountries);
    }

    const [visitedFlags, setVisitedFlags] = useState([]);
    const handleVisitedFlags=(country)=>{
        console.log(country);
        const newVisitedFlags=[...visitedFlags,country];
        setVisitedFlags(newVisitedFlags);
    }



    return (
        <div>
            <h3> Countries Length:{countries.length}</h3>
            <div>
                <h5>Visited Country :{visitedCountries.length}</h5>
                <ul>
                    {
                        visitedCountries.map(country => <li className='listFlag' key={country.cca2}>{country.name?.common}</li>)
                    }
                    
                </ul>
            </div>
            <div>
                <h5>Visited Flag :{visitedFlags.length}</h5>
                <div>
                {
                    visitedFlags.map(country => <img className='visitedFlags' key={country.cca2} src={country.flags.png} alt="" />)
                }
                </div>
               
            </div>
            <div className='Countries'>
                {
                    countries.map(country => <Country country={country} key={country.cca2} handleVisitedCountries={handleVisitedCountries } handleVisitedFlags={handleVisitedFlags}></Country>)
                }
            </div>
            
        </div>
    );
};

export default Countries;