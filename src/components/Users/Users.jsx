import React from "react";
import css from "./Users.module.css";
import * as axios from "axios";
import User from "./User/User";


class Users extends React.Component {

    constructor(props) {
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items);
            })
    }

    render() {
        let users = this.props.users
            .map(user => <User user={user}
                               follow={(userId) => this.props.follow(userId) }
                               unfollow={(userId) => this.props.unfollow(userId)}/>)
        return (<div className={css.users}>
                <h3>Users</h3>
                {users}
            </div>

        )
    }
}

export default Users;