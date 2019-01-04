import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import UniqueID from 'react-html-id';
import './App.css';
import Loading from './components/loading/Loading';
import FormContainer from './components/forms/FormContainer';
import ToDoList from './components/todo/ToDoList';
import UsersContainer from './components/User/UsersContainer';
import Parent from './components/parentToChild/parent';
import UserList from './components/list/UserListComponent';
import CardContainer from './components/cards/CardContainer';
import StarWarContainer from './components/starWarApi/StarWarContainer';
import MemeGenContainer from './components/memeGen/MemeGenContainer';


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

    render() {
        return (
            this.state.isLoading ? <Loading/> :
                <div className="App">
                    <ul className="nav">
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to="/meme">MemeGame</Link></li>
                        <li><Link to="/star-wars">StarWars</Link></li>
                        <li><Link to="/todo">To Do</Link></li>
                        <li><Link to="/parent">ParentChild</Link></li>
                        <li><Link to="/users">UserList</Link></li>
                        <li><Link to="/card">Cards</Link></li>
                        <li><Link to="/list">List</Link></li>
                    </ul>
                    <>
                        <Switch>
                            <Route exact path="/" component={FormContainer}/>
                            <Route exact path="/meme" component={MemeGenContainer}/>
                            <Route exact path="/star-wars" component={StarWarContainer}/>
                            <Route exact path="/todo" component={ToDoList}/>
                            <Route exact path="/parent" render={this.myParent}/>
                            <Route exact path="/users" render={this.usersContainer}/>
                            <Route exact path="/card" component={CardContainer}/>
                            <Route exact path="/list" render={this.userList}/>
                        </Switch>
                    </>
                </div>
        );
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
    }
}

export default App;
