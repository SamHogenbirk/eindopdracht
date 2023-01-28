import React from "react"
import StudentList from "./StudentList"
import { useSelector } from "react-redux"
import Filters from "./Filters"
import { Link } from "react-router-dom"


const Navbar = () => {

    const arrays = useSelector((state) => state.array)
    const isHome = window.location.pathname === "/"

    return (
        <>
            <div className="navbar">
                <div className="border-top"></div>

                <span className="dropdown-list">
                    <div className="button-wrapper-list">
                        <button className="dropbtn-list ">Student list</button>
                        <div>
                            <StudentList data={arrays.studentName} />
                        </div>
                    </div>
                </span>


                <span className="button-wrapper-home" style={isHome ? { display: "none" } : { display: "block" }}  >
                    <Link to="/">
                        <button type="button" className="home-button">-home-</button>
                    </Link>
                </span>

                <span className="dropdown-filter">
                    <div className="button-wrapper-filter">
                        <button className="dropbtn-filter">Filters</button>
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