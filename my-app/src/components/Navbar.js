import React from "react"
import StudentList from "./list/StudentList"

const Navbar = (props) => {

    return (
        <>
            <div className="navbar">
                <div className="dropdown">
                    <span className="tag">List</span>
                    <StudentList data={props.data} />
                </div>
            </div>
        </>
    )
}

export default Navbar