/* Les objets HTML */

/* Au sommet de la hiérarchie... */

/* -------------------- *//* -------------------- */
/* L'objet window */        /* L'objet window */
/* -------------------- *//* -------------------- */

/* 
    L'objet window "représente" la fenêtre de votre navigateur. 
    Ça va être un objet très utilisé, car il possède de nombreux sous-objets. 
*/

/* Prenons nos trois fonctions qui font apparaître des boîtes de dialogues, 
alert(), 
prompt() et 
confirm(). */

/* Ah non, ce ne sont pas des méthodes, car on ne retrouve pas la syntaxe objet.methode() ! */

/* En fait, si on voulait tout écrire, il faudrait employer 
window.alert(), 
window.prompt() et 
window.confirm()... 

ce sont donc bel et bien des méthodes, d'un certain objet appelé "window" ! */


/* on l'utilisera souvent, car c'est un objet de base, pour ne pas dire l'objet de base : 
c'est pour cela qu'il est facultatif de préciser son nom, comme vous l'avez toujours fait en écrivant alert() */

/*  c'est le seul objet qu'on peut ne pas écrire quand on l'utilise. */


/* 
    Toutes les fonctions ne sont pas des méthodes de window !
    En fait, parmi les fonctions qu'on a vues, seules les trois citées plus haut en sont.
    Tenez, par exemple, isNaN() est une fonction qui n'appartient à aucun objet.
*/
/* -------------------- *//* -------------------- */
/* L'objet document */      /* L'objet document */
/* -------------------- *//* -------------------- */

/* 
    L'objet document est un sous-objet de window. Cet objet représente la page HTML affichée dans le navigateur. 
    C'est un objet assez important, qu'il est impératif d'écrire ! On ne peut pas l'omettre comme window.

    Nous allons passer par ses méthodes pour accéder aux éléments de notre page.
*/

/* ------------------------------------------------------------------------------------------------------------------- */
/* Les objets du document */

/* -------------------- *//* -------------------- */    
/* Atteindre les objets *//* Atteindre les objets */
/* -------------------- *//* -------------------- */ 

/* Il est possible d'atteindre (comprenez accéder à) tous les éléments de la page HTML avec deux méthodes de l'objet document : */

/* 
    document.getElementById("id");

    document.getElementsByTagName("balise");
*/

/* getElementById("id")

Cette méthode permet d'accéder très facilement à l'élément dont l'id est id.
Je vous rappelle que deux éléments différents doivent avoir des ids différents. Cette fonction nous donne donc bien un élément (ouf :D ).*/


 /* getElementsByTagName("balise")

Cette méthode retourne sous forme de tableau tous les éléments HTML dont on donne la balise en argument. */

document.getElementsByTagName('textarea');
/* Cet exemple va retourner un tableau contenant tous les éléments <textarea> de la page.

Puisque la méthode retourne un tableau, il est bien sûr possible d'accéder à chacun des éléments. 
Si on veut accéder au second <textarea> de la page, on procédera donc ainsi (rappelez-vous, on commence à compter à partir de 0)  */

document.getElementsByTagName('textarea')[1];

/* le tableau retourné peut astucieusement être utilisé avec une boucle, de manière à récupérer des éléments particuliers repérés 
par exemple par leur attribut class ; 
on pourra ainsi appliquer des changements (comme les masquer) uniquement à ces éléments là. */


/* !!!!!
                    On écrit getElementsByTagName, car on récupère un tableau d'éléments.
                    Avec getElementById, on récupère un élément unique, donc pas de s.
!!!!! */

/* il existe un moyen de savoir si la méthode "getElementById" fonctionne sur le navigateur qui exécute le script. */

if(!document.getElementById)     // si la méthode n'existe pas (le ! indique la négation)
     alert("Sympa ta charette...\nVa donc télécharger un vrai navigateur :p");

/* ------------------------------------------------------------------------------------------------------------------- */
    /* -------------------- *//* -------------------- */  
    /* Les attributs */             /* Les attributs */
    /* -------------------- *//* -------------------- */  

    /* On peut citer les attributs id 
    et 
    className (qui correspond à l'attribut HTML "class"). */

    /* !!!!!
            Ce dernier est l'un des rares attributs dont le nom n'est pas le même qu'en HTML.
            La cause : le mot-clé "class" est réservé en JS (on n'a pas le droit de l'utiliser pour des noms de variables ou autres). 
            Donc il a fallu trouver un autre nom, d'où className.
    !!!!! */

/* Modifier l'adresse d'une image et ses dimensions : */

monImage = document.getElementsByTagName("img")[0];
monImage.src = "../images/Roi-Liche.jpg";
monImage.width = "400";
monImage.height = "200";



monImage = document.getElementsByTagName("img")[1];
monImage.src = "../images/Sylvanas.jpg";
monImage.width = "400";
monImage.height = "200";;

/* Afficher la destination d'un lien : */

alert( document.getElementById("idLien").href );

/* ------------------------------------------------------------------------------------------------------------------- */
/* -------------------- *//* -------------------- */  
/* Les évènements */        /* Les évènements */
/* -------------------- *//* -------------------- */  

/* Voici une liste d'évènements qui s'appliquent à la plupart des objets. */

/* Rappel : 
les évènements doivent se noter en minuscule, même si on les écrit onEvent pour plus de lisibilité. */

/* 
    onClick et onDblClick : lors d'un clic / double clic sur l'élément en question

    onKeyPress : lorsqu'on appuie sur une touche avec cet élément sélectionné

    onKeyDown et onKeyUp : lorsqu'une touche est enfoncée / relâchée avec cet élément sélectionné

    onMouseOver et onMouseOut : lorsque le pointeur de la souris arrive sur l'élément / sort de cet élément

    onMouseMove : lors d'un déplacement de la souris au-dessus de cet élément

    onMouseDown et onMouseUp : lorsque le bouton de la souris est enfoncé / relâché sur cet élément
*/

/* -------------------- */ 
/* Leur utilisation */
/* -------------------- */

/* La première façon de déclencher un script lors d'un évènement, c'est d'utiliser l'attribut HTML, comme nous l'avons vu dans l'un des premiers chapitres : */

/* <img src="azerty.png" alt="" onclick="alert('Oui ?');" /> */

/* Mais il est également possible d'indiquer cet évènement directement en JS.
Voici une image (qu'on va repérer grâce à son id) : */

/* <img src="azerty.png" alt="" id="uneImage" /> */

/* Et voici le même exemple que ci-dessus, mais directement en JS : */

/* document.getElementById("uneImage").onclick = function()
{
     alert("Oui ?");
} */

document.getElementById("sylv").onclick = function()
{
    alert("oui ?");
}
/* document.getElementById("roiliche").onclick = function()     // TEST POUR SAVOIR SI çA FONCTIONNE AVEC LE MEME NOM DE FONCTION ET C'EST OUI !
{
    alert("non ?");
} */
/* 
        Ce code JS doit être placé dans la page, après l'image !
        S'il se trouve dans l'en-tête de la page, l'image n'aura pas encore été créée lors de son exécution 
        (qui se fait au fil du chargement de la page), et JS ne pourra donc pas lui associer un évènement.
*/

/* 
    On associe bien une fonction à l'évènement !
    On peut également le faire de cette manière : 
*/
function quoi()
{
      alert("Quoi ?");
};
document.getElementById("roiliche").onclick = quoi;   // on parle de la fonction elle-meme : pas de parentheses

/* En revanche, ceci est faux  */

/* document.getElementById("uneImage").onclick = alert("Oui ?"); */