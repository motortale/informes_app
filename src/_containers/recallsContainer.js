import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RecallsComponent from './../_components/recallsComponent'

class RecallsContainer extends Component {

    render() {
        return (
            <div className="text-center mt-5">
                <RecallsComponent recalls={this.props.payload}></RecallsComponent>
            </div>
        );
    }
}


RecallsContainer.propTypes = {
    payload: PropTypes.arrayOf(PropTypes.shape({
        descripcion: PropTypes.string,
        evento:  PropTypes.string,
        eventoDescripcion:  PropTypes.string,
        eventoGrupo:  PropTypes.string,
        fechaReporte:  PropTypes.string,
        fechaSuceso:  PropTypes.string,
        gravedad:  PropTypes.number,
        gravedadInforme:  PropTypes.number,
        id_Evento:  PropTypes.number,
        id_EventoGrupo:  PropTypes.number
    }))
}

function mapStateToProps(state) {
    const { recalls } = state;
    const { payload } = recalls
    return {
        payload
    };
}

export default connect(mapStateToProps, null)(RecallsContainer);
