import Navbar from "../components/Navbar"
import BarChart from "../components/charts/BarChart"
import LineChart from "../components/charts/LineChart"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import ChartTitle from "../components/charts/ChartTitle"
import CalculateAverage from "../components/CalculateAverage"
import TableView from "../components/TableView"

const MainPage = () => {

    const isFiltered = useSelector((state) => state.data.filtered)
    isFiltered === "assignment" ? CalculateAverage("assignmentAverage") : CalculateAverage("studentAverage")

    useEffect(() => {
        document.getElementById("line").classList.remove('title-underline')
    }, [])

    return (
        <>
            <Navbar />

            <div className="chart-title-wrapper">
                <ChartTitle
                    data={isFiltered}
                    title="Difficulty and enjoyment rating per:"
                />
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

export default MainPage
