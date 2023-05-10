import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setAuthUserData, authUsers } from "../../redux/auth-reducer";

class HeaderAPIContainer extends React.Component {

    componentDidMount() {
        this.props.authUsers();
    }
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

const HeaderContainer = connect(mapStateToProps, { setAuthUserData, authUsers })(HeaderAPIContainer)

export default HeaderContainer;