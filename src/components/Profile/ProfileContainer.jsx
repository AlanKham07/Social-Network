import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setUserProfile } from "../../redux/profile-reducer";

class ProfileAPIContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
        .then(response => {
            this.props.setUserProfile(response.data);
        })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/> //прокидываем все пропсы дальше
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})


const ProfileContainer = connect(mapStateToProps, {setUserProfile})(ProfileAPIContainer)

export default ProfileContainer;