import LineChart from "../components/LineChart"
import BarChart from "../components/BarChart"
import { useState } from "react";
import { Data } from "../app/Data";




export default function Chart() {

    const barOptions = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: "Users Gained between 2016-2020"
            }
        }

    }

    const lineOptions = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: "Users Gained between 2016-2020"
            }
        }
    }

    const [barData, setBarData] = useState({

        labels: Data.map(item => item.year), //horizontal axis

        datasets: [
            {
                label: "users lost",
                data: Data.map(item => item.userLost), //vertical axis
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',

                ],

                borderWidth: 1
            },
            {
                label: "users gained",
                data: Data.map(item => item.userGain), //vertical axis
                backgroundColor: [
                    'rgba(53, 162, 235, 0.5)',

                ],

                borderWidth: 1
            }
        ]
    })

    const [lineData, setLineData] = useState({

        labels: Data.map((data) => data.year),

        datasets: [

            {
                label: "Users Gained",
                data: Data.map((data) => data.userGain),
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            },
            {
                label: "Users Lost",
                data: Data.map((data) => data.userLost * 10),
                fill: false,
                borderColor: 'red',
                tension: 0.1
            }
        ]
    });

    return (
        <div >
            <LineChart options={lineOptions} chartData={lineData} />
            <BarChart options={barOptions} chartData={barData} />
        </div>
    )

}

