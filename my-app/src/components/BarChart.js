import React from "react"
import Chart from "chart.js/auto"
import { Bar } from 'react-chartjs-2'

function BarChart(data) {

    const barOptions = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: data.props.title
            }
        }
    }

    const barData =
    {
        labels: data.props.horizontalArray, //horizontal axis

        datasets: [
            {
                label: "Difficulty Rating ",
                data: data.props.verticalArrayDifficulty, //vertical axis
                backgroundColor: data.props.verticalArrayDifficulty
                    .map(item => item > 3.5 || item < 1 ? "red" : "rgb(66, 135, 245)"),

                borderWidth: 1
            },
            {
                label: "Fun Rating",
                data: data.props.verticalArrayFun, //vertical axis
                backgroundColor: data.props.verticalArrayFun
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