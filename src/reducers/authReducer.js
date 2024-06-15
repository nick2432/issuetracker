import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../action/authActions';

const initialState = {
    isAuthenticated: false,
    user: null,
    error: null
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
                error: null
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    }
};
