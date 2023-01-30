import React from "react"
import Chart from 'chart.js/auto'
import { Line } from 'react-chartjs-2'



function LineChart(props) {

    const options = {
        responsive: true,
        plugins: {
            display: true,
            legend: {
                // fillStyle: "rgb(66, 135, 245)",
                onClick: (e, legendItem, legend) => {
                    const data = legend.legendItems.map(item => item.text)
                    const index = data.indexOf(legendItem.text)
                    legend.chart.isDatasetVisible(index) ? legend.chart.hide(index) : legend.chart.show(index)
                },
                labels: {
                    generateLabels: (chart) => {
                        return chart.data.datasets.map((dataset, i) => ({
                            text: dataset.label,
                            strokeStyle: "white",
                            fillStyle: dataset.backgroundColor,
                            hidden: !chart.isDatasetVisible(i),
                            lineCap: dataset.borderCapStyle,
                        }))
                    },

                    title: {
                        display: false,
                        text: props.data.title
                    }
                }
            }
        }
    }

    const lineData = {

        labels: props.data.horizontalArray,

        datasets: [

            {
                label: "Difficulty rating",
                data: props.data.verticalArrayDifficulty,
                fill: false,
                borderColor: "rgb(66, 135, 245)",
                backgroundColor: "rgb(66, 135, 245)",
                tension: 0.2
            },
            {
                label: "Fun rating",
                data: props.data.verticalArrayFun,
                fill: false,
                borderColor: "rgb(182, 245, 66)",
                backgroundColor: "rgb(182, 245, 66)",
                tension: 0.2
            }
        ]
    }

    return (
        <div className="chart" >
            <h2 className="chart-title">{options.plugins.legend.labels.title.text}</h2>
            <Line
                data={lineData}
                options={options}
            />
        </div >
    );
}

export default LineChart;