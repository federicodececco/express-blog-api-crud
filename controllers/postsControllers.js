const arr = require("../data/postsData");

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
  const showPost = arr.find((elm) => {
    req.params.id == elm.id;
  });
  if (!showPost) {
    return res.status(404);
  }
  res.json(showPost);
};
//create
const create = (req, res) => {
  const insertId = arr[arr.length - 1].id + 1;

  const elem = {
    title: req.body.title,
    content: req.body.content,
    img: req.body.img,
    tags: req.body.tags,
    id: insertId,
  };
  console.log(elem);
  arr.push(elem);
  res.status(201).json(elem);
};
//Update
const put = (req, res) => {
  const toMod = arr.find((elm) => {
    elm.id == req.params.id;
  });
  if (!toMod) {
    res.status(404);
  }
  toMod.title = req.body.title;
  toMod.content = req.body.content;
  toMod.img = req.body.img;
  toMod.tags = req.body.tags;
  res("update completo");
};
//modify
const patch = (req, res) => {
  const toMod = arr.find((elm) => {
    elm.id == req.params.id;
  });
  if (!toMod) {
    res.status(404);
  }
  if (req.body.title) {
    toMod.title = req.body.title;
  }
  if (req.body.content) {
    toMod.content = req.body.content;
  }
  if (req.body.img) {
    toMod.img = req.body.img;
  }
  if (req.body.tags) {
    toMod.tags = req.body.tags;
  }
};
//destroy
const destroy = (req, res) => {
  if (!validate.validateExistance(req.params.id, arr)) {
    return res.status(404);
  }
  arr.splice(req.params.id, 1);
  res.status(204).send(`Cancellazione del post  ${req.params.id} `);
  console.log(arr);
};
module.exports = { index, create, show, patch, destroy, put };
