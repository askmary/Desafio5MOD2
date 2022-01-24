// Crie um array que receba 5 itens e exiba no console.
let artistas = ["Marília Mendonça", "Dinho Ouro Preto", "MD Chefe", "Freddie Mercury", "Seu Jorge"]
console.log(artistas)
// Utilize um método para adicionar um nome ao inicio do array.
artistas.unshift("Gloria Groove")
console.log(artistas)
// Utilize um método para remover o último nome do array.
artistas.pop()
console.log(artistas)
// Utilize um método para adicionar dois nomes ao fim do array.
artistas.splice(5,0, "Xamã", "Ludmilla")
console.log(artistas)
// Utilize um método para remover o primeiro nome do array.
artistas.shift()
console.log(artistas)
// Utilize um método para organizar em ordem crescente o seguinte array:
const numbers = [7,5,6,3,8,9,2,1,4]
numbers.sort(function(a,b){
    return a-b
})
console.log(numbers)
