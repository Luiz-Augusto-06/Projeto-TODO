/*Consts*/
const tasks = document.querySelectorAll('.task')
const cards = document.querySelectorAll('.card')
const input = document.querySelector('input');
const main = document.querySelector('.main');
const ul = document.querySelector('#invitedList');
const form = document.querySelector('#card_form');
const postContainer = document.querySelector("#post-container");

//para facilitar o uso de Url
const urlSearch = new URLSearchParams(window.location.search)
const postId = urlSearch.get('id')

//api
const url = 'https://jsonplaceholder.typicode.com/users';

async function idNames(id){
  const [responsePost] = await Promise.all([
    fetch(`${url}/${id}`)
  ]);
  const dataPost = await responsePost.json();

  const title = document.createElement("h3");
  title.innerText = dataPost.name;
  postContainer.appendChild(title);
 
}

idNames(postId)


/*Modal*/
/*Const*/
const btns = document.querySelectorAll("[data-target-modal]");
const close_modals = document.querySelectorAll(".close-modal");
const overlay = document.getElementById("overlay");

/*Settings Modal*/
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(btn.dataset.targetModal).classList.add("active");
    overlay.classList.add("active");
  });
});

/*modal*/
window.onclick = (event) => {
  if (event.target == overlay) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => modal.classList.remove("active"));
   overlay.classList.remove("active");
  }
};

/* Button Close Modal*/
close_modals.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const modal = btn.closest(".modal");
    modal.classList.remove("active");
    overlay.classList.remove("active");
    e.preventDefault();
  });
});

/*Const*/
const todo_submit = document.getElementById("todo_submit");
todo_submit.addEventListener("click", createTodo);

/*function ao clicar em adicionar tarefa*/
function createTodo() {
  /*Const*/
  const todo_div = document.createElement("div");
  const input_val = document.getElementById("todo_input").value;
  const txt = document.createTextNode(input_val);
   const label = document.createElement('label');
   label.textContent = 'Tarefa Concluída ';
   const checkbox = document.createElement('input');
   checkbox.type = 'checkbox';

  todo_div.classList.add("task");
  todo_div.setAttribute("draggable", "true");
  
  /*Const*/
  const li = document.createElement('li');
  const span = document.createElement('span');
  const editBtn = document.createElement('button');
  const spant = document.createElement('span');
  const removeBtn = document.createElement('button');
  
  
  /*Montar e adiciona tags dentro de tags*/
  removeBtn.textContent = 'Excluir';
  editBtn.textContent = 'Editar';
  span.classList.add('result');
  label.classList.add('check-confirm');
  

  span.appendChild(txt);

  li.appendChild(span);
  li.appendChild(editBtn);
  li.appendChild(removeBtn);
  li.appendChild(label);
  label.appendChild(checkbox);
  ul.appendChild(li);
  
  todo_div.appendChild(ul);

  event.preventDefault();

  no_status.appendChild(todo_div);
  span.addEventListener("click", () => {
    span.parentElement.style.display = "none";
  });
  
  
  /*Faz que o Modal seja iniciado com vazio*/
  document.getElementById("todo_input").value = "";
    card_form.classList.remove("active");
   overlay.classList.remove("active");
  }

//fechar modal 
const close_btns = document.querySelectorAll(".close");
  close_btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.style.display = "none";
 });

});

/*Button Edit e Remove */
  ul.addEventListener('click', (event) => {
  if(event.target.tagName === 'BUTTON') {
    const button = event.target;
    const li = button.parentNode;
    const ul = li.parentNode;
    if(button.textContent === 'Excluir') {
      ul.removeChild(li);
    } else if(button.textContent === 'Editar') {
      const span = li.firstElementChild;
      const input = document.createElement('input');
      input.type = 'text';
      input.value = span.textContent;
      li.insertBefore(input, span);
      li.removeChild(span);
      button.textContent = 'Salvar';
    } else if(button.textContent === 'Salvar') {
      const input = li.firstElementChild;
      const span = document.createElement('span');
      span.textContent = input.value;
      li.insertBefore(span, input);
      li.removeChild(input);
      button.textContent = 'Editar';
    } 
  }
});

// Selecionar as tarefas 
ul.addEventListener('change', (event) => {
  const checkbox = event.target;
  const checked = checkbox.checked;
  const li = checkbox.parentNode.parentNode;
  if(checked) {
    li.className = 'responded';
  } else {
    li.className = '';
  }
});

