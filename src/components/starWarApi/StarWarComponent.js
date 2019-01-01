import React from 'react';

export default function StarWarComponent(props) {
    const ready = props.loading ? (<div style={{backgroundColor: '#eee', padding: '50px'}}>Loading data...</div>) :
        (<div style={{backgroundColor: '#eee', padding: '50px'}}>
            <h2>Character: {props.data.name}</h2>
            <ul>
                <li>Height: {props.data.height}</li>
                <li>Hair Color: {props.data.hair_color}</li>
                <li>Birth Year: {props.data.birth_year}</li>
                <li>Gender: {props.data.gender}</li>
            </ul>
        </div>);

    return (
        <div>
            {ready}
        </div>
    )
}