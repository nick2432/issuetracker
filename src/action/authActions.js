export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

const mockCredentials = {
    username: 'nikhil',
    password: 'pas123'
};

export const login = (username, password) => {
    return (dispatch) => {
        if (username === mockCredentials.username && password === mockCredentials.password) {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: { username }
            });
        } else {
            dispatch({
                type: LOGIN_FAILURE,
                error: 'Invalid username or password'
            });
        }
    };
};
