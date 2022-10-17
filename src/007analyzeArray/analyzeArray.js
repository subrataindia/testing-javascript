function analyzeArray(array){
    if(!isArray(array))
        return null;
    const sum = array.reduce((a,b) => a+b)
    const length = array.length;
    const average = sum / length;
    const min = array.reduce((a,b) => Math.min(a,b));
    const max = array.reduce((a,b) => Math.max(a,b));

    const result = { average, min, max, length}
    return result;
}

function isArray(array){
    if(!Array.isArray(array)){
        return false;
    }
    for(let i=0; i<array.length; i++){
        if(typeof array[i] !== 'number')
            return false;
    }
    return true
}

export default analyzeArray;