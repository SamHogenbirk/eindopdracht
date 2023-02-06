import { useSelector } from "react-redux"

const TableView = () => {

    const chartData = useSelector((state) => state.chart)

    return (
        <div className="table-wrapper">
            <table>
                <thead>
                    <tr className="table-row">
                        <th>Assignment</th>
                        <th>Difficulty</th>
                        <th>Enjoyment</th>
                    </tr>
                </thead>
                <tbody>
                    {chartData.horizontalArray.map((item, index) => (
                        <tr className="table-row" key={index}>
                            <td>{item}</td>
                            <td>{chartData.verticalArrayDifficulty[index]}</td>
                            <td>{chartData.verticalArrayFun[index]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}


export default TableView