// Filter sempre retornará um array, com a mesma quantidade de elementos ou menos
// Parametros da função = valor, indice, array

// Retornar numeros maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosFiltrados = numeros.filter(x => x > 10);

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos 
// Retorne as pessoas cujo nome termina com a 

const pessoas = [
  {nome: 'Luiz', idade: 62},
  {nome: 'Maria', idade: 23},
  {nome: 'Eduardo', idade: 55},
  {nome: 'Letícia', idade: 19},
  {nome: 'Rosana', idade: 32},
  {nome: 'Wallace', idade: 47},
];

const pessoasNomeGrande = pessoas.filter(x => x.nome.length >= 5);
const pessoasMaisDe50Anos = pessoas.filter(x => x.idade > 50);
const pessoasTerminamComA = pessoas.filter(x => x.nome.toLowerCase().endsWith('a'));

// Função maior do map é mudar os valores do array, retorna outro com ao mesmo tamanho
// Parametros da função = valor, indice, array

// Retornar números dobrados
const numerosMap = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const dobra = numerosMap.map(x => x * 2);

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto

const pessoasMap = [
  {nome: 'Luiz', idade: 62},
  {nome: 'Maria', idade: 23},
  {nome: 'Eduardo', idade: 55},
  {nome: 'Letícia', idade: 19},
  {nome: 'Rosana', idade: 32},
  {nome: 'Wallace', idade: 47},
];

const nomes = pessoasMap.map(obj => obj.nome);
const idades = pessoasMap.map(obj => ({ idade: obj.idade }));

// Fazendo de um jeito que nao altere o array original
// Usar obj.id caso queira alterar
const comIds = pessoas.map(function(obj, indice) {
  const novoObj = { ...obj };
  novoObj.id = indice + 1;
  return novoObj;
}); 

// Usando obj.id:
pessoas.map(obj => obj.id = parseInt(Math.random() * 10 + 1));

// Reduce - geralmente usado para reduzir o array a um elemento
// Parametros da função = acumulador, valor, indice, array
// Acumulador automatico = primeiro elemeneto do array, passar no final da função o valor do acumulador desejado

const numerosReduce = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Some todos os números
const total = numerosReduce.reduce(function(soma, x) {
  return soma += x;
}, 0);

// Retorne a pessoa mais velha 

const pessoasReduce = [
  {nome: 'Luiz', idade: 62},
  {nome: 'Maria', idade: 23},
  {nome: 'Eduardo', idade: 55},
  {nome: 'Letícia', idade: 19},
  {nome: 'Rosana', idade: 64},
  {nome: 'Wallace', idade: 63},
];

const maisVelha = pessoasReduce.reduce(function(acumulador, valor) {
  if (acumulador.idade > valor.idade) return acumulador;
  return valor;
});

// Unindo todos - filter, map e reduce

// Retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar os valores
// -> Somar tudo

const numeros2 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const somaDobroPares = numeros2
.filter(x => x % 2 === 0)
.map(x => x * 2)
.reduce((acumulador, valor) => acumulador += valor, 0);

console.log(somaDobroPares);