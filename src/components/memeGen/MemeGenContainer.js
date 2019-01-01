import React from 'react';
import MemeGenComponent from './MemeGenComponent';

export default class MemeGenContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImg: []
        };
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data;
                this.setState({allMemeImg: memes});
            })
    }

    onChangeEvent(event) {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    onClickEvent(event) {
        event.preventDefault();
        const randomInt = Math.floor(Math.random() * this.state.allMemeImg.length);
        const memeRandomImg = this.state.allMemeImg[randomInt].url;
        this.setState({randomImg: memeRandomImg})
    }

    render() {
        return (
            <MemeGenComponent
                data={this.state}
                onChangeEvent={this.onChangeEvent.bind(this)}
                onClickEvent={this.onClickEvent.bind(this)}
            />
        )
    }
}