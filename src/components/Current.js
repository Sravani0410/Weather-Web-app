
import React from 'react';
import "./Current.css";

function Current({current,city}) {
  return (
    <div className='current'>
        <b>{city}</b>
        <br/>
        <br/>
        <b>Current weather</b>
        
        <div className='currentBody'>
            {/* <img src={current.condition.icon}/> */}
             
            <img src={current.condition.icon}/>
            <span>{current.condition.text}</span>
            <span><b>feel-like:</b>{current.feelslike_c} °deg</span>
            <span><b>Temp:</b>{current.temp_c}°deg</span>
            <span><b>Pressure:</b>{current.pressure_mb} hpa</span>
            <span><b>Humidity:</b>{current.humidity} %</span>
        </div>
    </div>
  )
}

export default Current
