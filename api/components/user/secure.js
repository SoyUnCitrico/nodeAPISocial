const auth = require(".../../../auth")

module.exports = function checkAuth( action) {
  function middleware(req, res, next) {
    switch(action) {
      case"update":
        // Comprobar si se puede realizar la accion en el controller
        break;
      default:
        next();
    }
  }

  return middleware
}
