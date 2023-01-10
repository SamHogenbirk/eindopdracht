import React from "react";
import Chart from 'chart.js/auto'
import { Bar } from 'react-chartjs-2'




const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};


function BarChart({ chartData }) {
    console.log(chartData)
    return (
        <div className="bar-chart">
            <h2 style={{ textAlign: "center" }}>bar Chart</h2>
            <Bar
                data={chartData}
                options={{ options }}
            />
        </div>
    );
}
export default BarChart;