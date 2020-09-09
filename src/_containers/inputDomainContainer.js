import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {vehiculoActions} from '../_actions'

class InputDomainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit() {
        this.props.dispatch(vehiculoActions.geteventosbydominio(this.state.value))
        this.props.dispatch(vehiculoActions.getrecallsbydominio(this.state.value))
        this.props.dispatch(vehiculoActions.getmarcamodeloversionanobydominio(this.state.value))
        this.props.dispatch(vehiculoActions.getproconbydominio(this.state.value))
      }

      render() {
        return (
            <div className="container mb-4">
                <label>
                    Dominio:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <button className="btn btn-primary ml-2" onClick={this.handleSubmit}>Generar MOTORTALE!</button>
            </div>
        );
      }
}

const mapDispatchToProps = dispatch => ({
    dispatch                // ← Add this
 })
 
export default connect(null, mapDispatchToProps)(InputDomainContainer) 