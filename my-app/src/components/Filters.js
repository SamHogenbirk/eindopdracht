import React from "react";
import { useDispatch } from "react-redux";
import RadioButton from "./RadioButton";
import { radioResult } from "../features/FilterSlice";


const Filters = () => {

    const dispatch = useDispatch()

    const handleChange = (e) => {
        dispatch(radioResult({ filter: e.target.value }))
    }//radio button

    const handleClick = (e) => {
        e.preventDefault()
        
        const barChart = document.querySelector(".bar-chart")
        const lineChart = document.querySelector(".line-chart")

        if (barChart.style.display === "none") {
            barChart.style.display = "block"
            lineChart.style.display = "none"

        } else {
            barChart.style.display = "none"
            lineChart.style.display = "block"
        }
    }//switch chart

    return (
        <>
            <div className="dropdown-content-filter">
                <ul className="dropdown-ul">

                    <li>
                        <RadioButton handleChange={handleChange} />
                    </li>
                    <li>
                        <button className="chart-button" onClick={handleClick}>switch chart</button>
                    </li>
                    <li>
                       <select>
                            
                       </select>
                    </li>
                </ul>
            </div>

        </>
    )
}



export default Filters