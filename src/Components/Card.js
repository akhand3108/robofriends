import React from 'react'

const Card  = ({id, name, email}) => {
        return ( 
        <div  className= 'tc bg-light-green dib br2 pa1 ma2 grow bw5 shadow-5'>
            <img src= {`https://robohash.org/test${id}?200*200`} alt='{id}'></img>
            <div>
                <h1>{name}</h1>
                <h2>{email}</h2>
            </div>
        </div>
        );
    };

export default Card;