const express = require("express");
const controller = require("../controllers/postsControllers");
const router = express.Router();

//index
router.get("/", controller.index);
//show
router.get("/:id", controller.show);
//create
router.post("/", controller.create);
//
router.put("/:id", (req, res) => {
  res.send("");
});
//modify
router.patch("/:id", controller.patch);
//destroy
router.delete("/:id", controller.destroy);
module.exports = router;
