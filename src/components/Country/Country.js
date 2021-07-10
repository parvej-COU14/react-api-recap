import React from 'react';
import './Country.css'

const Country = (props) => {
    const {flag,name,capital,population}=props.country;
    const handleButton=props.handleButton
    return (
        <div className="country">
            <div>
               <img src={flag} alt="flag"></img>
            </div>
             <div className="details">
               <h3>{name}</h3>
               <p>{capital}</p>
               <p><small>{population}</small></p>
               <button onClick={()=> handleButton(props.country)}>Add Country</button>
             </div>
        </div>
    );
};

export default Country;