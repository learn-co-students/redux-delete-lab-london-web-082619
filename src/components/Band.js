import React, { Component } from 'react';

class Band extends Component {

  render() { 
    console.log(`name: ${this.props.band.name} id: ${this.props.band.id}`)
    // let band = this.props.band.name
    // let id = this.props.band.id
    const {name, id} = this.props.band
    return(
      <div>
        
        <li>{name}</li>
        <button onClick={ ()=> this.props.delete(id) } >delete</button>
      </div>
    );
  }
};

export default Band;
