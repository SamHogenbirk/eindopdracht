import React from "react";
import { useDispatch, useSelector } from "react-redux";
import RadioButtons from "./RadioButtons";
import { radioResult } from "../features/FilterSlice";
import { sortChart } from "../features/ChartSlice";
import { useEffect } from "react";



const Filters = () => {

    const data = useSelector(state => state.chart.isSorted)
    const dispatch = useDispatch()
    let x = ""

    const handleChange = (e) => {

        console.log(e.target.value)

        switch (e.target.name) {
            case "chartType":

                dispatch(radioResult({ filter: e.target.value }))
                break;

            case "sort":
                x = e.target.value
                break;

        }
    }

    let choiceBtn = document.createElement("BUTTON")
    choiceBtn.innerText = "sort by name"
    choiceBtn.className = "chart-button"



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
                dispatch(sortChart(x))
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
                        <select name="sort" onChange={handleChange}>
                            <option value="">sort by default</option>
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


                        {/* <label>
                            <button className="sort-button" name="sortButton" value="studentName" onClick={handleClick}>sort by name</button>
                        </label> */}
                    </li>
                </ul>
            </div>

        </>
    )
}

export default Filters