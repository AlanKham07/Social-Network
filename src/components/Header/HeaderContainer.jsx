import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { logout } from "../../redux/auth-reducer";

class HeaderAPIContainer extends React.Component {
    
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

const HeaderContainer = connect(mapStateToProps, { logout })(HeaderAPIContainer)

export default HeaderContainer;