import React from 'react'
import Navbar from './components/Navbar.js'
import Main from './components/Hero.js'
import Card from './components/Card.js'
import data from './data.js'

export default function App(){
    const PlayerDetails= data.map(playerdetails => {
        return (
            <Card
                coverImg={playerdetails.coverImg} title={playerdetails.title} rating={playerdetails.stats.rating} reviewcount={playerdetails.stats.reviewcount} />
        )
            }
        )
    return(
        <div>
            <Navbar/>
            <Main/>
            <div className='card'>
                {PlayerDetails}
            </div>
        </div>
    )
}