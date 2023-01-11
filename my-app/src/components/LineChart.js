import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Line } from 'react-chartjs-2'


ChartJS.register(ArcElement, Tooltip, Legend);


function LineChart({ lineOptions, chartData }) {
    return (
        <div className="line-chart">
            <h2 className="chart-title" >Anual userGain vs userLost</h2>
            <Line
                data={chartData}
                options={lineOptions}
            />
        </div>
    );
}
export default LineChart;