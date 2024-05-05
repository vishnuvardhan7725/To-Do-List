function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    var taskText = taskInput.value;
  
    if (taskText.trim() !== "") {
      var li = document.createElement("li");
      li.textContent = taskText;
  
      var editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.onclick = function() {
        var newText = prompt("Edit task:", taskText);
        if (newText !== null && newText.trim() !== "") {
          taskText = newText;
          li.textContent = taskText;
        }
      };
  
      var deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.onclick = function() {
        taskList.removeChild(li);
      };
  
      var completeButton = document.createElement("button");
      completeButton.textContent = "Mark as Completed";
      completeButton.onclick = function() {
        li.classList.toggle("completed");
      };
  
      li.appendChild(editButton);
      li.appendChild(deleteButton);
      li.appendChild(completeButton);
      taskList.appendChild(li);
  
      taskInput.value = "";
    }
  }