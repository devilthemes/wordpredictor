import { useEffect, useState } from "react";

export const Step4 = ({ onNext, data }) => {

  const [msg, setMsg] = useState("");
  const [collection, setCollection] = useState([""]);
  const [theadCols, setTHeadCols] = useState([]);
  const [allFilled, setAllFilled] = useState(false);
  const [step, setStep] = useState(1);
  const [word, setWord] = useState([]);
  const showHeader = (max) => {
    let cols = [];
    let i = 0;
    while (i < max) {
      cols.push(i + 1);
      i++;
    }
    setTHeadCols(cols);
  };
  const findMaxNum = () => {
    if (data) {
      let max = 0;
      let i = 0;
      while (i < data.length) {
        if (data[i].length > max) {
          max = data[i].length;
        }
        i++;
      }
     
  
      showHeader(max);
      fllDefaultCollection(data);
    }
  };
  const fllDefaultCollection = (data) => {
    let i = 0;
    let col = [];
    while (i < data.length) {
      col.push(0);
      i++;
    }
    setCollection([...col]);

    
  };
  useEffect(() => {
  
    findMaxNum();
  }, []);
  const implementedIsAllFilled = (cloneCollection) => {
    console.log(cloneCollection)
    let isAllFilled = cloneCollection.filter((item) => item > 0);
    
    console.log("isAllFilled",isAllFilled.length)
    console.log(cloneCollection.length)
    if (isAllFilled.length === cloneCollection.length) {
      setAllFilled(true);
    } else {
      setAllFilled(false);
    }
  };
  const setletter = (e) => {
    //Check value
    if (theadCols.includes(parseInt(e.target.value))) {

      let val = parseInt(e.target.value) - 1;
      let index = parseInt(e.target.dataset.index);

      let cloneWord = [...word];
      cloneWord[index] = data[index][val];
      setWord(cloneWord);
      let cloneCollection = [...collection];
      cloneCollection[parseInt(e.target.dataset.index)] = parseInt(
        e.target.value
      );
      console.log("Step :",parseInt(e.target.dataset.index) + 2)
      setStep(parseInt(e.target.dataset.index) + 2);

      setCollection(cloneCollection);
      implementedIsAllFilled(cloneCollection)

      //implementStepCollection(e);
    } else {
      setMsg("Value must be between " + theadCols.join(","));
    }
  };

  return (
    <>
      <h1>Step4 </h1>

      <table>
        <thead>
          <tr>
            {theadCols &&
              theadCols &&
              theadCols.length > 0 &&
              theadCols.map((item) => <th key={item}>{item}</th>)}
          </tr>
        </thead>
        <tbody>
          {data &&
            data.length > 0 &&
            data.map((tr, index) => {
              return (
                <tr>
                  {tr.map((td, index) => (
                    <>
                      <td>{td}</td>
                    </>
                  ))}
                </tr>
              );
            })}
        </tbody>
      </table>
      <h2>Type Column number on which your</h2>
      <div className="inputs">
        {collection.map((item, index) => {
          return (
            <input
              type="text"
              data-index={index}
              value={item}
              onChange={setletter}
              disabled={step < index + 1 && allFilled === false}
            />
          );
        })}
      </div>
      <div>{msg}</div>
      <button onClick={()=>onNext(word.join(""))} disabled={ allFilled === false}>Next Step</button>
    </>
  );
};
