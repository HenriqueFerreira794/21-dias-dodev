const temFome = prompt("Você está com fome? (sim/nao)")
const temDinheiro = prompt("Você tem dinheiro (sim/nao)")

if(temFome === "nao" || temDinheiro === "nao"){
    console.log("Hoje a janta será em casa");
    const restaranteAberto = prompt("O Restaurante está aberto?(sim/nao)")
}else if( temDinheiro === "sim" && restaranteAberto === "sim") {
    console.log("Hoje o jantar será no restaurante preferido");
}else {
    console.log("Peça um delivery!")
}
    

