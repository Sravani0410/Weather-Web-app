
import './App.css';
import { useEffect, useState } from 'react';

const autoCompleteURL="https://api.weatherapi.com/v1/search.json?key=70758a9eb6674695b77144413222409&q="



function App() {
  const [city,setCity]=useState('')
  const [citySuggestion,setCitySuggestion]=useState([1,2,3,4,5,6,7]);
  const [clicked,setClicked]=useState(false)

  const handleClick=async (clickedCity)=>{
    console.log("clicked:",clickedCity)
      setCity(clickedCity);
      setClicked(true);
  }
  
  useEffect(()=>{
    const getDataAfterTimeout=setTimeout(()=>{
      const fetchCitySuggestion=async()=>{
        const result=await fetch(autoCompleteURL+city)
        const data=await result.json();
        const citySuggestionData=data.map((curData)=>
           `${curData.name},${curData.region},${curData.country}`
        );
        //console.log(citySuggestionData)
        setCitySuggestion(citySuggestionData)
      }
      if(!clicked && city.length>2){
        fetchCitySuggestion();
  
      }
      
      // fetchCitySuggestion() --> we put outside the "if" loop in console it will show the empty object
      else{
        setCitySuggestion([])
        setClicked(false)
      }
    },1000)
    return ()=>clearTimeout(getDataAfterTimeout)
  },[city])
  return (
    <div className="App">
       <div className='header'>
        Weather app
      </div>
      <div className='app-body'>
        <input type="text" className='citytextbox' placeholder="Enter the City"
        value={city}
        onChange={(event)=>setCity(event.target.value)}
        />
        {citySuggestion.length>0&&(
           <div className='suggestionWrapper'>
           {citySuggestion.map((curCity)=>{
             return (
                  <div className='suggestion' onClick={()=>handleClick(curCity)}>{curCity}</div>
             )
             
           })}
           </div>
        )}
    
      </div>
    </div>
  );
}

export default App;
