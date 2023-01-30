import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { filterStudent } from '../features/DataSlice'

function Checkbox(props) {
  const dispatch = useDispatch()


  const [checked, setChecked] = useState(false);

  const [names, setNames] = useState([])

  const handleChange = (e) => {

    const name = e.target.value

    if (names.includes(name)) {
      names.splice(names.indexOf(name), 1)

    } else {
      names.push(name)

    }
    dispatch(filterStudent(names))
    e.target.checked = !e.target.checked
  }


  return (

    <div>

      <input type="checkbox" value={props.value}  onChange={handleChange} />

    </div>

  )

}

export default Checkbox;