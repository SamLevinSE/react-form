import React from 'react';

export default function CardComponent(props) {


    return (
        <div style={{textAlign: 'center'}}>
            <img src={props.data.imgSrc} alt={props.data.title}/>
        </div>
    )
}