import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUserProfile, getStatus, updateStatus } from "../../redux/profile-reducer";
import { useLocation, useNavigate, useParams } from "react-router";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from "redux";

class ProfileAPIContainer extends React.Component {

    componentDidMount() {
        debugger
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} /> //прокидываем все пропсы дальше
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth
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
                router={{ location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
    withRouter,
    withAuthRedirect
)(ProfileAPIContainer);