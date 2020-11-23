const {
    getActiveCategory
  } = require("./category.model");
  
  const { hashSync, genSaltSync, compareSync } = require("bcrypt");
  const { sign } = require("jsonwebtoken");
  
  module.exports = {
    getCategory: (req, res) => {
        let param = req.params;
        getActiveCategory(param, (err, results) => {
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
  