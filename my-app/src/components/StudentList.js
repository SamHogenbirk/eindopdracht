import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { addMockData, filterStudent } from '../features/DataSlice'
import { useSelector, useDispatch } from "react-redux"

const StudentList = () => {

    const id = () => parseInt(Math.floor(Math.random() * Date.now()).toString().replace(".", ""))
    const dispatch = useDispatch()
    const x = (useSelector((state) => state.data.studentName))
    const array = useSelector((state) => state.data.combinedStudent)

    useEffect(() => {
        dispatch(addMockData())
    }, [])

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

                    <li className="li-item" key={item.id} >
                        <Link to={`/student/${item.firstName}`}>{item.firstName} {item.lastName} </Link>
                        <span className='checkbox-wrapper'>
                            <input
                                id={id()}
                                className="student-checkbox"
                                type="checkbox"
                                defaultChecked={true}
                                value={item.firstName}
                                onChange={handleChange} />
                        </span>
                    </li>)}
            </ul>
        </div >
    )
}

export default StudentList