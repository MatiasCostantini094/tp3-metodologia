// calculos.test.js
const { aplicarDescuento } = require('./calculos');

describe('Suite de Pruebas: aplicarDescuento', () => {

    test('Debe aplicar un 20% de descuento a clientes Premium con compras mayores a 1000', () => {
        const montoCompra = 1500;
        const clienteEsPremium = true;
        const resultadoEsperado = 1200;
        const resultadoObtenido = aplicarDescuento(montoCompra, clienteEsPremium);
        expect(resultadoObtenido).toBe(resultadoEsperado);
    });

    test('NO debe aplicar descuento si el cliente no es Premium, sin importar el monto', () => {
        const montoCompra = 1500;
        const clienteEsPremium = false;
        const resultadoEsperado = 1500; 
        const resultadoObtenido = aplicarDescuento(montoCompra, clienteEsPremium);
        expect(resultadoObtenido).toBe(resultadoEsperado);
    });

    test('Debe aplicar el descuento a clientes Premium con monto límite exacto de 1000', () => {
        const montoCompra = 1000;
        const clienteEsPremium = true;
        const resultadoEsperado = 800; 
        const resultadoObtenido = aplicarDescuento(montoCompra, clienteEsPremium);
        expect(resultadoObtenido).toBe(resultadoEsperado);
    });

    test('Debe lanzar una excepción si el monto ingresado es negativo', () => {
        const montoCompra = -500;
        const clienteEsPremium = true;
        expect(() => {
            aplicarDescuento(montoCompra, clienteEsPremium);
        }).toThrow("El monto no puede ser negativo");
    });

});