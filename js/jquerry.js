//alert('buenos dias')
/*function boiteAlert (){
    for (let i=0; i<=10; i++){
        if (i%2===0){
            alert (i + " est un nombre pair")
            
        } else{
            alert (i + " est un nombre impaire")
        }
    }
} 
$(document).ready(function() {
    alert('coucou')
});
*/

const dateNow = document.querySelector('nav div p');
setInterval(function date() {
    let date = new Date();
    let annee = date.getFullYear();
    let mois = date.getMonth() + 1;
    let jour = date.getDate();
    let heure = date.getHours();
    let minute = date.getMinutes();
    let seconde = date.getSeconds();

    let now = "Nous sommes le " + jour + "/" + mois + "/" + annee + " à " + heure + "h " + minute + "mn " + seconde + "s";
    dateNow.textContent = now;
}, 1000)