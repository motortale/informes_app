import React from 'react';
import './styles.css'
import {semaforoConstants} from '../../_constants'
import PropTypes from 'prop-types';
import moment from 'moment'

const SemaforoComponent = ( {headertext, eventos} ) => {
    const empty_events = eventos.filter(x => x.gravedadInforme == semaforoConstants.EMPTY)
    const red_events = eventos.filter(x => x.gravedadInforme == semaforoConstants.RED)
    const yellow_events = eventos.filter(x => x.gravedadInforme == semaforoConstants.YELLOW)
    const green_events = eventos.filter(x => x.gravedadInforme == semaforoConstants.GREEN)

    return (
        <div>

            <p>{headertext}</p>

            {
                empty_events.map((item, i) => 
                    <div key={i}>
                        <p>{item.fechaSuceso && moment(item.fechaSuceso).format("DD/MM/YYYY")}</p>
                        <p>{item.descripcion}</p>
                    </div>
                )
            }
            
            {
                green_events.length > 0 && 
                <div>
                    <div className="fz-40 green">
                        <svg className="bi bi-circle-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="8" cy="8" r="8"></circle>
                        </svg>
                    </div>
                    <p>Bandera Verde</p>
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
                <div>
                    <div className="fz-40 yellow">
                        <svg className="bi bi-circle-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="8" cy="8" r="8"></circle>
                        </svg>
                    </div>
                    <p>Bandera Amarilla</p>
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
                <div>
                    <div className="fz-40 red">
                        <svg className="bi bi-circle-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="8" cy="8" r="8"></circle>
                        </svg>
                    </div>
                    <p>Bandera Roja</p>
                </div>
            }

            {
                    red_events.map( (item, i) => 
                        <div key={i}>
                            <p>{item.fechaSuceso && moment(item.fechaSuceso).format("DD/MM/YYYY")}</p>
                            <p>{item.descripcion}</p>
                        </div>
                    )
            }

        </div>
    );
};

SemaforoComponent.propTypes = {
    headertext: PropTypes.string.isRequired,
    eventos: PropTypes.arrayOf(PropTypes.shape({
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

export default SemaforoComponent;