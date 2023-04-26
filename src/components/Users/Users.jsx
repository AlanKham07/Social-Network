import React from "react";
import s from './Users.module.css';
import axios from 'axios';
import userPhoto from '../../assets/images/user.png';

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        })
    }

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return <div>
            <div>
                {pages.map(p => {
                    return <span className={ this.props.currentPage === p && s.selectedPage } onClick={(e) => {this.onPageChange(p)}}>{p}</span>
                })}
            </div>
            {
                this.props.users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto} className={s.userPhoto}></img>
                        </div>
                        <div>
                            {user.followed ?
                                <button onClick={() => { this.props.unfollow(user.id) }}>Unfollow</button> : <button onClick={() => { this.props.follow(user.id) }}>Follow</button>}
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

}

export default Users;