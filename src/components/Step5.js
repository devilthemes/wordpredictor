export const Step5 = ({onNext,word})=>{
    return (<><h1>{word}</h1><button className="btn" onClick={onNext}>Restart</button></>)
}