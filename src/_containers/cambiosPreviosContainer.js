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
            
            var id_eventos =  [...new Set(cambiosprevios.map(({id_Evento}) => id_Evento))]

            var cambiosprevios_new = id_eventos.map(function(item){
                return {
                        id_evento: item,
                        gravedadInforme: cambiosprevios.filter(x => x.id_Evento == item)[0].gravedadInforme,
                        eventos: cambiosprevios.filter(x => x.id_Evento == item)
                    };
            })

            
            if (cambiosprevios.length == 0) 
                cambiosprevios_new.push(
                    {
                        id_evento: eventoConstants.MODIFICACION,
                        gravedadInforme: semaforoConstants.VACIA,
                        eventos: [{
                            descripcion: "No se han reportado otras modificaciones al vehículo.", 
                            fechaSuceso: ""
                        }]
                    })
            
            if (cambiosprevios.filter(item => item.id_evento == eventoConstants.AUTODROMO).length == 0) 
                cambiosprevios_new.push(
                    {
                        id_evento: eventoConstants.AUTODROMO,
                        gravedadInforme: semaforoConstants.VACIA,
                        eventos: [{
                            descripcion: "No se ha reportado al vehículo como participante de pruebas/eventos en autódromos", 
                            fechaSuceso: ""
                        }]
                    })
            

            if (cambiosprevios.filter(item => item.id_evento == eventoConstants.GNC).length == 0) 
                cambiosprevios_new.push(
                    {
                        id_evento: eventoConstants.GNC,
                        gravedadInforme: semaforoConstants.VACIA,
                        eventos: [{
                            descripcion: "No se ha reportado al vehículo como participante de pruebas/eventos en autódromos", 
                            fechaSuceso: ""
                        }]
                    })
            

            if (cambiosprevios.filter(item => item.id_evento == eventoConstants.TAXI).length == 0) 
                cambiosprevios_new.push(
                    {
                        id_evento: eventoConstants.TAXI,
                        gravedadInforme: semaforoConstants.VACIA,
                        eventos: [{
                            descripcion: "No se ha reportado al vehículo como Taxi en ningún lugar de Argentina.", 
                            fechaSuceso: ""
                        }]
                    })
            
        }
            

        return (
            <CambiosPreviosComponent headertext={headertext} eventos={cambiosprevios_new} />
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