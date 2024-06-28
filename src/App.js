import React from 'react'
import './App.css';
import './App.css'
import travelArray from './card'

let travelElements = travelArray.map(item =>{
  return <Hero 
    key = {item.id}
    item = {item}
  />
})

function NavBar(){
  return(
    <h4> My travel journal </h4>
  );
}


function Hero(props){
  return(
    <div className = "travel-card">
      <div class = "travel-img">
        <img src = {props.item.image} />
      </div>
      <div class = "travel-details">
        <div class = "travel-details-header">
          <h4> {props.item.location} </h4>
          <a href = {props.item.googleMapsUrl}> view on google maps </a>
        </div>
        <h2> {props.item.title}</h2>
        <b><p> {props.item.startDate} - {props.item.endDate} </p></b>
        <p> {props.item.description} </p>
      </div>
    </div>
  );
}

export default function(){
  return(
    <>
      <nav>
        <NavBar />
      </nav>
      <main>
        {travelElements}
      </main>
    </>
  )
}