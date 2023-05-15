import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { getAuthUsersData } from "../../redux/auth-reducer";

class HeaderAPIContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthUsersData();
    }
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

const HeaderContainer = connect(mapStateToProps, { getAuthUsersData })(HeaderAPIContainer)

export default HeaderContainer;