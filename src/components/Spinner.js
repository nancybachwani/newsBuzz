import React, { Component } from 'react'
import load from '../load.gif'
export class Spinner extends Component {
  render() {
    const mystyle = {
        width: "30px",
        height: "30px",
      };
      const divst={
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      };
    return (
      <div style={divst}>
        <img style={mystyle} src={load } alt='loading'/>
      </div>
    )
  }
}

export default Spinner