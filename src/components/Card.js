import React from 'react';

export default function Card(props){
    return(
        <div className='card--Hero'>
            <img  className='card--photo' src={props.coverImg}/>
            <div className='card--stats'>   
                <img src="images/star.png" className='star'></img>
                <span>{props.rating}</span>
                <span className='gray'>{props.reviewcount} .</span>
                <span className='gray'>-USA</span>
            </div>
                <p className='card--tagline'>{props.title}</p>
                <p ><span className='bold'>From $126</span> /person</p>
        </div>
    )
}