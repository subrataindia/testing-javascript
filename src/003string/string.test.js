test('there is no I in Subrat', () => {
    expect('Subrat').not.toMatch(/I/);
});

test('but there is a "rat" in Subrat', () => {
    expect('Subrat').toMatch(/rat/);
});