// calculos.js
function aplicarDescuento(monto, esClientePremium) {
    if (monto < 0) throw new Error("El monto no puede ser negativo");
    if (esClientePremium && monto >= 1000) {
        return monto * 0.8; // 20% de descuento
    }
    return monto;
}

// Exportamos la función para que el entorno de pruebas pueda acceder a ella
module.exports = { aplicarDescuento };

// Fix validacioens para Issue 1






