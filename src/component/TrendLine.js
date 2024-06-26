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

        const data = {
            labels: issues.map(issue => new Date(issue.created_at).toLocaleDateString()),
            datasets: [
                {
                    label: selectedIssue.title,
                    data: issues.map(issue => issue.priority === selectedIssue.priority ? 1 : 0),
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderWidth: 1,
                    pointRadius: 2,
                },
            ],
        };

        return data;
    };

    const chartData = generateChartData();

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
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
                tension: 0.4,
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
        <div style={{ width: '800px', height: '400px' }}>
            <Line data={chartData} options={chartOptions} />
        </div>
    );
};

export default TrendLine;
