const Producto = require('../modelo/modelo.producto');

module.exports.listarProducto = async (data) => {
  try {
    let producto = new Producto(data);
    let resultado = await producto.listar();
    return resultado
  } catch (error) {
    throw new Error ({error})
  }
}