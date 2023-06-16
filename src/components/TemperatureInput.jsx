import React from "react";
const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};
class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    const value = this.props.value;
    const scale = this.props.scale;
    return (
      <div className="container">
        <form>
          <div className="form-group">
            <lable>
              <h3>Enter Temperature in {scaleNames[scale]}: </h3>
            </lable>
            <input
              className="form-control container text-center"
              id="focusedInputed"
              type="text"
              value={value}
              onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default TemperatureInput;
