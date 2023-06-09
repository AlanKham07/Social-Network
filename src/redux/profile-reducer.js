import { profileAPI } from './../../src/api/api'

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    postData: [
        { messages: 'Hello', likesCount: 9, id: 1 },
        { messages: 'How are you?', likesCount: 25, id: 2 }
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    // в данном случае state это и есть profilePagе, просто он приходит к нам с другим названием 
    // и + нам не нужно обращаться через this, так как state и так к нам приходит
    // rerender удаляем, так как функция profileReducer предназначена для преобразования и возвращения преобразованного state
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                messages: action.newPostText,
                likesCount: 0,
                id: 3
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ''
            };
        // к нам приходит state и мы не имеем право его менять напрямую, поэтому создаем копию.
        // так как копия поверхностная мы должны отдельно скопировать массив
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
};

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });

export const getUserProfile = (userId) => {

    return (dispatch) => {

        profileAPI.getUserProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data));
            })
    }
}
export const getStatus = (userId) => {

    return (dispatch) => {

        profileAPI.getStatus(userId)
            .then(data => {
                dispatch(setStatus(data));
            })
    }
}
export const updateStatus = (status) => {

    return (dispatch) => {

        profileAPI.updateStatus(status)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setStatus(status));
                }
            })
    }
}

export default profileReducer;