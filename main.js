// Api
const url = 'https://jsonplaceholder.typicode.com/users';

//pegar a url
const urlSearch = new URLSearchParams(window.location.search)
const postId = urlSearch.get('id')


// Variável Const
const postPage = document.querySelector("#post");
const postContainer = document.querySelector("#post-container");
const commentsContainer = document.querySelector("#comments-container");
const commentForm = document.querySelector("#comment-form");
const emailInput = document.querySelector("#email");
const bodyInput = document.querySelector("#body");

// Pegar dados da Api
function postView() {
  fetch(url)
    .then((response) => response.json())
    .then((response) => {

      return response.map(function(res) {
        const section = document.getElementById('resapi')
        //cria tags 
        const div = document.createElement('div');
        const h3 = document.createElement('h3');
        const a = document.createElement('a')

        h3.innerHTML = `${res.name}`;
        div.classList.add('content')
        a.classList.add('btn-acess')
        a.setAttribute('href', `index-1.html?id=${res.id}`);
        a.innerHTML = 'Acesse'

        section.appendChild(div);
        div.appendChild(h3);
        h3.appendChild(a);

      });
    })
    .catch((Error) => console.log('Erro na conexão!!!'))
}

postView()
