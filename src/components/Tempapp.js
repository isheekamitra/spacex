import React, { useEffect, useState } from 'react';
import "./style.css";

function Flight(props) {
  let listItems
  const numbers = props.year;
  if(numbers.length===0){
     listItems= <p className="error">No launch is found on this data.</p>
  }
  else{
   listItems = numbers.map((number) =>
   <>
   <li>Flight number:{number.flight_number}</li>
  <li>Mission name:{number.mission_name}</li>
  <li>Mission id:{number.mission_id}</li>
  <br></br>
      </>
       
  );
  }
  return (
    <ul>{listItems}</ul>
  );
}
const Tempapp =()=>{
  const [year,setyear]=useState([]);
    const [search,setsearch]=useState("");
    const [launch,setlaunch]=useState("");
    const [land,setland]=useState("");
    useEffect(()=>{
        const fetchapi=async()=>{
           
            const url=`https://api.spacexdata.com/v3/launches?limit=100&launch_success=${launch}&land_success=${land}&launch_year=${search}`
            const response =await fetch(url);
           // console.log(response);
           const resjson= await response.json();
           console.log(resjson);
          setyear(resjson); 
          
        }
        if(search.length>0)
        fetchapi();
    },[launch,land,search])
    return(
      <>
        

     <div className="box1">
   
       <div className="box">
 
       <input className="input" type="search" placeholder="Enter launch year"
       onChange={(event)=>{
          setsearch(event.target.value)
       }}/>
       <input className="input" type="search" placeholder="Enter launch state true|false"
       onChange={(event)=>{
          setlaunch(event.target.value)
       }} />
 
        <input className="input " type="search" placeholder="Enter land state true|false"
       onChange={(event)=>{
          setland(event.target.value)
       }} />
  

  <div className="result">
<div className="write">
      <div className="typo">
           {search}<br></br>
           {launch}<br></br>
           {land}  
           </div>
        <Flight year={year}/>
         
           </div>
           </div>

      </div>


        

          
    
       </div>
       
      </>
    );
}
export default Tempapp;
