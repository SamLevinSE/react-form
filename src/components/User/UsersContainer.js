import React from 'react';
import UserComponent from './UserComponent';
import UniqueID from "react-html-id";

class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
        UniqueID.enableUniqueIds(this);
        this.state = {
            users: [
                {id: this.nextUniqueId(), name: 'Sam', age: 32},
                {id: this.nextUniqueId(), name: 'David', age: 46},
                {id: this.nextUniqueId(), name: 'Ely', age: 22},
                {id: this.nextUniqueId(), name: 'Jennifer', age: 40}
            ]
        }
    };

    ageReducer = () => {
        const reducer = this.state.users.map((user) => {
            const tmpUser = user;
            tmpUser.age -= 10;
            return tmpUser;
        });
        this.setState({reducer});
    };

    binding = (newName) => {
        this.setState({title: newName});
    };

    inputChange = (event) => {
        this.setState({input: event.target.value});
    };

    render() {
        return (
            <div style={{padding: "10px"}}>
                {this.props.title}
                {this.state.users.map((user) => {
                    return <UserComponent key={user.name} age={user.age}>{user.name}</UserComponent>
                })
                }
                <button onClick={this.ageReducer} className="btn btn-lg">Make the user younger</button>
                <hr/>
            </div>)
    }
}

export default UsersContainer;