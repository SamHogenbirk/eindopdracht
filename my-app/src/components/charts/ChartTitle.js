
const ChartTitle = ({ title, subtitle, data }) => {

    //title = "Difficulty and enjoyment rating per "
    //subtitle = student name or assignment 
    //data = "assignment" or "student" (average rating)

    let name = ""
    let AssStu = ""

    if (data) {
        AssStu = data
        name = data

    } else {
        AssStu = ""
        name = subtitle
    }

    return (

        <div className="chart-title-wrapper">
            <h4 className="chart-title">{title}</h4>
            <h2 className="chart-title-name">{name}</h2>
            <hr id="line" className="title-underline"></hr>
        </div>
    )
}

export default ChartTitle