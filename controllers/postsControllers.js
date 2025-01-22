const express = require("express");
const arr = require("../data/postsData");
//index
const index = (rq, res) => {
  res.json({
    title: "Lista dei Post",
    posts: arr,
  });
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
  arr.splice(req.params.id, 1);
  res.send(`Cancellazione del post ${req.params.id}`);
};
module.exports = { index, create, show, patch, destroy };
