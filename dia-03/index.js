let nomeDoAluno = ""
let idadeDoAluno = 0
let alturaDoAluno = 0
let pesoDoAluno = 0

nomeDoAluno = prompt ("Insira seu nome")
idadeDoAluno = Number(prompt("Insira sua idade"))
alturaDoAluno = Number(prompt("Insira sua altura (cm)"))
pesoDoAluno = Number(prompt("Insira seu peso (Kg)"))

let anoDeNascimento = 0
anoDeNascimento = 2023 - idadeDoAluno

let imc = 0 
imc =(pesoDoAluno/(alturaDoAluno*alturaDoAluno))


console.log("Olá " + nomeDoAluno + ", você tem " + idadeDoAluno + " anos, nasceu em " + anoDeNascimento + 
            ", tem " + alturaDoAluno + " de altura, pesa " + pesoDoAluno + "kg e seu IMC é " + imc + " Kg/m2.")