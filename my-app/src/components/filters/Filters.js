import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterButtons from "./FilterButtons";
import { radioResult } from "../../features/FilterSlice";
import { sortChart } from "../../features/ChartSlice";

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
                        <FilterButtons
                            data={"sort"}
                            handleClick={handleClick} />
                    </li>
                    <li>
                        <div className="radio-wrapper">
                            <FilterButtons
                                data={"chartType"}
                                handleChange={handleChange}
                            />
                        </div>
                    </li>
                    <li>
                        <FilterButtons
                            data={"switchChart"}
                            handleClick={handleClick}
                        />
                    </li>
                </ul>
            </div>

        </>
    )

}

export default Filters