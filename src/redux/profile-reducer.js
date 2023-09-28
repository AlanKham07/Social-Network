import { profileAPI } from './../../src/api/api'

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

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
        case DELETE_POST:
            return {
                ...state,
                postData: state.postData.filter(p => p.id != action.postId)
            }
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        default:
            return state;
    }
};

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos });

export const getUserProfile = (userId) => {

    return async (dispatch) => {

        let data = await profileAPI.getUserProfile(userId);
        dispatch(setUserProfile(data));
    }
}
export const getStatus = (userId) => {

    return async (dispatch) => {

        let data = await profileAPI.getStatus(userId);
        dispatch(setStatus(data));
    }
}
export const updateStatus = (status) => {

    return async (dispatch) => {

        let data = await profileAPI.updateStatus(status);
        if (data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    }
}
export const savePhoto = (file) => {

    return async (dispatch) => {

        let data = await profileAPI.savePhoto(file);
        if (data.resultCode === 0) {
            dispatch(savePhotoSuccess(data.data.photos));
        }
    }
}

export default profileReducer;