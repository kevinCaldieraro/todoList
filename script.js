let tasks = [];
let tags = [];
let myStorage = window.localStorage;

loadTags();

//Animação para a tela de adicionar tarefa aparecer no mobile -----------------------
let btnToScreenAdd = document.querySelector('.btnMobile-addtask');
let screeAddTasks = document.querySelector('.createTasks-mobile');

btnToScreenAdd.addEventListener('click', () => {

    screeAddTasks.classList.toggle('active');

});

function createTaskMobile() {
    screeAddTasks.classList.toggle('active');
}
// ----------------------------------------------------------------------------------

//Fazer o input que recebe a tag nova aparecer --------------------------------
let btnCreateTagDesk = document.getElementById('createTag-desktop');
let inputGetTagDesk = document.getElementById('getTag-desktop');
let btnSaveTagDesk = document.getElementById('saveTag-desktop');

let btnCreateTagMobile = document.getElementById('createTag-mobile');
let inputGetTagMobile = document.getElementById('getTag-mobile');
let btnSaveTagMobile = document.getElementById('saveTag-mobile');

let inputTag;

// Mostrar/Esconder
function toggleInputTag(type) {
    let btnSave;
    let btnCreate;

    if (type === 'desktop') {
        btnSave = btnSaveTagDesk;
        btnCreate = btnCreateTagDesk;
        inputTag = inputGetTagDesk;

    } else {
        btnSave = btnSaveTagMobile;
        btnCreate = btnCreateTagMobile;
        inputTag = inputGetTagMobile;
    }

    if (inputTag.style.display == 'none') {
        inputTag.style.display = 'block';
        btnSave.style.display = 'block';
        btnCreate.innerHTML = "Cancelar"
    } else {
        inputTag.style.display = 'none';
        btnSave.style.display = 'none';
        btnCreate.innerHTML = "+ adicionar nova tag"
    }
}

//Função para fazer o botão saveTag pegar o valor da nova tag e implementar no select ----------------
let selectTagDesktop = document.getElementById('tagSelect-desktop');
let selectTagMobile = document.getElementById('tagSelect-mobile');

function saveTag(type) {

    if (type === 'desktop') {
        inputTag = inputGetTagDesk;
    } else {
        inputTag = inputGetTagMobile;
    }

    if (inputTag.value != '') {
        selectTagDesktop.innerHTML += '<option value = ' + inputTag.value + '>' + inputTag.value + '</option>';
        selectTagMobile.innerHTML += '<option value = ' + inputTag.value + '>' + inputTag.value + '</option>';

        tags.push(inputTag.value);
        myStorage.setItem('savedTags', JSON.stringify(tags));

        inputTag.value = '';
        toggleInputTag(type);
        alert('Tag criada');
    } else {
        alert('Para criar uma nova tag é necessário preencher o campo de texto!');
    }
}

function loadTags () {
    
    tags = JSON.parse(myStorage.getItem('savedTags'));

    if (tags) {
        console.log(tags);
    }
}