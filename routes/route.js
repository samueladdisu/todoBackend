const express = require("express")
const { getTodosbyCollection, createTodo, deleteTodo, editTodo } = require("../controllers/todo")
const router = express.Router()

router.get("/", (req, res) => {
  res.send("Hello World!")
})

router.get("/todos/:id", getTodosbyCollection)
router.post("/todos", createTodo)
router.delete("/todos/:id", deleteTodo)
router.put("/todos/:id", editTodo)

module.exports = router