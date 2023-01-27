import React from 'react'
import { Link } from 'react-router-dom'

const StudentList = (props) => {

    const id = () => parseInt(Math.floor(Math.random() * Date.now()).toString().replace(".", ""))
    // const handleChange = (e) => { console.log(e.target.value) }
    const handleClick = (e) => { console.log(e) }

    return (

        <div className='dropdown-content-list' >
            <ul className='dropdown-ul'>

                {props.data.map((item) =>
                    <li className="li-item" key={id()}>
                        <Link to={`/student/${item}`}>{item}</Link>
                        <button onClick={() => handleClick(item)} className='list-remove-button'> - </button>
                        {/* <label><input type="checkbox" name="include" value={item} onChange={handleChange} /></label> */}

                    </li>)}
            </ul>
        </div >
    )
}

export default StudentList