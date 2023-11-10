AOS.init();

const button = document.getElementById('button');
const dataAniversario = new Date ("Dec 05, 2023 17:00:00");
const timeStampAniversario = dataAniversario.getTime();

button.addEventListener("mouseover", function() {
    button.style.backgroundColor = "red"
    button.textContent = "Aceitou? Traz presente!";
});

button.addEventListener("mouseout", function(){
    button.style.backgroundColor = "";
    button.textContent = "Pega logo o convite";
})
const contaTempo = setInterval(function(){


    const now = new Date();
    const timeStampNow = now.getTime();
    

    const diasEmMS = 1000 * 60 * 60 * 24;
    const horasEmMS = 1000 * 60 * 60;
    const minutosEmMS = 1000 * 60;
    
    const distanciaNiver = timeStampAniversario - timeStampNow;
    const diasAteOAniversario = Math.floor(distanciaNiver / diasEmMS);
    const horasAteOAniversario = Math.floor((distanciaNiver % diasEmMS) / horasEmMS);
    const minutosAteOAniversario = Math.floor((distanciaNiver % horasEmMS) / minutosEmMS);
    const segundosAteOAniversario = Math.floor((distanciaNiver % minutosEmMS) / 1000);


    document.getElementById('contador').innerHTML = `${diasAteOAniversario}d ${horasAteOAniversario}h ${minutosAteOAniversario}m ${segundosAteOAniversario}s`;

    if(diasAteOAniversario < 0){
        clearInterval(contaTempo);
        document.getElementById('contador').innerHTML = `Já passou, aguarde o próximo!`
    }

    

},1000)