import React from "react"
import Chart from "chart.js/auto"
import { Bar } from 'react-chartjs-2'
import { useSelector } from "react-redux"

function BarChart() {

    const chartData = useSelector((state) => state.chart)

    const options = {
        responsive: true,
        plugins: {

            display: true,
            legend: {

                onClick: (e, legendItem, legend) => {
                    const data = legend.legendItems.map(item => item.text)
                    const index = data.indexOf(legendItem.text)
                    legend.chart.isDatasetVisible(index) ? legend.chart.hide(index) : legend.chart.show(index)
                },

                labels: {

                    useBorderRadius: true,
                    generateLabels: (chart) => {
                        return chart.data.datasets.map((dataset, i) => ({
                            borderRadius: 5,
                            text: dataset.label,
                            strokeStyle: "white",
                            fillStyle: dataset.label === "Difficulty rating" ?
                                dataset.backgroundColor
                                = "rgb(66, 135, 245)"
                                : "rgb(182, 245, 66)",
                            hidden: !chart.isDatasetVisible(i),
                            lineCap: dataset.borderCapStyle,
                        }))
                    },
                },

                title: {

                    display: false,
                    text: chartData.title,
                },
            }
        }
    }

    let barData = {

        labels: chartData.horizontalArray, //horizontal axis

        datasets: [
            {

                label: "Difficulty rating",
                data: chartData.verticalArrayDifficulty, //vertical axis
                backgroundColor: chartData.verticalArrayDifficulty
                    .map(item => item >= 4 || item < 1 ? "red" : "rgb(66, 135, 245)"),

                borderWidth: 1,
                barPercentage: 1,
                categoryPercentage: 0.7,
                borderRadius: 10,
            },
            {

                label: "Fun rating",
                data: chartData.verticalArrayFun, //vertical axis
                backgroundColor: chartData.verticalArrayFun
                    .map(item => item < 2 ? "red" : "rgb(182, 245, 66)"),

                borderWidth: 1,
                barPercentage: 1,
                categoryPercentage: 0.7,
                borderRadius: 10,
            }],
    }

    return (

        <div className="bar-chart" >
            <Bar
                data={barData}
                options={options}
            />
        </div >
    )
}

export default BarChart;
