import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    let returnValue = 0
    if (this.props.opacity >= 0.2){
      returnValue = <ColorBox opacity={this.props.opacity - 0.1} />
    }
    else{
      returnValue = null
    }
    return (
      <div className="color-box" style={{opacity: this.props.opacity /*replace null with the value*/}}>
        {returnValue}
      </div>
    )
  }

}

