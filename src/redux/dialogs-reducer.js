const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
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
    ],
    newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: "",
                messagesData: [...state.messagesData, { id: 1006, message: body }]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;