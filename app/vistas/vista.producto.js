const controladorDeProducto = require('../controlador/controlador.producto')

module.exports = async function (app) {
  app.get('/productos', async (req, res) => {
    let data = req.body.metodo;
    try {
      let resultado = await controladorDeProducto.listarProducto(data);
      res.render("index", { result: resultado });
    } catch (error) {
      res.status(400).json('Error en la consulta')
    }
  })
}