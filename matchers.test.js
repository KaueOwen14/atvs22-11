const {numero, texto, array} = require('./matchers');
test('Número maior que 0', () => {
    expect(numero).toBeGreaterThan(0);
});

test('O texto deve conter a palavra "chevrolet"', () => {
    expect(texto).toMatch(/chevrolet/);
});

test('O array deve conter o número 1', () => {
    expect(array).toContain(1);
});