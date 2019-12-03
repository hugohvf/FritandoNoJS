var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

function lista(){
    listElement.innerHTML = '';
    
    for(repo of repos){
    var reposElement = document.createElement('li');
    var reposText = document.createTextNode(repo.name);
    reposElement.appendChild(reposText);

    listElement.appendChild(reposElement);
    }
}

function notfound(){
    listElement.innerHTML = '';
    var notfoundElement = document.createElement('ol');
    var negrito = document.createElement('b');
    var notfoundText = document.createTextNode("Usuário não encontrado");
    negrito.appendChild(notfoundText);
    notfoundElement.appendChild(negrito);
    listElement.appendChild(notfoundElement);
}

function semrepos(){
    listElement.innerHTML = '';
    var nullElement = document.createElement('ol');
    var negrito = document.createElement('b');
    var nullText = document.createTextNode("Usuário não possui repositório");
    negrito.appendChild(nullText);
    nullElement.appendChild(negrito);
    listElement.appendChild(nullElement);
}

function buscar(){
    var user =  inputElement.value;
    axios.get('https://api.github.com/users/' + user + '/repos')
    .then(function(response) {
        repos = response.data;
        if (repos.length == 0){
        semrepos();
        } else{
        lista(repos);
        }
    })
    .catch(function(error) {
        notfound();
    })
    listElement.innerHTML = '';
    var waitElement = document.createElement('ol');
    var carregando = document.createTextNode("Carregando...");
    waitElement.appendChild(carregando);
    listElement.appendChild(waitElement);

}

buttonElement.onclick = buscar;