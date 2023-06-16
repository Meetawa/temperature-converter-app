import React from "react";
import TemperatureInput from "./TemperatureInput";
function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(value, convert) {
  const input = parseFloat(value);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function TempZones(props) {
  if (props.celsius >= 100) {
    return <h5 className="hot">It's getting Hot in here!</h5>;
  } else if (props.celsius >= 36.5 && props.celsius <= 37.5) {
    return (
      <h5 className="normal">
        This is the normal temperature of the human body!
      </h5>
    );
  } else if (props.celsius <= 0) {
    return <h5 className="cold">Brr...Freezing!</h5>;
  }
  return null;
}
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = { value: "", scale: "c" };
  }

  handleCelsiusChange(value) {
    this.setState({ scale: "c", value });
  }

  handleFahrenheitChange(value) {
    this.setState({ scale: "f", value });
  }

  render() {
    const scale = this.state.scale;
    const value = this.state.value;
    const celsius = scale === "f" ? tryConvert(value, toCelsius) : value;
    const fahrenheit = scale === "c" ? tryConvert(value, toFahrenheit) : value;

    return (
      <div className="text-center container-fluid">
        <TemperatureInput
          scale="c"
          value={celsius}
          onChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale="f"
          value={fahrenheit}
          onChange={this.handleFahrenheitChange}
        />
        <TempZones celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

export default Calculator;
