import React, { useState } from "react";
import "./LoadingBar.css";

function LoadingBar() {
  const [state, setstate] = useState(0);

  const start = (percent) => {
    setstate(percent.target.value);
    document.getElementById("circle").style.strokeDashoffset = `calc(440 - (440 * ${percent.target.value}) / 100)`;
  };

  return (
    <div className="wrapper">
      <div className="box">
        <div className="percent">
          <svg>
            <circle cx="70" cy="70" r="70"></circle>
            <circle cx="70" cy="70" r="70" id="circle"></circle>
          </svg>
          <div className="number">
            <h2>
              {state} <span>%</span>
            </h2>
          </div>
          <h2 className="text">Progress</h2>
          <input type="text" placeholder="Enter % here" onInput={start} />
        </div>
      </div>
    </div>
  );
}

export default LoadingBar;
