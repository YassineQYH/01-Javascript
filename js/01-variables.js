/*  déclarer une variable. */
var nom;
let preonm;

/* Il y a également des mots "interdits"  */

/* Parmi cette liste de mots, 
les plus courants (pour un français) seraient 

"break", "case", "char", "continue", "delete", 
"double", "final", "long", "new", "public" et "super". */

/* Le JavaScript est sensible à la casse : 
autrement dit, il fait la différence entre lettres majuscules et minuscules.
Ainsi, nom, Nom et NOM sont trois variables différentes ! */

/* Notez que nous utilisons une mémoire temporaire : 
les variables sont détruites lorsque le visiteur quitte la page 
(lorsqu'il change de page, entre autres). */



/* Pour modifier la valeur d'une variable, rien de plus simple : 
on utilise pour cela le symbole d'affectation = de cette manière : */

var annee;
let message;

annee = 1991;
message = "Bonjour, visiteur";

/* Il n'est pas obligatoire de déclarer les variables au début du code, 
mais ça peut vous éviter de déclarer deux fois une même variable. */

/* Il est possible, lorsque l'on crée une variable, de lui affecter immédiatement une valeur. 
On dit qu'on initialise cette variable. */

var annee = 1991;
var message = "Bonjour, visiteur";

/* Pourquoi met-on des guillemets dans la variable message ?

Car ils délimitent du texte. */

var annee = 2004; // on declare et initialise la variable
annee = 2005; // on modifie une premiere fois
annee = 2006; // puis une deuxieme fois

var annee = 2006;
alert(annee);           /* ce qui affichera "2006"...
Remarquez l'absence de guillemets : en effet, on ne veut pas afficher le texte "annee", mais le contenu de cette variable */




/* -------------------------------------------------------------------- */
/* "Chaîne de caractères" */

/* C'est une suite de caractères 
(un caractère est une lettre, un chiffre, un espace, un tiret...) qui a un ordre précis. 
Cela forme donc... du texte ! 
C'est un type de donnée, au même titre qu'un nombre. */

// deux chaines de caracteres
var message1 = 'Une autre chaine de caracteres';
var message2 = "C'est une chaine de caracteres ...";

// maintenant, on les affiche
alert(message1);
alert(message2);



/* -------------------------------------------------------------------- */
/* La concaténation */
var age = 18; // on cree la variable pour pouvoir tester
alert("Vous avez " + age + " ans"); // on affiche les chaines mises bout-à-bout

/* Demander une chaîne de caractère au visiteur */

var age = prompt("Quelle age avez vous ? (en annéee svp)"); // on demande l'age
alert("vous avez " + age + " ans"); // on affiche la phrase





/* -------------------------------------------------------------------- */
/* Les nombres */

/* les nombres entiers : ce sont des valeurs exactes ;
les nombres à virgule : (les entiers très grands - beaucoup plus qu'un milliard - rentrent dans cette catégorie) */

/* Notez tout d'abord qu'on n'utilise pas la virgule, mais le point.
On écrira par exemple 3,14  3.14. */

var nombre = 1.234;
alert(nombre);

/* Des nombres pour calculer */

/*  + (addition), exemple : 52 + 19 = 71

    - (soustraction), exemple : 52 - 19 = 33

    * (multiplication), exemple : 5 * 19 = 95

    / (division), exemple : 5 / 3 = 1,666...667 (une petite vingtaine de "6")

    % (modulo) : ici, quelques explications s'impose.
    a % b (si b est positif, ce qui est le cas dans presque toutes les applications) est le reste de la division de a par b.
    Exemple : 52 % 19 = 14 (car 52 = 19*2 + 14) */

    var nbr_choisis_1 = prompt('Premier nombre ?');
    var nbr_choisis_2 = prompt('Deuxieme nombre ?');

    var resultat = nbr_choisis_1 / nbr_choisis_2;

    alert('Le quotient est ' + resultat);

    /* Notez qu'on aurait pu afficher directement le résultat, sans créer une variable pour celui-ci. 
    On aurait alors mis le calcul à la place du nom de la variable dans le message à afficher. */

    /* NaN signifie Not aNumber ("Pas un nombre") */



        /*  mais avec une addition...
        L'ordinateur va croire qu'il doit concaténer ces deux chaînes.
        Résultat : en tapant "8" et "12", on obtient... 812 ! */
    var resultat_addition = nbr_choisis_1 + nbr_choisis_2;

    alert('résultat est ' + resultat_addition);

    /*-------------------------------------------------------------------- */
    /* CONVERTIR ::  Chaîne --> nombre */

    /* Rassurez-vous, il est fort heureusement possible d'effectuer "manuellement" cette conversion, grâce à 

    parseInt(chaine_a_convertir) (convertir en un nombre entier) 
    et à 

    parseFloat(chaine_a_convertir) (convertir en un nombre décimal). */


    /* Quelques exemples vous montrant la souplesse de ces fonctions :

    parseInt("12.9 Euros") vaudra 12 (on convertit en entiers, les chiffres après la virgule sont ignorés)

    parseInt(" 12 Frs ") vaudra également 12 (l'espace en début de chaîne est ignoré)

    parseInt("J'ai 12 Euros") vaudra Nan (la chaîne commence par une lettre)

    parseFloat(" 12.9 Frs ") vaudra 12.9

    parseFloat("3,14") vaudra... 3 : il faut utiliser le point et non la virgule. La conversion va donc s'arrêter après le "3". */

    /* on convertit en nombres entier /(ou decimaux) et on calcule */
    var resultat_vrai_addition = parseInt(nbr_choisis_1) + parseInt(nbr_choisis_2);
    alert('La somme de ces deuxu nombres est ' + resultat_vrai_addition);


    /* CONVERTIR ::  Nombre --> Chaîne */
    /* Si je ne veux pas les calculer j'ajoute '' */
    var nombre1 = 8;
    var nombre2 = 12;
    alert(nombre1 + '' + nombre2);

    /*-------------------------------------------------------------------- */
    /* Priorités de calcul - opérateurs pour simplifier l'écriture*/

    resultat = resultat + X;     // on ajoute X à la variable resultat
    /* resultat = resultat + X;     // on ajoute X à la variable resultat */
    resultat += X;     // on augmente la valeur de resultat de X

    /* Il existe, de la même manière, les opérateurs */


/*     -= (on retranche la valeur de la deuxième variable à celle de la première), 
    *= (on multiplie la valeur de la première variable par celle de la deuxième), 
    /= (idem mais avec une division) 
    et %=. */


    /*-------------------------------------------------------------------- */
    /* Incrémentation / décrémentation */

    /* Lorsque l'on veut augmenter de 1 la valeur d'une variable (on dit incrémenter), par exemple pour un compteur, on utilise la notation : */

variable++;

/* De même, pour décrémenter (diminuer la valeur de 1) une variable, 
le code est le suivant : */

variable--;


/* Voici plusieurs lignes de codes qui sont parfaitement équivalentes. */

variable += X;
variable = variable + X; 

variable -= X;
variable = variable - X;

variable *= X;
variable = variable * X;

variable /= X;
variable = variable / X;

variable %= X;
variable = variable % X;


/* Les opérateurs pour incrémenter / décrémenter : */

variable++;
variable += 1;
variable = variable + 1;

variable--;
variable -= 1;
variable = variable - 1;