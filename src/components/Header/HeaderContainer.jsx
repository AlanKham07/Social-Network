import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setAuthUserData } from "../../redux/auth-reducer";
import { headerAPI } from "../../api/api";

class HeaderAPIContainer extends React.Component {

    componentDidMount() {
        headerAPI.authUsers()
            .then(data => {
                if(data.resultCode === 0) {
                    let { id, email, login } = data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            })
    }
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

const HeaderContainer = connect(mapStateToProps, {setAuthUserData})(HeaderAPIContainer)

export default HeaderContainer;