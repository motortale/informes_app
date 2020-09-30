import React from 'react';
import './styles.css'
import {semaforoConstants, eventoConstants} from '../../_constants'
import PropTypes from 'prop-types';
import moment from 'moment'

const SemaforoComponent = ( {headertext, eventos} ) => {
    
    return (
        <div>
            <p className="fs20"><b>{headertext}</b></p>
            
            {
                eventos && eventos.map((item, i) => {
                    const color = Object.keys(semaforoConstants).find(key => semaforoConstants[key] === item.gravedadInforme).toLowerCase()
                    
                    return (
                        <div key={i}>
                            <div className={color}>
                                <svg className="bi bi-circle-fill fz-40" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="8" cy="8" r="8"></circle>
                                </svg>
                            </div>
                            <div>
                                <p className={color} contentEditable="true" suppressContentEditableWarning={true}><b>BANDERA {color.toUpperCase()}</b></p>
                                {
                                    item.eventos.map((x, index) => {
                                        let descripcion = x.descripcion

                                        if (x.id_Evento == eventoConstants.KILOMETRAJE) 
                                            descripcion = parseInt(x.descripcion).toLocaleString() + " kms. - Kilometraje reportado a MOTORTALE."
                                        

                                        return(
                                            <div key={index}>
                                                <p contentEditable="true" suppressContentEditableWarning={true}>{x.fechaSuceso && moment(x.fechaSuceso).format("DD/MM/YYYY")}</p>
                                                <p contentEditable="true" suppressContentEditableWarning={true}>{descripcion}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
            

        </div>
    );
};

SemaforoComponent.propTypes = {
    headertext: PropTypes.string.isRequired,
    eventos: PropTypes.arrayOf(PropTypes.shape({
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

export default SemaforoComponent;