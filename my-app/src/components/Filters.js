import React from "react";
import { useDispatch } from "react-redux";
import RadioButtons from "./RadioButtons";
import { radioResult } from "../features/FilterSlice";
import { sortList } from "../features/DataSlice";


const Filters = () => {

    const dispatch = useDispatch()

    const handleChange = (e) => {

        // console.log(e.target.name)

        switch (e.target.name) {
            case "chartType":

                dispatch(radioResult({ filter: e.target.value }))
                break;

            case "sortRadio":

                // console.log(e.target.value)
                dispatch(sortList(e.target.value))
                break;

        }
    }

    const handleClick = (e) => {

        const barChart = document.querySelector(".bar-chart")
        const lineChart = document.querySelector(".line-chart")

        if (barChart.style.display === "none") {
            barChart.style.display = "block"
            lineChart.style.display = "none"

        } else {
            barChart.style.display = "none"
            lineChart.style.display = "block"
        }

    }


    return (
        <>
            <div className="dropdown-content-filter">
                <ul className="dropdown-ul">

                    <li>
                        <RadioButtons props={"chartType"} handleChange={handleChange} />
                    </li>
                    <li>
                        <button className="chart-button" name="switch" onClick={handleClick}>switch chart</button>
                    </li>
                    <li>
                        <RadioButtons props={"sort"} handleChange={handleChange} />
                    </li>
                </ul>
            </div>

        </>
    )
}

export default Filters