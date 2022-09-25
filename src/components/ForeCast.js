import React from 'react';
import {  useState,useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function ForeCast({city,forecast:forecastday
}) {
  //  console.log(city,forecastday)
    const [expanded, setExpanded] =useState(false);
    const [forecastday1,setForeCastDay1]=useState([])

    // console.log(forecastday1)

    useEffect(()=>{
      console.log(forecastday)
      setForeCastDay1(forecastday)
      // console.log(forecastday1)
      // console.log(forecastday1.date)
    },[])
    // console.log(forecastday1)
    const handleChange =
      (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
      };
  return (
    <div>
      Forecast for {city}
      {/* <Accordion expanded={expanded === forecastday.date} onChange={handleChange(forecastday.date)}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id={forecastday.date}
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    {forecastday.date}
                  </Typography>
                  <Typography sx={{ color: 'text.secondary' }}>I am an {forecastday.date}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                 
                </AccordionDetails>
              </Accordion> */}
            
{/* {
  forecastday1.map((curDate)=>{
   console.log(curDate)
  })
} */}
      {/* {
        forecastday.map((curDate) =>{
          return(
            console.log(curDate)
          )
            
            
              //   <Accordion expanded={expanded === curDate.date} onChange={handleChange(curDate.date)}>
              //   <AccordionSummary
              //     expandIcon={<ExpandMoreIcon />}
              //     aria-controls="panel1bh-content"
              //     id={curDate.date}
              //   >
              //     <Typography sx={{ width: '33%', flexShrink: 0 }}>
              //       {curDate.date}
              //     </Typography>
              //     <Typography sx={{ color: 'text.secondary' }}>I am an {curDate.date}</Typography>
              //   </AccordionSummary>
              //   <AccordionDetails>
                 
              //   </AccordionDetails>
              // </Accordion>
            
               
        })
     }      
             */}
            
         
            
             
            
            
        
        
      
     

      

      

    </div>
  )
}

export default ForeCast
