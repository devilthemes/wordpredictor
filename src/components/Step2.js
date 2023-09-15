import { useState } from "react"

export const Step2 = ({onNext})=>{
    const [count,setCount] = useState("")
    return (<><h1>How many characters are there ? </h1>
    <p>
        <input type="text" value={count} onChange={(e)=>setCount(e.target.value)} />
    <button onClick={()=>onNext({step:3,count})} >Next</button>
    </p>
    </>)
}