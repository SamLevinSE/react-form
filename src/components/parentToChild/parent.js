import React from 'react';
import Child from './child';

export default class Parent extends React.Component {
    state = {
        lorem: 'Some dummy lorem text should come here ...'
    };

    doSomething = (props) => {
        this.setState({lorem: props})
    };

    render(props) {
        return (
            <Child {...this.props}
                   lorem={this.state.lorem}
                   doSomething={this.doSomething.bind(this, 'Some other dummy text from props')}
            />
        )
    }
}