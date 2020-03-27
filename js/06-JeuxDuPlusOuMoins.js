/* FONCTION POUR LE CHIFFRE ALEATOIRE */
function nb_aleatoire(min, max)
{
    var nb = min + (max-min+1)*Math.random();
    console.log(nb);
    return Math.floor(nb);
     
}

// je viens de voir cette solution : math.round(Math.random() * 10)
// math.random créer un nombre entre 0 et 1 et avec le *10 il devient entre 0 et 10 mais c'est à virgule donc on rajoute math.round pour arrondir.


/* Un exemple d'utilisation pour simuler un lancé de dé : */
/* var de = nb_aleatoire(1, 100);
alert("Vous lancez un dé et obtenez " + de); */



/* ------------------------------------------------------------------------------------------------------ */
/* CORRECTION V3 */
function manche(min, max)
{
    var nombre = nb_aleatoire(min, max);
    var compteur = 0;
    var saisie;
    var msg = 'Le nombre a deviner est compris entre ' + min + ' et ' + max + '.';

        do
        {
            saisie = prompt(msg);
            compteur++;

            // si "Annuler"
            if(saisie == null)
            return 0;

            if (saisie < nombre)
            {
                msg = "C'est plus grand"
            }
            else
            {
                msg = "C'est plus petit"
            }

        }while(saisie != nombre);

        return compteur;
}
/* manche(); */

function jouer()
{
    var compteur = 0; // nb de manches jouees
    var best_score = 0;  // meilleur score
    var score;  // score de la partie en cours
    var continuer;
    do
    {
         score = manche(1, 100);
         if(score)
         {
         compteur++;
         if(score < best_score || best_score == 0)
            best_score = score;
            continuer = confirm("Bravo, tu as gagne en " + score + " coups.\nVeux-tu rejouer ?");
         }else continuer = false;
    }
    while(continuer);

    // affichage du meilleur score
    alert("Tu as joue " + compteur + " manche(s).\nTon meilleur score est de " + best_score + " coups.");
    return best_score;
}
/* jouer(); */






/* ------------------------------------------------------------------------------------------------------ */
/* CORRECTION V1 */
function correction_v1()
{
var nb = nb_aleatoire(1, 100);  // nb a deviner
var cpt = 0;    // nb de coups
var saisie;
var msg = 'Le nombre à deviner est compris entre 1 et 100.';

do
{
     saisie = prompt(msg);
     cpt++;
     // message a afficher au prochain tour :
     if(saisie > nb)
          msg = "C'est moins";
     else
          msg = "C'est plus";
}
while(saisie != nb);

alert("Bravo, tu as gagne en " + cpt + " coups !");
}
/* correction_v1(); */
/* ------------------------------------------------------------------------------------------------------ */
/* CORRECTION V2 */
function PoM_manche(min, max)
{
     var nb = nb_aleatoire(min, max);
     var cpt = 0;
     var saisie;
     var msg = 'Le nombre a deviner est compris entre ' + min + ' et ' + max + '.';

     do
     {
          saisie = prompt(msg);
          cpt++;
          if(saisie > nb)
               msg = "C'est moins";
          else
               msg = "C'est plus";
     }
     while(saisie != nb);

     return cpt;
}
/* ----------- */
function correction_v2()
{
var cpt = 0;   // nb de manches jouees
var best_score = 0;  // meilleur score
var score;  // score de la partie en cours

do
{
     score = PoM_manche(1, 100);
     cpt++;
     if(score < best_score || best_score == 0)
          best_score = score;
     continuer = confirm("Bravo, tu as gagne en " + score + " coups.\nVeux-tu rejouer ?");
}
while(continuer);

// affichage du meilleur score
alert("Tu as joue " + cpt + " manche(s).\nTon meilleur score est de " + best_score + " coups.");
}
/* correction_v2(); */