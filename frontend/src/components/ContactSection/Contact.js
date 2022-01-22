import React from "react"
import Form from "./Form"
import Map from "./Map"
const Contact = ({info}) =>{
    return(
        <main id='main'>
        <section id="contact" className="contact">
        <div className="container">
            <div className="section-title">
                <h2>Contact</h2>
            </div>
            <div className="row">
                <Map data={info}/>
                <Form data={info}/>
            </div>
        </div>
        </section>
        </main>
    )
}

export default Contact