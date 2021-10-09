import React from "react";

const Users = (props) => {

    let users = [
        {
            id: 1,
            followed: true,
            photoUrl: 'url',
            fullName: 'zor',
            status: 'text',
            location: {
                city: 'Minsk',
                country: 'Belarus'
            }
        },
        {
            id: 2,
            followed: true,
            photoUrl: 'url',
            fullName: 'kate',
            status: 'text',
            location: {
                city: 'Minsk',
                country: 'Belarus'
            }
        },
        {
            id: 3,
            followed: true,
            photoUrl: 'url',
            fullName: 'kate',
            status: 'text',
            location: {
                city: 'Minsk',
                country: 'Belarus'
            }
        },
        {
            id: 4,
            followed: true,
            photoUrl: 'url',
            fullName: 'kate',
            status: 'text',
            location: {
                city: 'Minsk',
                country: 'Belarus'
            }
        }
    ]

    if (props.users.length === 0) {
        props.setUsers(users);
    }

    return <div>
        {
            props.users.map(u =>
                <div>
                    {u.id}
                </div>)
        }
    </div>
}

export default Users;