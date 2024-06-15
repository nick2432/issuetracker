// components/IssueDescription.js
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import TrendLine from './TrendLine';
import './IssueDescription.css';

const IssueDescription = () => {
    const { id } = useParams();
    const issues = useSelector(state => state.issues.issues);
    const selectedIssue = issues.find(issue => issue.id === parseInt(id));

    if (!selectedIssue) {
        return <div className="issue-desc-container">Issue not found.</div>;
    }

    return (
        <div className="issue-desc-container">
            <div className="issue-desc-title">{selectedIssue.title}</div>
            <div className="issue-desc-text">{selectedIssue.description}</div>
            <div className="issue-desc-meta">
                <div>Priority: {selectedIssue.priority}</div>
                <div>Status: {selectedIssue.status}</div>
                <div>Assignee: {selectedIssue.assignee}</div>
                <div>Created at: {new Date(selectedIssue.created_at).toLocaleString()}</div>
                <div>Updated at: {new Date(selectedIssue.updated_at).toLocaleString()}</div>
                <div className="issue-desc-tags">
                    Tags: {selectedIssue.tags.map(tag => (
                        <span key={tag} className="issue-desc-tag">{tag}</span>
                    ))}
                </div>
            </div>
            <div className="trendline-container">
                <h2>Issue Trend Line</h2>
                <TrendLine issues={issues} selectedIssue={selectedIssue} />
            </div>
        </div>
    );
};

export default IssueDescription;
