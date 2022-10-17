import sumFloat from './sumFloat'

test('Floating sum testing 0.1+0.2 using toBe',()=>{
    expect(sumFloat(0.1,0.2)).toBe(0.3); // This will not work
})

test('Floating sum testing 0.1+0.2 using toBeCloseTo',()=>{
    expect(sumFloat(0.1,0.2)).toBeCloseTo(0.3); // This will work
})