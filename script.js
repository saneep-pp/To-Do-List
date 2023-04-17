const task = document.getElementById("task");
const listItem = document.querySelector(".lists");

addList = () => {
  if (task.value === "") {
    alert("Task should not Empty...!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = task.value;
    listItem.appendChild(li);
    task.value = "";
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  saveData();
};

task.addEventListener("keyup", function (event) {
  // console.log(event.keyCode);
  if (event.keyCode === 13) {
    event.preventDefault();

    addList();
  }
});

listItem.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }
  saveData();
});

function saveData() {
  localStorage.setItem("data", listItem.innerHTML);
}

function getData() {
  listItem.innerHTML = localStorage.getItem("data");
}

getData();
