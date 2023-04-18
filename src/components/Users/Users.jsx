import React from "react";
import s from './Users.module.css';

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            { id: 1, photoUrl: 'https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png', followed: false, fullName: 'Alan', status: 'Adyga yei-yei', location: { city: 'Nalchik', country: 'Russia' } },
            { id: 2, photoUrl: 'https://www.shutterstock.com/image-vector/young-smiling-man-avatar-3d-260nw-2124054758.jpg', followed: true, fullName: 'Rustam', status: '07', location: { city: 'Moscow', country: 'Russia' } },
            { id: 3, photoUrl: 'https://www.shutterstock.com/image-vector/young-smiling-man-avatar-brown-260nw-2261401207.jpg', followed: false, fullName: 'Astemir', status: 'developer', location: { city: 'Stambul', country: 'Turkey' } }
        ]);
    };

    return <div>
        {
            props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <img src={user.photoUrl} className={s.userPhoto}></img>
                    </div>
                    <div>
                        {user.followed ?
                            <button onClick={() => { props.unfollow(user.id) }}>Unfollow</button> : <button onClick={() => { props.follow(user.id) }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.fullName}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{user.location.country}</div>
                        <div>{user.location.city}</div>
                    </span>
                </span>

            </div>)
        }
    </div>
};

export default Users;
