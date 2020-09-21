import React, { Component } from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'

class RecallsComponet extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            abierto: false,
        }

        this.toggleModal = this.toggleModal.bind(this);
    
    }
    
    toggleModal() {
        this.setState( {abierto: !this.state.abierto} )
    }

    render() {
        const { recalls } = this.props

        return (
            <div>
                <a href="#" onClick={this.toggleModal} className="fsize20"> 
                    Recalls
                    <span class="badge badge-danger ml-1 va-super"> 
                        { 
                            recalls ? recalls.length : 0
                        }
                    </span>
                   
                </a>
                <Modal isOpen={this.state.abierto} fade={false} toggle={this.toggleModal} >
                    <ModalHeader>Recalls</ModalHeader>
                        <ModalBody>
                        {
                            !recalls || !recalls.length ? <p contentEditable="true" suppressContentEditableWarning={true}>El vehiculo no posee recalls informadas</p> :
                                
                                recalls.map((item, i) =>
                                    
                                    <p key={i} contentEditable="true" suppressContentEditableWarning={true}>
                                        <b>Motivo:</b> {item.motivo.toString()}<br/>
                                        <b>Solución:</b> {item.solucion.toString()}
                                    </p>
                            ) 
                        }
                        </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.toggleModal}>Cerrar</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }

}

export default RecallsComponet;