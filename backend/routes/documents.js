const router = require("express").Router();
let Document = require("../models/document.model");

router.route("/").get((req, res) => {
  Document.find()
    .then((item) => res.json(item))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const code = req.body.code;
  const description = req.body.description;
  const newItem = new Document({
    code: code,
    description: description,
  });

  newItem
    .save()
    .then(() => res.json("Item added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Document.findById(req.params.id)
    .then((item) => res.json(item))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Document.findByIdAndDelete(req.params.id)
    .then(() => res.json("Item deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Document.findById(req.params.id)
    .then((item) => {
      item.code = Number(req.body.code);
      item.description = req.body.description;
      item
        .save()
        .then(() => res.json("Item updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
