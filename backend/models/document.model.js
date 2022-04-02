const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const documentSchema = new Schema(
  {
    code: {
      type: Number,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
      unique: false,
      trim: true,
      minlength: 2,
    },
  },
  {
    timestamps: true,
  }
);

const Document = mongoose.model("Document", documentSchema);

module.exports = Document;
