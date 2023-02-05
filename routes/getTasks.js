const express = require("express");
const Task = require("../models/Task");
const router = express.Router();
router.get("/", async (req, res) => {
  // console.log(" getTasks", res.passport);
  // console.log(" getTasks", user);
  // res.status(200).json({message: 'success'})
  // res.status(200).json([
  //   {
  //     userId: 1,
  //     id: 1,
  //     title: "delectus aut autem",
  //     completed: false,
  //   },
  //   {
  //     userId: 1,
  //     id: 2,
  //     title: "quis ut nam facilis et officia qui",
  //     completed: false,
  //   },
  //   {
  //     userId: 1,
  //     id: 3,
  //     title: "fugiat veniam minus",
  //     completed: false,
  //   },
  // ]);
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    console.log(error);
  }
});
// console.log("req");
module.exports = router;
