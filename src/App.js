import React, { Component } from 'react';
import './App.css';
import DisplayBox from './DisplayBox';

class App extends Component {
  state = {
    query: '',
    giphyData: []
}

  getData = () => {
    //API should be placed in either an environment variable or in another file
    //stored seperately...and not commited to GitHub. Leaving for ease of use.
    let api = 'pGqTn0YMJkiiCIsMvYPDCLh834Sf4r8P'
    let rating = 'pg'
    let url = `https://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=${api}&limit=3&rating=${rating}`
    //console.log(this.state.query)
    //console.log(url)

    fetch(url)
    .then(response => response.json())
    .then(responseData => {
         //console.log(responseData)
        this.setState({
            giphyData:responseData
        })
    })
  }

  handleInputChange = (e) =>{
    /*assist two-way binding of search function by updating "query" to the
     user's search term
     need to fix bug where search term is one step behind value entered*/
    this.setState({query: e.target.value})
    //console.log(this.state.query)
    /*needed to call this function again so fetch would be triggered when search
    term entered*/
    this.getData(this.state.query)
  }

  componentWillMount() {
    this.getData(this.state.query);
  }


  render() {

    return (
      <div className="App" >
        <header className="App-header" >
        <img className = "App-logo" src="https://wirewheel.io/wp-content/uploads/2018/10/wirewheel-logo-new-white.png" alt="Logo" />
        <h1>Giphy Searcher</h1>
        </header>
        <input className='SearchBar' placeholder="Enter Search Term..." onChange={this.handleInputChange}/>
        <DisplayBox giphyData={this.state.giphyData}/>
      </div>
    );
  }
}

export default App;
