const jwt = require("jsonwebtoken");
module.exports = {
  checkToken: (req, res, next) => {
    let token = req.get("authorization");
    if (token) {
      // Remove Bearer from string
      token = token.slice(7);
      jwt.verify(token, process.env.JWT_ACCESS_KEY, (err, decoded) => {
        if (err) {
          return res.json({
            success: 0,
            message: "Invalid Token..."
          });
        } else {
          req.decoded = decoded;
          next();
        }
      });
    } else {
      return res.json({
        success: 0,
        message: "Access Denied! Unauthorized User"
      });
    }
  },
  refreshToken : (req, res, next) => {
    // (BEGIN) The code uptil this point is the same as the first part of the `welcome` route
    let token = req.get("authorization");
    if (!token) {
      return res.status(401).end()
    }
    if (token) {
      // Remove Bearer from string
      token = token.slice(7);
    }
    try {
      var payload = jwt.verify(token, process.env.JWT_REFRESH_KEY, {algorithms: ['HS256'] });
    } catch (e) {
      if (e instanceof jwt.JsonWebTokenError) {
        return res.status(401).send(e)
      }
      return res.status(400).send(e)
    }
    // (END) The code uptil this point is the same as the first part of the `welcome` route

    // Now, create a new token for the current user, with a renewed expiration time
    const newToken = jwt.sign({ result: payload.result }, process.env.JWT_ACCESS_KEY, {
      algorithm: "HS256",
      expiresIn: process.env.JWT_ACCESS_EXPIRY,
    })
  
    // Set the new token as the users `token` cookie
    res.send({"spin_r":newToken})
  }
};
