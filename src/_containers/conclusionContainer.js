import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ConclusionComponent from './../_components/conclusionComponent'
import { eventoConstants, eventogrupoConstants } from '../_constants'
import { average } from './../_functions'
import moment from 'moment'

class ConclusionContainer extends Component {
    constructor(props){
        super(props)

        this.state = {
            conclusion: []
        }
    }

    agruparEventos(eventos){
        let ret = []

        

        eventos.map(function(evento) {
            var itemInArray = ret.filter(x => x.id_evento == evento.id_Evento && x.gravedadInforme == evento.gravedadInforme)

            if (itemInArray.length > 0) 
                ret.filter(x => x.id_evento == evento.id_Evento && x.gravedadInforme == evento.gravedadInforme)[0].cantidad++
            else
                ret.push(
                    {
                        id_evento: evento.id_Evento,
                        id_evento_grupo: evento.id_EventoGrupo,
                        gravedadInforme: evento.gravedadInforme,
                        cantidad: 1
                    }
                )
        })

        console.log("asd", ret)
        debugger;

        return ret;
    }

    
    crearOraciones(eventosAgrupados){

        if (eventosAgrupados.length > 0) {
            this.state.conclusion = []
            
            var fue_taxi = eventosAgrupados.filter(x => x.id_evento == eventoConstants.TAXI).length > 0
            var tuvo_gnc = eventosAgrupados.filter(x => x.id_evento == eventoConstants.GNC).length > 0

            if (fue_taxi && tuvo_gnc) 
                this.state.conclusion.push(`En el vehículo se ha reportado instalación de GNC y uso como taxi. Esto puede llevar al vehículo a experimentar severo desgaste mecánico.`)
            
            if (!fue_taxi && !tuvo_gnc) 
                this.state.conclusion.push(`Este vehículo no ha reportado instalación de GNC o uso como taxi, lo que indica que estos no son factores de riesgo en la mecánica.`)


            //Infracciones               
            var cantidad_infraccion_otra = 0
            var cantidad_infraccion_velocidad = 0
            
            if (eventosAgrupados.filter(x => x.id_evento == eventoConstants.INFRACCION_VELOCIDAD).length > 0) 
                cantidad_infraccion_velocidad = eventosAgrupados.filter(x => x.id_evento == eventoConstants.INFRACCION_VELOCIDAD)[0].cantidad
            
            if (eventosAgrupados.filter(x => x.id_evento == eventoConstants.INFRACCION).length > 0) 
                cantidad_infraccion_otra = eventosAgrupados.filter(x => x.id_evento == eventoConstants.INFRACCION)[0].cantidad    
            
            var cantidad_total_infracciones = cantidad_infraccion_velocidad + cantidad_infraccion_otra
            
            if (cantidad_total_infracciones > 0 && cantidad_total_infracciones == 0) 
                this.state.conclusion.push(`No se han reportado multas para este vehículo, esto siempre es un indicio positivo.`)
            
            if (cantidad_total_infracciones > 0 && cantidad_total_infracciones < 10  && cantidad_infraccion_velocidad <= 5) 
                this.state.conclusion.push(`Se han reportado pocas multas y de baja severidad, lo que suele indicar un uso moderado/tranquilo del auto.`)

            if (cantidad_total_infracciones > 0 && cantidad_total_infracciones <= 10  && cantidad_infraccion_velocidad > 5) 
                this.state.conclusion.push(`Se han reportado pocas multas, aunque de exceso de velocidad. Ésto puede indicar un uso más exigido al auto.`)

            if (cantidad_total_infracciones > 0 && cantidad_total_infracciones >= 10  && cantidad_infraccion_velocidad < 5) 
                this.state.conclusion.push(`Se han reportado muchas multas, aunque de baja severidad. Esto suele indicar un uso moderado del auto.`)

            if (cantidad_total_infracciones > 0 && cantidad_total_infracciones > 10  && cantidad_infraccion_velocidad >= 5) 
                this.state.conclusion.push(`Se han reportado muchas multas y de alta severidad en el historial, lo que puede indicar un uso mucho más exigido para la distancia recorrida.`)
            //Fin Infracciones


            // Siniestros
            var tiene_siniestros_leves = eventosAgrupados.filter(x => x.id_evento == eventoConstants.SINIESTRO && x.gravedadInforme == 1).length > 0
            var tiene_siniestros_moderado = eventosAgrupados.filter(x => x.id_evento == eventoConstants.SINIESTRO && x.gravedadInforme == 2).length > 0
            var tiene_siniestros_severo = eventosAgrupados.filter(x => x.id_evento == eventoConstants.SINIESTRO && x.gravedadInforme == 3).length > 0
            
            if(tiene_siniestros_leves)
                this.state.conclusion.push(`Se ha reportado un SINIESTRO leve. Los daños leves son daños que no afectan el funcionamiento o la estructura del auto, sino que son meramente estéticos. Verificar que haya sido reparado correctamente.`)

            if(tiene_siniestros_moderado)
                this.state.conclusion.push(`Se ha reportado un SINIESTRO moderado, el mismo implica un daño que afecte la estructura o el funcionamiento del auto, o daños estéticos muy grandes. Son daños reparables sin dejar mayores secuelas. Verificar que haya sido reparado correctamente.`)

            if(tiene_siniestros_severo)
                this.state.conclusion.push(`Se ha reportado un SINIESTRO severo, los vehículos que han reportado daño severo suelen ser muy dificiles de reparar correctamente, generando potenciales problemas a futuro.`)

            // Fin Siniestros

            if (eventosAgrupados.filter(x => x.id_evento_grupo == eventogrupoConstants.MANTENIMIENTO ).length == 0)
                this.state.conclusion.push(`No se ha reportado mantenimiento del vehículo`)

            if (eventosAgrupados.filter(x => x.id_evento == eventoConstants.SINIESTRO).length == 0)
                this.state.conclusion.push(`No se han reportado siniestros del vehículo.`)


            eventosAgrupados.map(x => {
                switch (x.id_evento) {
                        case eventoConstants.ABANDONADO:
                            this.state.conclusion.push(`Se ha reportado al vehículo como abandonado. En general, los vehículos abandonados quedan en este estado por problemas en sucesiones, viajes, o problemas mecánicos. Verificar posibles causas. Vehículos reportados como abandonados suelen tener deterioro excesivo en neumáticos, mangueras de refrigeración, juntas, pinturas, etc. `)
                            break;

                        case eventoConstants.ALQUILER:
                            this.state.conclusion.push(`Se ha reportado al vehículo como unidad de alquiler. Esto puede implicar un uso más exigido y/o una cantidad de kilómetros recorridos mayor a la media.`)
                            break;

                        case eventoConstants.AUTODROMO:
                            this.state.conclusion.push(`Se ha reportado al vehículo como participante de eventos en autódromo. Esto puede indicar un uso mucho más exigido. Verificar estado de los neumáticos y frenos.`)
                            break;

                        case eventoConstants.AUTO_ESCUELA:
                            this.state.conclusion.push(`El uso en escuelas de aprendizaje de manejo puede generar un desgaste excesivo en ciertos componentes. También pueden haber tenido adaptaciones mecánicas.`)
                            break;

                        case eventoConstants.BAJA_PERMANENTE:
                            this.state.conclusion.push("Vehículo reportado con baja permanente, esto significa que, según el DNRPA, no está apto para circular en vías públicas. Verificar situación registral antes de comprar. Por lo general, los vehículos dados de baja suelen ser enviados a desguace.")
                            break;

                        case eventoConstants.TAXI:
                            this.state.conclusion.push(`En el vehículo se ha reportado uso como taxi/cabify. Este tipo de uso implica mucho kilometraje recorrido en zonas urbanas, lo que puede llevar a un severo desgaste mecánico.`)
                            break;

                        case eventoConstants.MODIFICACION:
                            this.state.conclusion.push(`Se han reportado modificaciones del vehículo. Las modificaciones suelen indicar un vehículo con un uso más exigido y podrían generar desgaste prematuro en ciertos componentes.`)
                            break;

                        case eventoConstants.PRENSA_PRUEBA:
                            this.state.conclusion.push(`Las unidades con uso de prueba/prensa suelen tener un uso mucho más exigido al habitual debido a que son exigidos para testear los límites y prestaciones de los vehículos.`)
                            break;

                        case eventoConstants.TRANSFERENCIA:
                            this.state.conclusion.push("El vehiculo tiene una transferencia reportada, lo que significa que no es primer/único dueño.")
                            break;  

                        case eventoConstants.GNC:
                            this.state.conclusion.push("En el vehículo se ha reportado instalación de GNC. Si bien el GNC moderno no suele generar desgaste, el uso y mantenimiento que se le suele dar a los autos equipados con este sistema sí.")
                            break; 
                            
                        case eventoConstants.DEUDA_PATENTE:
                            this.state.conclusion.push("Se han detectado deudas de patente superiores al 10% del valor del vehículo en períodos pasados. En muchos casos, esto suele ser indicador de un vehículo que ha permanecido gran cantidad de tiempo sin circular o suele ser un indicador de un vehículo que pudo no haber sido mantenido correctamente.")
                            break; 
                        
                        case eventoConstants.KILOMETRAJE:
                            let ano_vehiculo = this.props.payload2 ? this.props.payload2[0].ano : 0

                            if (ano_vehiculo != 0) {
                                let ano_actual = moment().year()

                                let kilometrajes = this.props.payload.filter(x => x.id_Evento == eventoConstants.KILOMETRAJE).map(x => {
                                        let ano_suceso = moment(x.fechaSuceso).year()

                                        return(
                                            (x.descripcion / (ano_suceso - ano_vehiculo)) * (ano_actual - ano_vehiculo)
                                        )
                                    }
                                )

                                let kilometraje_calculado = average(kilometrajes)
                                let kilometraje_reportado_maximo = Math.max(...this.props.payload.filter(x => x.id_Evento == eventoConstants.KILOMETRAJE).map(x => x.descripcion))
                                
                                this.state.conclusion.push(`Se reportaron registros de kilometraje. Verificar que el kilometraje actual no sea inferior al reportado en este MOTORTALE. Si el kilometraje actual fuese inferior a ${Math.round(kilometraje_reportado_maximo)} kms. podría tratarse de un odómetro adulterado. Al ritmo del kilometraje reportado, este vehículo debería tener aproximadamente ${Math.round(kilometraje_calculado)} kms. al día de la fecha.`)   
                            }
                            break; 
                        
                        case eventoConstants.ROBO:
                            this.state.conclusion.push("El vehículo ha sido reportado como robado, prestar atención a la titularidad al momento de la transferencia.")
                            break; 
                                
                        default:
                            break;
                    }
                }
            )
        }
    }

    componentDidUpdate() {

        const eventosAgrupados = this.props.payload ? 
            this.agruparEventos(this.props.payload.map(({id_Evento, id_EventoGrupo, gravedadInforme }) => ({id_Evento, id_EventoGrupo, gravedadInforme })))  : []

        this.crearOraciones(eventosAgrupados)

    }

    render() {

        return (
            <ConclusionComponent oraciones={this.state.conclusion}/> 
        );
    }
}

ConclusionContainer.propTypes = {
    payload: PropTypes.arrayOf(PropTypes.shape({
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

function mapStateToProps(state) {
    const { eventos, mmva } = state;
    const { payload: payload2 } = mmva
    const { payload } = eventos
    return {
        payload2,
        payload
    };
}

export default connect(mapStateToProps, null)(ConclusionContainer);
