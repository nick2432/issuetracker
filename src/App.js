// App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
import store from './store/store';
import LoginForm from './component/LoginForm';
import IssueList from './component/IssueList';
import IssueDescription from './component/IssueDescription';
import CreateIssue from './component/CreateIssue';
import IssueTrendLine from './component/IssueTrendLine';
import { setIssues } from './action/issueActions';
import EditIssuePage from './component/EditIssuePage';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('/issues.json')
            .then(response => response.json())
            .then(data => dispatch(setIssues(data)))
            .catch(error => console.error('Error fetching issues:', error));
    }, [dispatch]);

    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/" element={<LoginForm />} />
                    <Route path="/issues" element={<IssueList />} />
                    <Route path="/issues/new" element={<CreateIssue />} />
                    <Route path="/issues/:id" element={<IssueDescription />} />
                    <Route path="/issues/trend/:id" element={<IssueTrendLine />} />
                    <Route path="/issues/edit/:id" element={<EditIssuePage />} />
                </Routes>
            </Router>
        </Provider>
    );
};

export default App;
