
const StudentProfile = (profile) => {

    return (
        <div className='dropdown-content-profile'>
            <ul className="dropdown-ul-profile">
                {profile.data.map((item, index) => (
                    item.firstName === profile.name ?
                        <li key={index}>
                            <ul className='profile-wrapper'>
                                <li>First name: {item.firstName}</li>
                                <li>Last name: {item.lastname}</li>
                                <li>e-mail: {item.email}</li>
                                <li>Gender: {item.gender}</li>
                                <li>Age: {item.age}</li>
                                <li>Id: {item.id}</li>
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