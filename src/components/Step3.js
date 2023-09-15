import { useEffect, useState } from "react";

export const Step3 = ({ onNext, count }) => {
  const alphabets = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const [theadCols, setTHeadCols] = useState([]);
  const [collection, setCollection] = useState([""]);
  const [allFilled, setAllFilled] = useState(false);
  const [step, setStep] = useState(1);
  const [msg, setMsg] = useState("");
  const [data, setData] = useState([]);
  const [stepCollection, setStepCollection] = useState([]);
  const showHeader = () => {
    let cols = [];
    let i = 0;
    while (i < count) {
      cols.push(i + 1);
      i++;
    }
    setTHeadCols(cols);
  };
  const showStep = (step) => {
    console.log(step);
    console.log(collection);
  
    if (step % 2 === 0) {
      return "nd";
    } else if (step % 3 == 0) {
      return "rd";
    } else {
      return "th";
    }
  };
  const fillCols = () => {
    let i = 0;
    let rows = [];
    let row = [];
    let alphaCount = alphabets.length - 1;
    while (i < alphabets.length) {
      row.push(alphabets[i]);

      if (alphabets.length === i) {
      }
      if (i % count === count - 1) {
        rows.push(row);
        row = [];
      }
      if (alphaCount == i) {
        rows.push(row);
      }

      i++;
    }

    setData(rows);
  };
  const implementedIsAllFilled = (cloneCollection) => {
    let isAllFilled = cloneCollection.filter((item) => item.length > 0);
    if (isAllFilled === count) {
      setAllFilled(true);
    } else {
      setAllFilled(false);
    }
  };
  const implementStepCollection = (e) => {
    let value = parseInt(e.target.value);
    let col = [];
    let i = 0;
    let arr = [];
    while (i < data.length) {
      let j = 0;

      while (j < data[i].length) {
        if (j == value - 1) {
          arr.push(data[i][j]);
        }
        j++;
      }
      i++;
    }

    let cloneStepCol = JSON.parse(JSON.stringify(stepCollection));
    cloneStepCol[parseInt(e.target.dataset.index)] = arr;

    setStepCollection(cloneStepCol);
  };
  const setletter = (e) => {
    //Check value
    if (theadCols.includes(parseInt(e.target.value))) {
      let cloneCollection = [...collection];
      cloneCollection[parseInt(e.target.dataset.index)] = e.target.value;
      setStep(parseInt(e.target.dataset.index) + 2);
      setCollection(cloneCollection);

      implementStepCollection(e);
      implementedIsAllFilled(cloneCollection);
      setMsg("");
    } else {
      setMsg("Value must be between " + theadCols.join(","));
    }
  };
  const fllDefaultCollection = () => {
    let i = 0;
    let col = [];
    while (i < count) {
      col.push("");
      i++;
    }
    setCollection(col);
  };
  useEffect(() => {
    showHeader();
    fillCols();
    fllDefaultCollection();
  }, []);
  return (
    <>
      <h1>Step 3 </h1>

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
            data.map((row) => (
              <tr>
                {row && row.length > 0 && row.map((item) => <td>{item}</td>)}
              </tr>
            ))}
        </tbody>
      </table>
      step:{step} / {collection.length}
      {
        step<=collection.length &&  <h2>
        Type Column number on which your 
       {step}<sup>{showStep(step)}</sup> letter located
      </h2>
      }
     
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
      <button onClick={() => onNext({ step: 4, data: stepCollection })}>
        Next Step
      </button>
    </>
  );
};
