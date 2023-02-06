import { useSelector } from "react-redux"

const StudentProfile = (profile) => {

    const average = useSelector((state) => state.chart.averagePerStudent)
    const ratings = average
        .filter((item) => item.category === profile.name)
        .map(item => {
            return (
                <div className="ratings-wrapper" key={item}>
                    <p className="ratings"> Difficulty: {item.difficulty}</p>

                    <p className="ratings"> Fun: {item.fun}</p>
                </div>
            )
        })

    return (
        <div className='dropdown-content-profile'>
            <ul className="dropdown-ul-profile">
                {profile.data.map((item, index) => (
                    item.firstName === profile.name ?
                        <li key={index}>
                            <ul className='profile-wrapper'>
                                <li>First name: {item.firstName}</li>
                                <li>Last name: {item.lastName}</li>
                                <li>e-mail: {item.email}</li>
                                <li>Gender: {item.gender}</li>
                                <li>Age: {item.age}</li>
                                <li>Id: {item.id}</li>
                                <li>Average rating: {ratings}  </li>
                                <span className="photo"><img src={item.photo} alt='profile picture' /></span>
                            </ul>
                        </li>
                        : null
                ))}
            </ul>
        </div >
    )
}



export default StudentProfile