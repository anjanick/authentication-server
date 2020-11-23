const pool = require("../../config/database");

module.exports = {
    getActiveCategory: (params, callBack) => {
        let limit = params.limit;
        let offset = params.offset;
        pool.query(
          `select cat_id, cat_name, cat_desc, cat_image_url from category where cat_stauts = 1 order by cat_name DESC limit `+limit+' OFFSET '+offset,
          (error, results, fields) => {
            if(error) {
              callBack(error);
            }
            return callBack(null,results);
          }
        );
      }};
