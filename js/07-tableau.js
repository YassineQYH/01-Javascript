/* TABLEAUX */
/* ------------------------- */
/* Créer un tableau */

/* Pour créer un tableau, on utilise new Array() (qui signifie en anglais "nouveau tableau").
Pour créer un tableau et l'enregistrer dans une variable (sinon ça ne sert pas à grand chose de l'avoir créé...), on fait comme on en a l'habitude : */
var table = new Array();



var toto = new Array();
var t = toto;
/* 
    Ces deux variables contiennent donc "l'emplacement" du tableau créé : elle désignent donc le même tableau !
    Si on le modifie avec toto, les changements seront valables aussi pour t.
*/

/* ---------------------------------------------------------------------------------- */
/* Initialiser un tableau */

/* 
    Revenons à la création de tableaux : on a appris à créer un tableau vide.
    Mais il est également possible de créer un tableau contenant certaines valeurs. 
    Pour cela, on utilise justement les parenthèses après Array, en précisant dans l'ordre, et en les séparant par des virgules, les valeurs de notre tableau.
*/

var noms = new Array("Pierre", "Paul", "Jacques");
var best_scores = new Array(2.5, 4.7, 3.14);


/* ---------------------------------------------------------------------------------- */
/* Lire ou modifier une valeur */

/* 
    Ce qui va vraiment nous servir par la suite, c'est pouvoir lire ou modifier les éléments d'un tableau.
    Pour accéder à un élément, on utilise tableau[indice], où indice est... l'indice de l'élément :p .
    Pour ajouter un nouvel élément, on modifie simplement sa valeur, fait comme s'il existait déjà.
*/

var table = new Array("Pierre", "Paul", "Jacques");
alert("La seconde case vaut : " + table[1]);   // on lit l'element d'indice 1
table[1] = "Toto";   // on le modifie
table[3] = "Dupont";   // on cree un nouvel element
/* 
        Au final, ce tableau contiendra donc "Pierre" (indice 0), "Toto" (1), "Jacques" (2) et "Dupont" (3).
*/

/*              Pour un tableau associatif, 
on crée un tableau vide, et on associe "manuellement" (une par une) toutes les valeurs, 
en utilisant une chaîne de caractères en tant qu'indice, comme ceci : */

var scores = new Array();
scores["Toto"] = 142;
scores["Pierre"] = 137;

/* avec les tableaux, on peut faire à peu près ce qu'on veut : */

/* 
    ajouter autant d'éléments qu'on veut

    faire un tableau numéroté ET associatif

    faire un tableau contenant à la fois des nombres, des chaînes de caractères, etc.
*/
var t = new Array(5, "Bonjour", 290, 1.414, "Toto", false, 9, true);
t["txt"] = "Bienvenue à toi !";
t["est_majeur"] = true;
t["pi"] = 3.14;

/* C'est à vous de faire en sorte d'avoir des tableaux organisés...
Le but est bien sûr de pouvoir réutiliser les données stockées : dans l'exemple précédent, cela me parait trèèès difficile. */

/* ---------------------------------------------------------------------------------- */
/*          Longueur d'un tableau ?
 connaître la longueur d'un tableau (le nombre d'éléments qu'il contient) est souvent fort utile (pour le parcourir notamment).
*/

/* Pour un tableau nommé monTableau, on accède à sa longueur grâce à monTableau.length. 
!!!
    Cela ne fonctionne que si les indices de monTableau sont des nombres.
    Dans le cas de tableaux associatifs, les cases dont les indices sont des chaînes de caractères ne sont pas comptées.
!!!*/

/* 
length est en fait une variable qui "appartient" à monTableau (attention, je n'ai pas dit que c'était un élément du tableau), 
variable qui contient justement la longueur du tableau :) .

Bref, retenez surtout que monTableau.length est la longueur de "monTableau".
*/

var table = new Array("Pierre", "Paul", "Jacques");
alert("la taille de mon tableau est de " + table.length);
table[5] = "Toto";
alert("la taille de mon tableau est maintenant de " + table.length);

/* Si vous testez ce code, vous obtiendrez 3, puis 6.
Dans le premier cas, pas de problème.

Mais dans le cas suivant, il faut également compter les cases vides situées avant la dernière valeur. */
/* 
Le tableau contient :
0. "Pierre"
1. "Paul"
2. "Jacques"
3. (rien)
4. (rien)
5. "Toto"
D'où une longueur de 6.
*/




/* ---------------------------------------------------------------------------------- */
/* Trier un tableau */

