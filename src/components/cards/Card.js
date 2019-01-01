import React from 'react';

export default class Card extends React.Component {

    changeFunc = () => {console.log('This has been clicked')};

    render() {
        return (
            <div>
                <img src={this.props.data.imgSrc} alt={this.props.data.title}/>
                <h3>{this.props.data.title}</h3>
                <button onClick={this.changeFunc}>Click Me</button>
            </div>
        )
    }
}