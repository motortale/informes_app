import { vehiculoService } from "../_services";
import { vehiculoConstants } from "../_constants"
import config from 'config';

export const vehiculoActions = {
    geteventosbydominio,
    getrecallsbydominio,
    getmarcamodeloversionanobydominio,
    getproconbydominio
};

function geteventosbydominio(dominio) {
    return dispatch => {
        dispatch(request());
        vehiculoService.geteventosbydominio(dominio)
            .then(
                eventos => dispatch(success(eventos)),
                error => dispatch(failure(error))
            )
    };

    function request() { return { type: vehiculoConstants.GETEVENTOSBYDOMINIO_REQUEST } }
    function success(eventos) { return { type: vehiculoConstants.GETEVENTOSBYDOMINIO_SUCCESS, eventos } }
    function failure(error) { return { type: vehiculoConstants.GETEVENTOSBYDOMINIO_FAILURE, error } }
}

function getrecallsbydominio(dominio) {
    return dispatch => {
        dispatch(request());
        vehiculoService.getrecallsbydominio(dominio)
            .then(
                recalls => dispatch(success(recalls)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: vehiculoConstants.GETRECALLSBYDOMINIO_REQUEST } }
    function success(recalls) { return { type: vehiculoConstants.GETRECALLSBYDOMINIO_SUCCESS, recalls } }
    function failure(error) { return { type: vehiculoConstants.GETRECALLSBYDOMINIO_FAILURE, error } }
}

function getmarcamodeloversionanobydominio(dominio) {
    return dispatch => {
        dispatch(request());
        vehiculoService.getmarcamodeloversionanobydominio(dominio)
            .then(
                mmva => dispatch(success(mmva)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: vehiculoConstants.GETMMVABYDOMINIO_REQUEST } }
    function success(mmva) { return { type: vehiculoConstants.GETMMVABYDOMINIO_SUCCESS, mmva } }
    function failure(error) { return { type: vehiculoConstants.GETMMVABYDOMINIO_FAILURE, error } }
}

function getproconbydominio(dominio) {
    return dispatch => {
        dispatch(request());
        vehiculoService.getproconbydominio(dominio)
            .then(
                procon => dispatch(success(procon)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: vehiculoConstants.GETPROCONBYDOMINIO_REQUEST } }
    function success(procon) { return { type: vehiculoConstants.GETPROCONBYDOMINIO_SUCCESS, procon } }
    function failure(error) { return { type: vehiculoConstants.GETPROCONBYDOMINIO_FAILURE, error } }
}


    