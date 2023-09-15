import { useState } from "react"

export const Step2 = ({onNext})=>{
    const [count,setCount] = useState("")
    return (<><h1>Step 2</h1><h2>How many characters are there ? </h2>
    <p>
        <input type="text" value={count} onChange={(e)=>setCount(e.target.value)} class="txtBox" />
    <button onClick={()=>onNext({step:3,count})} className="btn" >Next</button>
    </p>
    </>)
}