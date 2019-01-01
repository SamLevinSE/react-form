import React from 'react';

export default function Card(props) {


    return (
        <div style={{textAlign: 'center'}}>
            <img src={props.data.imgSrc} alt={props.data.title}/>
            <br/>
            <button onClick={props.changeFunc}>Click Me</button>
        </div>
    )
}