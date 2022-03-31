'use strict'

const root = document.getElementById('root');

const bigWrapper = document.createElement('div');
bigWrapper.classList.add('container');

const wrapperRow = document.createElement('div');
wrapperRow.classList.add('container-wrapper');
const deleteAllButton = document.createElement('button');
deleteAllButton.textContent = 'Delete All';

const addToDoTextField = document.createElement('input');
addToDoTextField.placeholder = 'Enter to do';

const addToDoButton = document.createElement('button');
addToDoButton.textContent = 'Add';

wrapperRow.append(deleteAllButton, addToDoTextField, addToDoButton);
const getToDo = () => {
const toDoElement = document.createElement('div');
toDoElement.classList.add('todo-item')
const completeButton = document.createElement('button');
completeButton.classList.add('todo-item__btn-check');
completeButton.innerText = '✓';
const toDoTextElement = document.createElement('div');
toDoTextElement.classList.add('todo-item__todo-text');
toDoTextElement.innerText = 'ToDo text';
const toDoInfoArea = document.createElement('div');
toDoInfoArea.classList.add('todo-item__info-area');
const deleteButton = document.createElement('button');
deleteButton.classList.add('info-area__btn-delete');
deleteButton.innerText = '✗';
const dateField = document.createElement('div');
dateField.classList.add('info-area__date-field');
dateField.innerText = 'Data';
toDoInfoArea.append(deleteButton, dateField);
toDoElement.append(completeButton, toDoTextElement, toDoInfoArea);
return toDoElement;
}
const todos = Array(2).fill(null).map(getToDo);
bigWrapper.append(wrapperRow, ... todos);
root.append(bigWrapper);
