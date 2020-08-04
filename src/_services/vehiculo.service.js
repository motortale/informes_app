import config from 'config';
import { authHeader } from '../_helpers';

export const vehiculoService = {
    geteventosbydominio,
    getrecallsbydominio,
    getmarcamodeloversionanobydominio,
    getproconbydominio
}

function geteventosbydominio(dominio) 
{   
    const requestOptions = {
        method: 'GET',
        headers: authHeader()

    }
    return fetch(`${config.apiUrl}/vehiculo/geteventosbydominio/${dominio}`, requestOptions).then(handleResponse)
}

function getrecallsbydominio(dominio) 
{
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    }
    return fetch(`${config.apiUrl}/vehiculo/getrecallsbydominio/${dominio}`, requestOptions).then(handleResponse)
}

function getmarcamodeloversionanobydominio(dominio) 
{
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    }
    return fetch(`${config.apiUrl}/vehiculo/getmarcamodeloversionanobydominio/${dominio}`, requestOptions).then(handleResponse)
}

function getproconbydominio(dominio) 
{
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    }
    return fetch(`${config.apiUrl}/vehiculo/getproconbydominio/${dominio}`, requestOptions).then(handleResponse)
}




function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}