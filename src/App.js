import React from "react";
import Users from "./components/Users/Users";

function App() {
    let users=[
        {
            id:1,
            user:"mgmg",
            image:"https://www.shareicon.net/data/128x128/2017/01/06/868320_people_512x512.png",
            phone:"09302902930"
        },
        {
            id:2,
            user:"aung aung",
            image:"https://www.shareicon.net/data/128x128/2017/01/06/868320_people_512x512.png",
            phone:"09859483943"
        },
        {
            id:3,
            user:"su su",
            image:"https://www.shareicon.net/data/128x128/2017/01/06/868320_people_512x512.png",
            phone:"09883299232"
        }
    ];
    return (
        <div>
            {
                users.map(usr=><Users user={usr} key={usr.id}></Users>)
            }

        </div>

    )
}

export default App;
