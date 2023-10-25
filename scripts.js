let score = 0

function afficherResultat (score, nombreTotal) {
    console.log('Votre score est de ' + score + ' sur ' + nombreTotal)
    let zoneScore = document.querySelector(".zoneScore span")
    let afficherScore = `${score} / ${nombreTotal}`
    zoneScore.innerHTML = afficherScore

}

/*
function choisirPhrasesOuMots () {
    let choixUtilisateur = prompt(" Veillez choisir la liste : mots ou phrases ")
     while (choixUtilisateur !== "mots" && choixUtilisateur !== "phrases"){
        choixUtilisateur = prompt(" Veillez choisir la liste : mots ou phrases ")
    }
    return choixUtilisateur
}

function LancerBoucleDeJeu (motOuPhrase) {
    for(let i=0; i<motOuPhrase.length; i++ ){
        let motUtilisateur = prompt("Entrez le mot : " + motOuPhrase[i])
        if (motUtilisateur === motOuPhrase[i]) {
            score ++
        } 
    } 
    return score
}
*/

function afficherProposition(proposerMot){
    let zoneProposition=document.querySelector(".zoneProposition")
    zoneProposition.innerHTML = proposerMot

}
function lancerJeu (){
   // let choix = choisirPhrasesOuMots()
    let score = 0 
    let nombreTotal = 0 
    let i=0
    /*
    if (choix === "mots"){
        LancerBoucleDeJeu(listeMots)
        nombreTotal=listeMots.length
    }
    else{
        LancerBoucleDeJeu(listePhrases)
        nombreTotal=listePhrases.length
    }
    */
    let inputEcriture = document.getElementById("inputEcriture")
    let btnValiderMot = document.getElementById("btnValiderMot")

    afficherProposition(listeMots[i])
    btnValiderMot.addEventListener("click",()=> {
        console.log(inputEcriture.value)
        i++
        inputEcriture.value=''
        listeMots[i]
      
        if(listeMots[i] === undefined){
            afficherProposition("Le jeu est fini !")
            btnValiderMot.disabled= true
        }else{
            afficherProposition(listeMots[i])
        }


    })
    

    afficherResultat(score,nombreTotal)
}



/*
const listeMots = ["Cachalot","Pétunia","Serviette"]
const listePhrases = [ "Pas de panique !", "La vie, l’univers et le reste", "Merci pour le poisson"]

let score = 0 

 let choixUtilisateur = prompt(" Veillez choisir la liste : mots ou phrases ")
     while (choixUtilisateur !== "mots" && choixUtilisateur !== "phrases"){
        choixUtilisateur = prompt(" Veillez choisir la liste : mots ou phrases ")
    }


if (choixUtilisateur === "mots"){
    for(let i=0; i<listeMots.length; i++ ){
        let motUtilisateur = prompt("Entrez le mot : " + listeMots[i])
        if (motUtilisateur === listeMots[i]) {
            score ++
        } 
        } 
    console.log("Votre score est de" + score + " sur " + listeMots.length) 
} else{
    for(let i=0; i<listePhrases.length; i++ ){
        let motUtilisateur = prompt("Entrez le mot : " + listePhrases[i])
        if (motUtilisateur === listePhrases[i]) {
            score += 1
        } 
      
    }
    console.log("Votre score est de" + score + " sur " + listePhrases.length) 
}






*/
