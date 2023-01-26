import React from "react"
import StudentList from "./list/StudentList"
import { useSelector } from "react-redux"

const Navbar = () => {

    const data = useSelector((state) => state.data.StudentData)
    const list = [...new Set(data.map(item => item.studentName))]

    return (
        <>
            <div className="navbar">
                <div className="border-top"></div>
                <div className="dropdown">
                    <button className="dropbtn-list ">Student list
                        <i className="fa fa-caret-down"></i>
                    </button>

                    <div>
                        <StudentList data={list} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar