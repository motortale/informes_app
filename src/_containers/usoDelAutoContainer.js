import React, { Component } from 'react';
import { connect } from 'react-redux';
import SemaforoComponent from './../_components/semaforoComponent'
import { eventogrupoConstants, eventoConstants, semaforoConstants } from '../_constants'
import uso from './../images/uso-icon.svg'
import PropTypes from 'prop-types';
import { groupBy } from './../_functions'

class UsoDelAutoContainer extends Component {
    
    render() {
        const headertext = "Acá va el texto que va a decir qué son los USO DEL AUTO"

        if (this.props.payload) {

            let usodelauto = JSON.parse(JSON.stringify(this.props.payload.filter(x => x.id_EventoGrupo == eventogrupoConstants.USO_DEL_AUTO))).map(function(evento){

                if (evento.id_Evento == eventoConstants.SINIESTRO && evento.gravedadInforme == semaforoConstants.VERDE) 
                    evento.gravedadInforme = semaforoConstants.AMARILLA

                return evento
            })


            var eventos_agrupados = groupBy(usodelauto, function (item) {
                return [item.id_Evento, item.gravedadInforme];
            });


            var usodelauto_new = eventos_agrupados.filter(evento => evento[0].id_Evento != eventoConstants.INFRACCION_VELOCIDAD && evento[0].id_Evento != eventoConstants.INFRACCION)
                .map(function(eventos){
                    return  {
                            id_evento: eventos[0].id_Evento,
                            gravedadInforme: eventos[0].gravedadInforme,
                            eventos
                        };
            })

            
            if (this.props.payload.filter(item => item.id_Evento == eventoConstants.INFRACCION || item.id_Evento == eventoConstants.INFRACCION_VELOCIDAD).length > 0) {
                let eventos = this.props.payload.filter(x => x.id_Evento == eventoConstants.INFRACCION || x.id_Evento == eventoConstants.INFRACCION_VELOCIDAD)
                let gravedadInforme = semaforoConstants.VACIA

                if (eventos.length > 10) 
                    gravedadInforme = semaforoConstants.AMARILLA

                if (eventos.length > 20) 
                    gravedadInforme = semaforoConstants.ROJA

                usodelauto_new.push(
                    {
                        id_evento: eventoConstants.INFRACCION,
                        eventos,
                        gravedadInforme
                    }
                )
            }

                        
            if (this.props.payload.filter(item => item.id_Evento == eventoConstants.SINIESTRO).length == 0)                 
                usodelauto_new.push(
                    {
                        id_evento: eventoConstants.SINIESTRO,
                        gravedadInforme: semaforoConstants.VACIA,
                        eventos: [{
                            descripcion: "No se han reportado siniestros en el historial del vehículo.", 
                            fechaSuceso: ""
                        }]
                    }
                )

            
            if (this.props.payload.filter(item => item.id_Evento == eventoConstants.INFRACCION || item.id_Evento == eventoConstants.INFRACCION_VELOCIDAD).length == 0) 
                usodelauto_new.push(
                    {
                        id_evento: eventoConstants.INFRACCION,
                        gravedadInforme: semaforoConstants.VACIA,
                        eventos: [{
                            descripcion: "No se han reportado infracciones en el historial de éste vehículo.", 
                            fechaSuceso: ""
                        }]
                    }
                )

            if (this.props.payload.filter(item => item.id_Evento == eventoConstants.TRANSFERENCIA).length == 0) 
                usodelauto_new.push(
                    {
                        id_evento: eventoConstants.TRANSFERENCIA,
                        gravedadInforme: semaforoConstants.VACIA,
                        eventos: [{
                            descripcion: "No se ha reportado cambio de dueño/radicación.", 
                            fechaSuceso: ""
                        }]
                    }
                )

            
        }

        return (
            <div>
                <img src={uso} alt="" />
                <h2 className="mt-3 mb-4 fs35"><b>Uso del auto</b></h2>
                <SemaforoComponent headertext={headertext} eventos={usodelauto_new}/>
            </div>
        );
    }
}

UsoDelAutoContainer.propTypes = {
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

export default connect(mapStateToProps, null)(UsoDelAutoContainer)