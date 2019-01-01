import React from 'react';
import StarWarComponent from './StarWarComponent';
import './style.css';

export default class StarWarContainer extends React.Component {
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
        return <StarWarComponent data={this.state.data}/>
    }
}