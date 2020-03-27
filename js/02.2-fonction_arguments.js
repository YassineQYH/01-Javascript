/* LES ARGUMENTS */
/* 
les arguments ne sont en fait rien d'autre que des variables, mais propres à la fonction : elles sont créées lors de son appel, et elles sont détruites à la fin de celle-ci. 
*/


/* -------------------------------------------------------------------- */
/* Créer une fonction qui possède des arguments */

function conversion(taux)
{
    var valeur = prompt("Entrez la valeur à convertir");
    var résultat = valeur * taux;   // on calcule le resultat, en utilisant l'argument
    alert("valeur : " + valeur + "\nRésultat : " + résultat);
}


/* -------------------------------------------------------------------- */
/* Fonction à plusieurs arguments */

/*  
lorsque vous appellerez votre fonction, il faudra donner les paramètres dans le même ordre 
(si le taux de conversion est le premier, on l'indiquera en premier - logique ^^ ).

Choisissons cet ordre : unité 1, taux et unité 2. 
*/

function conversion_2(unite1, taux, unite2)
{
   var valeur = prompt("Entrez la valeur à convertir, en " + unite1);
   var resultat = valeur * taux;
   alert(valeur + ' ' + unite1 + '\n' + resultat + ' ' + unite2);
}


/* -------------------------------------------------------------------- */
/* Arguments facultatifs */

/* Tenez, vous rappelez-vous de notre fonction prompt() ?
Eh bien elle possède un second paramètre facultatif : la valeur initiale du champ de saisie. */
var nombre = prompt('Entrez un nombre', 'Votre nombre ici');
alert('Vous avez tapé ' + nombre);

/* Si on ne donne pas de second paramètre, le champ est initialement vide. Mais si on en indique un, alors il aura cette valeur. */



/* -------------------------------------------------------------------- */
/* Portée des variables */
function essai() {
    var variable = 'bonjour';
}

essai();
// alert(variable); <-- j'ai du commenté sinon je ne peux pas tester les autres exos
/* ça ne marche pas !
À la fin d'une fonction, toutes les variables déclarées à l'intérieur de celle-ci sont détruites.
On utilise le terme de variables locales. */


/* -------------------------------------------------------------------- */
/* Variables globales */

/* Il est quand même possible de créer des variables dites globales, c'est-à-dire accessibles depuis n'importe quelle fonction. */

/* !!!!!
Ces variables sont à utiliser le moins possible !
Si une variable locale suffit pour telle utilisation, ne créez pas une variable globale en vous disant : "comme ça, je pourrai l'utiliser de partout".
!!!!!
 */

 /* la première consiste à déclarer la variable en dehors de toute fonction. */

 // on cree deux variables globales
var variable1;
var variable2 = 0;

function essai()
{
   variable1 = 1;
   variable2 = 8;
   // modification des variables globales
}
// ces deux variables seront encore accessibles une fois la fonction terminee

/* 
La seconde est de ne pas déclarer la variable avec var : on l'utilise comme si elle avait déjà été déclarée (on parle de déclaration implicite). 
L'exemple serait le même que celui du dessus, mais sans les 3 premières lignes. 
Les variables sont créées directement dans la fonction.
Personnellement, je préfère utiliser la première solution.
 */


 /* -------------------------------------------------------------------- */
 /* Valeur renvoyée */

 function f(x) {
     var resultat = 5*x - 3;
     return resultat;
 }

 /* 
    Renvoi de la valeur

    On a notre fonction et notre résultat, il nous reste plus qu'à dire : "je veux que ma fonction prenne cette valeur". Pour employer le terme exact, on veut que notre fonction renvoie (ou retourne) cette valeur.
    Pour ce faire, on fait précéder la valeur à renvoyer du mot-clé return.
 */

/* 
Lorsqu'une fonction retourne une valeur, son exécution se termine : s'il reste du code à exécuter dans cette fonction, il sera ignoré.
Pour stopper l'exécution d'une fonction, on peut donc utiliser simplement ceci, qui ne renvoie rien, mais termine l'exécution : 
return;
*/


/* On teste de cette manière (ou en enregistrant le résultat dans une variable) : */
alert(f(7));
/* Et... on voit s'afficher le résultat : 32  */



 /* -------------------------------------------------------------------- */
/* Quelques exemples */

/* De cette manière, vous pouvez créer toutes sortes de fonctions (particulièrement mathématiques ^^ ). */

/* 
    triple(x) qui renvoie le triple de l'argument

    carre(x) qui renvoie le carré de l'argument (x²)

    cube(x) qui renvoie le cube de l'argument.
*/

function triple(x)
{
   return 3*x;
}

function carre(x)
{
   return x*x;
}

function cube(x)
{
   return x*x*x;
}
/* Un exemple de calcul dans lequel on voit clairement l'utilité de ceci : */

var resultat = 4*cube(5) - 7*3 / carre(6);
alert(resultat);

