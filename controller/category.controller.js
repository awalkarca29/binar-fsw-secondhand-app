const db = require("../models");
const Category = db.category;

exports.findAllCategory = (request, response) => {
  Category.findAll().then((result) => {
    response.json({ data: result });
  });
};

exports.findCategoryById = (req, res) => {
  Category.findByPk(req.params.id).then((result) => {
    if (result == null) {
      res.status(404).json({ error: "Data not found" });
    }

    res.json({ data: result });
  });
};
