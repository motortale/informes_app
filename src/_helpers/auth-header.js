export function authHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('user'));
    if (user && user.token) {
        return { 'Authorization': 'Bearer ' + user.token, 
                 'Access-Control-Allow-Origin': '*',
                 'X-ClientId': 'mt-informe-at' };
    } else {
        return {};
    }
}