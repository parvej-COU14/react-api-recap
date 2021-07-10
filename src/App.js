import { useEffect, useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Country from './components/Country/Country';

function App() {
  const [countries,setCountries]=useState([]);
  const [cart,setCart]=useState([]);
  useEffect(()=>{
      fetch('https://restcountries.eu/rest/v2/all')
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
      setCountries(data)})
      .catch(error=>console.log(error))

  },[])
  const handleButton=(country)=>{
    const newCart=[...cart,country]
    setCart(newCart);
  }
  return (
    <div className="App">
       <h2>Counrty All</h2>
       <h5> Country added : {cart.length}</h5>
       <Cart cart={cart}></Cart>
      <div className="country-details">
      
        {
          countries.map(country=>
          <Country 
           handleButton={handleButton}
          country={country}>

          </Country>)
        }
     
     </div>
    </div>
  );
}

export default App;
