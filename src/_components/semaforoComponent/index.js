import React from 'react';
import './styles.css'
import {semaforoConstants, eventoConstants} from '../../_constants'
import PropTypes from 'prop-types';
import moment from 'moment'

const SemaforoComponent = ( {headertext, eventos} ) => {
    // const empty_events = eventos.filter(x => x.gravedadInforme == semaforoConstants.VACIA)
    // const red_events = eventos.filter(x => x.gravedadInforme == semaforoConstants.ROJA)
    // const yellow_events = eventos.filter(x => x.gravedadInforme == semaforoConstants.AMARILLA)
    // const green_events = eventos.filter(x => x.gravedadInforme == semaforoConstants.VERDE)
    
    
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

                                        if (x.id_Evento == eventoConstants.KILOMETRAJE) 
                                            x.descripcion = x.descripcion + "kms. - Kilometraje reportado a MOTORTALE."
                                        

                                        return(
                                            <div key={index}>
                                                <p contentEditable="true" suppressContentEditableWarning={true}>{x.fechaSuceso && moment(x.fechaSuceso).format("DD/MM/YYYY")}</p>
                                                <p contentEditable="true" suppressContentEditableWarning={true}>{x.descripcion}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }

            {/* 
            { 
                eventos.map((item, i) => {
                    const color = Object.keys(semaforoConstants).find(key => semaforoConstants[key] === item.gravedadInforme).toLowerCase();

                    return (
                            <div key={i}>
                                <div className={color}>
                                    <svg className="bi bi-circle-fill fz-40" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8"></circle>
                                    </svg>
                                </div>
                                <p className={color} contentEditable="true" suppressContentEditableWarning={true}><b>BANDERA {color.toUpperCase()}</b></p>
                                <p className={color} contentEditable="true" suppressContentEditableWarning={true}>{item.fechaSuceso && moment(item.fechaSuceso).format("DD/MM/YYYY")}</p>
                                <p contentEditable="true" suppressContentEditableWarning={true}>{item.descripcion}</p>
                            </div>
                        )
                })
                        
            } */}

            {/* {
                empty_events.map((item, i) => 
                    <div key={i}>
                        <p>{item.fechaSuceso && moment(item.fechaSuceso).format("DD/MM/YYYY")}</p>
                        <p>{item.descripcion}</p>
                    </div>
                )
            }
            
            {
                green_events.length > 0 && 
                <div className="mt-4">
                    <div className="fz-40 green">
                        <svg className="bi bi-circle-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="8" cy="8" r="8"></circle>
                        </svg>
                    </div>
                    <p className="fs20"><b>BANDERA VERDE</b></p>
                </div>
            }

            {
                    green_events.map((item, i) => 
                        <div key={i}>
                            <p>{item.fechaSuceso && moment(item.fechaSuceso).format("DD/MM/YYYY")}</p>
                            <p>{item.descripcion}</p>
                        </div>
                    )
            }

            {
                yellow_events.length > 0 && 
                <div className="mt-4">
                    <div className="fz-40 yellow">
                        <svg className="bi bi-circle-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="8" cy="8" r="8"></circle>
                        </svg>
                    </div>
                    <p className="fs20"><b>BANDERA AMARILLA</b></p>
                </div>
            }

            {
                    yellow_events.map((item, i) => 
                        <div key={i}>
                            <p>{item.fechaSuceso && moment(item.fechaSuceso).format("DD/MM/YYYY")}</p>
                            <p>{item.descripcion}</p>
                        </div>
                    )
            }


            {
                red_events.length > 0 && 
                <div className="mt-4">
                    <div className="fz-40 red">
                        <svg className="bi bi-circle-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="8" cy="8" r="8"></circle>
                        </svg>
                    </div>
                    <p className="fs20"><b>BANDERA ROJA</b></p>
                </div>
            }

            {
                    red_events.map( (item, i) => 
                        <div key={i}>
                            <p>{item.fechaSuceso && moment(item.fechaSuceso).format("DD/MM/YYYY")}</p>
                            <p>{item.descripcion}</p>
                        </div>
                    )
            } */}

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