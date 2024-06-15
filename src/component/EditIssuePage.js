// components/EditIssuePage.js
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { setIssues, updateIssue } from '../action/issueActions';
import EditIssue from './EditIssue';
import './EditIssue.css'
const EditIssuePage = ({ issues, updateIssue, setIssues }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const issueId = parseInt(id);
    const issue = issues.find(issue => issue.id === issueId);

    useEffect(() => {
        if (!issues.length) {
            fetch('/issues.json')
                .then(response => response.json())
                .then(data => setIssues(data))
                .catch(error => console.error('Error fetching issues:', error));
        }
    }, [issues, setIssues]);

    const handleClose = () => {
        navigate('/issues');
    };

    return (
        <div>
            {issue ? (
                <EditIssue issue={issue} updateIssue={updateIssue} onClose={handleClose} />
            ) : (
                <div>Issue not found</div>
            )}
        </div>
    );
};

const mapStateToProps = (state) => ({
    issues: state.issues.issues,
});

const mapDispatchToProps = {
    setIssues,
    updateIssue,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditIssuePage);
