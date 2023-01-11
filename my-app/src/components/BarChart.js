import React from "react";
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2'

function BarChart({ barOptions, chartData }) {

    return (
        <div className="bar-chart">
            <h2 className="chart-title" >Anual userGain vs userLost</h2>
            <Bar
                data={chartData}
                options={{ barOptions }}
            />
        </div>
    );
}
export default BarChart;