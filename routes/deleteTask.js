const express = require("express");
const Task = require("../models/Task");
const router = express.Router();
router.post("/:id", async (req, res) => {
  console.log(req);
  try {
    const id = req.params.id;
    // console.log(id);
    const task = await Task.findOneAndDelete({ taskid: id });
    if (task) {
      res.status(200).send({ msg: "Task deleted successfully" });
    }
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
