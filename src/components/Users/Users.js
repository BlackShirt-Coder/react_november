import React from "react";

function Users(props) {
    return (
        <div className="container my-5 card py-3">
            <div className="row">
                <div className="col-2">
                    <img src={props.data.image} alt="" width="100px" height="100px"/>
                </div>
                <div className="col-7 text-center ">
                    <div style={{display: "inline-flex"}}>
                        <p>User Name&nbsp;</p>
                        <p><strong>{props.data.name}</strong></p>
                    </div>
                    <br/>
                    <div style={{display: "inline-flex"}}>
                        <p>Phone Number &nbsp;</p>
                        <p><strong>{props.data.phone}</strong></p>

                    </div>
                    <br/>
                    <div style={{display: "inline-flex"}}>
                        <p>Cell Number &nbsp;</p>
                        <p><strong>{props.data.cell}</strong></p>

                    </div>

                </div>
                <div className="col-3">
                    <button className="btn btn-danger"><i className="fa fa-trash"></i></button>
                </div>

            </div>
        </div>
    );
}

export default Users;