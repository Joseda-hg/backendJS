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
    

require('dotenv').config();
function sendMail(to,subject,text){

    const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    console.log(process.env.SENDGRID_API_KEY)
    const msg = {
      to: to, // Change to your recipient
      // from: 'josedhg29@gmail.com', // Change to your verified sender
      subject: subject,
      text: text,
    //   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }
    sgMail
      .send(msg)
      .then((response) => {
        console.log(response[0].statusCode)
        console.log(response[0].headers)
      })
      .catch((error) => {
        console.error(error)
      })
}
    module.exports = app => {
    app.post("/api/mail",sendMail);
}
console.log(process.env.REACT_APP_SENDGRID_API_KEY)
