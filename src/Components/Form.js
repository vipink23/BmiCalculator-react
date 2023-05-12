import { useState } from "react";

function Form({ getData }) {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [alert, setAlert] = useState(false);

  //  const handleWeight=((e)=>{
  //    console.log(e.target.value);
  //    setWeight(e.target.value)
  //  })
  const submit = (e) => {
    e.preventDefault();

    // console.log(weight);
    // console.log(height);
    if (isNaN(weight) || isNaN(height)) {
      //  console.log('fill the number');
      setAlert(true);
    } else {
      // console.log('correct');
      getData(weight, height);
      setAlert(false);
    }
  };

  return (
    <div className="col-sm-4 shadow rounded px-5">
      <h1 className="text-center pt-3 text-secondary h2">BMI Calculator</h1>
      <form onSubmit={submit}>
        <div className="row">
          <div className="col col-sm-6">
            <div className="my-3">
              <label className="form-label">Weight(kg) :</label>
              <input
                type="text"
                className="form-control"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="col col-sm-6">
            <div className="my-3">
              <label className="form-label">Hight(m) :</label>
              <input
                type="text"
                className="form-control"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
              />
            </div>
          </div>
        </div>
        <input type="submit" className="btn btn-primary my-3" value="Get BMI" />
      </form>
      {alert && (
        <h6 style={{ background: "#FFCCCB", textAlign:"center" }}>enter the valid number</h6>
      )}
    </div>
  );
}

export default Form;
