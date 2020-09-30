import React, { Component } from 'react';
import { connect } from 'react-redux';
import SemaforoComponent from './../_components/semaforoComponent'
import { eventogrupoConstants, eventoConstants, semaforoConstants } from '../_constants'
import uso from './../images/uso-icon.svg'
import PropTypes from 'prop-types';

class UsoDelAutoContainer extends Component {
    render() {
        const eventos = []
        const headertext = "Acá va el texto que va a decir qué son los USO DEL AUTO"

        if (this.props.payload) {
            
            var usodelauto = this.props.payload.filter(x => x.id_EventoGrupo == eventogrupoConstants.USO_DEL_AUTO)
            
            var id_eventos =  [...new Set(usodelauto.map(({id_Evento}) => id_Evento))]

            var usodelauto_new = id_eventos.filter(x => x != eventoConstants.INFRACCION_VELOCIDAD && x != eventoConstants.INFRACCION).map(function(item){
                return {
                        id_evento: item,
                        gravedadInforme: usodelauto.filter(x => x.id_Evento == item)[0].gravedadInforme,
                        eventos: usodelauto.filter(x => x.id_Evento == item)
                    };
            })

            if (usodelauto.filter(item => item.id_Evento == eventoConstants.INFRACCION).length > 0) {
                let eventos = usodelauto.filter(x => x.id_Evento == eventoConstants.INFRACCION || x.id_Evento == eventoConstants.INFRACCION_VELOCIDAD)
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

            

            if (usodelauto.filter(item => item.id_Evento == eventoConstants.SINIESTRO).length == 0)                 
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

            if (usodelauto.filter(item => item.id_Evento == eventoConstants.INFRACCION).length == 0) 
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

            if (usodelauto.filter(item => item.id_Evento == eventoConstants.TRANSFERENCIA).length == 0) 
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