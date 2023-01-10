import PieChart from "../components/PieChart"
import BarChart from "../components/BarChart"
import { useState } from "react";
import { Data } from "../app/Data";




export default function Chart() {

    const [barData, setBarData] = useState({

        label: Data.map((data) => data.year),
        datasets: [
            {
                label: Data.map(data => data.year),
                data: Data.map((data) => data.userGain),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',

                ],

                borderWidth: 1
            }]
    })
    console.log(barData)

    const [pieData, setPieData] = useState({
        label: Data.map((data) => data.year),
        datasets: [
            {
                label: "Users Gained",
                data: Data.map((data) => data.userGain),
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0"
                ],
                borderColor: "black",
                borderWidth: 2
            }
        ]
    });

    return (
        <div >
            <PieChart chartData={pieData} />
            <BarChart chartData={barData} />
        </div>
    )

}

