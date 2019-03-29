import React, { Component } from 'react';
import './App.css';
//import './components/Starwars.css';
import StarwarsCharacters from './components/StarwarsCharacters';
import ListForm from "./components/ListForm";


class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
         <StarwarsCharacters characterProp={this.state.starwarsChars} />
         <img scr="sw-bg.jpg"></img>
      </div>
    );
  }
}

export default App;