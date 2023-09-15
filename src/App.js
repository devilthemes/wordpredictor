import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Step1 } from "./components/Step1";
import { Step2 } from "./components/Step2";
import { Step3 } from "./components/Step3";
import { Step4 } from "./components/Step4";
import { Step5 } from "./components/Step5";
function App() {
  const [step, setStep] = useState(1);
  const [wordCount, setWordCount] = useState(0);
  const [data, setData] = useState([]);
  const [word,setWord] = useState("");
  const goStep3 = (obj) => {
    console.log(obj);
    setStep(obj.step);
    setWordCount(obj.count);
  };
  const goStep4 = (obj) => {
    console.log(obj);
    setStep(obj.step);
    setData(obj.data);
  };
  const goStep5 = (txt) => {
    setStep(5);
    console.log(txt);
    setWord(txt)
  };
  const goStep1 = ()=>{
    setStep(1);
    setWordCount(0);
    setData([]);
    setWord("");

  }
  return (
    <div className="app">
      {step == 1 ? (
        <Step1 onNext={setStep} />
      ) : step == 2 ? (
        <Step2 onNext={goStep3} />
      ) : step == 3 ? (
        <Step3 count={wordCount} onNext={goStep4} />
      ) : step == 4 ? (
        <Step4 data={data} onNext={goStep5} />
      ) : step == 5 ? (
        <Step5 word={word} onNext={goStep1} />
      ) : (
        <Step1 onNext={setStep} />
      )}
    </div>
  );
}

export default App;
