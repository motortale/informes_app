import { vehiculoConstants } from '../_constants';

//Reducers son encargados de actualizar el estate
export function eventos(state = {}, action) {
  switch (action.type) {
    case vehiculoConstants.GETEVENTOSBYDOMINIO_REQUEST:
      return {
        loading: true
      };
    case vehiculoConstants.GETEVENTOSBYDOMINIO_SUCCESS:
      return {
        payload: action.eventos
      };
    case vehiculoConstants.GETEVENTOSBYDOMINIO_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }

}