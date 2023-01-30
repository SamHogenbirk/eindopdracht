
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import BarChart from "../components/charts/BarChart"
import Navbar from "../components/Navbar"

const Student = (props) => {

    const data = useSelector((state) => state.data.studentData)
    // const arrays = useSelector((state) => state.array)

    const { name } = useParams()

    const ratingPerStudent = (data, name) => data.filter((data) => data.studentName === name)

    const title = `Difficulty and enjoyment rating for ${name}`
    const horizontalArray = [...new Set(data.map(item => item.assignment))]
    const verticalArrayDifficulty = ratingPerStudent(data, name).map(item => item.difficulty)
    const verticalArrayFun = ratingPerStudent(data, name).map(item => item.fun)

    return (
        <>
            <Navbar />

            <div className='chart-wrapper'>
                <BarChart className="bar-chart"
                    data={{
                        title,
                        horizontalArray,
                        verticalArrayDifficulty,
                        verticalArrayFun,
                    }} />
            </div>
        </>
    )
}

export default Student