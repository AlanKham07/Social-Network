import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setUserProfile } from "../../redux/profile-reducer";
import { useLocation, useNavigate, useParams } from "react-router";

class ProfileAPIContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data);
            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} /> //прокидываем все пропсы дальше
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

// ProfileAPIContainer - классовая компонента, мы не можем использовать хуки в классвовых компонентах. 
// Есть решение из оффициальной документации - создать функцию-обёртку, которая по принципу идентична к withRouter
function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

let WithUrlDataContainerComponent = withRouter(ProfileAPIContainer);

const ProfileContainer = connect(mapStateToProps, { setUserProfile })(WithUrlDataContainerComponent)

export default ProfileContainer;