// create class component
// install axios
// fetch list of users from internet (REST api, data)
// store in them state
// render them
// integration css framework
import { Component } from 'react';
import axios from 'axios';
import Loader from '../Loader';
import Error from '../Error';

class UserList extends Component {

    constructor() {
        super();
        this.state = {
            users: [],
            loading: true,
            hasError: false
        };
    }

    componentDidMount() {
        axios.get('https://api.github.com/users')
            .then((res) => {
                this.setState({
                    users: res.data,
                    loading: false
                });
            })
            .catch((err) => {
                this.setState({
                    loading: false,
                    hasError: true
                });
            });
    }

    render() {
        return <div>
            <h1>Users</h1>
            {this.state.hasError && <Error />}
            {this.state.loading && <Loader />}
            {
                this.state.users.map(user => <div>
                    <h2 className="text-bold">{user.login}</h2>
                    <img src={user.avatar_url} width="100" height="100" />
                </div>)
            }
        </div>
    }
}

export default UserList;