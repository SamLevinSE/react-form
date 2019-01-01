import React from 'react';
import './style.css';
import FormComponent from './FormComponent'

export default class FormContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            plus18: false,
            gender: "",
            status: ""
        }
    }

    onChangeEvent(event) {
        const {name, value, type, checked} = event.target;
        type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value});
    }

    onSubmitEvent(event) {
        event.preventDefault();
        alert('works');
    }

    render() {
        return (
            <FormComponent
                data={this.state}
                onChangeEvent={this.onChangeEvent.bind(this)}
                onSubmitEvent={this.onSubmitEvent.bind(this)}
            />
        )
    }
}