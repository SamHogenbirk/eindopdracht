import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import Navbar from "../components/Navbar"
import BarChart from "../components/charts/BarChart"
import LineChart from '../components/charts/LineChart'
import ChartTitle from '../components/charts/ChartTitle'
import StudentProfile from '../components/StudentProfile'
import CalculateAverage from '../components/CalculateAverage'
import TableView from '../components/TableView'

const Student = () => {

    const profile = useSelector((state) => state.data.combinedStudent)
    const { name } = useParams()

    CalculateAverage(name)

    useEffect(() => {
        document.getElementById("line").classList.add('title-underline')
    }, [])

    return (
        <>
            <Navbar />

            <div className='chart-title-wrapper'>
                <ChartTitle
                    title="Difficulty and enjoyment rating for:"
                    subtitle={name} />

                <div className='profile-wrapper'>
                    <StudentProfile
                        data={profile}
                        name={name} />
                </div>
            </div>

            <div className="chart-wrapper" >
                <div className="bar-chart">
                    <BarChart />
                </div>

                <div className="line-chart">
                    <LineChart />
                </div>
            </div>

            <div className="table">
                <TableView />
            </div>

        </>
    )
}

export default Student
