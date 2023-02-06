const db = require('../util/db')

/**
 * 
 * @returns {Promise} Promise object represents an array of tasks
 */
exports.getTodosbyCollection = (id) => {
  return db.execute("SELECT t.* FROM tasks t INNER JOIN collections c ON t.collection_id = c.id WHERE t.collection_id = ?", [id])
}

/**
 * 
 * @param {*} todo 
 * @returns a promise object represents the result of the query
 */
exports.createTodo = (todo) => {
  return db.execute("INSERT INTO tasks (title, date, collection_id) VALUES (?, ?, ?)", [todo.title, todo.date, todo.collection_id])
}

/**
 * 
 * @param {*} todo 
 * @returns a promise object represents the result of the query
 */
exports.editTodo = (id, todo) => {
  return db.execute("UPDATE tasks SET title = ?, date = ?, completed = ?, collection_id = ? WHERE id = ?", [todo.title, todo.date, todo.completed, todo.collection_id, id])
}

/**
 * 
 * @param {*} id 
 * @returns 
 */

exports.deleteTodo = (id) => {
  return db.execute("DELETE FROM tasks WHERE id = ?", [id])
}