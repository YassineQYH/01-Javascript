/* Retour sur les fonctions */
/* -------------------------------------------------------------------------------------------- */
/* Fonctions et variables */

function toto(arg1, arg2)
{
        // code
        return valeur;
}
/* 
    Le mot-clé function indique... qu'on déclare une fonction ;)

    toto est le nom de notre fonction

    arg1 et arg2 sont les arguments de cette fonction, séparés par une virgule, et mis entre des parenthèses qui sont obligatoires (même s'il n'y a aucun argument).

    On place le code de la fonction dans un bloc d'instructions, délimité par des accolades.

    On renvoie éventuellement une valeur (c'est la valeur que "prendra" la fonction quand on l'appellera).
*/
/* ------------------------------------- */
/* Créer une fonction dans une variable */

var toto = function(arg1, arg2)
{
        // code
}
/* Cette fonction est exactement la même que celle au dessus (à l'exception du return valeur;). */
/* 
    On a déclaré notre variable, à l'aide du mot-clé var (comme nous avons vu dans le chapitre à ce sujet).

    On a donné à notre variable le nom de toto.

    On lui a affecté(on lui a donné pour valeur) une fonction, prenant deux paramètres nommés arg1 et arg2, et exécutant le code entre les accolades.
*/

/* C'est en fait un autre point de vue, assez différent : 
en déclarant une fonction de cette manière, on voit clairement qu'on enregistre notre fonction dans une variable. */

/* 
On peut donc très facilement :

    créer une fonction locale ou globale

    re-déclarer une fonction (autrement dit, modifier son code), simplement en modifiant la variable

    créer des tableaux de fonctions

    etc.
*/

/* function calculette(){ */ // la fonction ne fait pas partie de l'exercice de base, c'est moi qui l'ai ajouté.
/* Exemple : un tableau de fonctions */
var operation = new Array();
   operation["+"] = function(x,y){ return x+y; };
   operation["-"] = function(x,y){ return x-y; };
   operation["*"] = function(x,y){ return x*y; };
   operation["/"] = function(x,y){ return x/y; };
   operation["moy"] = function(x,y){ return (x+y)/2; };

 /*   On fait un essai : on demande deux nombres à l'utilisateur, ainsi que le nom de la fonction à appliquer (add, soustr, mult, div ou moy). */


 var nbr1 = parseFloat(prompt("Premier nombre ? : "))
 var nbr2 = parseFloat(prompt("Deuxieme nombre ? : "))
 var op = prompt("Fonction d'opération à appliquer ? : ")

 var resultat = operation[op](nbr1, nbr2);
 alert("Resultat : " + resultat);
 
/* } */
/* -------------------------------------------------------------------------------------------- */
/* Rappel : portée des variables */
/* 
    En JavaScript, on distingue les variables globales (accessibles n'importe où dans votre code) des variables locales.
    Les variables locales déclarées dans une fonction ne seront accessibles (et "visibles") qu'à l'intérieur de cette fonction. 
    On peut donc sans problème utiliser le même nom pour des variables locales de deux fonctions différentes.
*/       /* Comme je l'ai déjà dit, il faut éviter d'utiliser des variables globales. */

/* 
    On déclare une variable locale à l'aide de var, dans le bloc d'instructions (qui est généralement "matérialisé" par des accolades) dans lequel elle doit être accessible.

    Il y a deux façons de créer une variable globale : soit en la déclarant en dehors de tout bloc d'instructions (tout au début du code JS), soit on l'utilise sans la déclarer, comme si elle l'avait déjà été (on parle alors de déclaration implicite).
*/

var a;  // on declare une variable globale
function test(argument)
{
        var resultat = 5*argument + 2;
        a = argument;   // modification de la variable globale
        b = resultat;   // declaration implicite d'une variable globale
        return resultat;
}

/* 
    Lorsque la fonction n'a pas été appelée, il y a une seule variable globale : a.

    Quand on appelle la fonction, celle-ci modifie cette variable globale, et on en déclare (implicitement) une autre : b.

    Une fois la fonction exécutée, on peut toujours accéder aux variables a et b, car elles sont globales.

    Cependant, on ne peut accéder à la variable resultat uniquement à l'intérieur de la fonction, car c'est une variable locale.
*/

/* -------------------------------------------------------------------------------------------- */
/* Les arguments facultatifs : nombre fixé d'arguments */

/* Comment ça se passe lorsqu'on appelle une fonction ? */
function f(x,y)
{
        // code de la fonction
}
/* Elle a pour nom f, et prend deux paramètres, x et y. */
/* Que se passe-t-il si on l'appelle en ne précisant qu'un seul argument, comme ci-dessous ? */

f(5);

/* 
Essayons de comprendre ce qui va se passer lors de cet appel :

    deux variables locales, x et y, vont être créées (ce sont les arguments)

    la variable x va être initialisée avec la valeur 5 (c'est la valeur qu'on a donnée lors de l'appel pour le premier argument)

    mais y ne sera pas initialisée, car on n'a pas précisé le second argument

Autrement dit, il va se passer quelque chose comme ceci :
*/
var x, y;
x = 5;
// code de la fonction
/* ------------------------------- */
/* Une variable non initialisée ! */
/* Quels sont les symptômes ? */

