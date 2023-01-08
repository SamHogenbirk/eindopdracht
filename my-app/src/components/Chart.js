import PieChart from "./PieChart";
import { useState } from "react";
import { Data } from "../app/Data";


console.log(Data)

export default function Chart() {

    const [chartData, setChartData] = useState({
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
            <PieChart chartData={chartData} />
        </div>
    )

}

