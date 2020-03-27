/* Les boucles */

/* Boucle "while"*/

/* 
while(condition)
{
        instructions
}
*/

/* Tant que la condition est satisfaite, on répète les instructions. */

/* Si la condition n'est pas vérifiée au premier tour de boucle, alors les instructions ne seront pas exécutées. */

/* 
    #Si la condition est vérifiée,
    -->Alors on exécute les instructions, et on retourne à #,
    -->Sinon on passe à la suite.
*/

/* 
    On va créer une variable qui servira à "compter".
    Tant que cette variable sera inférieure à 10, on affichera un message, puis on l'incrémentera.
 */

 /* 
    Incrémenter une variable signifie augmenter sa valeur (en général, de 1).
    Décrémenter signifie diminuer sa valeur.
*/

var nombre = 1; // on initialise le compteur

while (nombre < 10)  // tant que i<10 ...
{  
    alert(nombre);   // ... on affiche un message
    nombre++;
}


/* --------------------------------------------------------------------------------------------------------------- */
/* Boucle for */

/* for(initialisation ; condition ; incrementation)
{
        instructions
} */

for (var chiffre = 0 ; chiffre < 10 ; chiffre++)
{
    alert(chiffre);
}

/* 
    Les boucles for sont plus pratiques que les boucles while, mais uniquement dans certains cas !
    Il est parfois plus judicieux d'utiliser une boucle while, 
    notamment lorsqu'on ne retrouve pas cette structure 
    "initialisation / condition / incrémentation" (nous en verrons des exemples par la suite).
*/


/* (on va utiliser for) qui fait la somme des nombres de 1 à 10 (inclus). */
var i;
var somme = 0;  // variable pour le resultat
for(i=1; i<=10; i++)
    somme += i;     // on ajoute la valeur du compteur à notre resultat
    alert(somme);

/* Voici quelques conseils concernant les boucles for : */

/* 
    évitez de modifier la variable qui sert de compteur à l'extérieur des parenthèses du for, qui sont prévues pour ça.

    Inversement, évitez de mettre entre ces parenthèses du code qui ne concerne pas directement cette variable.

    Pour rappel, donnez des noms explicites et pas trop longs à vos variables (i ou j, parfois cpt, étant des noms classiques pour des compteurs).

    Pensez également à bien indenter votre code, et à mettre quelques commentaires, (uniquement) s'ils s'avèrent nécessaires.
*/



/* --------------------------------------------------------------------------------------------------------------- */
/* Boucle "do ... while" */

/* do
{
        instructions
}
while(condition); */


/* Ici, le while est placé à la fin de la boucle, après les instructions qui le concernent : 
c'est pour ça qu'il est suivit d'un point-virgule. */

/* Quelle différence ? */
/* Eh bien le test est effectué après les instructions, 
ce qui veut dire que ces dernières seront exécutées au moins une fois, quelle que soit la condition  */

var saisie;
do
{
    saisie = prompt('Entre un nom, ou cliquez sur Annuler pour quitter.');
}
while(saisie != null && saisie != ''); // Tant que saisie n'est pas égale à null et saisie n'est pas égale à 'vide'


/* ou bien, en "simplifiant" un peu :
    var saisie;
    do
        saisie = prompt("Entrez un nom, ou cliquez sur Annuler pour quitter");
    while(saisie);  // ca revient au meme que dans l'exemple ci-dessus
*/



/* --------------------------------------------------------------------------------------------------------------- */
/*  instructions de contrôle */
/* break */

var m;
for(m=0 ; m<20 ; m++)
{
    if(3*m > 10)
    break;
    alert(3*m);
}

/* !!!!!
    Cette instruction est très pratique dans certains cas.
    Cependant, elle est à éviter autant que possible : 
    il vaut mieux créer une condition plus complète pour votre boucle, plutôt que d'insérer des if avec des break dans toute la boucle.
!!!!!*/

/* Voici une manière bien mieux structurée pour ce même exemple : */

var n;
for(n=0; 3*n<=10; n++)
{
    alert(3*n);
}
    /* Ici, tout ce qui concerne la boucle se trouve entre les parenthèses du for, ce qui rend le code bien mieux "organisé". */


    /* Dans l'exemple qui suit, le break s'applique seulement à la boucle avec la variable j. */
    var i, j;
for(i=0; i<5; i++)
{
        for(j=0; j<5; j++)
        {
                if(j == 2)
                        break;
        }
}

/* --------------------------------------------------------------------------------------------------------------- */
/*  continue */

/* 
Lorsque l'instruction continue est rencontrée, toutes les instructions qui suivront seront ignorées, 
jusqu'à ce qu'on arrive à la fin des instructions de la boucle. 
La boucle continue ensuite normalement.

Pour simplifier, continue permet en quelque sorte de "sauter" certains tours de la boucle.
*/

var k;
for(k=-5; k<=5; k++)
{
        if(k == 0)
                continue;
        alert("L'inverse de " + k + " est " + 1/k);
}

/* 
Lorsque i vaut 0, on saute les instructions qui restent dans la boucle (ici, alert()), 
puis on reprend avec i = 1 (la valeur suivante).

On affiche donc le message pour i = -5, -4, -3, -2, -1, (on saute le 0), 1, 2, 3, 4 et 5.
*/

/* --------------------------------------------------------------------------------------------------------------- */

