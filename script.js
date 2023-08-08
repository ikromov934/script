const elForm = document.querySelector("#form");
const elInput = document.querySelector("#input");
const elInputDate = document.querySelector("#inputdata");
const elItem = document.querySelector("#item");

const list = [];

function loader(array, parent) {
  for (let i = 0; i < array.length; i++) {
    const newToDo = document.createElement("div");
    newToDo.className = "todoItem";
    newToDo.innerHTML = `
     <h1 class="title">${array[i].title}</h1>
     <p class="date">${array[i].date}</p>
     `;
    parent.appendChild(newToDo);
  }
}
loader(list, elItem);

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  if (elInput.value && elInputDate.value !== "") {
    elItem.innerHTML = "";

    const newTodoList = {
      id: elInputDate.value,
      title: elInput.value,
      date: elInputDate.value,
      isDone: false,
    };
    list.push(newTodoList);

    loader(list, elItem);
    elForm.reset();
  } else {
    alert("Error 404");
  }
});
