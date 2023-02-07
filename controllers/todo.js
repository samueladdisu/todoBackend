const { getTodosbyCollection, createTodo, editTodo, deleteTodo } = require("../models/todo")
/**
 * @route GET /api/todos
 * @param {Request} req
 * @param {Response} res
 */

exports.getTodosbyCollection = (req, res) => {
  if (!req.params.id) {
    console.log("collection_id is required")
    return res.status(400).json({ error: "collection_id is required" })
  }
  const collection_id = req.params.id

  getTodosbyCollection(collection_id)
    .then(([rows]) => res.json(rows))
    .catch(err => res.json(err))
}

/**
 * @route POST /api/todos
 * @param {Request} req
 * @param {Response} res
 * @returns
 */
exports.createTodo = (req, res) => {
  const todo = req.body
  if (!todo.title || !todo.date || !todo.collection_id) {
    console.log("todo is required")
    return res.status(400).json({ error: "Todo is required" })
  }
  createTodo(todo)
    .then(result => res.json(result))
    .catch(err => res.json(err))
}

/**
 * @route PUT /api/todos/:id
 * @param {Request} req
 * @param {Response} res
 * @returns 
 */

exports.editTodo = (req, res) => {
  const id = req.params.id
  const todo = req.body
  if (!todo.title || !todo.date || !todo.collection_id || !id || !todo.completed) {
    console.log("todo is required")
    return res.status(400).json({ error: "Todo is required" })
  }
  editTodo(id, todo)
    .then(result => res.json(result))
    .catch(err => res.json(err))
}

/**
 * @route DELETE /api/todos/:id
 * @param {Request} req
 * @param {Response} res
 * @returns
 */
exports.deleteTodo = (req, res) => {
  const id = req.params.id
  deleteTodo(id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
}