const router = require("express").Router();
const { checkToken,refreshToken } = require("../../auth/token_validation");
const {
    getProductByCategory
} = require("./product.controller");

//views
router.get("/getAll/:categoryId/:limit/:offset", checkToken, getProductByCategory);

module.exports = router;
