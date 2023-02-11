import React from "react"
import Home from "./Home"
import Second from "../second/Second"
import Gimmembers from "../gimmembers/Gimmembers"
import Activities from "../activities/Activities"


const PageHome=()=>{


    return(
        <div>
            <Home/>
            <Second/>
            <Gimmembers/>
            <Activities/>

        </div>
    )

}

export default PageHome