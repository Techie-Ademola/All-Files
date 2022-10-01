const todoInput = document.querySelector('#todoInput');
const todoOutput = document.querySelector('#todoOutput');
const submitButton = document.querySelector('#submitBtn');


const todoList = [];

checkList()

// add event listener to button
submitButton.addEventListener('click', event => {
    event.preventDefault()
    if (todoInput.value === '') {
        alert('Please enter a value');
    } else {
        todoList.push(todoInput.value);
        todoInput.value = '';
        todoOutput.innerHTML = '';
        todoList.forEach((item, index) => {
            todoOutput.innerHTML += `<li><p>${item}</p><button data-remove="${index}" class="remove"><i class="fa fa-close"></i></button></li>`;
        });
        addEvent()
    }
});

function addEvent() {
    const removeBtn = document.querySelectorAll('.remove');
    removeBtn.forEach(btn => {
        btn.addEventListener('click', event => {
            const index = event.target.dataset.remove;
            todoList.splice(index, 1);
            todoOutput.innerHTML = '';
            todoList.forEach((item, index) => {
                todoOutput.innerHTML += `<li><p>${item}</p><button data-remove="${index}" class="remove" ><i class="fa fa-close"></i></button></li>`;
            });
            addEvent()
        })
    })

    checkList()
}

function checkList() {
    if (todoList.length === 0) {
        todoOutput.innerHTML = '<p class="emptyMessage">No items in list</p>'
    }
}