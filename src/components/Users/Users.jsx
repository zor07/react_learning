import React from "react";
import css from "./Users.module.css"
import User from "./User/User";

const Users = (props) => {

    let usersData = [
        {
            id: 1,
            followed: true,
            photoUrl: 'https://intim-mall.ru/images/thumbnails/1223/1000/detailed/250/154335.jpg',
            fullName: 'Anna',
            status: 'Hi, my name is Anna, and I want to find some friends',
            location: {
                city: 'Minsk',
                country: 'Belarus'
            }
        },
        {
            id: 2,
            followed: true,
            photoUrl: 'https://1.bp.blogspot.com/-IRT6j8h_fqk/XN9yeP_ojII/AAAAAAAATG0/9Av70aLOzJoDmaOMLjRFB8bhYQO0MvRhwCKgBGAs/s1600/45612837_361298791302732_5759895938742232043_n.jpg',
            fullName: 'Kristine',
            status: 'Hi, my name is Kristine, and I want to find some friends',
            location: {
                city: 'Minsk',
                country: 'Belarus'
            }
        },
        {
            id: 3,
            followed: false,
            photoUrl: 'https://steamuserimages-a.akamaihd.net/ugc/28479983632518879/DDECB815BB7CD6E0D56C1CF8B6DBE9CE5F94BC29/?imw=512&amp;imh=512&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true',
            fullName: 'Ammy',
            status: 'Hi, my name is Ammy, and I want to find some friends',
            location: {
                city: 'Minsk',
                country: 'Belarus'
            }
        },
        {
            id: 4,
            followed: true,
            photoUrl: 'https://sun9-60.userapi.com/c841228/v841228265/fed8/Dhjv4bMjHSc.jpg',
            fullName: 'Vika',
            status: 'Hi, my name is Vika, and I want to find some friends',
            location: {
                city: 'Minsk',
                country: 'Belarus'
            }
        },
        {
            id: 5,
            followed: true,
            photoUrl: 'https://s45.radikal.ru/i109/1107/5e/8db777456d5c.png',
            fullName: 'Sasha',
            status: 'Hi, my name is Sasha, and I want to find some friends',
            location: {
                city: 'Minsk',
                country: 'Belarus'
            }
        }
    ]

    if (props.users.length === 0) {
        props.setUsers(usersData);
    }
    let users = props.users
        .map(user => <User user={user}
                           follow={(userId) => props.follow(userId) }
                           unfollow={(userId) => props.unfollow(userId)}/>)


    return (<div className={css.users}>
            <h3>Users</h3>
            {users}
        </div>

    )
}

export default Users;