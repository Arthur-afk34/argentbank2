import { useDispatch } from "react-redux";


// SIGN IN SIGN OUT//

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT = "LOGOUT";


/* Authentication actions */
export const loginSuccess = (token) => {
    return {
        type: LOGIN_SUCCESS, // action type 
        payload: token, // action payload  
    }
}

export const loginFailed = (error) => {
    return {
        type: LOGIN_FAIL,
        payload: error,
    }
}

export const logout = () => {
    return {
        type: LOGOUT,
    }
} 