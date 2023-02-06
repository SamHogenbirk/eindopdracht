import StudentList from "./StudentList"
import Filters from "./filters/Filters"
import { Link } from "react-router-dom"

const Navbar = () => {

    const isHome = window.location.pathname === "/"
   
    return (
        <>
            <div className="navbar">
                <div className="border-top"></div>

                <span className="dropdown-list">
                    <div className="button-wrapper-list">
                        <button className="dropbtn-list ">Student list</button>
                        <div>
                            <StudentList />
                        </div>
                    </div>
                </span>

                <span className="button-wrapper-home" style={isHome ? { display: "none" } : { display: "block" }}  >
                    <Link to="/">
                        <button
                            type="button"
                            className="home-button">Ho--Me</button>
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