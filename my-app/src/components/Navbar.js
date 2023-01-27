import React from "react"
import StudentList from "./list/StudentList"
import { useSelector } from "react-redux"
import Filters from "./Filters"

const Navbar = () => {

    const data = useSelector((state) => state.data.StudentData)
    const list = [...new Set(data.map(item => item.studentName))]

    return (
        <>
            <div className="navbar">
                <div className="border-top"></div>

                <span className="dropdown-list">
                    <div className="button-wrapper-list">
                        <button className="dropbtn-list ">Student list
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div>
                            <StudentList data={list} />
                        </div>
                    </div>
                </span>

                <span className="dropdown-filter">
                    <div className="button-wrapper-filter">
                        <button className="dropbtn-filter ">Filters
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div>
                            <Filters />
                        </div>
                    </div>
                </span>
            </div>
        </>
    )
}

export default Navbar