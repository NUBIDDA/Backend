const router = require("express").Router();

const {
  Join, Login,
} = require("../api/user");

router
  .post("/Join", async (req, res, next) => {
    await Join(req, res, next);
  })

  .post("/Login", async (req, res, next) => {
    await Login(req, res, next);
  })


module.exports = router;