/* Un traitement de faveur pour les formulaires */

/* Accéder aux éléments d'un formulaire */

/* En partant d'un formulaire (balise form), il est possible d'accéder à chacun des champs en utilisant leur attribut name. */

<form id="monFormulaire" method="post" action="demo.php">
   <p>
     <label for="pseudo">Pseudo :</label>
     <input id="pseudo" name="pseudo" type="text" />
   </p>
   <p>
     <label for="modepasse">Mot de passe :</label>
     <input id="modepasse" name="motdepasse" type="password" />
  </p>
  <p>
     <textarea name="contenu" cols="100" rows="15"></textarea><br />
     <input type="submit" value="Envoyer" />
   </p>
 </form>

/* Admettons que nous voulons agir sur le champ de texte qui s'appelle pseudo.
On va commencer par accéder au formulaire comme nous l'avons vu, par son id : */

var monForm = document.getElementById("monFormulaire");

/* Voyons maintenant comment accéder au champ nommé "pseudo" à partir de notre formulaire, sans utiliser son id */

/* ------------------------- *//* ------------------------- */
/* Première façon de faire */   /* Première façon de faire */
/* ------------------------- *//* ------------------------- */

/* On utilise directement pseudo, qui est en fait un sous-objet de notre formulaire : */
var monForm = document.getElementById("monFormulaire");
var champPseudo = monForm.pseudo;
/* Dans le cas des éléments de formulaires, on accède donc aux sous-objets directement par leur nom (l'attribut name). */




/* ------------------------- *//* ------------------------- */
/* Seconde manière : un tableau, des indices */
/* ------------------------- *//* ------------------------- */

/* 
    On va également pouvoir accéder aux éléments du formulaire en sachant que notre formulaire contient un tableau elements regroupant justement tous ses éléments.
    Ainsi, pour accéder au premier champ du formulaire : 
*/
var monForm = document.getElementById("monFormulaire");
var champ1 = monForm.elements[0];

/* !!!!!
    Je vous déconseille cette façon d'accéder aux éléments : 
    si vous insérez un champ, les indices (les numéros) changent, et il faut modifier le script en conséquence. 
!!!!! */


/* ------------------------- *//* ------------------------- */
/* Troisième manière : un tableau associatif */
/* ------------------------- *//* ------------------------- */

/* Cette façon d'accéder aux éléments est semblable à la précédente, sauf qu'on utilise pour les indices non pas les numéros, mais les noms. */
var monForm = document.getElementById("monFormulaire");
monForm.elements["pseudo"];

/* Certes, c'est un peu plus long que la première façon de faire, mais on comprend lors de la lecture que pseudo est un élément de formulaire. */




/* ----------------------------------------------------------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------------------------------------------------- */
/* Attributs, méthodes et évènements */

/* On récapitule... */

/* Pour accéder à un élément, on va donc généralement utiliser la méthode getElemementById de l'objet document */
var monForm = document.getElementById("idForm");

/* Si on veut récupérer un tableau contenant toutes les balises ayant un nom donné (toutes les images, par exemple), on va utiliser la méthode getElementsByTagName */
var images = document.getElementsByTagName("img");


/* Pour les éléments de formulaires : on peut utiliser le tableau elements du formulaire lui-même, ou bien directement le nom de l'élément.
Par exemple, pour accéder au champ nommé "pseudo" de notre formulaire d'id "idForm" : */
var champPseudo = monForm.pseudo;
/* OU */
var champPseudo = monForm.elements["pseudo"];
/* ----------------------------------------------------------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------------------------------------------------- */
/* Complément : le mot-clé "this" */

/* 
    Il existe cependant un cas où accéder à un élément est particulièrement simple : 
    c'est lorsque le code se trouve dans la balise HTML de l'objet en question. 
    On utilise dans ce cas le mot-clé this, qui désigne cet élément (d'où son nom).
*/
<img src="photo.jpg" alt="" onclick="this.src='image.jpg'" />
/* Ici, l'utilisation de this nous évite d'avoir à repérer l'image par son id. */

/* Un autre exemple, en utilisant une fonction avec un argument : */

function afficherDestination(lien)
{
     alert("Ce lien mene ici : " + lien.href);
}
<a href="page.html" onclick="afficherDestination(this);">Cliquez ici</a>
/* Quand on cliquera sur le lien, une boîte de dialogue nous en affichera la destination. */