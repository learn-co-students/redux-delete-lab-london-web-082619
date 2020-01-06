import React, { Component } from 'react'
import BandInput from './BandInput';

import { connect } from 'react-redux'
import Band from './Band';

class BandsContainer extends Component {

  renderBands = () => this.props.bands.map(band => <Band key={band.id} band={band} delete={this.props.delete} />)
    
  render() {
    let bands = this.renderBands()
    return (
      <div>
        <BandInput addBand={this.props.addBand} />
        {bands}
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: newBand => dispatch({ type: "ADD_BAND", name: newBand }),
  delete: bandId => dispatch({ type: 'DELETE_BAND', id: bandId })
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
