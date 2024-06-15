// components/IssueItem.js
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const IssueItem = ({ issue, onDelete }) => {
    return (
        <div className="issue-item">
            <div className="issue-left">
                <Link to={`/issues/${issue.id}`} className="issue-title">{issue.title}</Link>
                <div className="issue-priority">{issue.priority}</div>
                <div className="issue-tags">
                    {issue.tags.map(tag => (
                        <span key={tag} className="issue-tag">{tag}</span>
                    ))}
                </div>
            </div>
            <div className="issue-right">
                <div className="issue-meta">
                    <div>Opened: {new Date(issue.created_at).toLocaleString()}</div>
                    <div>Assignee: {issue.assignee}</div>
                </div>
                <div className="issue-actions">
                    <Link to={`/issues/edit/${issue.id}`} className="issue-action-button">Edit</Link>
                    <button onClick={() => onDelete(issue.id)} className="issue-action-button delete">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default IssueItem;
