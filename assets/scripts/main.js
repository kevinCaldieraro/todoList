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
    selectTagDesktop.innerHTML +=
      '<option value = ' + inputTag.value + '>' + inputTag.value + '</option>';
    selectTagMobile.innerHTML +=
      '<option value = ' + inputTag.value + '>' + inputTag.value + '</option>';

    inputTag.value = '';
    toggleInputTag(type);
    alert('Tag criada');
  } else {
    alert('Para criar uma nova tag é necessário preencher o campo de texto!');
  }
}
