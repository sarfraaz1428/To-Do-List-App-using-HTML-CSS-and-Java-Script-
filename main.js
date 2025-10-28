  
  const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addTask() {
  if (inputbox.value === '') {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputbox.value;
    listcontainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);

    saveData(); // ✅ Save after adding
  }
  inputbox.value = "";
}

listcontainer.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked"); // ✅ fixed typo
    saveData(); // ✅ Save checked state
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData() {
  localStorage.setItem("data", listcontainer.innerHTML);
}

function showTask() {
  listcontainer.innerHTML = localStorage.getItem("data");
}

showTask();
