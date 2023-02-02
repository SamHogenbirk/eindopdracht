import React from "react";
import { useDispatch } from "react-redux";
import RadioButtons from "./RadioButtons";
import { radioResult } from "../features/FilterSlice";
import { sortList } from "../features/ChartSlice";


const Filters = () => {

    const dispatch = useDispatch()

    const handleChange = (e) => {

        console.log(e.target.name)

        switch (e.target.name) {
            case "chartType":

                dispatch(radioResult({ filter: e.target.value }))
                break;

            case "sortButton":

                // console.log(e.target.value)
                dispatch(sortList(e.target.value))
                break;

        }
    }



    const handleClick = (e) => {

        switch (e.target.name) {

            case "switch":
                const barChart = document.querySelector(".bar-chart")
                const lineChart = document.querySelector(".line-chart")

                if (barChart.style.display === "none") {
                    barChart.style.display = "block"
                    lineChart.style.display = "none"

                } else {
                    barChart.style.display = "none"
                    lineChart.style.display = "block"
                }
                break;

            case "sortButton":
                dispatch(sortList(e.target.value))
                break;
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
                        {/* <RadioButtons props={"sort"} handleChange={handleChange} /> */}
                    </li>
                    <li>
                        <label>
                            <button className="sort-button" name="sortButton" value="assignment" onClick={handleClick}>sort by assignment</button>
                        </label>
                        <label>
                            <button className="sort-button" name="sortButton" value="studentName" onClick={handleClick}>sort by name</button>
                        </label>
                    </li>
                </ul>
            </div>

        </>
    )
}

export default Filters