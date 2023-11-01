import React from "react";
function Users({image,phone}){
    return(
        <div className="container my-5 card py-3">
        <div className="row">
            <div className="col-2">
                <img src={image} alt=""  width="100px" height="100px"  />
            </div>
            <div className="col-7 text-center ">
                <p>Phone Number</p>
                <p><strong>{phone}</strong></p>
            </div>
            <div className="col-3">
                <button className="btn btn-danger"><i className="fa fa-trash"></i></button>
            </div>
            <div><h2>Tesing</h2></div>
        </div>
        </div>
    );
}
export  default  Users;