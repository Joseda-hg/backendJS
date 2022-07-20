// module.exports = app => {
//     const products = require("../controllers/product.controller.js");
//     const categories = require("../controllers/category.controller.js");
  
//     // Ruta para recuperar todos los productos
//     app.get("/api/products", products.findAll);
  
//     // Ruta para solicitar un producto en especifico
//     app.get("/api/products/:productId", products.findOne);
    
//     // Ruta para recuperar todas las categorias
//     app.get("/api/categories/", categories.findAll);

//     // Ruta para recuperar una categoria en particular 
//     app.get("/api/products/category/:CategoryId", products.findByCategory);

//     // Ruta para hacer busquedas de productos
    // app.get("/api/search/:searchTerm", products.search);
//   };

module.exports = app => {
    const mail = require("../controllers/mail.controller.js")
    app.get("/api/mail",mail.send);
}