import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Spinner extends Component {
  static propTypes = {
}

  render() {
    return (
      <div style={{display:'flex',
      alignItems:'center',
      justifyContent:'center',
      padding:'10px',
      position:'fixed',
      height:'100vh',
      width:'100%'
      }}>
        <i className="fa-solid fa-spinner fa-spin-pulse fa-2xl"></i>
        
      </div>
    );
  }
}

export default Spinner
