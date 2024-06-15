import React from 'react';
import { connect } from 'react-redux';
import { deleteIssue } from '../action/issueActions';

const DeleteIssue = ({ issueId, deleteIssue, onClose }) => {
    const handleDelete = () => {
        deleteIssue(issueId);  
        onClose(); 
    };

    return (
        <div className="delete-issue">
            <h2>Are you sure you want to delete this issue?</h2>
            <button onClick={handleDelete} className="issue-action-button delete">Delete</button>
            <button onClick={onClose} className="issue-action-button">Cancel</button>
        </div>
    );
};

const mapDispatchToProps = {
    deleteIssue,
};

export default connect(null, mapDispatchToProps)(DeleteIssue);
