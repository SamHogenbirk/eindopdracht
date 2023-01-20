import React from 'react'
import ListItem from './ListItem'


const StudentList = (props) => {

    const id = () => {
        return parseInt(Math.floor(Math.random() * Date.now()).toString().replace(".", ""))
    }

    return (
        <div className='dropdown-content'>
            <ul >
                {props.data.map((item) => <ListItem key={id()} data={item} />)}
            </ul>
        </div>
    )

}

export default StudentList