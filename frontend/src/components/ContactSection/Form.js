import React from "react";
import { Button } from "react-bootstrap";
const Form = ({data}) =>{
    return(
        <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
        <form action="" method="post" className="email-form">
        <div className="row">
            <div className="form-group col-md-6">
                <label for="name">Name</label>
                <input type="text" name="name" className="form-control" id="name" placeholder={data.name.first+" "+data.name.last} required />
            </div>
            <div className="form-group col-md-6">
                <label for="name">Username</label>
                <input type="text" className="form-control" name="username" id="username" placeholder={data.login.username} required />
            </div>
        </div>
        <div className="form-group">
            <label for="name">Email</label>
            <input type="email" className="form-control" name="email" id="email" placeholder={data.email} required />
        </div>
        <div className="form-group">
            <label for="name">Password</label>
            <input type="password" className="form-control" name="address" placeholder="********" required></input>
        </div>
        <input type="checkbox"></input><span> I accept all the terms and conditions</span>
            <div className="d-grid">
                <Button className='updateButton' variant="outline-success" size="lg" >Update Profile</Button>{' '}
            </div>
        </form>
        </div>
    )
}

export default Form