/* trier un tableau (par ordre croissant) grâce à monTableau.sort() (to sort signifie trier en anglais). */

/*
!!!!!
    Le tri est irréversible !
    Une fois trié, il est impossible de récupérer votre tableau dans l'ordre initial.
!!!!!
*/

/* Reprenons l'exemple précédent (avec des chaînes de caractères, le tri se fait... par ordre alphabétique) : */

var table = new Array("Pierre", "Paul", "Jacques");
table[5] = "Toto";
table.sort();
console.log(table);

/* 
Le tableau contient désormais :
0. "Jacques"
1. "Paul"
2. "Pierre"
3. "Toto"
*/

/* ---------------------------------------------------------------------------------- */
/* Lire un tableau */

/* On va donc créer une fonction, qui prend en argument un tableau, et qui va nous "lire" le tableau dans une chaîne de caractères. */

/* On doit en fait répéter une action sur chacun des éléments du tableau. On va donc utiliser... une boucle. */
/* ----------------------- */
/* Boucle "for" classique */

/* 
Il est facile de parcourir un tableau numéroté à l'aide d'une boucle for : 
en effet, on veut accéder à tous les tableau[i], 
avec i allant de 0 à tableau.length -1 (ce qui nous fait bien nos tableau.length éléments).
*/
/* Voici donc une fonction qui retourne, sous forme de chaîne de caractères, le contenu du tableau : */


var tableau_1 = new Array("Yassine", "Hicham", "Sofian");
var tableau_2 = {papa : 'abder', maman : 'Nadia' /* pas de virgule après le dernier */ };
function lire1(tableau_1)
{
        var chaine = "Le tableau contient :"
        for(var i=0; i<tableau_1.length; i++)
                chaine += "\n" + i + " -> " + tableau_1[i];
        return chaine;
}
/* ----------------------------- */
/* Une boucle "for" spéciale... */

/* La boucle précédente est parfaite pour des tableaux numérotés, 
mais si vous avez fait l'essai avec un tableau associatif, vous avez pu vous rendre compte que ça n'affiche rien :'( . */

    function lire1(tableau_2)
    {
            var chaine = "Le tableau contient :"
            for(var i=0; i<tableau_2.length; i++)
                    chaine += "\n" + i + " -> " + tableau_2[i];
            return chaine;
    }
/* --------------------------- */
/* Pour un tableau associatif */

for(var indice in tableau_2);
/* Cette boucle va parcourir un par un tous les indices du tableau. 
Et une fois qu'on a les indices, on a les valeurs qui vont avec :).

De plus, si on laisse des cases vides (dans le cas d'un tableau numéroté),
elle ne seront pas parcourues par cette boucle. */


function lire2(tableau_2)
{
        var chaine = "Le tableau contient :";
        for(var indice in tableau_2)
                chaine += "\n" + indice + " -> " + tableau_2[indice];
        return chaine;
}
/* Au risque de me répéter, on utilise le plus souvent des tableaux numérotés.
Il est donc inutile d'utiliser cette boucle dans ce cas-là. */


/* ------------------------------------------------------------------------- */
/* Exploiter un tableau */
/* Parcours d'un tableau classique */
/* On va créer une fonction qui calcule la moyenne d'un tableau contenant des nombres (et aucune case vide). */

/* 
    La moyenne de plusieurs nombres, c'est (la somme de ces nombres) divisée par (le nombre de nombres).
    Avec deux nombres x et y, c'est donc         (x+y) / 2      ou       (w+x+y+z) / 4
*/


var tableau = new Array(10, 20, 30, 40);
function moyenne(tableau)
{
        var n = tableau.length;   // nombre de valeurs
        var somme = 0;
        for(i=0; i<n; i++)
                somme += tableau[i];
        return somme/n;   // somme divisee par le nombre de valeurs
}

/* ------------------------------------------------------------------------- */
/* Tableau à plusieurs dimensions */

function tableau_3dimension(){
// on cree le tableau bleu, contenant les lignes
var grille = new Array();

// on cree les lignes (tableau vert) les unes après les autres
for(var i=0; i<9; i++)
   grille[i] = new Array();

// on parcourt les lignes...
for(var i=0; i<9; i++)
   // ... et dans chaque ligne, on parcourt les cellules
for(var j=0; j<9; j++)
    grille[i][j] = 0;

for(var i=0; i<9; i++)
for(var j=0; j<9; j++)
alert("Case "+ i + "-" + j +" : "+ grille[i][j]);

return grille;
}
console.log(tableau_3dimension());
