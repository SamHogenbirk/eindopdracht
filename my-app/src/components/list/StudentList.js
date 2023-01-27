import React from 'react'
import ListItem from './ListItem'


const StudentList = (props) => {

    const id = () => parseInt(Math.floor(Math.random() * Date.now()).toString().replace(".", ""))

    return (
        <div className='dropdown-content-list' >
            <ul className='dropdown-ul'>
                {props.data.map((item) => <ListItem key={id()} data={item} />)}
            </ul>
        </div>
    )

}

export default StudentList