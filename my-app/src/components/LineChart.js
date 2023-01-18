import React from "react"
import { useState } from "react"
import Chart from 'chart.js/auto'
import { Line } from 'react-chartjs-2'

import StudentData from "../app/StudentData"


function LineChart() {

    const lineOptions = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: "Users Gained between 2016-2020"
            }
        }
    }

    const [lineData, setLineData] = useState({

        labels: StudentData.map((data) => data.assignment),

        datasets: [

            {
                label: "difficulty",
                data: StudentData.map((data) => data.difficultyRating),
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            },
            // {
            //     label: "Users Lost",
            //     data: studentData.map((data) => data.userLost ),
            //     fill: false,
            //     borderColor: 'red',
            //     tension: 0.1
            // }
        ]
    });

    return (
        <div className="chart">
            <h2 className="chart-title">Anual userGain vs userLost</h2>
            <Line
                data={lineData}
                options={lineOptions}
            />
        </div>
    );
}

export default LineChart;