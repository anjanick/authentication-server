const {
    getProductByActiveCategory
  } = require("./product.model");
  
  const { hashSync, genSaltSync, compareSync } = require("bcrypt");
  const { sign } = require("jsonwebtoken");
  
  module.exports = {
    getProductByCategory: (req, res) => {
      let param = req.params;
      getProductByActiveCategory(param,(err, results) => {
          if (err) {
            console.log(err);
          }
          if (!results) {
            return res.json({
              errors:[{
                status: "NOT FOUND",
                code: "404",
                message: "No data found"              
              }]
            });
          }
            if (results.length >= 1) {
              return res.json({
                data:[{
                  results  
                }]
              });
            } else {
              return res.json({
                errors:[{
                  status: "NOT FOUND",
                  code: "404",
                  message: "No data found"  
                }]
              });
            }
        });
      }
  };
  