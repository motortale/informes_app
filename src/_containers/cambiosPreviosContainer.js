import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { eventogrupoConstants, eventoConstants, semaforoConstants } from '../_constants'
import CambiosPreviosComponent from '../_components/cambiosPreviosComponent'

class CambiosPreviosContainer extends Component {
    
    render() {
        const eventos = []
        const headertext = "Acá va el texto que va a decir qué son los cambios previos"

        if (this.props.payload) {

            var cambiosprevios = this.props.payload.filter(x => x.id_EventoGrupo == eventogrupoConstants.CAMBIOS_PREVIOS)
            
            if (cambiosprevios.length == 0) 
                eventos.push(
                    {
                        descripcion: "No se han reportado modificaciones al vehículo", 
                        fechaSuceso: "",
                        gravedadInforme: semaforoConstants.GREEN
                    }
                )
            

            cambiosprevios.map(item => eventos.push(
                {descripcion: item.descripcion, fechaSuceso: item.fechaSuceso, gravedadInforme: item.gravedadInforme}
            ))
            
            if (this.props.payload.filter(item => item.id_evento == eventoConstants.AUTODROMO).length == 0) 
                eventos.push(
                    {
                        descripcion: "No se ha reportado al vehículo como participante de pruebas/eventos en autódromos", 
                        fechaSuceso: "",
                        gravedadInforme: semaforoConstants.GREEN
                    }
                )
            

            if (this.props.payload.filter(item => item.id_evento == eventoConstants.GNC).length == 0) 
                eventos.push(
                    {
                        descripcion: "No se ha reportado al vehículo con instalación de GNC (Gas Natural Comprimido).", 
                        fechaSuceso: "",
                        gravedadInforme: semaforoConstants.GREEN
                    }
                )
            

            if (this.props.payload.filter(item => item.id_evento == eventoConstants.TAXI).length == 0) 
                eventos.push(
                    {
                        descripcion: "No se ha reportado al vehículo como Taxi en ningún lugar de Argentina.", 
                        fechaSuceso: "",
                        gravedadInforme: semaforoConstants.GREEN
                    }
                )
            
        }
            

        return (
            <CambiosPreviosComponent headertext={headertext} eventos={eventos} />
        );
    }
}

CambiosPreviosContainer.propTypes = {
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
    const { eventos } = state
    const { payload } = eventos
    return {
        payload
    }
}

export default connect(mapStateToProps, null)(CambiosPreviosContainer)