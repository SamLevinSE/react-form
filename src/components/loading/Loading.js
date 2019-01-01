import React from 'react';
import logo from './logo.png'

export default class Loading extends React.Component {
    state = {

    };

    logo = {
        display: 'flex',
        width: '100px',
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "30vh",
        color: "#bfbfbf"
    };

    render() {
        return (<div>
            <img src={logo} alt="logo" style={this.logo}/>
            <p style={this.logo}>Loading...</p>
        </div>)
    }
}