// import dialogsReducer from "./dialogs-reducer";
// import profileReducer from "./profile-reducer";
// import sidebarReducer from "./sidebar-reducer";

// let store = {
//     _state: {
//         profilePage: {
//             postData: [
//                 { messages: 'Hello', likesCount: 9, id: 1 },
//                 { messages: 'How are you?', likesCount: 25, id: 2 }
//             ],
//             newPostText: ''
//         },
//         dialogsPage: {
//             dialogData: [
//                 { name: 'Andrey', id: 1 },
//                 { name: 'Sasha', id: 2 },
//                 { name: 'Tamik', id: 3 },
//                 { name: 'Astik', id: 4 },
//                 { name: 'Alan', id: 5 },
//                 { name: 'Yasya', id: 6 }
//             ],
//             messageData: [
//                 { message: 'Hello', id: 1 },
//                 { message: 'How are you?', id: 2 },
//                 { message: 'Salam', id: 3 },
//                 { message: 'What is your name?', id: 4 },
//                 { message: 'Aleikum Salam', id: 5 },
//                 { message: 'Privet', id: 6 },
//             ],
//             newMessageBody: ''
//         },
//         sidebar: {},
//     },
//     _rerenderEntireTree() {
//         console.log('State changed'); //этот метод уже изменился, когда сработал метод subscribe, который был вызван еще в index.js
//     },

//     getState() {
//         return this._state;
//     },
//     subscribe(observer) {
//         this._rerenderEntireTree = observer;
//     },
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action); // после редьюса нам приходит новый profilePage и мы его сразу же записываем в profilePage, то есть обновляем
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//         this._state.sidebar = sidebarReducer(this._state.sidebar, action);

//         this._rerenderEntireTree(this._state);

//     }
// }

// window.store = store;

// export default store;