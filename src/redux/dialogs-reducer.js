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
    ]
};

const dialogsReducer = (state = initialState, action) => {
    // здесь же вместо state приходи dialogsPage, то есть в каждый reducer приходит своя часть state
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                message: action.newMessageBody,
                id: 7
            }
            return {
                ...state,
                messageData: [...state.messageData, newMessage],
            }
        default:
            return state;
    };
};

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });

export default dialogsReducer;