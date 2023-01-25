import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import BarChart from "../components/charts/BarChart"

const Student = () => {

    const data = useSelector((state) => state.data.StudentData)
    const { name } = useParams()
    const ratingPerStudent = (data, name) => data.filter((data) => data.studentName === name)

    const title = `Difficulty and enjoyment rating for ${name}`
    const horizontalArray = [...new Set(data.map(item => item.assignment))]
    const verticalArrayDifficulty = ratingPerStudent(data, name).map(item => item.difficulty)
    const verticalArrayFun = ratingPerStudent(data, name).map(item => item.fun)

    return (
        <>
            <BarChart data={{
                title,
                horizontalArray,
                verticalArrayDifficulty,
                verticalArrayFun,
            }} />
        </>
    )
}

export default Student