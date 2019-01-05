import React from 'react';

export default function (props) {
    return (
        <div style={{paddingLeft: "20px"}}>
            <p>{props.lorem}</p>
            <button onClick={props.doSomething}>{props.title}</button>
            <hr/>
        </div>
    )
}