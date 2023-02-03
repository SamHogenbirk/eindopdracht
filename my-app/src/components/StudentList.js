import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { filterStudent } from '../features/DataSlice'
import { useSelector } from "react-redux"

const StudentList = () => {

    const id = () => parseInt(Math.floor(Math.random() * Date.now()).toString().replace(".", ""))
    const dispatch = useDispatch()
    const array = (useSelector((state) => state.data.studentName))

    const [names, setNames] = useState([])

    const handleChange = (e) => {

        const name = e.target.value
        names.includes(name) ? names.splice(names.indexOf(name), 1) : names.push(name)
        setNames(names)
        dispatch(filterStudent(names))

    }//change list of names

    return (

        <div className='dropdown-content-list' >
            <ul className='dropdown-ul'>

                {array.map((item) =>
                    <li className="li-item" key={item} >
                        <Link to={`/student/${item}`}>{item} </Link>
                        <label>
                            <input
                                id={id()}
                                className="student-checkbox"
                                type="checkbox"
                                defaultChecked={true}
                                value={item}
                                onChange={handleChange} />
                        </label>
                    </li>)}
            </ul>
        </div >
    )
}

export default StudentList