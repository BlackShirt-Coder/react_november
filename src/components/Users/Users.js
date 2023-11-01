import React from "react";
function Users(obj){
    return(
        <div className="container my-5 card py-3">
        <div className="row">
            <div className="col-2">
                <img src={obj.user.image} alt=""  width="100px" height="100px"  />
            </div>
            <div className="col-7 text-center ">
                <div style={{display:"inline-flex"}}>
                    <p>User Name&nbsp;</p>
                    <p><strong>{obj.user.user}</strong></p>
                </div>
                <p>Phone Number</p>
                <p><strong>{obj.user.phone}</strong></p>
            </div>
            <div className="col-3">
                <button className="btn btn-danger"><i className="fa fa-trash"></i></button>
            </div>

        </div>
        </div>
    );
}
export  default  Users;