import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import EventosContainer from '../_containers/eventosContainer'
import InputDomainContainer from '../_containers/inputDomainContainer'
import RecallsContainer from '../_containers/recallsContainer'
import MmvaContainer from '../_containers/mmvaContainer'
import ProConContainer from '../_containers/proconContainer'
import ConclusionContainer from './../_containers/conclusionContainer'

import FooterComponent from './../_components/footerComponent'
import HeaderComponent from './../_components/headerComponent'

import CambiosPreviosContainer from '../_containers/cambiosPreviosContainer';
import UsoDelAutoContainer from '../_containers/usoDelAutoContainer'
import MantenimientoContainer from '../_containers/mantenimientoContainer'

class HomePage extends Component {

    render() {
        return (
            <div className="text-center">
                <div className="container pt-3">
                    <div className="col-md-8 text-left">
                        <InputDomainContainer />
                    </div>
                    <div className="col-md-4 text-right">
                        <Link to="/login">Logout</Link>
                    </div>
                </div>
                <hr />
                <HeaderComponent />
                <MmvaContainer />
                {/* <h2 className="mt-5">Eventos</h2>
                <EventosContainer /> */}
                <h2 className="mt-5">Recalls</h2>
                <RecallsContainer />
                <ProConContainer/>
                <CambiosPreviosContainer />
                <UsoDelAutoContainer />
                <MantenimientoContainer />
                <ConclusionContainer/>
                <FooterComponent />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };