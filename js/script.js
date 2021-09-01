// Chiedere all'utente di inserire il numero di celle di cui sarà composto il campo da gioco.
// Tramite una funzione javascript disegnare in pagina la griglia con massimo 10 celle per riga.
// Al click su una cella dovrà essere mostrato con un alert il numero della cella e il suo background diventerà rosso.


var numeroCelle=parseInt(prompt("Ciao,scegli il numero di celle tra 1 e 10"));

 function creazioneGriglia(num1){
    for (var i=1;i<=100;i++){
        document.getElementById("campo").innerHTML+=`<div class="caselle">${i}</div>`;
    } 
  }



  creazioneGriglia(numeroCelle);

