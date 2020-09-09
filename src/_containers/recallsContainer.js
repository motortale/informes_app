import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class RecallsContainer extends Component {

    render() {
        return (
            <div className="text-center">
                    {
                        !this.props.payload || !this.props.payload.length ? <p contentEditable="true" suppressContentEditableWarning={true}>No hay recalls</p> :
                        
                            this.props.payload.map((item, i) =>
                                <p key={i} contentEditable="true" suppressContentEditableWarning={true}>
                                    Motivo: {item.motivo.toString()} - Solución: {item.solucion.toString()}
                                </p>
                            
                        ) 
                    }
            </div>
        );
    }
}


RecallsContainer.propTypes = {
    payload: PropTypes.arrayOf(PropTypes.shape({
        descripcion: PropTypes.string.isRequired,
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
