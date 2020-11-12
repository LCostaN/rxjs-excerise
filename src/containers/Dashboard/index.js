import React, { Component } from "react";
import { EventEmitter } from "events";

export default class Dashboard extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      temperature: null,
      airPressure: null,
      humidity: null,
    };

    this.emitterTemperature = new EventEmitter();
    this.emitterAirPressure = new EventEmitter();
    this.emitterHumidity = new EventEmitter();

    this.emitterTemperature.addListener("temperature", () => {
      this.setState(() => ({
        temperature: Math.floor(Math.random() * 15 + 15),
      }));
      this.temperatureHandler();
    });
    this.emitterAirPressure.addListener("airPressure", () => {
      this.setState(() => ({
        airPressure: Math.floor(Math.random() * 30000 + 90000),
      }));
      this.airPressureHandler();
    });
    this.emitterHumidity.addListener("humidity", () => {
      this.setState(() => ({
        humidity: Math.floor(Math.random() * 50 + 50),
      }));
      this.humidityHandler();
    });
  }

  componentDidMount() {
    this.temperatureHandler();
    this.airPressureHandler();
    this.humidityHandler();
  }

  temperatureHandler() {
    setTimeout(
      () => this.emitterTemperature.emit("temperature"),
      Math.floor(Math.random() * 1900 + 100)
    );
  }

  airPressureHandler() {
    setTimeout(
      () => this.emitterAirPressure.emit("airPressure"),
      Math.floor(Math.random() * 1900 + 100)
    );
  }

  humidityHandler() {
    setTimeout(
      () => this.emitterHumidity.emit("humidity"),
      Math.floor(Math.random() * 1900 + 100)
    );
  }

  componentWillUnmount() {
    this.emitterTemperature.removeAllListeners();
    this.emitterAirPressure.removeAllListeners();
    this.emitterHumidity.removeAllListeners();
  }

  render() {
    const { temperature, airPressure, humidity } = this.state;
    return (
      <div className="container">
        <div className="flex-column">
          <h3 className="my-4">Dashboard</h3>
          <div className="my-1">
            <label className="label-width">Temperature :</label>
            <label>{temperature ?? "N/A"} °C</label>
          </div>
          <div className="my-1">
            <label className="label-width">Air Pressure :</label>
            <label>{airPressure ?? "N/A"} Pa</label>
          </div>
          <div className="my-1">
            <label className="label-width">Humidity : </label>
            <label>{humidity ?? "N/A"} %</label>
          </div>
        </div>
      </div>
    );
  }
}
