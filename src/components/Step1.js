export const Step1 = ({onNext})=>{
    return (<><h1>Step 1</h1><h2>Think about a word in your mind</h2><button onClick={()=>onNext(2)} className="btn">Next</button></>)
}