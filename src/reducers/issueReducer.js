import { 
    SET_FILTER, 
    SET_SORT, 
    SET_ISSUES, 
    SELECT_ISSUE, 
    ADD_ISSUE, 
    SET_ASSIGNEE_FILTER, 
    SET_TAG_FILTER, 
    DELETE_ISSUE,
    UPDATE_ISSUE
} from '../action/issueActions';  // Ensure correct import path

const initialState = {
    issues: [],
    filter: 'all',
    sort: 'priority',
    assigneeFilter: 'all',
    tagFilter: 'all',
    selectedIssue: null,  // Added default value for selectedIssue
};

export const issuesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTER:
            return { 
                ...state, 
                filter: action.payload 
            };
        case SET_SORT:
            return { 
                ...state, 
                sort: action.payload 
            };
        case SET_ISSUES:
            return { 
                ...state, 
                issues: action.payload 
            };
        case SELECT_ISSUE:
            return { 
                ...state, 
                selectedIssue: action.payload 
            };
        case SET_ASSIGNEE_FILTER:
            return {
                ...state,
                assigneeFilter: action.payload,
            };
        case SET_TAG_FILTER:
            return {
                ...state,
                tagFilter: action.payload,
            };
        case ADD_ISSUE:
            return { 
                ...state, 
                issues: [...state.issues, action.payload] 
            };
        case DELETE_ISSUE:
            return {
                ...state,
                issues: state.issues.filter(issue => issue.id !== action.payload)
            };
        case UPDATE_ISSUE:
            return {
                ...state,
                    issues: state.issues.map(issue =>
                        issue.id === action.payload.id ? action.payload : issue
                    ),
                };
        default:
            return state;
    }
};
