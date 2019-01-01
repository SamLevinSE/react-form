import React from 'react';
import './style.css';

export default class StarWarMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            loading: false
        }
    }

    componentDidMount() {
        this.setState({loading: true});
        fetch("https://swapi.co/api/people/3")
            .then(response => response.json())
            .then(data => this.setState({data: data, loading: false}))
    }

    render() {
        const ready = this.state.loading ? (<div style={{backgroundColor: '#eee', padding: '50px'}}>Loading data...</div>) :
            (<div style={{backgroundColor: '#eee', padding: '50px'}}>
                <h2>Character: {this.state.data.name}</h2>
                <ul>
                    <li>Height: {this.state.data.height}</li>
                    <li>Height: {this.state.data.hair_color}</li>
                    <li>Height: {this.state.data.birth_year}</li>
                    <li>Height: {this.state.data.gender}</li>
                </ul>
            </div>);

        return (
            <div>
                {ready}
            </div>
        )
    }
}