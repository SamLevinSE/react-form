import React from 'react';
import CardComponent from './CardComponent'
import './style.css';

export default class CardContainer extends React.Component {
    state = {
        id: 1,
        title: 'This funny photo',
        imgSrc: 'https://images.ctfassets.net/yadj1kx9rmg0/wtrHxeu3zEoEce2MokCSi/cf6f68efdcf625fdc060607df0f3baef/quwowooybuqbl6ntboz3.jpg'
    };

    render() {
        return (
            <CardComponent data={this.state}/>
        )
    }
}