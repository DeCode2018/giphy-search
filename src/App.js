import React, { Component } from 'react';
import './App.css';
import DisplayBox from './DisplayBox';


class App extends Component {
  state = {
    query: 'hello',
    data: [],
    searchString:[]
}

  getData = () => {
    fetch(`http://api.giphy.com/v1/gifs/search?q={this.state.query}&api_key=pGqTn0YMJkiiCIsMvYPDCLh834Sf4r8P&limit=3&rating=pg`)
    .then(response => response.json())
    .then(responseData => {
         console.log(responseData)
        this.setState({
            data:responseData,
            searchString:responseData
        })
    })
}

  handleChange = (e) =>{
    console.log(e.currentTarget.value)
    this.setState({query: e.currentTarget.value})
  }
  
componentWillMount() {
    this.getData();
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>WireWheel Giphy Search</h1>
        </header>
        <input className="SearchBar" query={this.state.query} onChange={this.handleChange}/>
        <DisplayBox />
      </div>
    );
  }
}

export default App;
