import Navbar from "../components/Navbar"
import BarChart from "../components/charts/BarChart"
import LineChart from "../components/charts/LineChart"
import MainPage from "./MainPage"


const Home = () => {


    return (
        <>
        
            <Navbar />

            <div className="chart-wrapper" >

                {/* data={chartDatax} */}

                <div className="bar-chart">
                    <BarChart />
                </div>

                {/* <div className="line-chart">
                    <LineChart  />
                </div> */}
            </div>
        </>
    )

}



export default Home