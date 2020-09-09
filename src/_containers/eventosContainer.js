import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class EventosContainer extends Component {

    render() {
        return (
            <div className="text-center">
                {
                    !this.props.payload || !this.props.payload.length ? <p contentEditable="true" suppressContentEditableWarning={true}>No hay eventos</p> :
                    
                        this.props.payload.map((item, i) =>
                            <p key={i} contentEditable="true" suppressContentEditableWarning={true}>
                                Evento: {item.evento.toString()}. Descripción: {item.descripcion.toString()}. Gravedad informe: {item.gravedadInforme.toString()}
                            </p>
                    )
                }
            </div>
        );
    }
}

EventosContainer.propTypes = {
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
    const { eventos } = state;
    const { payload } = eventos
    return {
        payload
    };
}

export default connect(mapStateToProps, null)(EventosContainer);
