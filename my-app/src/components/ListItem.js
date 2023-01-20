import React from "react"

const ListItem = (props) => {
    console.log(props)

    return (
        <li >
            <p>{props.data}</p>
        </li>
    )
}


export default ListItem 