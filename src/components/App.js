import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Weather } from './Weather.js';
import './style.css'
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      active: '',
      name: 'Kemerovo',
      flag: false
    };
  }
  handleChange = (e) => {
    this.setState({ active: e.target.value });
  };
  onBtnClickHandler = (e) => {
      this.setState({name:this.state.active, flag:true})
    e.preventDefault();
  };
  render() {
    return (
      <div className="container  block">
        <div className="row block1">
          <input className="col-6" active={this.state.active} onChange={this.handleChange} ></input>
          <button className="col-3 mt-2 ml-3 btn" onClick={this.onBtnClickHandler}>
            Weather
          </button>
        </div>

        <div className="weather">
          <Weather
            name={this.state.name}
            key={this.state.name}
          />
          
        </div>
      </div>

    ) 
  }
};

export default App;
