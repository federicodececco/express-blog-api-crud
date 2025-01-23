const arr = require("../data/postsData");
const validate = require("../middlewares/smallValidation");
//index
const index = (req, res) => {
  if (req.query) {
    console.log(req.query.tags);
    const tag = req.query.tags;
    const newArr = arr.filter((elm) => elm.tags.includes(tag));
    return res.json(newArr);
  }
  res.json(arr);
};
//show
const show = (req, res) => {
  res.json(arr[req.params.id]);
};
//create
const create = (req, res) => {
  res.send("Creazione del post");
};
//modify
const patch = (req, res) => {
  res.send(`Modifica del post ${req.params.id}`);
};
//destroy
const destroy = (req, res) => {
  if (!validate.validateExistance(req.params.id, arr)) {
    return res.status(404).send("content not found");
  }
  arr.splice(req.params.id, 1);
  res.status(204).send(`Cancellazione del post  ${req.params.id} `);
  console.log(arr);
};
module.exports = { index, create, show, patch, destroy };
