import moment from 'moment'

export const groupBy = (array, f) =>{
        let groups = {};
        array.forEach(function (o) {
        var group = JSON.stringify(f(o));
        groups[group] = groups[group] || [];
        groups[group].push(o);
        });
    return Object.keys(groups).map(function (group) {
        return groups[group];
    })
}


export const average = (array) => {
    return array.reduce((a, b) => a + b) / array.length;
}

export const antiguedad_vehiculo = (ano_fabricacion) => {
    return moment().year() - ano_fabricacion
}