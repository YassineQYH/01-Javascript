
/* FONCTION ADDITION */
function calculatrice_addition() {

    var nbr1 = prompt("Entrez le 1er nombre : " );
    var nbr2 = prompt("Entrez le 2eme nombre : ");
    var resultat = parseInt(nbr1) + parseInt(nbr2);
    console.log(resultat);

    alert(nbr1 + ' + ' + nbr2 + ' = ' + resultat );
    return resultat;
}


/* FONCTION SOUSTRACTION */
function calculatrice_soustration(nbr1, nbr2) {

    var nbr1 = prompt("Entrez le 1er nombre : " );
    var nbr2 = prompt("Entrez le 2eme nombre : ");
    var resultat = parseInt(nbr1) - parseInt(nbr2);
    console.log(resultat);

    alert(nbr1 + ' - ' + nbr2 + ' = ' + resultat );
    return resultat;
}


/* FONCTION MULTIPLICATION */
function calculatrice_multiplication(nbr1, nbr2) {

    var nbr1 = prompt("Entrez le 1er nombre : " );
    var nbr2 = prompt("Entrez le 2eme nombre : ");
    var resultat = parseInt(nbr1) * parseInt(nbr2);
    console.log(resultat);

    alert(nbr1 + ' * ' + nbr2 + ' = ' + resultat );
    return resultat;
}


/* FONCTION DIVISION */
function calculatrice_division(nbr1, nbr2) {

    var nbr1 = prompt("Entrez le 1er nombre : " );
    var nbr2 = prompt("Entrez le 2eme nombre : ");
    var resultat = parseInt(nbr1) / parseInt(nbr2);
    console.log(resultat);

    alert(nbr1 + ' / ' + nbr2 + ' = ' + resultat );
    return resultat;
}


/* FONCTION CALCULATRICE */

function calculatrice(nbr1, operation, nbr2){

    var nbr1 = prompt("Entrez le 1er nombre : " );
    console.log(nbr1);

    var operation = prompt("Entrez votre opération");
    console.log(operation);

    var nbr2 = prompt("Entrez le 2eme nombre : ");
    console.log(nbr2);



    if (operation == '+') 
    {
        var resultat = parseInt(nbr1) + parseInt(nbr2);
        console.log(resultat);
    } 
    else if (operation == '-')
    {
        var resultat = parseInt(nbr1) - parseInt(nbr2);
        console.log(resultat);
    }
    else if (operation == '*')
    {
        var resultat = parseInt(nbr1) * parseInt(nbr2);
        console.log(resultat);
    }
    else if (operation == '/')
    {
        var resultat = parseInt(nbr1) / parseInt(nbr2);
        console.log(resultat);
    }

    alert(nbr1 + operation + nbr2 + ' = ' + resultat );
    return resultat;
}