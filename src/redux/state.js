import { rerenderEntireTree } from "../render";

let state = {
    profilePage: {
        postData: [
            { messages: 'Hello', likesCount: 9, id: 1 },
            { messages: 'How are you?', likesCount: 25, id: 2 }
        ],
        newPostText: 'Hello, World!'
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
        ]
    },
}

// window.state = state;

export let addPost = () => {
    let newPost = {
        messages: state.profilePage.newPostText,
        likesCount: 0,
        id: 3
    };
    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;