import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import uso from './../images/mantenimiento-icon.svg'
import SemaforoComponent from './../_components/semaforoComponent'
import { eventogrupoConstants, eventoConstants, semaforoConstants } from '../_constants'

class MantenimientoContainer extends Component {

    render() {
        const eventos = []
        const headertext = "Acá va el texto que va a decir qué son los cambios previos"

        if (this.props.payload) {
            
            this.props.payload.filter(x => x.id_EventoGrupo == eventogrupoConstants.MANTENIMIENTO && x.id_Evento !== eventoConstants.KILOMETRAJE).map(item => 
                eventos.push(
                    { descripcion: item.descripcion, fechaSuceso: item.fechaSuceso, gravedadInforme: item.gravedadInforme }
                )
            )

            this.props.payload.filter(x => x.id_Evento == eventoConstants.KILOMETRAJE).map(item => eventos.push(
                { descripcion: `Kilometraje reportado a MOTORTALE: ${item.descripcion}km`, fechaSuceso: item.fechaSuceso, gravedadInforme: item.gravedadInforme }
            ))

            if (this.props.payload.filter(item => item.id_Evento == eventoConstants.RTO).length == 0) 
                eventos.push(
                    {
                        descripcion: "No hay historial de VTV reportado a MOTORTALE", 
                        fechaSuceso: "",
                        gravedadInforme: semaforoConstants.EMPTY
                    }
                )
            
            if (this.props.payload.filter(item => item.id_EventoGrupo == eventogrupoConstants.MANTENIMIENTO).length == 0) 
                eventos.push(
                    {
                        descripcion: "Atención: El mantenimiento de este vehículo no se realizó en tiempo y forma o fue realizado en un taller/concesionario que no reporta a MOTORTALE. Si el mantenimiento fue realizado correctamente pedile a tu taller que se sume a la Red MOTORTALE! ", 
                        fechaSuceso: "",
                        gravedadInforme: semaforoConstants.EMPTY
                    }
                )

        }
            

        return (
            <div className="well mb-0">
                <img src={uso} alt="" />
                <h2 className="mt-3 mb-4">Mantenimiento</h2>
                <SemaforoComponent headertext={headertext} eventos={eventos}/>
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
    const {eventos}  = state
    const {payload} = eventos
    return {
        payload
    }
}

export default connect(mapStateToProps, null)(MantenimientoContainer)