import capitalize from "./capitalize";

test('ramesh => Ramesh',()=>{
    expect(capitalize('ramesh')).toMatch(/Ramesh/)
})

test('Suresh => Suresh',()=>{
    expect(capitalize('Suresh')).toMatch(/Suresh/)
})

test('1234 => Not a String',()=>{
    expect(capitalize('1234')).toMatch(/Not a String/)
})

test('1ramesh => First letter is Not a Character',()=>{
    expect(capitalize('1ramesh')).toMatch(/First letter is Not a Character/)
})
