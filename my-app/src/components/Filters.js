import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";


const Filters = (props) => {

    const data = useSelector((state) => state.data.StudentData)
    const list = [...new Set(data.map(item => item.studentName))]
    // const [search, setSearch] = useState("")
    const dispatch = useDispatch()

    const handleSearch = (e) => {
        // setSearch(e.target.value)
        // dispatch({ type: "SEARCH", payload: e.target.value })
    }

    return (
        <>
            <div className="dropdown-content-filter">
                <ul className="dropdown-ul">
                    <li className="li-item">

                    </li>
                    <li className="li-item">
                        <p> b</p>
                    </li>
                    <li className="li-item">
                        <p> c</p>
                    </li>
                    <li className="li-item">
                        <p> d</p>
                    </li>
                </ul>
            </div>
        </>
    )
}



export default Filters