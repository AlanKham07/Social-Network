import { headerAPI } from "../api/api";
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 'auth/SET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            }
        default:
            return state;
    }
};

export const setAuthUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, data: { id, email, login, isAuth } });

export const getAuthUsersData = () => {

    return async (dispatch) => {

        let data = await headerAPI.authUsers();
        if (data.resultCode === 0) {
            let { id, email, login } = data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    }
}

export const login = (email, password, rememberMe) => {

    return async (dispatch) => {

        let response = await headerAPI.login(email, password, rememberMe);
        if (response.data.resultCode === 0) {
            dispatch(getAuthUsersData())
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
            dispatch(stopSubmit('login', { _error: message }));
        }
    }
}

export const logout = () => {

    return async (dispatch) => {

        let response = await headerAPI.logout();
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    }
}


export default authReducer;