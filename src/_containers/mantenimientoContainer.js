import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import mantenimientoIcon from './../images/mantenimiento-icon.svg'
import gear from './../images/gear-icon.svg'
import SemaforoComponent from './../_components/semaforoComponent'
import { eventogrupoConstants, eventoConstants, semaforoConstants } from '../_constants'
import { antiguedad_vehiculo } from './../_functions'


class MantenimientoContainer extends Component {

    render() {
        
        const headertext = "Acá va el texto que va a decir qué es el mantenimiento"

        if (this.props.payload) {
            var mantenimientos = this.props.payload.filter(x => x.id_EventoGrupo == eventogrupoConstants.MANTENIMIENTO)
            var id_eventos =  [...new Set(mantenimientos.map(({id_Evento}) => id_Evento))]

            var mantenimientos_new = id_eventos.map(function(item){
                return {
                        id_evento: item,
                        gravedadInforme: mantenimientos.filter(x => x.id_Evento == item)[0].gravedadInforme,
                        eventos: mantenimientos.filter(x => x.id_Evento == item)
                    };
            })

            if (mantenimientos.filter(item => item.id_Evento == eventoConstants.RTO).length == 0) {
                let antiguedad = this.props.payload2 ? antiguedad_vehiculo(this.props.payload2[0].ano) : 0
                if (antiguedad <= 3)
                    mantenimientos_new.push(
                        {
                            id_evento: eventoConstants.RTO,
                            gravedadInforme: semaforoConstants.VERDE,
                            eventos: [{
                                descripcion: "Los vehículos con menos de 3 años aún no precisan realizar VTV/RTO.", 
                                fechaSuceso: ""
                            }]
                        }
                    )
            }

            if (mantenimientos.filter(item => item.id_Evento == eventoConstants.RTO).length == 0) 
                mantenimientos_new.push(
                    {
                        id_evento: eventoConstants.RTO,
                        gravedadInforme: semaforoConstants.VACIA,
                        eventos: [{
                            descripcion: "No hay historial de VTV reportado a MOTORTALE.", 
                            fechaSuceso: ""
                        }]
                    }
                )
            
            if (mantenimientos.filter(item => item.id_EventoGrupo == eventoConstants.MANTENIMIENTO).length == 0) 
                mantenimientos_new.push(
                    {
                        id_evento: eventoConstants.MANTENIMIENTO,
                        gravedadInforme: semaforoConstants.VACIA,
                        eventos: [{
                            descripcion: "Atención: El mantenimiento de este vehículo no se realizó en tiempo y forma o fue realizado en un taller/concesionario que no reporta a MOTORTALE. Si el mantenimiento fue realizado correctamente pedile a tu taller que se sume a la Red MOTORTALE! ", 
                            fechaSuceso: ""
                        }]
                    }
                )

        }
            

        return (
            <div className="bggray mb-0 p-4" style={{marginTop: '70px'}}>
                <div><img src={gear} alt="" style={{marginTop: '-90px', marginBottom: '20px'}}/></div>
                <div><img src={mantenimientoIcon} alt="" /></div>
                <h2 className="mt-3 mb-4 fs35"><b>Mantenimiento</b></h2>
                <SemaforoComponent headertext={headertext} eventos={mantenimientos_new}/>
            </div>
        );
    }
}

MantenimientoContainer.propTypes = {
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

function mapStateToProps(state){
    const { eventos, mmva } = state;
    const { payload: payload2 } = mmva
    const { payload } = eventos
    return {
        payload2,
        payload
    };
}

export default connect(mapStateToProps, null)(MantenimientoContainer)