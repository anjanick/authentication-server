const pool = require("../../config/database");

module.exports = {
        getProductByActiveCategory : (params, callBack) => {
        let categoryId = params.categoryId;
        let limit = params.limit;
        let offset = params.offset;
        pool.query(`select product_id,product_name,product_desc, product_price, product_discounted_price,product_in_stock, product_img_url,product_delivery_charges,coupon_deatil from product where cat_id = `+ categoryId+ ' and product_status = 1 order by product_name DESC limit '+limit+' OFFSET '+offset,
        (error, results, fields) => {
            if (error) {
            callBack(error);
            }
            return callBack(null, results);
        }
        );
    }
};
