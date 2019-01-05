import React, {Component} from 'react';
import UniqueID from 'react-html-id';
import './App.css';
import Loading from './components/loading/Loading';
import UsersContainer from './components/User/UsersContainer';
import Parent from './components/parentToChild/parent';
import UserList from './components/list/UserListComponent';
import Route from './Routes'


class App extends Component {
    constructor(props) {
        super(props);
        UniqueID.enableUniqueIds(this);
        this.state = {
            user: [
                {id: this.nextUniqueId(), firstName: 'Sam', lastName: 'Levin', email: ''},
                {id: this.nextUniqueId(), firstName: 'David', lastName: null, email: ''},
                {id: this.nextUniqueId(), firstName: '', lastName: 'Doe', email: ''},
                {id: this.nextUniqueId(), firstName: 'John', lastName: 'Loving', email: ''},
                {id: this.nextUniqueId(), firstName: 'Lilly', lastName: 'Lee', email: ''}
            ],
            title: 'Change the text',
            isLoading: true
        };

        this.deleteUser = (index) => {
            const user = Object.assign([], this.state.user);
            user.splice(index, 1);
            this.setState({user});
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({isLoading: false})
        }, 500)
    }

    usersContainer = () => {
        return <UsersContainer title={<h3>Users List</h3>}/>
    };

    myParent = () => {
        return <Parent title={this.state.title}/>
    };

    userList = () => {
        return this.state.user.map((user, index) => {
            return (
                <UserList
                    key={index}
                    user={user}
                    deleteUser={this.deleteUser.bind(this, index)}>
                </UserList>
            )
        })
    };

    render() {return this.state.isLoading ? <Loading/> : <Route myParent={this.myParent}
                                                                usersContainer={this.usersContainer}
                                                                userList={this.userList}
    />}
}

export default App;
