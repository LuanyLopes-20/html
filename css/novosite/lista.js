
let contador = 0;
let Input=document.getElementById("POXA");
let btnAdd=document.getElementById("btn-add");
let main=document.getElementById('arealista');



function addTarefa()

{

 if ((valorInput!=="")&& (valorInput!==undefined) && (valorInput!==null))

{
   
    let valorInput = Input.value;
     ++contador;
  let novoItem =  `<div id="${contador}" class="item">
  <div onclick="marcarTarefa(${contador})" class="item-icone">
      <i id="item_${contador} " class="mdi mdi-circle-outline">
  
      </i>
  </div>
  <div onclick="marcarTarefa(${contador})" class="item-nome">
      ${valorInput}
  </div>
  <div class="item-botao">
      <button onclick"deletar (${contador})" class="delete"> <i class="mdi mdi-delete"> delete</i></button>
  </div>`;
  main.innerHTML += novoItem;

  Input.value="";
  Input.focus();

  
}
function deletar(id)
{
    var tarefa= document.getElementById(id);
 
   tarefa.remove();
}

function marcarTarefa(id)
{
    var item = document.getElementById(id);
    var classe= item.getAttribute('class');
    console.log(classe);
    if (classe=="item")
    {
        item.classList.add('clicado');
        var icone= document.getElementById('icone_'+ id);
        icone.classList.remove('mdi-circle-outline');
        icone.classList.add('mdi-check-circle');
    } else
    {
        item.classList.remove('clicado');
        var icone= document.getElementById('icone_'+ id);
        icone.classList.remove('mdi-check-circle');
        icone.classList.add('mdi-circle-outline');
    }
}




Input.addEventListener("keyup", function (event)
{
    if(event.keyCode===13){
        event.preventDefault();
        btnAdd.click();
    }
})
}
