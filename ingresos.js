function aprobarCredito(ingresos, tieneDeudas) {
    let estado = "Rechazado";
    // Estructura condicional compleja
    if (ingresos > 50000 && tieneDeudas === false) {
        estado = "Aprobado";
    }
    return estado;
}