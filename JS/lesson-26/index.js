import {bigWrapper, wrapperRow, deleteAllButton, addTodoTextField, addTodoButton, transformedTodos} from './variables'
import {getTodo, saveTodos, createTodo, deleteAll} from './funtions'

const root = document.getElementById('root')

wrapperRow.append(deleteAllButton, addTodoTextField, addTodoButton)

let todosFromStorage = localStorage.getItem('todos');
const todosDB = todosFromStorage ? JSON.parse(todosFromStorage) : [];

window.onclick = (event) => {
  console.log('click')
  saveTodos(todosDB);
}

const transformedTodos = todosDB.map(getTodo)

bigWrapper.append(wrapperRow, ...transformedTodos)
root.append(bigWrapper)

addTodoButton.addEventListener('click', () => createTodo(todosDB))

deleteAllButton.addEventListener('click', deleteAll)
