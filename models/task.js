const mongoose = require("mongoose");

const taskSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a task"],
    },
    completed: {
      type: Boolean,
      required: true,
      default: false,
    }
  },
  { timestamps: true,versionKey: false } 
  // com: timestamps used for default createdAt and updatedAt properties
  // com: versionKey set the versionKey hide cz its not required
);

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;