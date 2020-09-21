import React, {Component} from 'react';
import { connect } from 'react-redux';
import ProConComponent from './../_components/proconComponent'
import PropTypes from 'prop-types';

class ProConContainer extends Component {

    render() {
        return (
            <div>
                    {
                        !this.props.payload ? <p contentEditable="true" suppressContentEditableWarning={true}>No hay ProCons</p> : <ProConComponent procon={this.props.payload} />
                    }
            </div>
        );
    }
}

ProConContainer.propTypes = {
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
    const { procon } = state;
    const { payload } = procon
    return {
        payload
    };
}

export default connect(mapStateToProps, null)(ProConContainer);

