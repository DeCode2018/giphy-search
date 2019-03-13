import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(){
    super()

    this.state = {
      searchTerm: 'Enter Search Term here...'
  }
}

  render() {
    return (
      <div className="SearchBar">
      {this.state.searchTerm}
      
      </div>
    );
  }
}

export default SearchBar;
