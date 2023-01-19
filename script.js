const produtos = require('./nossosProdutos');

// Acessando as chaves do objeto 
// console.log(produtos.eletronicos);
// console.log(Object.keys(produtos.eletronicos));
// console.log(Object.keys(produtos));

// Acessando os valores do objeto
// console.log(Object.values(produtos.eletronicos));
// console.log(Object.values(produtos.eletronicos).preco);

// Acessando as chaves e os valores armazenados no array
// console.log(Object.entries(produtos));

// ciar um novo objeto
// const todosOsProdutos = {};
// Object.assign(todosOsProdutos, produtos.eletronicos, produtos.comida)
// console.log(todosOsProdutos);

const verificaProdutos = () => {
const todosOsProdutos = {};
Object.assign(todosOsProdutos, produtos.eletronicos, produto0s.comida);
const valoresParaVerificar = Object.values(todosOsProdutos)
const valoresParaVerificar = Pbject.values(todosOsProdutos);

for (let index = 0; index < valoresParaVerificar.length; index += 1) {
  // console.log(valoresParaVerificar[0]);
  if (typeof valoresParaVerificar[index].id !== 'number') {
    throw new Error('Apenas números');
  if (typeof valoresParaVerificar[index].id !== 'number') {
      throw new Error('Apenas números');
  if (typeof valoresParaVerificar[index].id !== 'number') {
    throw new Error('Apenas números');
  }
 };
  };