const sql = require("./db.js");


// constructor
const Product = function (product) {
  this.id = product.id;
  this.title = product.title;
  this.url_image = product.url_image;
  this.price = product.price;
  this.discount = product.discount;
  this.category = product.category;

};

sendMail = () => {
  const sgMail = require('@sendgrid/mail')
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const msg = {
    to: 'test@example.com', // Change to your recipient
    from: 'test@example.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
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

Product.findById = (id, result) => {
  sql.query('SELECT * FROM product WHERE id = ' + sql.escape(id), (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found product: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found product with the id
    result({ kind: "not_found" }, null);
  });
};

Product.getAll = result => {
  sql.query("SELECT * FROM product", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Products: ", res);
    result(null, res);
  });
};

Product.getByCategory = (CategoryId, result) => {
  sql.query(`SELECT * FROM product WHERE category = ${CategoryId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found category: ", res);
      result(null, res);
      return;
    }

    result({ kind: "not_found" }, null);
  });
};

Product.search = (searchTerm, result) => {
  sql.query('SELECT * FROM product WHERE name LIKE' + sql.escape("%" + searchTerm + "%"), (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found product: ", res);
      result(null, res);
      return;
    }

    result({ kind: "not_found" }, null);
  });
};
module.exports = Product;