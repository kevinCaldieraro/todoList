





//Fazer o input que recebe a tag nova aparecer --------------------------------
let btnCreateTag = document.querySelectorAll('.createTag');
let inputGetTag = document.querySelectorAll('.getTag');
let btnSaveTag = document.querySelectorAll('.saveTag');

function showInputTag () {
    for(var i = 0; i < 2; i++) {
        if (inputGetTag[i].style.display == 'none') {
            inputGetTag[i].style.display = 'block';
            btnSaveTag[i].style.display = 'block';
            btnCreateTag[i].innerHTML = "Cancelar"
        } else {
            inputGetTag[i].style.display = 'none';
            btnSaveTag[i].style.display = 'none';
            btnCreateTag[i].innerHTML = "+ adicionar nova tag"
        }
    }
}
//-----------------------------------------------------------------------------






























//Animação para a tela de adicionar tarefa aparecer no mobile -----------------------
let btnToScreenAdd = document.querySelector('.btnMobile-addtask');
let screeAddTasks = document.querySelector('.createTasks-mobile');

btnToScreenAdd.addEventListener('click', () => {

    screeAddTasks.classList.toggle('active');

});

function createTaskMobile() {
    screeAddTasks.classList.toggle('active');
}
//-------------------------------------------------------------------------------------

