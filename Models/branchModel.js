const mongoose = require("mongoose");

const branchSchema = mongoose.Schema(
  {
    name: {
      type: String,
      enum: ["Market Lube", "Web Lube", "Hiline"],
      required: [true, "Branch must have a name"],
    },
    balance: {
      type: Number,
      default: 0,
    },
    Fidhal: {
      type: Number,
      required: [true, "Need to mention Fidhal Bank balance"],
    },
    Althameem: {
      type: Number,
      required: [true, "Need to mention Althamem Bank balance"],
    },
    Axis: {
      type: Number,
      required: [true, "Need to mention Axis Bank balance"],
    },
    CASH: {
      type: Number,
      required: [true, "Need to mention CASH balance"],
    },
    Others: {
      type: Number,
      required: [true, "Need to mention Others balance"],
    },
    "Web Lube": {
      type: Number,
      required: [true, "Need to mention WebLube balance"],
    },
  },
  { timestamps: true }
);

branchSchema.pre("save", function (next) {
  this.balance =
    this.CASH + this.Axis + this.Others + this.Althamem + this.Fidhal;
  next();
});

const Branch = mongoose.model("Branch", branchSchema);

module.exports = Branch;
