const arr = require("../data/postsData");

const validateExistance = (num, arr) => {
  return arr.length >= num;
};
module.exports = { validateExistance };
