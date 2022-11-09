document.getElementById("texto").innerHTML="meu primeiro texto javascript <b>js</br>";
console.log("menino");
function minhadubcao(){document.write(5+5)};
console.log(5+5);
//coments
/*variáveis
var - pode ter mais de um valor
let- torna a variável única
const - nunca vai mudar
*/
var nome, sobrenome, nomeCompleto;
nome="Dimitri"
sobrenome="teixeira"
nomecompleto=nome+""+sobrenome;
document.getElementById("texto").innerHTML=nomeCompleto;

var x=10
{var x=2;}
document.getElementById("texto").innerHTML=x;

let x=10
document.getElementById("texto").innerHTML=x;

//operadores + / * = -- ++ += && || etc..

var valor1, valor2,valor3;
valolr1= 5;
valor2=2;
total=valor1+valor2;
total=valor++
valor1+=valor2;
valor1/=valor2
total=(valor1==valor2); //true (verdadeiro) ou false (falso)
total=(valor1===valor2);//valor  etipo
total=(valor1!=valor2);//diferente
total=(valor1<4);
alert(total);

var idade, eleitor;
idade=18;
eleitor= (idade<18) ? "nao eleitor": "sim, eleitor";
eleitor= !(idade===18) ? "nao eleitor": "sim, eleitor"; //negação
alert('a resposta é: ' +eleitor);

function soma (valolr1,vaalor2)
{return valolr1+vaalor2;}
document.getElementById("texto").innerHTML=soma(10,23)

function realparadolar(real, cotaçãododolar)
{return realparadolar*cotaçãododolar;}
var total = realparadolar(valorreal, cotação);

function alertahello () {alert ("olá pessoal");}

function paraCelsius (valorFarenheint){return (5/9) *(valorfarenheint-32);}
var x = paraCelsius(77)

alert("a temperatura é de "+ x +"graus celsius");

const carro= {marca: "ford", 
modelo: "ka", 
ano:2015, 
placa:"abc-1234",
buzina: function() {alert("biiii");},

completo: function()
{ return "a marca é "+this.marca+" e o modelo é: "+this.modelo; }};

console.log(carro.ano)
console.log(carro["marca"])
console.log(carro.completo());

const lista= ["arroz","feijão", "macarrão", "leite"];

let x=lista[3];
 
alert(lista.length);

alert(lista[lista.length -1]); //mosrtra o último item da lista
lista.push("brasileira")// ou :
lista [3]="linda"

console.log(lista);
//quer saber se é realmente um array?
alert(Array.isArray(x));
//eventos
document.getElementById("teste").innerHTML=lista.join("-");
// join junta todas as conteudos do array
lista.shift(); //remove o primeiro item da sua lista, os índices [0] são alterados
lista.unshift("bonitão"); //substitui o primeiro item da lista
lista.splice(1,0 ,"item adicionado 1"); //adiciona novos itens{1(posicao),0{quantos removem}}
const lista1 =["arros", "feijao","leite"];
const lista2 =["arros", "feijao","leite"];
const superlista =[lista1.concat(lista2)];
document.getElementById("teste").innerHTML=superlista;

const listaemordem=lista.sort();
listaemordem.reverse();
const numero=[40,60,20,70];
numero.sort(function(a,b){return b-a});



