// components/TrendLine.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend
);

const TrendLine = ({ issues, selectedIssue }) => {
    if (!issues || !selectedIssue) {
        return <div>Loading...</div>;
    }

    const generateChartData = () => {
        if (!issues.length || !selectedIssue) {
            return {};
        }

        // Example logic to generate chart data
        const data = {
            labels: issues.map(issue => new Date(issue.created_at).toLocaleDateString()),
            datasets: [
                {
                    label: selectedIssue.title,
                    data: issues.map(issue => issue.priority === selectedIssue.priority ? 1 : 0), // Example logic, adjust accordingly
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderWidth: 1, // Adjust the line thickness here
                    pointRadius: 2, // Adjust the point size here
                },
            ],
        };

        return data;
    };

    const chartData = generateChartData();

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false, // This option allows custom height/width
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
            title: {
                display: true,
                text: 'Trend Line',
            },
        },
        elements: {
            line: {
                tension: 0.4, // Smoother line
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Date',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Priority Match',
                },
                ticks: {
                    stepSize: 1,
                },
            },
        },
    };

    return (
        <div style={{ width: '800px', height: '400px' }}> {/* Adjust the width and height as needed */}
            <Line data={chartData} options={chartOptions} />
        </div>
    );
};

export default TrendLine;
