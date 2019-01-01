import React from 'react';
import logo from './logo.png'

export default function Loading() {
    let logoStyle = {
        display: 'flex',
        width: '100px',
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "30vh",
        color: "#bfbfbf"
    };

    return (<div>
        <img src={logo} alt="logo" style={logoStyle}/>
        <p style={logoStyle}>Loading...</p>
    </div>)
}