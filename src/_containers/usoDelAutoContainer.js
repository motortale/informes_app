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
            
            usodelauto.map(item => eventos.push(
                {descripcion: item.descripcion, fechaSuceso: item.fechaSuceso, gravedadInforme: item.gravedadInforme}
            ))

            if (this.props.payload.filter(item => item.id_Evento == eventoConstants.SINIESTRO).length == 0) 
                eventos.push(
                    {
                        descripcion: "No se han reportado siniestros en el historial del vehículo", 
                        fechaSuceso: "",
                        gravedadInforme: semaforoConstants.EMPTY
                    }
                )

            if (this.props.payload.filter(item => item.id_Evento == eventoConstants.TRANSFERENCIA).length == 0) 
                eventos.push(
                    {
                        descripcion: "No se ha reportado cambio de dueño/radicación.", 
                        fechaSuceso: "",
                        gravedadInforme: semaforoConstants.EMPTY
                    }
                )
            
        }

        return (
            <div>
                <img src={uso} alt="" />
                <h2 className="mt-3 mb-4 fs35">Uso del auto</h2>
                <SemaforoComponent headertext={headertext} eventos={eventos}/>
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