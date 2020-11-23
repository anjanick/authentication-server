const router = require("express").Router();
const { checkToken,refreshToken } = require("../../auth/token_validation");
const {
    getCategory
} = require("./category.controller");

//views
router.get("/getAll/:limit/:offset", checkToken,getCategory);


module.exports = router;
