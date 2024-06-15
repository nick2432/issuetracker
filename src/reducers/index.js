import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { issuesReducer } from './issueReducer';

export const rootReducer = combineReducers({
    auth: authReducer,
    issues: issuesReducer,
});
