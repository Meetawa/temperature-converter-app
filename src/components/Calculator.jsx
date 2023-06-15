import React from "react";
import { TemperatureInput } from "./TemperatureInput";

class Calculator extends React.Component {
  render() {
    return (
      <div className="outer-box">
        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
      </div>
    );
  }
}
export default Calculator;
