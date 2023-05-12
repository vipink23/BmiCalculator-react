import Form from "./Components/Form";
import BmiScore from "./Components/BmiScore";
import BmiList from "./Components/BmiList";
import { useState } from "react";

function App() {
  const [bmi, setBmi] = useState("00.00");
  const [bmiType, setBmitype] = useState("");

  const fromForm = (w, h) => {
    let b = bmiCalc(w, h);
    setBmi(b);
    let bmType = bmitypecalc(b);
    setBmitype(bmType);
    console.log(w, h);
  };

  const bmiCalc = (w, h) => {
    return (w / (h * h)).toFixed(2);
  };

  const bmitypecalc = (bmi) => {
    if (bmi <= 18.5) {
      return "Under Weight";
    } else if (bmi > 18.5 && bmi <= 24.9) {
      return "Normal";
    } else if (bmi > 24.9 && bmi <= 29.9) {
      return "Over Weight";
    } else if (bmi > 29.9 && bmi <= 34.9) {
      return "Obesity Class I";
    } else if (bmi > 34.9 && bmi <= 39.9) {
      return "Obesity Class II";
    } else if (bmi > 39.9) {
      return "Obesity Class III";
    }
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5 mx-2">
          <Form getData={fromForm} />
        </div>
        <BmiScore bmi={bmi} bmitype={bmiType} />
        {/* <BmiList/> */}
      </div>
    </>
  );
}

export default App;
