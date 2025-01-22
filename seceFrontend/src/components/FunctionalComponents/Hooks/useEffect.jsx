import { useState } from "react"
import NavBar from "../navbar"

const UseEffect=()=>{
    var [text,setText]=useState("")
    return (
        
        <div>
            <h2>This is UseEffect example</h2>
            <input type="number" value={text} onChange={(e)=>{setText(e.target.value)}} />
            <h2>The text is {text}</h2>
        </div>
    )
}

export default UseEffect