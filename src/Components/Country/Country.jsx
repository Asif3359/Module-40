
import { useState } from "react";
import "./Country.css"

const Country = ({country,handleVisitedCountries,handleVisitedFlags}) => {
    //  console.log(country);

     const {name,flags, languages,population,cca3 } = country;

    let element;  
    for (const key in languages) {
        if (Object.hasOwnProperty.call(languages, key)) {
            element = languages[key];   
        }
     }

     const [Visited , setVisited] = useState(false);
     const handelVisited = ()=>{
        setVisited(!Visited);
     }

     const PassWithParams = ()=>{
        handleVisitedCountries(country);
     }

    return (
        <div className={`Country ${Visited &&"visited"}`}>
            <h3>Name :{name.common} </h3>
            <h4>Language :{element} </h4>
            <div>
                <h4>Flag:</h4>
                <img className="Flag" src={flags.png} alt="" />
                <p>Population {population}</p>
                <p><small>Code {cca3}</small></p>
                <button onClick={PassWithParams}>Mark Visit</button>
                <br />
                <button onClick={handelVisited} >{Visited?" Visited":"Going"}</button>
                {
                    Visited && " I have Visited This Country"
                }
                <br />
                <button onClick={()=>handleVisitedFlags(country) }>Visited Flag</button>
            </div>
        </div>
    );
};

export default Country;

