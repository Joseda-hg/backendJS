const Product = require("../models/products.model.js");

exports.findAll = (req, res) => {
    Product.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving products."
          });
        else res.send(data);
      });
};


exports.findOne = (req, res) => {
    Product.findById(req.params.productId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Product with id ${req.params.productId}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving Product with id " + req.params.productId
            });
          }
        } else res.send(data);
      });

    };

exports.search = (req, res) => {
    Product.search(req.params.searchTerm, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Product with name ${req.params.searchTerm}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving Product with id " + req.params.searchTerm
            });
          }
        } else res.send(data);
      });
    };

    exports.findByCategory = (req, res) => {
      Product.getByCategory(req.params.CategoryId, (err, data) => {
          if (err) {
            if (err.kind === "not_found") {
              res.status(404).send({
                message: `Not found Product with name ${req.params.CategoryId}.`
              });
            } else {
              res.status(500).send({
                message: "Error retrieving Product with id " + req.params.CategoryId
              });
            }
          } else res.send(data);
        });
      };


  