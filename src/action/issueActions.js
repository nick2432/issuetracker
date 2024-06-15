// actionTypes.js
export const SET_FILTER = 'SET_FILTER';
export const SET_SORT = 'SET_SORT';
export const SET_ISSUES = 'SET_ISSUES';
export const SELECT_ISSUE = 'SELECT_ISSUE';
export const SET_ASSIGNEE_FILTER = 'SET_ASSIGNEE_FILTER';
export const SET_TAG_FILTER = 'SET_TAG_FILTER';
export const ADD_ISSUE = 'ADD_ISSUE';
export const UPDATE_ISSUE = 'UPDATE_ISSUE';
export const DELETE_ISSUE = 'DELETE_ISSUE';


export const setFilter = (filter) => ({
    type: SET_FILTER,
    payload: filter,
});

export const setSort = (sort) => ({
    type: SET_SORT,
    payload: sort,
});

export const setIssues = (issues) => ({
    type: SET_ISSUES,
    payload: issues,
});

export const selectIssue = (issue) => ({
    type: SELECT_ISSUE,
    payload: issue,
});

export const setAssigneeFilter = (assignee) => ({
    type: SET_ASSIGNEE_FILTER,
    payload: assignee,
});

export const setTagFilter = (tag) => ({
    type: SET_TAG_FILTER,
    payload: tag,
});

export const addIssue = (issue) => ({
    type: ADD_ISSUE,
    payload: issue,
});

export const updateIssue = (issue) => ({
    type: UPDATE_ISSUE,
    payload: issue,
});

export const deleteIssue = (issueId) => ({
    type: DELETE_ISSUE,
    payload: issueId,
});
