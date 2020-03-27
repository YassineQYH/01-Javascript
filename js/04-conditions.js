/* Variable booléenne */
/* Ces variables prennent deux valeurs : true (vrai) et false (faux). */

/* Un petit exemple : cette variable pourrait permettre de savoir si le visiteur est majeur ou mineur (la valeur serait à demander au visiteur) : */

var majeur = true;

/* si l'âge du visiteur est inférieur à 18 ans, alors on retient qu'il n'est pas majeur, sinon on retient qu'il est majeur. */


/* Opérateurs de comparaison */
/* 
== : si les deux valeurs sont égales, alors on a true, sinon false.

!= : si les deux valeurs sont différentes, alors on a true, sinon false.
*/


/* En JS (comme dans de nombreux autres langages), le signe ! sert à marquer la négation.
!= veut donc dire "non égal", donc "différent". */


/* 
Le signe == n'est pas une erreur d'écriture !
Il sert à comparer deux variables, à la différence du signe =, utilisé pour affecter une valeur à une variable.
Confondre les deux est une erreur classique...

Retenez donc bien que pour comparer deux valeurs, on emploie le signe ==.
*/

/* Opérateurs de comparaison de valeurs numériques (si les valeurs ne sont pas des nombres, le résultat ne sera pas celui attendu) : 
a < b : si a est inférieur à (plus petit que) b, alors on a true, sinon false.
a >= b : si a est supérieur ou égal à b, alors on a true, sinon false.
C'est le contraire de < : si a n'est pas inférieur à b, ...
*/

var age = prompt('Quel âge avez-vous ? ( en année )');

var majeur = (age>=18); // on compare l'age : s'il est superieur ou egal à 18 ans, alors le visiteur est majeur

alert('vous êtes majeurs : ' + majeur); // on verifie que ça marche ^^

/* Les parenthèses autour de la condition ne sont pas nécessaires, mais elles rendent le code beaucoup plus lisible (à mon goût ^^ ).
Libre à vous de les mettre ou non. */

/* --------------------------------------------------------------------------------- */
/*  opérateurs logiques. */
/* && (ET) et || (OU) */
var taille = prompt("quel est votre taille ? : ");

var poids = prompt("quel est votre poid ? : ");

var costaud = (taille >= 2 && poids >= 90);
alert("Vous êtes costaud : " + costaud);

/* En l'absence de parenthèses, les && sont prioritaires sur les || : on commence par eux. */
// a && b || c && d     =     (a && b) || (c && d)

/* En présence de parenthèses, comme pour des calculs, les éléments entre ces dernières sont calculés avant le reste. */

/* --------------------------------------------------------------------------------- */
/* La négation */

var mineur = !(age >= 18);

/* 
Vous arrivez à un repas, vous vous dites : "je mange s'il n'y a PAS de viande ET PAS de poisson".
Ou bien : "je mange s'il n'y a PAS : (du poisson OU de la viande)".
*/
/* 
!a && !b
!(a || b) 
*/

//  1) !(a || b) = !a && !b
//  2) !(a && b) = !a || !b


/* --------------------------------------------------------------------------------- */
/* IF et ELSE */

/* Si on veut mettre plusieurs instructions avec un seul if, on les place entre accolades pour former un bloc d'instructions, qui sera exécuté seulement si le test est vrai. */


/* 
On utilise assez souvent ce type de test.
Le résultat sera false dans les cas suivants :

la variable a été déclarée, mais n'a pas de valeur. */
var age;

/* La variable vaut 0 (zéro - ATTENTION, la valeur '0' - zéro, mais sous forme de chaîne de caractères - ne rentre pas dans cette liste !).

La variable vaut null.

La variable vaut null (valeur renvoyée par certaines fonctions dans certains cas) */

/* Dans les autres cas, le résultat sera true. */

var ton_age = prompt('Quel âge avez-vous ? (en années)');
if(!ton_age)
   alert('Vous devez entrez votre âge');
else
{
   if(ton_age >= 18)
      alert('Vous êtes majeur');
   else
      alert('T\'es mineur');
}

/* --------------------------------------------------------------------------------- */
/* La fonction isNaN */

/* Rappel : le sigle NaN signifie "Not aNumber".
Soit, après une traduction très difficile : "pas un nombre" ^^  */

/* 
En effet, cette fonction renvoie :

    true si l'argument n'est pas un nombre ;

    false si l'argument est un nombre (ou bien une chaîne de caractères qui "est" un nombre : un nombre entre guillemets).
*/

/* 
    Rappel : on utilise un point à la place de la virgule.
    3.14 est donc un nombre, mais 3,14 n'en est pas un !
*/

var nb = prompt('Entrez un nombre');
    if (isNaN(nb)) /* S'il n'a pas tapé un nombre, on l'insulte le lui fait gentiment remarquer. */
        alert('Vous devez rentrez un nombre !');
    else
        alert('Son carré est ' + nb*nb);


/* --------------------------------------------------------------------------------- */
/* Distinguer plusieurs cas avec SWITCH */


/* Il est possible d'utiliser cette solution. Un exemple : */

var nom = prompt("Entrez un nom d'animal");
if(nom == "chat")
        alert("Miaou !");
else if(nom == "chien")
        alert("Et PAF, le chien !");
else if(nom == "pingouin")
        alert("Bonjour, Tux");
else
        alert("Je n'ai rien à te dire...");

        /* Mais cette solution devient particulièrement lourde à écrire et peu lisible lorsqu'on a beaucoup de possibilités.

C'est pourquoi il existe une autre méthode, plus adaptée.
Voyez plutôt l'exemple précédent, réalisé de cette manière : */

var animal = prompt("Entrez un nom d'animal");
switch(animal)
{
        case "chat":
                alert("Miaou !");
                break;
        case "chien":
                alert("Et PAF, le chien !");
                break;
        case "pingouin":
                alert("Bonjour, Tux");
                break;
        default:
                alert("Je n'ai rien à te dire...");
                break;
}

/* Cette syntaxe n'existe qu'à partir du JavaScript 1.2.
Autrement dit, les vieux navigateurs ne seront pas capables de la comprendre. */

/* case VALEUR:
        INSTRUCTIONS
        break; 
*/


/*------------------------------- */
/* BREAK */
/* 
    Il est possible de ne pas mettre ce break : dans ce cas, les instructions suivantes (celles du cas suivant) seront exécutées elles aussi.
*/

var plat = prompt("Quel est votre plat préféré ?");
switch(plat)    // debut du switch
{
        case "frites":  // si c'est les frites ...
                alert("C'est classique...");    // ... on affiche ce message...
                break;  // ... et on sort du switch.
                
        case "hamburger":
                alert("Yeah, do you come from the USA ?!");
                break;
                
        // on ne met pas de "break" entre les deux, pour afficher le meme message
        case "lasagnes":
        case "pizza":
                alert("Monsieur est italien ?");
                break;
                
        default:        // si c'est un autre plat
                alert("Je ne connais pas ce plat...");
                break;
}