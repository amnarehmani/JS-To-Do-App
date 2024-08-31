
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if(taskInput.value.trim() !== ""){
      let li = document.createElement("li");
      li.textContent = taskInput.value

      let deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.className = "delete-btn";
      deleteBtn.onclick = function(){
        this.parentElement.remove()
      }

      li.appendChild(deleteBtn)
      taskList.appendChild(li)

      taskInput.value = "";

    }
}

