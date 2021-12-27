const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogsData: [
        { id: 1, name: "Oleh" },
        { id: 2, name: "Hanna" },
        { id: 3, name: "Iryna" },
        { id: 4, name: "Serge" },
        { id: 5, name: "Niklas" },
        { id: 6, name: "Manuel" },
        { id: 7, name: "Tomas" },
        { id: 8, name: "Robert" },
    ],
    messagesData: [
        { id: 1000, message: "Hi!!!" },
        { id: 1001, message: "How are you?" },
        { id: 1002, message: "Very well!" },
        { id: 1003, message: "Yo" },
        { id: 1004, message: "Yo" },
        { id: 1005, message: "Yo" },
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messagesData: [...state.messagesData, { id: 1006, message: body }]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })

export default dialogsReducer;