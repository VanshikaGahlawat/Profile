import React from "react"

const About = ({info})=>{
    return(
        <main id='main'>
        <section id="about" className="about">
        <div className="container">
            <div className="section-title">
            <h2>About</h2>
            </div>
            <div className="row">
            <div className="col-lg-4">
                <img src={info.picture.large} className="img-fluid rounded-circle" alt="profile picture" />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content">
                <h3>{info.name.title}. {info.name.first} {info.name.last}</h3>

                <div className="row">
                <div className="col-lg-6">
                    <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>D.O.B:</strong> <span>{info.dob.date.split('T')[0]}</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Tel:</strong> <span>+{info.phone}</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+{info.cell}</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>{info.location.city}</span></li>
                    </ul>
                </div>
                <div className="col-lg-6">
                    <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>{info.dob.age}</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Member for:</strong> <span>{info.registered.age} years</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>{info.email}</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Country:</strong> <span>{info.location.country}</span></li>
                    </ul>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            </div>
        </div>
        </section>
        </main>
    )
}

export default About
