import React from "react";
import Usersr from "./components/Users/Users";
import Users from "./components/Users/Users";
function App() {
    let img="https://www.shareicon.net/data/128x128/2017/01/06/868320_people_512x512.png";
    return (
        <div>


          <Users image={img} phone="0939209032"></Users>
          <Users image={img} phone="0948484432"></Users>

        </div>
    )
}

export default App;
