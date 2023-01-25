import React from "react"
import StudentList from "./list/StudentList"

const Navbar = (props) => {

    return (
        <>
            <div className="navbar">
                <div className="dropdown">
                    <button className="dropbtn">List
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <StudentList data={props.data} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar