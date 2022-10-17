import calculator from "./calculator";

test('add(3,5) = 8',()=>{
    expect(calculator.add(3,5)).toBe(8);
})

test('add() = null',()=>{
    expect(calculator.add()).toBeNull();
})

test('add(3) = 3',()=>{
    expect(calculator.add(3)).toBe(3);
})

test('add(undefined,3) = 3',()=>{
    expect(calculator.add(undefined,3)).toBe(3);
})

test('add(3.0,5.0) = 8.0',()=>{
    expect(calculator.add(3.0,5.0)).toBeCloseTo(8);
})

test('sub(3.0,5.0) = -2.0',()=>{
    expect(calculator.sub(3.0,5.0)).toBeCloseTo(-2);
})

test('sub() = null',()=>{
    expect(calculator.sub()).toBeNull();
})

test('sub(3) = 3',()=>{
    expect(calculator.sub(3)).toBe(3);
})

test('sub(undefined, 3) = null',()=>{
    expect(calculator.sub(undefined,3)).toBeNull();
})

test('mul(3.0,5.0) = 15.0',()=>{
    expect(calculator.mul(3.0,5.0)).toBeCloseTo(15);
})

test('div(10.0,2.0) = 5.0',()=>{
    expect(calculator.div(10.0,2.0)).toBeCloseTo(5);
})

test('div(10.0,0) = null',()=>{
    expect(calculator.div(10.0,0.0)).toBeNull();
})