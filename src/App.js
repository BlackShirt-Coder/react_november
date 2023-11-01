import React, {useState, useEffect} from "react";

import Users from "./components/Users/Users";
import "./style.css";


function App() {


        useEffect(() => {
            fetch("https://randomuser.me/api/?results=10")
                .then(res => res.json())
                .then((users) => {
                    let rawUsers = users.results;
                    let filteredUsers = rawUsers.map(usr => {
                        return {
                            uuid: usr.login.uuid,
                            name: `${usr.name.title} ${usr.name.first}`,
                            phone: usr.phone,
                            cell: usr.cell,
                            image: usr.picture.large
                        }
                    });
                    setUsers(filteredUsers);
                })

                .catch(err => console.log(err));
        }, [])


        let [uu, setUsers] = useState([]);
        return (

            <div>
                <div className="container">
                    <div className="row">
                        <h1 className="text-center text-info my-5">Our Employee</h1>
                    </div>
                    <div>
                        {
                            uu.map(usr=><Users data={usr} key={usr.uuid}></Users>)
                        }
                    </div>
                </div>
            </div>

        )



}

export default App;
