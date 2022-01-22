import React from "react";

const Map = ({data}) =>{
    // const MAP_API_KEY = process.env.REACT_APP_MAP_API_KEY
    return(
        <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
                <div className="address">
                    <i className="bi bi-geo-alt"></i>
                    <h4>Location:</h4>
                    <p>{data.location.street.number+" "+data.location.street.name+" "+data.location.city+" "+data.location.state+" "+data.location.country+" PIN: "+data.location.postcode}</p>
                </div>

                <div className="email">
                    <i className="bi bi-envelope"></i>
                    <h4>Email:</h4>
                    <p>{data.email}</p>
                </div>
                <div className="phone">
                    <i className="bi bi-phone"></i>
                    <h4>Call:</h4>
                    <p>+{data.cell}</p>
                </div>
                <iframe src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBU62YBi438DBZE0qB5M_UTj-JLEoKNWbE&q=${data.location.city+"+"+data.location.state+"+"+data.location.country}&zoom=13&maptype=satellite`} frameborder="0" style={{width:"98.5%", height:"300px"}} allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default Map