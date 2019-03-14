import React, { Component } from 'react';

class GiphyCard extends Component {

  render() {

    return (
      <div className="col-container" >
        <div className="col" >
        {/*used iframe to account for CORB error when using <img>*/}
        <iframe src={`${this.props.url}`} title={`${this.props.title}`} width="200" height='200'/>
        </div>
      </div>
    );
  }
}

export default GiphyCard;
