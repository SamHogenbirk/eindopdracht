import React from "react"
import Chart from "chart.js/auto"
import { Bar } from 'react-chartjs-2'

function BarChart(props) {

    const barOptions = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: props.data.title
            }
        }
    }

    const barData =
    {
        labels: props.data.horizontalArray, //horizontal axis

        datasets: [
            {
                label: "Difficulty Rating ",
                data: props.data.verticalArrayDifficulty, //vertical axis
                backgroundColor: props.data.verticalArrayDifficulty
                    .map(item => item > 3.5 || item < 1 ? "red" : "rgb(66, 135, 245)"),

                borderWidth: 1
            },
            {
                label: "Fun Rating",
                data: props.data.verticalArrayFun, //vertical axis
                backgroundColor: props.data.verticalArrayFun
                    .map(item => item < 2 ? "red" : "rgb(182, 245, 66)"),

                borderWidth: 1
            }]
    }

    return (
        <div className="chart">
            <h2 className="chart-title" >{barOptions.plugins.title.text}</h2>
            <Bar
                data={barData}
                options={{ barOptions }}
            />
        </div>
    );
}

export default BarChart;