import React from "react";
import s from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from "react-router-dom";
import Paginator from "../common/Preloader/Paginator/Paginator";
import User from "./User";


let Users = ({ currentPage, onPageChange, totalUsersCount, pageSize, users, ...props }) => {
    return <div>
        <Paginator currentPage={currentPage} onPageChange={onPageChange}
            totalUsersCount={totalUsersCount} pageSize={pageSize} />
        <div>
            {
                users.map(user => <User user={user} followingInProgress={props.followingInProgress}
                    unfollow={props.unfollow} follow={props.follow} key={user.id} />
                )
            }
        </div>
    </div>
}

export default Users;