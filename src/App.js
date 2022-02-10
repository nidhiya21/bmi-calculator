import { useState } from "react";
import "./App.css";
import Bmilist from "./components/Bmilist";
import Bmiscore from "./components/Bmiscore";
import Form from "./components/Form";

function App() {
  const [age, setage] = useState("");
  const [bmiType, setbmiType] = useState("");
  const onFormSub = (w, h) => {
    let b = calbmi(w, h);
    setage(b);
    console.log(w, h);
  };
  const calbmi = (w, h) => {
    return ((w / h) * h).toFixed(2);
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content center mt-5 mx-2">
          <Form getData={onFormSub} />
        </div>
        <Bmiscore ageval={age} bmiType={bmiType} />
        <Bmilist />
      </div>
    </>
  );
}

export default App;
