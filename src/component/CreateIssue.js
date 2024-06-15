import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addIssue } from '../action/issueActions'; // You'll need to implement this action
import './CreateIssue.css'
const NewIssue = ({ addIssue }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('P2 - Medium');
    const [status, setStatus] = useState('Open');
    const [assignee, setAssignee] = useState('');
    const [tags, setTags] = useState('');
    const [dueDate, setDueDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newIssue = {
            id: Date.now(),
            title,
            description,
            priority,
            status,
            assignee,
            tags: tags.split(',').map(tag => tag.trim()), // Convert comma-separated string to array
            created_at: new Date().toISOString(),
            dueDate
        };
        addIssue(newIssue);
        // Reset form fields
        setTitle('');
        setDescription('');
        setPriority('P2 - Medium');
        setStatus('Open');
        setAssignee('');
        setTags('');
        setDueDate('');
    };

    return (
        <div className='new-issue-container'>
            <h2>Create New Issue</h2>
            <form onSubmit={handleSubmit} className='new-issue-form'>
                <div className='form-group'>
                    <label htmlFor='title'>Title</label>
                    <input 
                        type='text' 
                        id='title' 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        required 
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='description'>Description</label>
                    <textarea 
                        id='description' 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                        required 
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='priority'>Priority</label>
                    <select 
                        id='priority' 
                        value={priority} 
                        onChange={(e) => setPriority(e.target.value)}
                    >
                        <option value='P0 - Critical'>P0 - Critical</option>
                        <option value='P1 - Important'>P1 - Important</option>
                        <option value='P2 - Medium'>P2 - Medium</option>
                    </select>
                </div>
                <div className='form-group'>
                    <label htmlFor='status'>Status</label>
                    <select 
                        id='status' 
                        value={status} 
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value='Open'>Open</option>
                        <option value='In Progress'>In Progress</option>
                        <option value='Resolved'>Resolved</option>
                    </select>
                </div>
                <div className='form-group'>
                    <label htmlFor='assignee'>Assignee</label>
                    <input 
                        type='text' 
                        id='assignee' 
                        value={assignee} 
                        onChange={(e) => setAssignee(e.target.value)} 
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='tags'>Tags (comma separated)</label>
                    <input 
                        type='text' 
                        id='tags' 
                        value={tags} 
                        onChange={(e) => setTags(e.target.value)} 
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='dueDate'>Due Date</label>
                    <input 
                        type='date' 
                        id='dueDate' 
                        value={dueDate} 
                        onChange={(e) => setDueDate(e.target.value)} 
                    />
                </div>
                <button type='submit' className='submit-button'>Create Issue</button>
            </form>
        </div>
    );
};

const mapDispatchToProps = {
    addIssue
};

export default connect(null, mapDispatchToProps)(NewIssue);
