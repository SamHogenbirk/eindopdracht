import { useDispatch } from "react-redux";
import FilterButtons from "./FilterButtons";
import { radioResult } from "../../features/DataSlice";
import { sortChart } from "../../features/ChartSlice";
import { useState } from "react";

const Filters = () => {

    const dispatch = useDispatch()

    const handleChange = (e) => {

        dispatch(radioResult(e.target.value))
    }

    const [active, setActive] = useState({ bar: true, table: false })
    //return to previous chart type when switching back to chart view and prevent update issue

    const handleClick = (e) => {

        const barChart = document.querySelector(".bar-chart")
        const lineChart = document.querySelector(".line-chart")
        const table = document.querySelector(".table")
        const butTable = document.querySelector(".table-button")
        const butChart = document.querySelector(".chart-button")


        switch (e.target.name) {

            case "switch":

                if (active.bar === false) {

                    table.style.display = "none"
                    barChart.style.display = "block"
                    lineChart.style.display = "none"
                    setActive({ ...active, bar: true })
                    butChart.innerHTML = "Line chart"
                    break;

                } else {

                    barChart.style.display = "none"
                    table.style.display = "none"
                    lineChart.style.display = "block"
                    setActive({ ...active, bar: false })
                    butChart.innerHTML = "Bar chart"
                    break;
                }

            case "table":

                if (active.table === false) {

                    table.style.display = "block"
                    barChart.style.display = "none"
                    lineChart.style.display = "none"
                    setActive({ ...active, table: true })
                    butTable.innerHTML = "Chart"
                    break;

                } else {

                    active.bar ? barChart.style.display = "block" : lineChart.style.display = "block"
                    table.style.display = "none"
                    setActive({ ...active, table: false })
                    butTable.innerHTML = "Table"
                    break;
                }

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
                    <li>
                        <FilterButtons
                            data={"tableView"}
                            handleClick={handleClick}
                        />
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Filters