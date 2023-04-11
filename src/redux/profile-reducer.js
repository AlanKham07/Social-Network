const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postData: [
        { messages: 'Hello', likesCount: 9, id: 1 },
        { messages: 'How are you?', likesCount: 25, id: 2 }
    ],
    newPostText: ''
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
            state.postData.push(newPost);
            state.newPostText = '';
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text });


//     if (action.type === ADD_POST) {
//         let newPost = {
//             messages: state.newPostText,
//             likesCount: 0,
//             id: 3
//         };
//         state.postData.push(newPost);
//         state.newPostText = '';

//     } else if (action.type === UPDATE_NEW_POST_TEXT) {
//         state.newPostText = action.newText;
//     }

//     return state;

// }

export default profileReducer;