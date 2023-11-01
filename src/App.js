import React ,{useState} from "react";

import Users from "./components/Users/Users";
import "./style.css";
import user from "./components/Test/User";



function App() {

    let users = [
        {
            id: 1,
            user: "mgmg",
            image: "https://www.shareicon.net/data/128x128/2017/01/06/868320_people_512x512.png",
            phone: "09302902930"
        },
        {
            id: 2,
            user: "aung aung",
            image: "https://www.shareicon.net/data/128x128/2017/01/06/868320_people_512x512.png",
            phone: "09859483943"
        },
        {
            id: 3,
            user: "su su",
            image: "https://www.shareicon.net/data/128x128/2017/01/06/868320_people_512x512.png",
            phone: "09883299232"
        }
    ];
    let [count,setCount]=useState(0);
    return (
        <div>
            <div className="p-4">
                <p>{count}</p>
                <button className="btn btn-info "  onClick={()=>setCount(++count)}><i className="fa fa-edit"></i></button>
            </div>
            {
                users.map(usr => <Users user={usr} key={usr.id}></Users>)
            }

        </div>

    )
}

export default App;
