// initialisations
/* ----------------------------------------------------------------------------------------------------- */
/* 
        On va demander le contenu de chaque puce grâce à prompt().
        C'est ici qu'on va devoir utiliser une boucle : on demande tant que l'utilisateur ne laisse pas le champ vide.
 */
/* ----------------------------------------------------------------------------------------------------- */


// initialisations
var zCode = '<liste>\n';
var saisie = '';

// boucle
do
{
        saisie = prompt("Contenu de la puce ?");
        if(saisie)
                zCode += "<puce>" + saisie + "</puce>\n";
}while(saisie);

// fin
zCode += "</liste>";
alert(zCode);


/* ----------------------------------------------------------------------------------------------------- */
var zCode = '';
var saisie = '';
// variable "temporaire", pour le 2e point
var texte = '<liste>\n';

do
{
        // on ajoute le texte saisi au tour precedent
        zCode += texte;
        // on demande du texte et on enregistre dans la variable "temporaire"
        saisie = prompt("Contenu de la puce ?");
        texte = "<puce>" + saisie + "</puce>\n";
}while(saisie);

// le 1er "detail"
if(zCode == '<liste>\n')
        zCode = '';
else
        zCode += "</liste>";

alert(zCode);
/* ----------------------------------------------------------------------------------------------------- */
/* 
        Version 2 : tout-en-un

        Une autre solution consisterait à enregistrer et à tester en même temps le texte saisi.

        Comment ? Eh bien en plaçant l'affectation dans la condition.
        En voici le principe :
*/

/* 
        var saisie;
        while(saisie = prompt("Texte"))
                // instructions
*/
/* ce qui équivaut, je vous le rappelle, à ceci : */

/* 
        var saisie;
        while( (saisie=prompt("Texte")) == true )
                // instructions
*/

// initialisation
var zCode = "<liste>\n";
var saisie;

// boucle
while(saisie = prompt("Contenu de la puce ?"))
        zCode += "<puce>" + saisie + "</puce>\n";

// finitions
if(zCode == '<liste>\n')
        zCode = '';
else
        zCode += "</liste>";

alert(zCode);
/* ----------------------------------------------------------------------------------------------------- */