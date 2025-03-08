const done_button = document.querySelectorAll(".done_button");
const wrong_button = document.querySelectorAll(".wrong_button");
const task_list = document.querySelector(".task-list");
const task_box = document.querySelectorAll(".task-box");
const searchbar = document.querySelector(".searchbar");
const enterbutton = document.querySelector(".enter_button");
const time = document.querySelector(".time");

function openTimePicker() {
  time.showPicker(); 
}

enterbutton.addEventListener("click", () => {
  addtaskname();
  time.value = "";
});

function addtaskname() {
  //get task from input bar
  const task_name = searchbar.value.trim();
  const time_value = time.value;
  console.log(time_value);
  if (task_name === "" || time_value === "") {
    alert("Add tasks with time");
  } else {
    //create name and task box
    const taskname = document.createElement("p");
    const taskbox = document.createElement("article");
    const wrongbutton = document.createElement("button");
    const donebutton = document.createElement("button");
    const timestamp = document.createElement("span");
    //add task into taskbox
    taskname.textContent = task_name;
    timestamp.textContent = time_value;
    //add styling
    taskname.classList.add("task-name");
    timestamp.classList.add("task-name");
    //add buttons
    wrongbutton.textContent = `🗑️`;
    wrongbutton.classList.add("delete-btn");
    donebutton.textContent = `✔️`;
    donebutton.classList.add("done-btn");

    //add task name to taskbox
    taskbox.appendChild(taskname);
    taskbox.appendChild(donebutton);
    taskbox.appendChild(wrongbutton);
    taskbox.appendChild(timestamp);
    //add styling
    taskbox.classList.add("task-box");
    //add task box to task list
    task_list.appendChild(taskbox);
    searchbar.value = "";
    // Event listener to mark task as done
    donebutton.addEventListener("click", () => {
      taskname.style.textDecoration = "line-through";
      taskname.textContent = "Task Completed";
    });
    // Event listener to remove task
    wrongbutton.addEventListener("click", () => {
      task_list.removeChild(taskbox);
    });
  }
}
