import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import './CSS/ForeCast.css';
import LinearProgress from '@mui/material/LinearProgress';

function ForeCast({city,forecast: {forecastday} }) {
  const [expanded, setExpanded] = useState(false);
  console.log(forecastday)
  const handleChange =
    (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

const forecastSection={
  width:"90vwl"
}
const hourtrack= {
  display:"flex",
 alignItems: "center",
 justifyContent: "space-evenly",
}
const progress={
  width:"70%"
}

  return (
    <div style={forecastSection}>
      forecast for {city}
     {
      forecastday?.map((curDateForecast)=>{
        const {date,day,hour}=curDateForecast;
        console.log(date,day,hour)
        const {maxtemp_c,mintemp_c,daily_chance_of_rain,condition:{icon,text}}=day;
        console.log(maxtemp_c,mintemp_c,daily_chance_of_rain)
        return (
          // console.log(date,day,hour)
          <Accordion expanded={expanded === date} onChange={handleChange(date)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id={date}
          >
            <img src={icon}/>
            <Typography sx={{ width: '33%', flexShrink: 0 }}>{date}
            ({text})
            </Typography>
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              <b>Temp:</b>{mintemp_c} deg to {maxtemp_c} deg
            </Typography>
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              <b>{daily_chance_of_rain}</b> % of rain possible
            </Typography>
           
          </AccordionSummary>
          <AccordionDetails>
            {
              hour?.map((curHourForCast,index)=>{
                return (
                  <div style={hourtrack}>
                    <b>{index}:00</b> 
                    <img src={curHourForCast.condition.icon}/>
                    <div style={progress}>
                    <LinearProgress variant="determinate" value={(curHourForCast.temp_c*100/maxtemp_c)} />
                    {curHourForCast.temp_c} deg
                    </div>
                    {/* {curHourForCast.chance_of_rain} */}
                  </div>
                )
              })
            }
          </AccordionDetails>

        </Accordion>
        ) 
       
      })
     }
     
    </div>
  )
}

export default ForeCast
