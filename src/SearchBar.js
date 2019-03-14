import React, { Component } from 'react';

class SearchBar extends Component {

  render() {
    return (
        <form>
        <input className="SearchBar" placeholder='Enter Search Term here...' onChange={this.props.handleInputChange}/>
        </form>
    );
  }
}

export default SearchBar;
