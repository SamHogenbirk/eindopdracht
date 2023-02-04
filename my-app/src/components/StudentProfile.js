
const StudentProfile = (profile) => {

    return (
        <div className='dropdown-content-profile'>
            <ul className="dropdown-ul">
                {profile.data.map((item, index) => (
                    <li key={index}>
                        {item.firstName === profile.name ?
                            <div className='profile-wrapper'>
                                <p>First name: {item.firstName}</p>
                                <p>Last name: {item.lastname}</p>
                                <p>e-mail: {item.email}</p>
                                <p>Gender: {item.gender}</p>
                                <p>Age: {item.age}</p>
                                <p>Id: {item.id}</p>
                                <img src={item.photo} alt='profile picture' />
                              
                            </div>
                            : null}
                    </li>
                ))}
            </ul>
        </div >
    )
}



export default StudentProfile