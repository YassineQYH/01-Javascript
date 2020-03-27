/* Comment ça s'utilise ? */

/* Mais en fait, vous connaissez déjà une classe d'objet : les tableaux, dont le nom est Array ! */

/* --------------------------------------------------------------- */
/* Créer une instance */
/* Pour créer une instance, on utilise simplement le mot-clé new */

var monTableau = new Array();

/* 
    Dans cet exemple, nous avons donc créé une instance "monTableau" de la classe Array.

    Dans les parenthèses, on spécifie des paramètres propres à cette instance de l'objet. 
    Par exemple, pour l'objet "ordinateur", ça peut donner quelque chose comme ceci :
*/
var ordiDeJean = new Ordinateur("2 GHz", "120 Go", "512 Mo", "FX 2100");

/* 
    L'objet (la classe) "ordinateur" n'a pas encore été défini, 
    on ne sait donc pas trop s'il faut indiquer les caractéristiques sous forme de chaînes de caractères, de nombres, ...
    Ce sera à nous de le choisir au moment de la création de cet objet, et il nous faudra l'indiquer au vendeur, pour qu'il l'utilise correctement.
*/
/* --------------------------------------------------------------- */
/* Les attributs */

/* Pour accéder à un attribut (une variable) d'un objet (d'une instance), on utilise le nom de l'objet, suivi d'un point, puis du nom de l'attribut, comme ceci :
objet.attribut */

/* Un exemple avec l'attribut length de l'objet "Array" : */
monTableau.length

/* Que faire avec les attributs ? Et bien ce sont des variables qui "appartiennent" à l'objet, 
on peut donc les lire et/ou les modifier 
(bien que dans certains cas, comme ici, ça ne serve pas à grand chose de les modifier). */

/* Ainsi, si Jean rajoute de la RAM à son ordinateur, on va pouvoir modifier l'attribut correspondant : */
ordiDeJean.ram = "1024 Mo";

/* Il est également possible d'accéder à un attribut de cette manière : */
ordiDeJean["ram"];
/* Eh oui, les éléments d'un tableau associatif ne sont en fait que des attributs qu'on rajoute à notre tableau... */

/* --------------------------------------------------------------- */
/* Les méthodes */

/* 
    Pour exécuter une méthode d'un objet (d'une instance), 
    on utilise la même syntaxe que pour accéder à un attribut, sans oublier les parenthèses (puisqu'une méthode est une fonction).

    Un exemple avec la méthode sort() de l'objet Array :
*/
monTableau.sort();

/* Avec notre classe "ordinateur", on va pouvoir créer une méthode qui retournera une description sous forme de caractère. 
On l'utilisera ainsi : */
var message = ordiDeJean.description();
alert(message);

/* --------------------------------------------------------------- */
/* Destruction d'un objet */

/* 
    Petit rappel : comment ça se passe dans l'ordinateur lorsqu'on crée un tableau, avec var toto = new Array() ?

Citation : chapitre sur les tableaux

    Étudions de plus près ce qui se passe :

        L'ordinateur crée un tableau en mémoire (on lui en a donné l'ordre avec new).

        Il va également créer une variable dans sa mémoire (on lui a demandé avec var).

        Mais schématiquement, voilà ce qui va se passer : 
        en fait, on ne va pas "mettre" le tableau dans la variable (ça ne rentrerait pas, une variable c'est trop petit). 
        On va dire à la variable où se situe notre tableau dans la mémoire de l'ordinateur (c'est beaucoup plus facile comme ça).
*/

/* Dans cet exemple, notre tableau se retrouve "perdu" dans la mémoire de l'ordinateur : */
var toto = new Array();
toto = null;

/* 
    Tout ça pour vous dire que JS possède un système nommé ramasse-miettes, qui se charge de détruire automatiquement tout ce qui se retrouve ainsi "perdu".
    Ainsi, lorsqu'il n'y aura plus aucun "lien" vers un objet, ce dernier sera détruit.

    Si on veut détruire un tableau, il nous suffit donc de modifier la valeur de la variable qui contient l'adresse du tableau. 
    C'est ce qu'on a fait dans l'exemple ci-dessus : le tableau se retrouve "perdu" en mémoire, et le ramasse-miettes le détruira.
*/
/* Le mot-clé null est généralement utilisé pour désigner "rien". */


/* ------------------------------------------------------------------------------------------------------ */
/* On récapitule le vocabulaire... */



/* 
    Classe : c'est un modèle, une définition d'une "structure", qui va posséder des attributs et des méthodes.
    Exemple : une voiture, qui possède une couleur, une marque, un nom, etc.

    Instance : c'est un exemplaire d'une classe.
    Exemple : la voiture de mon oncle, qui a la couleur "rouge", de marque "Pijo" et de nom "Pijo 404".

    Objet : selon le sens, il s'agit d'une classe ou d'une instance.

    Attribut : c'est une variable qui "appartient" à un objet.
    Exemple : l'attribut "couleur" pour la voiture.

    Méthode : c'est une fonction propre à une classe. Elle va pouvoir agir sur l'instance à laquelle on l'applique.
    Exemple : repeindre la voiture.
*/




