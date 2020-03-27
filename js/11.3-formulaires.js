/* Les éléments et leur fonctionnement */

/* Les zones de texte */
/* Lire et modifier leur contenu */

/* On accède au contenu des champs textes (input de type text ou password, ainsi que textarea) à l'aide de l'attribut value, qu'on peut lire, mais aussi modifier. */


/* Pour afficher la valeur du champ pseudo du formulaire monForm : */

alert("Vous avez saisi le pseudo : " + document.getElementById("formulaire").elements["nom"].value);
/* Si on veut modifier le contenu d'un textarea dont l'attribut name vaut infos : */
document.getElementById("formulaire").elements["nom"].value = "Vous testez un script JS";

/* 
Les trois balises HTML citées ci-dessus possèdent l'attribut booléen readonly, qui la rend non modifiable par l'utilisateur : 
on peut ainsi les utiliser pour afficher des messages.
*/

/* ----------------- *//* ----------------- */
/* L'objet "select" *//* L'objet "select" */
/* ----------------- *//* ----------------- */

/* L'objet select représente une liste déroulante, et comme dans toute liste, il peut être intéressant de savoir quel choix est sélectionné ; voyons comment procéder. */
/* Prenons une liste dont le code HTML (qui se trouve à l'intérieur d'un formulaire) est le suivant : */
/* Vous êtes : */ /* Ce qui est à gauche est censé être du HTML et non un commentaire */
     <select name="genre" onchange="voirSelection(this)">
          <option value="rien">Choisissez...</option>
          <option value="garcon">Un garçon</option>
          <option value="fille">Une fille</option>
          <option value="saispas">Je ne sais pas</option>
     </select>

/* On va ici utiliser l'évènement onChange, qui appellera la fonction quand l'utilisateur modifiera le choix. */
/* Comment récupérer la valeur de la sélection ? */

/* 
    Dans un premier temps, on va récupérer le numéro de l'option sélectionnée, grâce à l'attribut selectedIndex.

    Ensuite, il ne nous reste plus qu'à lire la valeur value de l'option correspondante, qui se trouve dans le tableau options
*/

function voirSelection(liste)
{
     var numero = liste.selectedIndex;
     var valeur = liste.options[numero].value;
     alert("Vous avez choisi : " + valeur);
}
/* Bien entendu, il y a moyen de réduire ce code en faisant comme ceci : */
var valeur = liste.options[liste.selectedIndex].value;
/* Il ne vous reste plus qu'à analyser le contenu de la variable valeur pour agir en conséquence, un peu comme ceci : */

function voirSelection(liste)
{
     var valeur = liste.options[liste.selectedIndex].value;
     if(valeur != 'rien')
     {
          if(valeur == 'saispas')
               alert('Noob...');
          else
               alert(valeur);
     }
}

/* ----------------- *//* ----------------- */
/* Cases à cocher et boutons radio
Une seule case à cocher */
/* ----------------- *//* ----------------- */

/* La première utilisation des cases à cocher est d'en utiliser une seule 
(par exemple pour activer / désactiver un aperçu automatique) */

/* Dans ce cas, on peut savoir si la case est cochée grâce à son attribut checked, 
qui est une valeur booléenne (il vaut soit true, soit false). 
On peut également la (dé)cocher, soit en modifiant la valeur de cet attribut, 
soit en appelant la méthode click() (qui simulera un clic de souris sur la case). */

/* Par exemple, si on a une checkbox dont le nom est "maCase", dans un formulaire dont l'id est "idForm"  */


if(document.getElementById("idForm").maCase.checked)
     alert("La case est cochee");
else
{
     document.getElementById("idForm").maCase.checked = true;
     alert("La case n'etait pas cochee, mais maintenant elle l'est");
}

/* ----------------- *//* ----------------- */
/* radio et groupe de checkboxes */
/* ----------------- *//* ----------------- */



/* Il est également possible d'utiliser les cases à cocher par groupe : dans ce cas, toutes les cases du groupe auront le même nom. C'est également toujours le cas avec les boutons radio.

La technique pour y accéder est alors légèrement différente. Prenons le code suivant (on suppose que ces balises se trouvent dans un formulaire dont l'id est encore "idForm") : */

Vous aimez : <br />  // Ce qu'il y a sur la gauche n'est pas du commentaire
   <input type="checkbox" name="mesCases" value="pizza" /> la pizza <br />
   <input type="checkbox" name="mesCases" value="tartiflette" /> la tartiflette <br />
   <input type="checkbox" name="mesCases" value="ratatouille" /> la ratatouille <br />
   <input type="button" value="Ok" onclick="afficherMessage()" />

/* Toutes ces cases possèdent le même nom ;  */

/* 
     document.getElementById("idForm").mesCases n'est donc pas un objet, mais un tableau d'objets. 
     On va donc pouvoir accéder à la case numéro i avec document.getElementById("idForm").mesCases[i].
*/

function afficherMessage()
{
     var monForm = document.getElementById("idForm");
     var pizza =monForm.mesCases[0].checked;
     var tartiflette = monForm.mesCases[1].checked;
     var ratatouille = monForm.mesCases[2].checked;
     if(tartiflette)
          alert("Vous venez de la montagne, non ?");
     if(ratatouille && !pizza)
          alert("Vous preferez la ratatouille a la pizza ?!");
}

/* Avec ce script, on récupère l'état de chaque case (cochée ou non), et on affiche ensuite des messages selon les cases cochées. */

/* 
     Bien entendu, on n'est pas obligé d'utiliser des variables pour enregistrer l'état de chaque case, on aurait pu écrire directement les 
     document.monForm.mesCases[i] dans les if().

     Si tout est décomposé, c'est pour que vous visualisiez mieux la chose
*/
/* Il est à noter qu'on peut récupérer la valeur d'une case : */
alert(document.getElementById("idForm").mesCases[0].value);

/* 
     On peut également utiliser une boucle pour parcourir notre tableau de cases et savoir lesquelles sont cochées.
     Et c'est d'ailleurs très intéressant dans le cas des boutons radio, car il ne peut y en avoir qu'un seul de coché parmi ceux ayant le même attribut name 
*/

/* Reprenons notre exemple précédent avec des boutons radios : "Vous préférez : [...]". */
function radio()
{
     var cases = document.getElementById("idForm").mesCases;
     var platFavori;
 
     // on recherche le bouton coche (s'il y en a un)
     for(var i=0; i<cases.length; i++)
          if(cases[i].checked)
               platFavori = cases[i].value;
 
     // s'il y en a un, on affiche la valeur correspondante
     if(platFavori)    
          alert("Votre plat favori est : " + platFavori);
}

/* On pourrait stopper la boucle précédente dès qu'on a trouvé un bouton sélectionné, étant donné qu'il ne peut pas y en avoir plusieurs.
Il suffirait pour cela de modifier la condition de boucle : */
for(var i=0; i<cases.length && !platFavori; i++)

/* L'intérêt de se baser sur l'attribut value, c'est qu'on peut rajouter des choix à notre formulaire sans avoir à toucher au code JS : plutôt intéressant */

