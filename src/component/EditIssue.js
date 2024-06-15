import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateIssue } from '../action/issueActions';
import './EditIssue.css';

const EditIssue = ({ issue, updateIssue, onClose }) => {
    const [title, setTitle] = useState(issue.title);
    const [priority, setPriority] = useState(issue.priority);
    const [assignee, setAssignee] = useState(issue.assignee);

    const handleUpdate = () => {
        updateIssue({ ...issue, title, priority, assignee });
        onClose();
    };

    return (
        <div className="edit-issue-container">
            <h2>Edit Issue</h2>
            <form className="edit-issue-form">
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input 
                        type="text" 
                        id="title" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="priority">Priority</label>
                    <select 
                        id="priority" 
                        value={priority} 
                        onChange={(e) => setPriority(e.target.value)}
                    >
                        <option value="P0 - Critical">P0 - Critical</option>
                        <option value="P1 - Important">P1 - Important</option>
                        <option value="P2 - Medium">P2 - Medium</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="assignee">Assignee</label>
                    <input 
                        type="text" 
                        id="assignee" 
                        value={assignee} 
                        onChange={(e) => setAssignee(e.target.value)} 
                    />
                </div>
                <button type="button" onClick={handleUpdate} className="submit-button">Update</button>
                <button type="button" onClick={onClose} className="cancel-button">Cancel</button>
            </form>
        </div>
    );
};

const mapDispatchToProps = {
    updateIssue,
};

export default connect(null, mapDispatchToProps)(EditIssue);
