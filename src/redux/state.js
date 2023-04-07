const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    _state: {
        profilePage: {
            postData: [
                { messages: 'Hello', likesCount: 9, id: 1 },
                { messages: 'How are you?', likesCount: 25, id: 2 }
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogData: [
                { name: 'Andrey', id: 1 },
                { name: 'Sasha', id: 2 },
                { name: 'Tamik', id: 3 },
                { name: 'Astik', id: 4 },
                { name: 'Alan', id: 5 },
                { name: 'Yasya', id: 6 }
            ],
            messageData: [
                { message: 'Hello', id: 1 },
                { message: 'How are you?', id: 2 },
                { message: 'Salam', id: 3 },
                { message: 'What is your name?', id: 4 },
                { message: 'Aleikum Salam', id: 5 },
                { message: 'Privet', id: 6 },
            ],
            newMessageBody: ''
        },
    },
    _rerenderEntireTree() {
        console.log('State changed'); //этот метод уже изменился, когда сработал метод subscribe
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },

    // addPost() {
    //     let newPost = {
    //         messages: this._state.profilePage.newPostText,
    //         likesCount: 0,
    //         id: 3
    //     };
    //     this._state.profilePage.postData.push(newPost);
    //     this._state.profilePage.newPostText = '';
    //     this._rerenderEntireTree(this._state);
    // },
    // updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText;
    //     this._rerenderEntireTree(this._state);
    // },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                messages: this._state.profilePage.newPostText,
                likesCount: 0,
                id: 3
            };
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._rerenderEntireTree(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._rerenderEntireTree(this._state);
        } else if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
            this._state.dialogsPage.newMessageBody = action.newBody;
            this._rerenderEntireTree(this._state);
        } else if (action.type === 'SEND-MESSAGE') {
            debugger;
            let newMessage = {
                message: this._state.dialogsPage.newMessageBody,
                id: 7
            }
            this._state.dialogsPage.messageData.push(newMessage);
            this._state.dialogsPage.newMessageBody = '';
            this._rerenderEntireTree(this._state);
        }
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, newBody: body });

window.store = store;

export default store;