import React from "react"
import Chart from "chart.js/auto"
import { Bar } from 'react-chartjs-2'


function BarChart(props, handleClick) {

    // //props:
    //     title
    //     horizontalArray (name/assignment)
    //     verticalArrayDifficulty
    //     verticalArrayFun

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

                    generateLabels: (chart) => {
                        return chart.data.datasets.map((dataset, i) => ({
                            text: dataset.label,
                            fillStyle: dataset.backgroundColor[i] === "red" ? "rgb(66, 135, 245)" : dataset.backgroundColor[i],
                            hidden: !chart.isDatasetVisible(i),
                            lineCap: dataset.borderCapStyle,
                        }))
                    },

                },

                title: {

                    display: false,
                    text: props.data.title,
                },
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

                borderWidth: 1,
                barPercentage: 1,
                categoryPercentage: 0.7,
                borderRadius: 10,
            },
            {
                label: "Fun Rating",
                data: props.data.verticalArrayFun, //vertical axis
                backgroundColor: props.data.verticalArrayFun
                    .map(item => item < 2 ? "red" : "rgb(182, 245, 66)"),

                borderWidth: 1,
                barPercentage: 1,
                categoryPercentage: 0.7,
                borderRadius: 10,
            }],


    }

    return (
        <div className="chart" >
            <h2 className="chart-title" >{options.plugins.legend.title.text}</h2>
            <Bar
                data={barData}
                options={options}

            />
        </div >
    );
}

export default BarChart;