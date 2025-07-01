const input = document.querySelector("input")
const taskSection = document.querySelector(".task-section")
const msg = document.querySelector(".msg")
const taskArr = []

input.nextElementSibling.addEventListener("click", (e) => {
  addTODOList(e);
})

// make addTODOlist function
const addTODOList = (e) => {
  e.preventDefault();
  if (input.value.trim() == "") {
    msg.textContent = "plz add a task"
    msg.style.color = "red"
    msg.style.textAlign = "center"
    msg.style.marginBottom = "1rem"
  } else {
    if (taskArr.includes(input.value)) {
      msg.textContent = "plz do not add same task"
      msg.style.color = "red"
      msg.style.textAlign = "center"
      msg.style.marginBottom = "1rem"
      input.value = ""
    } else {

      msg.textContent = ""
      // create a taskElement and make child of taskSection
      let taskElement = document.createElement("div")
      taskElement.classList.add("task-element")
      taskSection.appendChild(taskElement)

      // create a checkElment and make child of taskElement;
      let checkElement = document.createElement("div")
      checkElement.classList.add("check")
      taskElement.appendChild(checkElement)

      // create a task and make child of taskElement;
      let task = document.createElement("p")
      task.classList.add("task")
      task.textContent = input.value
      taskElement.appendChild(task)
      taskArr.push(input.value)
      input.value = ""

      taskElement.firstChild.addEventListener("click", () => {
        // taskArr.shift(taskElement.lastElementChild.innerHTML)

        taskElement.firstChild.style.border = "2px solid green"
        taskElement.lastChild.style.color = "green"
        taskElement.lastChild.style.textDecoration = "line-through"
        taskElement.style.backgroundColor = "rgba(0, 128, 0, 0.264)"
        setTimeout(() => {
          taskElement.style.display = "none"
        }, 500);

      })
    }
  }
}

