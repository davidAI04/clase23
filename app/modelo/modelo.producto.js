
const sequilize = require('../db/db.conexion');

module.exports = class Producto {
  constructor(producto) {
    this.producto = producto;
  }

  async listar() {
    let resultado = await sequilize.query('SELECR * FROM productos');
    let solucion = resultado[0][0][this.producto];
    return solucion;
  }
}