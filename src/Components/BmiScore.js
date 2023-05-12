import React from 'react'

function BmiScore({bmi,bmitype}) {

  return (
    <div>
        <div className="text-center shadow rounded p-4" style={{marginTop:'100px'}}>
      <div>Your BMI Score</div>
      <div className="row justify-content-md-center">
        <div className="p-3 my-2 alert fs-1 alert-primary col-sm-4">{bmi}</div>
      </div>
      <div className="fs-3 fw-bold text-primary">{bmitype}</div>
    </div>
        
    </div>
  )
}

export default BmiScore