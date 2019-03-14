import React, { Component } from 'react';
import GiphyCard from './GiphyCard'

class DisplayBox extends Component {

  render() {
    //used ternary to account "undefined" error
    let allGiphyInfo = this.props.giphyData.data?this.props.giphyData.data:[]
    //console.log(allGiphyInfo)

    return (
      <div className="DisplayBox" >
      {allGiphyInfo.map(giphy=><GiphyCard key={giphy.id} url={giphy.embed_url} title={giphy.title}/>
      )}
      </div>
    );
  }
}

export default DisplayBox;
