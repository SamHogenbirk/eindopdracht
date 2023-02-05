import React, { useState } from 'react'
// import arrowDown from '../..img/arrowDown.png'



const ChartTitle = ({ title, subtitle, data }) => {

    //from parent component: main page & student page
    //title = "Difficulty and enjoyment rating per "
    //subtitle = student name or assignment 
    //data = "assignment" or "student" (average rating)


    let name = ""
    data ? name = data : name = subtitle

    console.log(subtitle)
    return (

        <div className='title-container'>
            <h5 className="chart-title">{title}</h5>
            <h2 className="chart-title-name">{name}
                <span >
                    <img
                        className='arrowDown'
                        style={subtitle ? { display: "inline" } : { display: "none" }}
                        src="/arrowDown-1.png" >
                    </img>
                </span>
            </h2>
            <hr id="line" className="title-underline"></hr>

        </div>
    )
}

export default ChartTitle