import React, {Component} from 'react';
import { connect } from 'react-redux';
import MmvaComponent from './../_components/mmvaComponent'
import PropTypes from 'prop-types';

class MmvaContainer extends Component {

    render() {
        return (
            <div className="text-center">
                    {
                        ! this.props.payload ? "No hay MMVA" : this.props.payload.map((mmva, i) => <MmvaComponent key={i} mmva={mmva}/>)
                    }
            </div>
        );
    }
}

MmvaContainer.propTypes = {
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
    const { mmva } = state;
    const { payload } = mmva
    return {
        payload
    };
}

export default connect(mapStateToProps, null)(MmvaContainer);
