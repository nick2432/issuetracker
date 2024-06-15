import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setFilter, setSort, setAssigneeFilter, setTagFilter, deleteIssue } from '../action/issueActions';
import IssueItem from './IssueItem';
import EditIssue from './EditIssue';
import DeleteIssue from './DeletIssue';

const IssueList = ({
    issues,
    filter,
    sort,
    assigneeFilter,
    tagFilter,
    setFilter,
    setSort,
    setAssigneeFilter,
    setTagFilter,
    deleteIssue
}) => {
    const [showFilterDropdown, setShowFilterDropdown] = useState(false);
    const [showSortDropdown, setShowSortDropdown] = useState(false);
    const [showAssigneeDropdown, setShowAssigneeDropdown] = useState(false);
    const [showTagDropdown, setShowTagDropdown] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [editingIssue, setEditingIssue] = useState(null);
    const [deletingIssueId, setDeletingIssueId] = useState(null);
    const issuesPerPage = 10;

    useEffect(() => {
        setCurrentPage(1); // Reset to the first page whenever filter or sort changes
    }, [filter, sort, assigneeFilter, tagFilter]);

    const applyFilter = (issues, filter) => {
        if (filter === 'all') return issues;
        return issues.filter((issue) => issue.priority === filter);
    };

    const applySort = (issues, sort) => {
        return [...issues].sort((a, b) => {
            if (sort === 'priority') {
                return a.priority.localeCompare(b.priority);
            } else if (sort === 'date') {
                return new Date(a.created_at) - new Date(b.created_at);
            }
            return 0;
        });
    };

    const applyAssigneeFilter = (issues, assignee) => {
        if (assignee === 'all') return issues;
        return issues.filter((issue) => issue.assignee === assignee);
    };

    const applyTagFilter = (issues, tag) => {
        if (tag === 'all') return issues;
        return issues.filter((issue) => issue.tags.includes(tag));
    };

    const filteredIssues = applyFilter(issues, filter);
    const sortedIssues = applySort(filteredIssues, sort);
    const assigneeFilteredIssues = applyAssigneeFilter(sortedIssues, assigneeFilter);
    const finalFilteredIssues = applyTagFilter(assigneeFilteredIssues, tagFilter);

    const indexOfLastIssue = currentPage * issuesPerPage;
    const indexOfFirstIssue = indexOfLastIssue - issuesPerPage;
    const currentIssues = finalFilteredIssues.slice(indexOfFirstIssue, indexOfLastIssue);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleEdit = (issue) => {
        setEditingIssue(issue);
    };

    const handleDelete = (issueId) => {
        setDeletingIssueId(issueId);
    };

    const closeModals = () => {
        setEditingIssue(null);
        setDeletingIssueId(null);
    };

    return (
        <div className="back">
             
            <div className="filter-sort-container">
                <Link to="/issues/new" className="new-issue-button">
                    New Issue
                </Link>
                <div className="filter-sort">
                    <div className="dropdown-container" onClick={() => setShowFilterDropdown(!showFilterDropdown)}>
                        <div className="dropdown-label">
                            <h2>Priority</h2>
                        </div>
                        <div className={`dropdown-content ${showFilterDropdown ? 'show' : ''}`}>
                            <div className="dropdown-header">Filter by</div>
                            <a onClick={() => { setFilter('all'); setShowFilterDropdown(false); }} className={filter === 'all' ? 'selected' : ''}>All</a>
                            <a onClick={() => { setFilter('P0 - critical'); setShowFilterDropdown(false); }} className={filter === 'P0 - critical' ? 'selected' : ''}>P0 - Critical</a>
                            <a onClick={() => { setFilter('P1 - high'); setShowFilterDropdown(false); }} className={filter === 'P1 - high' ? 'selected' : ''}>P1 - High</a>
                            <a onClick={() => { setFilter('P2 - medium'); setShowFilterDropdown(false); }} className={filter === 'P2 - medium' ? 'selected' : ''}>P2 - Medium</a>
                            <a onClick={() => { setFilter('P3 - low'); setShowFilterDropdown(false); }} className={filter === 'P3 - low' ? 'selected' : ''}>P3 - Low</a>
                        </div>
                    </div>
                    <div className="dropdown-container" onClick={() => setShowSortDropdown(!showSortDropdown)}>
                        <div className="dropdown-label">
                            <h2>Sort by</h2>
                        </div>
                        <div className={`dropdown-content ${showSortDropdown ? 'show' : ''}`}>
                            <div className="dropdown-header">Sort by</div>
                            <a onClick={() => { setSort('priority'); setShowSortDropdown(false); }} className={sort === 'priority' ? 'selected' : ''}>Priority</a>
                            <a onClick={() => { setSort('date'); setShowSortDropdown(false); }} className={sort === 'date' ? 'selected' : ''}>Date</a>
                        </div>
                    </div>
                    <div className="dropdown-container" onClick={() => setShowAssigneeDropdown(!showAssigneeDropdown)}>
                        <div className="dropdown-label">
                            <h2>Assignee</h2>
                        </div>
                        <div className={`dropdown-content ${showAssigneeDropdown ? 'show' : ''}`}>
                            <div className="dropdown-header">Filter by Assignee</div>
                            <a onClick={() => { setAssigneeFilter('all'); setShowAssigneeDropdown(false); }} className={assigneeFilter === 'all' ? 'selected' : ''}>All</a>
                            <a onClick={() => { setAssigneeFilter('marcellamaki'); setShowAssigneeDropdown(false); }} className={assigneeFilter === 'marcellamaki' ? 'selected' : ''}>marcellamaki</a>
                            <a onClick={() => { setAssigneeFilter('nucleogenesis'); setShowAssigneeDropdown(false); }} className={assigneeFilter === 'nucleogenesis' ? 'selected' : ''}>nucleogenesis</a>
                            <a onClick={() => { setAssigneeFilter('rtibbles'); setShowAssigneeDropdown(false); }} className={assigneeFilter === 'rtibbles' ? 'selected' : ''}>rtibbles</a>
                        </div>
                    </div>
                    <div className="dropdown-container" onClick={() => setShowTagDropdown(!showTagDropdown)}>
                        <div className="dropdown-label">
                            <h2>Tags</h2>
                        </div>
                        <div className={`dropdown-content ${showTagDropdown ? 'show' : ''}`}>
                            <div className="dropdown-header">Filter by Tags</div>
                            <a onClick={() => { setTagFilter('all'); setShowTagDropdown(false); }} className={tagFilter === 'all' ? 'selected' : ''}>All</a>
                            <a onClick={() => { setTagFilter('regression'); setShowTagDropdown(false); }} className={tagFilter === 'regression' ? 'selected' : ''}>Regression</a>
                            <a onClick={() => { setTagFilter('user strings'); setShowTagDropdown(false); }} className={tagFilter === 'user strings' ? 'selected' : ''}>User Strings</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="issue-list">
                {currentIssues.map(issue => (
                    <IssueItem
                        key={issue.id}
                        issue={issue}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />
                ))}
            </div>
            <Pagination
                issuesPerPage={issuesPerPage}
                totalIssues={finalFilteredIssues.length}
                paginate={paginate}
                currentPage={currentPage}
            />
            {editingIssue && <EditIssue issue={editingIssue} onClose={closeModals} />}
            {deletingIssueId && <DeleteIssue issueId={deletingIssueId} onClose={closeModals} />}
        </div>
    );
};

const Pagination = ({ issuesPerPage, totalIssues, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalIssues / issuesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="pagination">
            <ul className="pagination-list">
                {pageNumbers.map(number => (
                    <li key={number} className={`pagination-item ${currentPage === number ? 'active' : ''}`}>
                        <a onClick={() => paginate(number)} href="#!" className="pagination-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

const mapStateToProps = state => ({
    issues: state.issues.issues,
    filter: state.issues.filter,
    sort: state.issues.sort,
    assigneeFilter: state.issues.assigneeFilter,
    tagFilter: state.issues.tagFilter,
});

const mapDispatchToProps = {
    setFilter,
    setSort,
    setAssigneeFilter,
    setTagFilter,
    deleteIssue
};

export default connect(mapStateToProps, mapDispatchToProps)(IssueList);
