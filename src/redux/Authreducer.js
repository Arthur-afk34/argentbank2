import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "./Authactions";

/* Initial state of authentication */
const initialState = {
    status: "VOID",
    isConnected: false,
    token: null,
    error: null,
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state, //... => spreadOperator (The Spread operator lets you expand an iterable like an object, string, or array into its elements while the Rest operator does the inverse by reducing a set of elements into one array.)
                status: "SUCCEEDED", // status of the login
                isConnected: true, // is the user connected
                token: action.payload, // token of the user 
                error: null
            }
        
        case LOGIN_FAIL: {
            return {
                ...state,
                status: "FAILED",
                isConnected: false,
                error: action.payload
            }
        }  

        case LOGOUT: {
            return initialState;
        } 
        
        default:
            return state;
    }
}

