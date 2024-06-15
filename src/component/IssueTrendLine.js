// components/IssueTrendLine.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import TrendLine from './TrendLine';

const IssueTrendLine = ({ issues }) => {
    const { id } = useParams();
    const issue = issues.find(issue => issue.id === parseInt(id));

    if (!issue) {
        return <div>Issue not found</div>;
    }

    return (
        <div>
            <h1>Trend Line for {issue.title}</h1>
            <TrendLine issues={issues} selectedIssue={issue} />
        </div>
    );
};

const mapStateToProps = (state) => ({
    issues: state.issues.issues,
});

export default connect(mapStateToProps)(IssueTrendLine);
