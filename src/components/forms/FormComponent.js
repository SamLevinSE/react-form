import React from 'react';

export default function FormComponent(props) {
    return (
        <div style={{textAlign: 'left', padding: 20}}>
            <hr/>
            <form onSubmit={props.onSubmitEvent}>
                <label>Sign Up Form</label>
                <br/>
                <br/>
                <input type="text"
                       value={props.data.firstName}
                       name="firstName"
                       onChange={props.onChangeEvent}
                       placeholder="First Name"
                />
                <br/>
                <input type="text"
                       value={props.data.lastName}
                       name="lastName"
                       onChange={props.onChangeEvent}
                       placeholder="Last Name"
                />
                <br/>
                <input type="text"
                       value={props.data.email}
                       name="email"
                       onChange={props.onChangeEvent}
                       placeholder="Your Email"
                />
                <br/>
                <input type="password"
                       value={props.data.password}
                       name="password"
                       onChange={props.onChangeEvent}
                       placeholder="password"
                />
                <br/>
                <br/>
                <label>
                    <input type="checkbox"
                           value={props.data.plus18}
                           name="plus18"
                           onChange={props.onChangeEvent}
                    /> I am plus 18 years.
                </label>
                <br/>
                <label>Please select your gender: </label>
                <label>
                    <input type="radio"
                           value="female"
                           name="gender"
                           checked={props.data.gender === "female"}
                           onChange={props.onChangeEvent}
                    />Female
                </label>
                <label>
                    <input type="radio"
                           value="male"
                           name="gender"
                           onChange={props.onChangeEvent}
                           checked={props.data.gender === "male"}
                    />Male
                </label>
                <br/>
                <label>Status: </label>
                <select name="status" id="status" onChange={props.onChangeEvent}>
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
                <b>New Customers Information</b>
                <br/>
                Name: <b>{props.data.firstName} {props.data.lastName}</b><br/>
                Email Address: <b>{props.data.email}</b><br/>
                {props.data.plus18 ? "I am +18 years old " + props.data.gender + " " + props.data.status : "I am not 18 years old " + props.data.gender + " " + props.data.status}
            </p>
            <hr/>
        </div>
    )
}