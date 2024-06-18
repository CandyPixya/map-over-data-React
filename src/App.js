import React from "react"
import "./index.css"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import earth from "./images/earth.jpg"
import pinky from "./images/pinky.jpg"

/*
Challenge:

- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar
  (in place of the current <Card /> component)

Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.
*/
import data from "./data"


export default function App() {
            // 
            //its like looping over an array... so by this way im getting the data from data.js and naming each of them as item... then i get to their property
            const cards = data.map(item => {
              return(
                <Card 
                  key={item.id}
                  item={item}
                />
              )
            })
    return (
        <div>
            <Navbar />
            <Hero />
            <div className="cards-cont">
              {cards}
            </div>
            
        </div>
    )
}