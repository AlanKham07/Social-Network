import React from "react";
import s from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from "react-router-dom";
import axios from 'axios';

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div className={s.pageUsers}>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage} onClick={(e) => { props.onPageChange(p) }}>{p}</span>
            })}
        </div>
        {
            props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto} className={s.userPhoto}></img>
                        </NavLink>
                    </div>
                    <div>
                        {user.followed ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                            props.toggleFollowingProgress(true, user.id);
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                withCredentials: true,
                                headers: {
                                    'API-KEY': 'f1bce62e-8b3b-4015-a3d9-722110eda65c'
                                }
                            })
                            .then(response => {
                                if(response.data.resultCode === 0) {
                                    props.unfollow(user.id);
                                }
                                props.toggleFollowingProgress(false, user.id);
                            })
                        }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                props.toggleFollowingProgress(true, user.id);
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': 'f1bce62e-8b3b-4015-a3d9-722110eda65c'
                                    }
                                })
                                .then(response => {
                                    if(response.data.resultCode === 0) {
                                        props.follow(user.id);
                                    }
                                    props.toggleFollowingProgress(false, user.id);
                                })
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{'user.location.country'}</div>
                        <div>{'user.location.city'}</div>
                    </span>
                </span>

            </div>)
        }
    </div>
}

export default Users;