// Function to allow dropping of elements
// Prevents the default behavior of not allowing dropping
const allowDrop = (ev) => {
  ev.preventDefault();
}

// Function to handle dragging of elements
// Sets the data transfer object with the id of the dragged element
const drag = (ev) => {
  ev.dataTransfer.setData('text', ev.target.id);
}

// Function to handle dropping of elements
// Gets the id of the dragged element from the data transfer object
// Adds or removes the 'dragged' class depending on the target container
// Appends the dragged element to the target container
const drop = (ev) => {
  ev.preventDefault();
  let data = ev.dataTransfer.getData('text');
  let element = document.getElementById(data);
  if (ev.target.id === 'container1' || ev.target.id === 'container2') {
    if (ev.target.id === 'container2') {
      element.classList.add('dragged');
      let successMessageElement =
        document.getElementById('successMessage');
      successMessageElement.textContent = 'Item dropped successfully!';
      setTimeout(() => {
        successMessageElement.textContent = '';
      }, 1000);
    } else {
      element.classList.remove('dragged');
      document.getElementById('successMessage').textContent = '';
    }
    ev.target.appendChild(element);
  }
}

// Function to reset the draggable elements to their original positions
// Moves all elements from container2 back to container1
// Removes the 'dragged' class from all elements
const reset = () => {
  let [container1, container2] = [document.getElementById('container1'), document.getElementById('container2')];
  while (container2.firstChild) {
    container1.appendChild(container2.firstChild);
  }
  let draggableElements = document.querySelectorAll('.draggable');
  draggableElements.forEach((element) => {
    element.classList.remove('dragged');
  });
}
