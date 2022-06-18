window.addEventListener('load', () => {
	const form = document.querySelector("#new-form");
	const input = document.querySelector("#new-input");
	const taskElement = document.querySelector(".task");

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const task = input.value;

		const taskElements = document.createElement('div');
		taskElements.classList.add('tasks');

		const taskContentElements = document.createElement('div');
		taskContentElements.classList.add('content');

		taskElements.appendChild(taskContentElements);

		const taskInputElements = document.createElement('input');
		taskInputElements.setAttribute('id', 'text');
		taskInputElements.type = 'text';
		taskInputElements.value = task;
		taskInputElements.setAttribute('readonly', 'readonly');

		taskContentElements.appendChild(taskInputElements);

		const taskActionElements = document.createElement('div');
		taskActionElements.classList.add('actions');
		
		const taskEditElement = document.createElement('button');
		taskEditElement.classList.add('edit');
		taskEditElement.innerText = 'Edit';

		const taskDeleteElement = document.createElement('button');
		taskDeleteElement.classList.add('delete');
		taskDeleteElement.innerText = 'Delete';

		taskActionElements.appendChild(taskEditElement);
		taskActionElements.appendChild(taskDeleteElement);

		taskElements.appendChild(taskActionElements);
		taskElement.appendChild(taskElements);

        input.value = '';

		taskEditElement.addEventListener('click', (e) => {
			if (taskEditElement.innerText.toLowerCase() == "edit") {
				taskEditElement.innerText = "Save";
				taskInputElements.removeAttribute("readonly");
				taskInputElements.focus();
			} else {
				taskEditElement.innerText = "Edit";
				taskInputElements.setAttribute("readonly", "readonly");
			}
		});

		taskDeleteElement.addEventListener('click', (e) => {
			taskElement.removeChild(taskElements);
		});
	});
});