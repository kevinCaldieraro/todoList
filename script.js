var tasks = [];
var tags = [];

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

//Mostrar ou esconder no desktop ---------------
function show_hideInputTag_desktop () {
    if (inputGetTagDesk.style.display == 'none') {
        inputGetTagDesk.style.display = 'block';
        btnSaveTagDesk.style.display = 'block';
        btnCreateTagDesk.innerHTML = "Cancelar"
    } else{
        inputGetTagDesk.style.display = 'none';
        btnSaveTagDesk.style.display = 'none';
        btnCreateTagDesk.innerHTML = "+ adicionar nova tag"
    }
}

//Mostrar ou esconder no mobile ---------------
function show_hideInputTag_mobile () {
    if (inputGetTagMobile.style.display == 'none') {
        inputGetTagMobile.style.display = 'block';
        btnSaveTagMobile.style.display = 'block';
        btnCreateTagMobile.innerHTML = "Cancelar"
    } else{
        inputGetTagMobile.style.display = 'none';
        btnSaveTagMobile.style.display = 'none';
        btnCreateTagMobile.innerHTML = "+ adicionar nova tag"
    }
}

//Função para fazer o botão .saveTag pegar o valor da nova tag e implementar no select ----------------
let selectTagDesktop = document.getElementById('tagSelect-desktop');
let selectTagMobile = document.getElementById('tagSelect-mobile');

//No desktop ------------------------------------------
function saveTagDesktop () {
    if (inputGetTagDesk.value != '') {
        selectTagDesktop.innerHTML += '<option value = '+inputGetTagDesk.value+'>'+inputGetTagDesk.value+'</option>';
        inputGetTagDesk.value = '';
        show_hideInputTag_desktop ();
        alert('Tag criada');
    } else {
        alert('Para criar uma nova tag é necessário preencher o campo de texto!');
    }
}

//No mobile --------------------------------------------
function saveTagMobile () {
    if (inputGetTagMobile.value != '') {
        selectTagMobile.innerHTML += '<option value = '+inputGetTagMobile.value+'>'+inputGetTagMobile.value+'</option>';
        inputGetTagMobile.value = '';
        show_hideInputTag_mobile ();
        alert('Tag criada');
    } else {
        alert('Para criar uma nova tag é necessário preencher o campo de texto!');
    }
}
