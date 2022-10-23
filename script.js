
//EXERCÍCIO 1 - CRIAÇÃO DO OBJETO ESTUDANTE

const estudante = {
    nome: 'Renan',
    sobrenome: 'Paiva',
    matricula: 747577, 
    notasSemestre: [7, 9.5, 8]
}
 
console.log('Objeto Estudante',  estudante);

// Adicionando uma nova propriedade ao objeto estudante

estudante.modulo = 'HTML Semântico'

console.log('Objeto estudante com módulo', estudante);

// Imprimindo informações do objeto estudante

console.log('Nome da pessoa estudante:', estudante.nome);

console.log('Segunda nota do semestre:', estudante.notasSemestre[1]);

console.log('Módulo atual:', estudante.modulo);

// Fazendo cópia do objeto estudante

const copiaEstudante = {...estudante}
console.log('Cópia do objeto estudante:', copiaEstudante);

// Alterando o valor da propriedade nome

copiaEstudante.nome = 'Astrodev'
console.log('Cópia com nome alterado:', copiaEstudante);

// Adicionando a nota 9 às notas do semestre

//copiaEstudante.notasSemestre.push(9)
copiaEstudante.notasSemestre = [...copiaEstudante.notasSemestre, 9] //Essa cópia da copiaEstudante foi necessária para que o exercício 'Criação do array estudantesLabenu' pudesse mostrar no console o objeto estudante sem a nota 9 e o objeto copiaEstudante com a nota 9.
console.log('Cópia com nova nota adicionada:', copiaEstudante);

// Alterando o valor da propriedade módulo

copiaEstudante.modulo = 'Flexbox e Grid'
console.log('Cópia com módulo alterado:', copiaEstudante);

//Criação do array de objetos estudantesLabenu

const estudantesLabenu = [] //O colchete informa ao JavaScript que estamos falando sobre um array, sobre uma lista
estudantesLabenu.push(estudante)
estudantesLabenu.push(copiaEstudante)

console.log('Array de Estudantes da Labenu:', estudantesLabenu);

//EXERCÍCIO DE FIXAÇÃO 

 /*1. Crie um objeto carrinho. Este objeto vai guardar nossas compras. O objeto carrinho deve guardar: 
 - O nome da pessoa que faz as compras;
 - Sua forma de pagamento;
 - Seu endereço.*/

const carrinho = {
    nomeComprador: 'Ciro',
    formaPagamento: 'Pix',
    EnderecoComprador: 'Avenida Marechal Rondon, 540 - Aldeota - Fortaleza'
}

/*2. Adicione ao objeto carrinho um array de objetos chamado "compras" para guardar as compras. Cada compra deve possuir: 
 - O nome do produto;
 - O preço do produto;
 - A quantidade de unidades deste produto que serão compradas;
Imprima a quantidade de compras que existem no carrinho.*/

carrinho.compras = [{
    nome: 'arroz',
    preco: 10,
    quantidade: 3
}, {
    nome: 'feijão',
    preco: 7,
    quantidade: 10
}, {
    nome: 'nescau',
    preco: 9,
    quantidade: 1
}, {
    nome: 'miojo',
    preco: 2.50,
    quantidade: 3
}]

console.log('Carrinho', carrinho);

/*3. Crie uma cópia do objeto, chamada "carrinhoPresente", que seja igual ao carrinho original, mas com o nome da pessoa alterado para o nome de uma pessoa que você gosta, e a forma de pagamento alterada para cartão presente.*/

const carrinhoPresente = {...carrinho}

console.log('Carrinho de Presente', carrinhoPresente);

carrinhoPresente.nomeComprador = 'Fernando'
carrinhoPresente.formaPagamento = 'Cartão-presente'

console.log('Carrinho de presente alterado', carrinhoPresente);

// Mostrando o segundo item da lista de compras
console.log('Segundo item da lista de compras', carrinhoPresente.compras[1]);



