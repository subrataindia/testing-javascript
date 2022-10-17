import caesarCipher from "./caesarCipher.solution";

test('Subrata Kumar Das',()=>{
    expect(caesarCipher('Subrata Kumar Das')).toMatch(/tvcsbub lvnbs ebt/)
})

test('Z-Class security',()=>{
    expect(caesarCipher('Z-Class security')).toMatch(/a-dmbtt tfdvsjuz/)
})

test('codingsubrata@gmail.com',()=>{
    expect(caesarCipher('codingsubrata@gmail.com')).toMatch(/dpejohtvcsbub@hnbjm.dpn/)
})
