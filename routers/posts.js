const express = require("express");
const arr = require("../data/postsData");
const router = express.Router();

//index
router.get("/", (rq, res) => {
  res.json({
    title: "Lista dei Post",
    posts: arr,
  });
});
//show
router.get("/:id", (req, res) => {
  res.json(arr[req.params.id]);
});
//create
router.post("/", (req, res) => {
  res.send("Creazione del post");
});
//
router.put("/:id", (req, res) => {
  res.send("");
});
//modify
router.patch("/:id", (req, res) => {
  res.send(`Modifica del post ${req.params.id}`);
});
//destroy
router.delete("/:id", (req, res) => {
  arr.splice(req.params.id, 1);
  res.send(`Cancellazione del post ${req.params.id}`);
});
module.exports = router;
