const router = require("express").Router();

const {
  Join,
} = require("../api/user");

router
  .post("/Join", async (req, res, next) => {
    await Join(req, res, next);
  })


module.exports = router;