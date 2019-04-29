const taskList = document.querySelector('.tasks__list');
const button = document.querySelector('.tasks__add');
const input = document.querySelector('.tasks__input');
const pressDelete = document.querySelectorAll('.task__remove');

button.addEventListener('click', addTask);

function addTask(event) {
	event.preventDefault();
	const value = input.value;
	if(value === '') {
        return
    }
		else {item(value);
		input.value = '';
	}
	deleteTask();
}


function deleteTask(){
	for(let item of pressDelete) {
		item.addEventListener('click', (event) => {
			event.preventDefault();
			const parent = event.target.parentNode;
			parent.style.display = 'none';
		});
	}
}



function item(text) {
	taskList.innerHTML += `<div class="task">
				              <div class="task__title">
				                ${text}
				              </div>
				              <a href="#" class="task__remove">&times;</a>
				            </div>`;

	deleteTask();
}