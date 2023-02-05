import React, { useState } from 'react'


const ChartTitle = ({ title, subtitle, data }) => {

    //from parent component: main page & student page
    //title = "Difficulty and enjoyment rating per "
    //subtitle = student name or assignment 
    //data = "assignment" or "student" (average rating)

    let name = ""
    data ? name = data : name = subtitle

    return (

        <div className='title-container'>
            <h5 className="chart-title">{title}</h5>
            <h2 className="chart-title-name">{name}</h2>
            <hr id="line" className="title-underline"></hr>
        </div>
    )
}

export default ChartTitle