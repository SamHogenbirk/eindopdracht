import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { filterStudent } from '../features/DataSlice'

const StudentList = (props) => {

    const id = () => parseInt(Math.floor(Math.random() * Date.now()).toString().replace(".", ""))
    const dispatch = useDispatch()
    const [names, setNames] = useState([])

    const handleChange = (e) => {

        const name = e.target.value
        names.includes(name) ? names.splice(names.indexOf(name), 1) : names.push(name)
        setNames(names)
        dispatch(filterStudent(names))

    }

    // const handleClick = (e) => {
    //     e.preventDefault()
    //     dispatch(filterStudent(names))

    // }

    return (

        <div className='dropdown-content-list' >
            <ul className='dropdown-ul'>

                {props.data.map((item) =>
                    <li className="li-item" key={id()}>
                        <Link to={`/student/${item}`}>{item} </Link>
                        <label>
                            <input id={id()} type="checkbox" defaultChecked={true} value={item} onChange={handleChange} />
                            {/* <Checkbox value={item} /> */}
                        </label>
                    </li>)}
                {/* <button onClick={handleClick}>filter</button> */}
            </ul>
        </div >
    )
}

export default StudentList