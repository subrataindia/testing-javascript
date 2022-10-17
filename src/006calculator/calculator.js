const add = (a,b) => a===undefined && b===undefined ? null : a===undefined && b!==undefined ? b : a!==undefined && b===undefined ? a :a+b;
const sub = (a,b) => a===undefined && b===undefined ? null : a===undefined && b!==undefined ? null : a!==undefined && b===undefined ? a :a-b;
const mul = (a,b) => a*b;
const div = (a,b) => b===0 ? null : a/b;

const calculator = {
    add, sub, mul,div
}

export default calculator;
