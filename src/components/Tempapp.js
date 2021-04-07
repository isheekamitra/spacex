import React, { useEffect, useState } from 'react';
import "./style.css";
const Tempapp =()=>{
  const [year,setyear]=useState("");
    const [search,setsearch]=useState("");
    const [launch,setlaunch]=useState("");
    const [land,setland]=useState("");
    useEffect(()=>{
        const fetchapi=async()=>{
            
            const url=`https://api.spacexdata.com/v3/launches?limit=100&launch_success=${launch}&land_success=${land}&launch_year=${search}`
            const response =await fetch(url);
           // console.log(response);
           const resjson= await response.json();
           console.log(resjson[0]);
          setyear(resjson[0]); 
          
        }
        fetchapi();
    },[land,launch,search])
    return(
        <>
     <div className="box1"
     >
       <div className="box">
       <input className="input" type="search" placeholder="Enter launch year"
       onChange={(event)=>{
          setsearch(event.target.value)
       }} />
        <input className="input" type="search" placeholder="Enter launch success as true or false"
       onChange={(event)=>{
          setlaunch(event.target.value)
       }} />
        <input className="input" type="search" placeholder="Enter land success as true or false"
       onChange={(event)=>{
          setland(event.target.value)
       }} />

<div className="write">
           {search}<br></br>
           {launch}<br></br>
           {land}  
        
         
           </div>
       </div>
        

           </div>
    
       
       
        </>
    );
}
export default Tempapp;
