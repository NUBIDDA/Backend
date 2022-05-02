const router = require("express").Router();

const {
  Join, 
  Login,
  Logout,
  DeleteUser,
} = require("../api/user");

router
  .post("/Join", async (req, res, next) => {
    await Join(req, res, next);
  })

  .post("/Login", async (req, res, next) => {
    await Login(req, res, next);
  })

  .get("/Logout", async (req, res, next) => {
    await Logout(req, res, next);
  })

  .post("/DeleteUser", async (req, res, next) => {
    await DeleteUser(req, res, next);
  })

  


module.exports = router;