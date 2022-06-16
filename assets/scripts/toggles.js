//Animação para a tela de adicionar tarefa aparecer no mobile -----------------------
let btnToScreenAdd = document.querySelector('.btnMobile-addtask');
let screenAddTasks = document.querySelector('.createTasks-mobile');

btnToScreenAdd.addEventListener('click', () => {
  screenAddTasks.classList.toggle('active');
});

function createTaskMobile() {
  screenAddTasks.classList.toggle('active');
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
    btnCreate.innerHTML = 'Cancelar';
  } else {
    inputTag.style.display = 'none';
    btnSave.style.display = 'none';
    btnCreate.innerHTML = '+ adicionar nova tag';
  }
}
