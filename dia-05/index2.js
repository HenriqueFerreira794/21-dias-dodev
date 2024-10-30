let serviço = prompt('Qual serviço deseja realizar? Gasolina/Álcool ou calibrar os pneus?')

switch(serviço){
    case 'Gasolina':
        let reaisGasolina = Number(prompt('Valor do abastecimento?'))
        let valorGasolina = 1
        let resultadoGas = (valorGasolina*reaisGasolina/5).toFixed(2)
        console.log('Você abasteceu ' + resultadoGas + '/L de gasolina.')
        break;
    case 'Alcool':
        let reaisAlcool = Number(prompt('Valor do abastecimento?'))
        let valorAlcool = 1
        let ResultadoAlc = (valorAlcool*reaisAlcool/3).toFixed(2)
        console.log('Você abasteceu ' + ResultadoAlc + '/L de Álcool.')
        break;
    case 'Calibrar':
        console.log('Pneus calibradoos com sucesso')
        break;
    default:
        console.log('Opção inexistente')
        break;
    
}