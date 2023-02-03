import React from "react";
import { useDispatch, useSelector } from "react-redux";
import RadioButtons from "./RadioButtons";
import { radioResult } from "../features/FilterSlice";
import { sortChart } from "../features/ChartSlice";

const Filters = () => {

    const dispatch = useDispatch()

    const handleChange = (e) => {
        dispatch(radioResult({ filter: e.target.value }))
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
                const select = document.querySelector("select")
                const selectedOption = select.options[select.selectedIndex]
                dispatch(sortChart(selectedOption.value))
                break;
        }
    }

    return (
        <>
            <div className="dropdown-content-filter">
                <ul className="dropdown-ul">
                    <li>
                        <select name="sort">
                            <option value="">--choose an option--</option>
                            <option value="category">sort by assignment</option>
                            <option value="category">sort by name</option>
                            <option value="difficulty">sort by difficulty</option>
                            <option value="fun">sort by fun</option>
                        </select>
                        <label>
                            <button className="sort-button" name="sortButton" value="sort" onClick={handleClick}>sort!</button>
                        </label>
                    </li>
                    <li>
                        <RadioButtons data={"chartType"} handleChange={handleChange} />
                    </li>
                    <li>
                        <button className="chart-button" name="switch" onClick={handleClick}>switch chart</button>
                    </li>
                </ul>
            </div>

        </>
    )
}

export default Filters