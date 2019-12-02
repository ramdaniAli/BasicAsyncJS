const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  var toDo = prompt("please enter something");
  if (toDo !== "") {
    const elementAdded = document.createElement('li');
    elementAdded.innerHTML = "+ " + toDo + " .";
    list.appendChild(elementAdded);
    var count = itemCountSpan.textContent ;
    var newCount = parseInt(count) + 1 ; 
    itemCountSpan.textContent = newCount ; 
  }else if (toDo === ""){
    console.log("bom bom bom");
    var countUn = uncheckedCountSpan.textContent;
    var newUnCount = parseInt(countUn) + 1 ;
    uncheckedCountSpan.textContent = newUnCount;
  }

}

