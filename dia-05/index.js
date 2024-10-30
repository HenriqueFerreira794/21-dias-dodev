let numeroUm = parseInt(prompt('Digite o número 1'))
let numeroDois = parseInt(prompt('Digite o numero 2'))
let operaçao = prompt('Qual operação deseja realizar? (adicao/multiplicação/divsao/subtração)')


switch(operaçao){
    case "adiçao":
        let resultadoAdicao = (numeroUm + numeroDois)
        console.log('Operação de adição realizada abaixo:')
        console.log(numeroUm + " + " + numeroDois + " = " + resultadoAdicao)
        break;
    case "multiplicacao":
        let resultadoMulti = (numeroUm * numeroDois)
        console.log('Operação de multiplicacao realizada abaixo:')
        console.log(numeroUm + " x " + numeroDois + " = " + resultadoMulti)
        break;
    case "divisao":
        let resultadoDivisao = (numeroUm / numeroDois)
        console.log('Operação de divisão realizada abaixo:')
        console.log(numeroUm + " / " + numeroDois + " = " + resultadoDivisao)
        break;
    case "substraçao":
        let resultadoSub = (numeroUm + numeroDois)
        console.log('Operação de adição realizada abaixo:')
        console.log(numeroUm + " + " + numeroDois + " = " + resultadoSub)
        break;
    default:
        console.log('Opção inválida')
        break;
}