import { profileAPI } from './../../src/api/api'

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    postData: [
        { messages: 'Hello', likesCount: 9, id: 1 },
        { messages: 'How are you?', likesCount: 25, id: 2 }
    ],
    newPostText: '',
    profile: null
};

const profileReducer = (state = initialState, action) => {
    // в данном случае state это и есть profilePagе, просто он приходит к нам с другим названием 
    // и + нам не нужно обращаться через this, так как state и так к нам приходит
    // rerender удаляем, так как функция profileReducer предназначена для преобразования и возвращения преобразованного state
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                messages: state.newPostText,
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

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
            case SET_USER_PROFILE:
                return {
                    ...state,
                    profile: action.profile
                }
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export const getUsers = (userId) => {

    return (dispatch) => {

        profileAPI.getUser(userId)
            .then(data => {
                dispatch(setUserProfile(data));
            })
    }
}

export default profileReducer;