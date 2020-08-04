import React, {Component} from 'react'
import './styles.css'
import logo from '../../images/logo-03.svg'

const HeaderComponent = () => {
    return(
        <div>
            <div class="container">
                <div class="bluebar"></div>
            </div>
            <div class="container text-center">
                <img src={logo} alt="" class="p-5"/>
                <h1 class="title">Informe de muestra</h1>
                <h3>Conocé cómo va a ser tu MOTORTALE</h3>
                <p class="p-4">
                    En MOTORTALE contamos con millones de registros de miles de fuentes distintas. Un MOTORTALE brinda desde datos concretos sobre el pasado de un auto (su historial de mantenimiento, kilometraje, si fue taxi o si estuvo involucrado en un accidente) hasta pistas que te ayudan a determinar qué tan cuidado fue como multas, modificaciones estéticas o mecánicas, deuda de patentes, si fue empleado como auto de pruebas o participó de picadas o competencias en autódromos entre muchísimas cosas más. Contar con información adicional sobre un vehiculo reduce el riesgo de que el vehiculo no sea tal y como te los esperabas.
                </p>
            </div>
            <div class="header">
                <div class="progress-container">
                    <div class="progress-bar" id="myBar"></div>
                </div>
            </div>
        </div>
    )
}

export default HeaderComponent