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
                            fillStyle: dataset.backgroundColor[i] === "red" ? "rgb(66, 135, 245)" : dataset.backgroundColor[i],
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
                    .map(item => item > 3.5 || item < 1 ? "red" : "rgb(66, 135, 245)"),

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

   // const arrayOfObj = barData.labels.map(function (d, i) {
    //     return {
    //         label: d,
    //         data: props.data.verticalArrayDifficulty[i] || 0
    //     };
    // })

    // const sortedArrayOfObj = arrayOfObj.sort(function (a, b) {

    //     return b.data < a.data ? 1 : -1;
    // })

    // let newArrayLabel = [];
    // let newArrayData = [];
    // sortedArrayOfObj.forEach(function (d) {
    //     newArrayLabel.push(d.label);
    //     newArrayData.push(d.data);
    // });

    // console.log(newArrayLabel);
    // console.log(newArrayData);

    // barData = {
    //     labels: newArrayLabel, //horizontal axis

    //     datasets: [
    //         {
    //             label: "Difficulty rating",
    //             data: newArrayData, //vertical axis
    //             backgroundColor: props.data.verticalArrayDifficulty
    //                 .map(item => item > 3.5 || item < 1 ? "red" : "rgb(66, 135, 245)"),

    //             borderWidth: 1,
    //             barPercentage: 1,
    //             categoryPercentage: 0.7,
    //             borderRadius: 10,
    //         },
    //         {
    //             label: "Fun rating",
    //             data: props.data.verticalArrayFun, //vertical axis
    //             backgroundColor: props.data.verticalArrayFun
    //                 .map(item => item < 2 ? "red" : "rgb(182, 245, 66)"),

    //             borderWidth: 1,
    //             barPercentage: 1,
    //             categoryPercentage: 0.7,
    //             borderRadius: 10,
    //         }
    //     ],
    // }
