import React from 'react';
import './style.css';

export default class FormMain extends React.Component {
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
            <div style={{textAlign: 'left', padding: 20}}>
                <hr/>
                <form onSubmit={this.onSubmitEvent}>
                    <label>Sign Up Form</label>
                    <br/>
                    <br/>
                    <input type="text"
                           value={this.state.firstName}
                           name="firstName"
                           onChange={this.onChangeEvent.bind(this)}
                           placeholder="First Name"
                    />
                    <br/>
                    <input type="text"
                           value={this.state.lastName}
                           name="lastName"
                           onChange={this.onChangeEvent.bind(this)}
                           placeholder="Last Name"
                    />
                    <br/>
                    <input type="text"
                           value={this.state.email}
                           name="email"
                           onChange={this.onChangeEvent.bind(this)}
                           placeholder="Your Email"
                    />
                    <br/>
                    <input type="password"
                           value={this.state.password}
                           name="password"
                           onChange={this.onChangeEvent.bind(this)}
                           placeholder="password"
                    />
                    <br/>
                    <br/>
                    <label>
                        <input type="checkbox"
                               value={this.state.plus18}
                               name="plus18"
                               onChange={this.onChangeEvent.bind(this)}
                        /> I am plus 18 years.
                    </label>
                    <br/>
                    <label>Please select your gender: </label>
                    <label>
                        <input type="radio"
                               value="female"
                               name="gender"
                               checked={this.state.gender === "female"}
                               onChange={this.onChangeEvent.bind(this)}
                        />Female
                    </label>
                    <label>
                        <input type="radio"
                               value="male"
                               name="gender"
                               onChange={this.onChangeEvent.bind(this)}
                               checked={this.state.gender === "male"}
                        />Male
                    </label>
                    <br/>
                    <label>Status: </label>
                    <select name="status" id="status" onChange={this.onChangeEvent.bind(this)}>
                        <option value="">-- Please select one --</option>
                        <option value="student">student</option>
                        <option value="employee">employee</option>
                        <option value="entrepreneur">entrepreneur</option>
                        <option value="unemployed">unemployed</option>
                        <option value="retire">retire</option>
                    </select>
                    <br/>
                    <button>Submit</button>
                </form>

                <p>
                    <h4>New Customers Information</h4>
                    Name: <b>{this.state.firstName} {this.state.lastName}</b><br/>
                    Email Address: <b>{this.state.email}</b><br/>
                    {this.state.plus18 ? "I am +18 years old " + this.state.gender + " " + this.state.status : "I am not 18 years old " + this.state.gender + " " + this.state.status}
                </p>
                <hr/>
            </div>
        )
    }
}