import { useDispatch } from "react-redux";


// SIGN IN SIGN OUT//

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT = "LOGOUT";


/* Authentication actions */
export const loginSuccess = (token) => {
    return {
        type: LOGIN_SUCCESS,
        payload: token,
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


/* Authentication actions */
export const login = (token) => {
    return {
        /* Asynchronous form function */
        const handleSubmit = async (event) => {
            event.preventDefault();
            /* Handle error message */
            if (!ValidEmail(email)) {
              setErrorMessage("Invalid email adress");
              return;
            }
            if (!ValidPassword(password)) {
              setErrorMessage("Invalid password");
              return;
            }
            try {
              const response = await fetch("http://localhost:3005/api/v1/user/login", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
              });
              if (response.ok) {
                const data = await response.json();
                const token = data.body.token;
                dispatch(loginSuccess(token));
                sessionStorage.setItem("token", token);
                if (rememberMe) {
                  localStorage.setItem("token", token);
                }
                navigate("/Userpage");
              } else {
                const error = "Incorrect email/password";
                dispatch(loginFailed(error));
              }
            } catch (error) {
                console.error(error);
            }
        }
    }
}
