const express = require("express");
const controller = require("../controllers/postsControllers");
const validateId = require("../middlewares/smallValidation");
const router = express.Router();
// validationId midware
router.use("/:id", validateId);
//index
router.get("/", controller.index);
//show
router.get("/:id", controller.show);
//create
router.post("/", controller.create);
//Update
router.put("/:id", controller.put);
//modify
router.patch("/:id", controller.patch);
//destroy
router.delete("/:id", controller.destroy);
module.exports = router;
