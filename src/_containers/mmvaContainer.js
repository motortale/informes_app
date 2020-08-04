import React, {Component} from 'react';
import { connect } from 'react-redux';
import MmvaComponent from './../_components/mmvaComponent'

class MmvaContainer extends Component {

    render() {
        return (
            <div className="text-center">
                    {
                        ! this.props.payload ? "No hay MMVA" : this.props.payload.map((mmva) => <MmvaComponent mmva={mmva}/>)
                    }
            </div>
        );
    }
}

MmvaContainer.propTypes = {

};

function mapStateToProps(state) {
    const { mmva } = state;
    const { payload } = mmva
    return {
        payload
    };
}

export default connect(mapStateToProps, null)(MmvaContainer);
