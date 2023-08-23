/*Exercício escrita 1

Faça um programa que pergunte ao usuário seu nome e seu e-mail.
Em seguida, imprima no console a seguinte mensagem:

O e-mail "emailDoUsuario" foi cadastrado com sucesso. Seja bem-vinda(o), "nomeDoUsuario"!

Dica:1) concatenando as strings (com o sinal de +);
2) utilizando template strings (e envelopando a sua string com o sinal de crase `` ao invés de aspas).

let nome = prompt('Qual é seu nome')
let email = prompt('Qual é seu email')
let frase = 'O e-mail ' + email + ' foi cadastrado com sucesso. Seja bem-vinda(o), ' + nome + '.'
console.log(frase)
*/

/*Exercício escrita 2

Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável.
 Em seguida, siga os passos:
 
 1 - Imprima no console o array completo.
 
 2 - Imprima no console a mensagem "Essas são as minhas comidas preferidas" seguida por cada uma das comidas, uma embaixo da outra.
 
 3 - Desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela resposta do usuário e imprima no console a nova lista.

let lista = ['pizza','sushi','cachorro quente','churros','parmegiana']
console.log(lista)
console.log('Essas são as minhas comidas preferidas ')
console.log(lista[0])
console.log(lista[1])
console.log(lista[2])
console.log(lista[3])
console.log(lista[4])
let comida = prompt('qual é sua comida preferida?')
lista.splice(1, 1)
lista = ['pizza', comida,' cachorro quente',' churros',' parmegiana']
console.log(lista)
*/

/*Exercício escrita 3

1 - Crie um array vazio e guarde-o em uma variável, chamada "listaDeTarefas".
 
2 - Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array.

3 - Imprima o array no console.

4 - Peça ao usuário que digite o índice de uma tarefa que ele já realizou: 0, 1 ou 2.

5 - Remova da lista o item de índice que o usuário escolheu.

6 - Imprima o array no console

Dica: Para remover um item de um array, você pode utilizar a função splice! Caso não se lembre como ela funciona, não tem nenhum problema, uma breve pesquisa no Google te trará vários exemplos.

let listaDeTarefas = []
prompt('Vamos perguntar 3 tarefas que você precise realizar no dia? ok.')
let tarefas1 = prompt('Primeira tarefa')
let tarefas2 = prompt('Segunda tarefa')
let tarefas3 = prompt('Terceira tarefa')
listaDeTarefas.push(tarefas1, tarefas2, tarefas3)
console.log(listaDeTarefas)
let indice = Number(prompt('Digite o indice da tarefa realizada(0, 1 ou 2).'))
listaDeTarefas.splice(indice, 1)
console.log(listaDeTarefas)
*/

/*Exercício interpretação 1

Indique todas as mensagens impressas no console, sem executar o programa

let array
console.log('a. ', array)

array = null
console.log('b. ', array)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

let i = 0
console.log('d. ', array[i])

array[i+1] = 19
console.log('e. ', array)

const valor = array[i+6]
console.log('f. ', valor)

a. undefined
b. null
c. 11
d. 3
e. (11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f. 9
*/

/*Exercício interpretação 2

Leia o código abaixo com atenção

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

// Qual será o valor impresso no console se a entrada do usuário for "Subi num ônibus em Marrocos"?


//SUBI NUM ÔNIBUS EM MIRROCOS 27.
*/