/* On se retrouve donc face à une variable déclarée, mais... qui n'a pas de valeur !
Poursuivons donc nos essais : que va-t-il se passer avec un tel code ?  */

var y;
alert(y);
/* On voit alors s'afficher : undefined. */

/* 
    En effet, undefined est un mot-clé signifiant que la variable est déclarée, mais qu'on ne lui a jamais donné de valeur :'( .
    Si la variable n'avait pas été déclarée, on n'aurait pas eu de message du tout : 
    le script aurait été interrompu (l'ordinateur ne peut pas deviner qu'il s'agit d'une variable, puisqu'on ne l'a pas déclarée).
*/


/* Comment ça se soigne ?

On peut effectuer un test comme celui-ci pour vérifier si la variable y est définie : */
if(y == undefined);


/* Et on peut aussi créer une fonction qui renvoie true si la variable est définie, false sinon. */

function isDefined(variable)
{
   return (variable != undefined);
}
/* Si l'écriture vous perturbe, sachez que c'est équivalent à ceci : */
function isDefined(variable)
{
   if(variable == undefined)
      return false;
   else
      return true;
}
/* Mais c'est "bête" d'écrire un tel code : "sicondition est vrai, alors renvoie vrai, sinon renvoie faux"... */

/* Notez que la valeur booléenne d'une variable non initialisée est false.
Ainsi, en effectuant le test if(y), si la variable y n'est pas initialisée, c'est comme si elle était initialisée avec false. */

/* 
        Tout ça pour dire qu'on peut créer des fonctions pour lesquelles certains arguments sont facultatifs. 
*/

function dist(a,b)
{
   // on initialise b a 0 si besoin
   if(b == undefined)
      b = 0;
   // on continue ensuite normalement
   if(a > b)
      return a-b;
   else
      return b-a;
}
/* dist(10,7);
dist(10); */
/* 
    Au début de la fonction, il faut donc vérifier si les arguments facultatifs ont été précisés : 
    si ce n'est pas le cas, il va falloir leur donner une valeur par défaut
*/


/* -------------------------------------------------------------------------------------------- */
/* Les arguments facultatifs : nombre illimité d'arguments */

/* On avait parlé d'une fonction qui devait pouvoir s'utiliser comme ceci : */

                    /* addition_1(12, 5);   // nous donnerait 17 */
                    addition_2(21, 4, 15, 11, 6);   // nous donnerait 57 

// etc. avec autant de nombres qu'on veut

/* 
    Ce qui serait pratique, c'est que les arguments soient numérotés... un peu comme... un tableau !
    Justement, il est possible de récupérer un tableau qui contient tous les arguments de la fonction. Du coup, le problème semble tout de suite plus simple :) .
*/

/* --------------------------------------- */
/* Un tableau contenant tous les arguments */

/* Partons de la fonction d'addition qu'on veut réaliser. On peut déjà commencer par la créer comme ceci : */

function addition()
{
   // corps de la fonction
};

/* Maintenant, il nous faut récupérer le tableau contenant les arguments.
Ce tableau est addition.arguments : 
ce sont les argumentsdela fonction addition, stockés sous forme de tableau. */
/* 
    Ce tableau contient tous les arguments qu'on a donnés à la fonction lors de son appel.
    Ainsi, en appelant addition(21, 4, 15, 11, 6), on aurait (schématiquement) :
*/
addition_2.arguments = new Array(21, 4, 15, 11, 6);

var nb = addition_2.arguments;
/* nb et addition.arguments sont un seul et même tableau !
Si on le modifie, il sera modifié sous les deux noms. */

function addition_2()
{
   var nb = addition_2.arguments;
   var somme = 0;
   for(var i=0; i<nb.length; i++)
      somme += nb[i];
   return somme;
};

/* alert( addition_1(12, 5) ); */
alert( addition_2(21, 4, 15, 11, 6) );


/* ---------------------------------- */
/* 2eme EXEMPLE */

/* 
Pour que ce soit bien clair pour vous, étudions un nouvel exemple : 
une fonction, prenant encore une fois autant de paramètres (des nombres) qu'on veut, et qui renvoie le plus grand de ces nombres.

Cette fois-ci, à la différence de l'addition, on ne sait pas trop quoi renvoyer s'il n'y a aucun paramètre...
On va donc créer une fonction comme ceci :
*/

function maxi(m) { };
/* Dans le tableau d'arguments, la valeur de m sera également prise en compte, dans la première case (la case numéro 0). */

/* 
On va ensuite parcourir le tableau, et enregistrer la plus grande valeur "lue" dans une variable (on peut utiliser la variable m) : 
cette variable contiendra donc le plus grand nombre parmi ceux qu'on a déjà parcourus.
*/

function maxi(m)
{
   var nb = maxi.arguments;   // on a donc m = nb[0]
   for(var i=1; i<nb.length; i++)
      if(nb[i] > m)   // si l'argument est plus grand que le maximum...
         m = nb[i];   // ... alors c'est le maximum
   return m;
}
/* Et, encore une fois, on peut tester : */
var n = maxi(7, 3);
alert(n);

var p = maxi(2, 8, 4, 1, 9, 4);
alert(p);