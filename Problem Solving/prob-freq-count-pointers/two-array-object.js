// add whatever parameters you deem necessary
function twoArrayObject(keys, vals) {
    return keys.reduce((obj, cur, idx) => {
        obj[cur] = idx < vals.length ? vals[idx] : null
        return obj
    }, {})
}
