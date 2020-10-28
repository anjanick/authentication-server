const router = require("express").Router();
const { checkToken,refreshToken } = require("../../auth/token_validation");
const {
  createUser,
  loginUser
} = require("./user.controller");

//views
// router.get("/", checkToken, getUsers);
router.post("/register", createUser);
router.post("/login", loginUser);
router.post("/refresh", refreshToken);

//HealthCheck Route
router.get("/test", checkToken, (req,res)=>{
  res.send("Inside");
});

module.exports = router;
