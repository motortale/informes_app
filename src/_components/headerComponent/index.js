import React, {Component} from 'react'
import './styles.css'
import logo from '../../images/logo-03.svg'
import ProgressBar from "react-scroll-progress-bar"; //Add this line

const HeaderComponent = () => {
    return(
        <div>
            <ProgressBar height="10px" bgcolor="#008ACD" />
            <div className="container">
                <div className="bluebar"></div>
            </div>
            <div className="container text-center">
                <img src={logo} alt="" className="p-5"/>
                <h1 className="blue title"><b>Informe Motortale</b></h1>
                <h3 className="blue">Conocé cómo va a ser tu MOTORTALE</h3>
                <p className="p-4">
                    En MOTORTALE contamos con millones de registros de miles de fuentes distintas. Un MOTORTALE brinda desde datos concretos sobre el pasado de un auto (su historial de mantenimiento, kilometraje, si fue taxi o si estuvo involucrado en un accidente) hasta pistas que te ayudan a determinar qué tan cuidado fue como multas, modificaciones estéticas o mecánicas, deuda de patentes, si fue empleado como auto de pruebas o participó de picadas o competencias en autódromos entre muchísimas cosas más. Contar con información adicional sobre un vehiculo reduce el riesgo de que el vehiculo no sea tal y como te los esperabas.
                </p>
            </div>
            <div className="header">
                <div className="progress-container">
                    <div className="progress-bar" id="myBar"></div>
                </div>
            </div>
        </div>
    )
}

export default HeaderComponent