// Vetores

const listaDeNomes =["Marta ", "José", "Maria",]

console.log("Exibindo o  todos os elementos:")
console.log(listaDeNomes)

console.log("\nExibindo apenas o primeiro elemento:")
console.log(listaDeNomes[0])

listaDeNomes.push("Marta")
console.log(listaDeNomes)

// Sua vez, adcione mais um nome a lista .

console.log("\nAdicionando um novo elemento:")
// A partir do indice 2, remover 1 apenas elemento.
listaDeNomes.splice(2, 1)
console.log(listaDeNomes)

// sua vez, remova apenas o segundo elemento da lista.
listaDeNomes.splice(1, 1)
console.log(listaDeNomes)

console.log("\nRemovendo apenas o último elemento:")
listaDeNomes.pop()
console.log(listaDeNomes)

console.log("\nRemovendo apenas o primeiro elemento:")
listaDeNomes.shift()
console.log(listaDeNomes)


