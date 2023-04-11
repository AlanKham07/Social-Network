const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    // здесь же вместо state приходи dialogsPage, то есть в каждый reducer приходит своя часть state
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newBody;
            return state;
        case SEND_MESSAGE:
            let newMessage = {
                message: state.newMessageBody,
                id: 7
            }
            state.messageData.push(newMessage);
            state.newMessageBody = '';
            return state;
        default:
            return state;
    };
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, newBody: body });




// if (action.type === UPDATE_NEW_MESSAGE_BODY) {
//     state.newMessageBody = action.newBody;
// } else if (action.type === SEND_MESSAGE) {
//     let newMessage = {
//         message: state.newMessageBody,
//         id: 7
//     }
//     state.messageData.push(newMessage);
//     state.newMessageBody = '';
// }

// return state;

export default dialogsReducer;