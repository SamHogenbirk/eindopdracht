import React from "react"
import { Link } from "react-router-dom"

const ListItem = (props) => {

    return (
        <>
            <li className="li-item">
                <Link to={`/student/${props.data}`}>{props.data}</Link>
            </li>
        </>
    )
}

export default ListItem 