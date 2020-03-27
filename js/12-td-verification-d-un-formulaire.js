/* Une vérification en JS n'est pas fiable, pour la simple et bonne raison qu'il est très facile de désactiver le JS ! */

/* Ceci dit, elle a l'avantage d'être très agréable pour le visiteur, car s'il est mal rempli, le formulaire n'est pas envoyé.
Ce qui signifie : */

/* 
    qu'on reste sur la page du formulaire : ça évite des redirections, et donc les temps de chargements qui vont avec (qui peuvent être longs si le serveur est saturé) ;

    que si vous avez oublié de remplir un champ, pas de risque d'être redirigé sur un formulaire vide (chose très agaçante, surtout si vous avez passé beaucoup de temps à le remplir) ;

    que l'utilisateur peut être prévenu qu'un champ est mal rempli dès qu'il a fini de le remplir.
*/


/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/* S'il est mal rempli, en plus de bloquer l'envoi, on va colorer les champs qui posent problème */
/* Pour ce faire, on va modifier la couleur d'arrière-plan. */
/* ------------------------------------------ */
/* FONCTION POUR MODIFIER LA COULEUR DU CHAMP */
function surligne(champ, erreur)
{
   if(erreur)
      champ.style.borderColor/* backgroundColor */ = "#fba";
   else
      champ.style.borderColor/* backgroundColor */ = "green";
}
/* Si le second paramètre vaut true, cette fonction colore le champ en rouge pâle. Sinon, elle enlève le coloriage. */
/*  Pour effacer le coloriage, il suffit de ne pas indiquer de couleur (en laissant les guillemets vides)("").
    Cela redonnera au champ sa couleur d'arrière-plan par défaut */
/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/* FONCTION POUR VERIFIER LA LONGUEUR DU CHAMP PSEUDO */
function verif_pseudo(champ)
{
    if(champ.value.length <= 3 || champ.value.length > 10)
    {
        surligne(champ,true);
        return false;
    }
    else
    {
        surligne(champ,false);
        return true;
    }
}
/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/* Pour la construction d'une regex vérifiant l'adresse e-mail */
/* 
    La regex que nous allons utiliser est la suivante :
    /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/ 
*/
/* FONCTION POUR VERIFIER L'ADRESSE MAIL */
function verif_mail(champ)
{
    var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    if(!regex.test(champ.value))
    {
       surligne(champ, true);
       return false;
    }
    else
    {
       surligne(champ, false);
       return true;
    }
}
/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/* FONCTION POUR VERIFIER L'AGE */
function verif_age(champ)
{
    var age = parseInt(champ.value);

    if(isNaN(age) || age < 5 || age > 111)
    {
        surligne(champ,true);
        return false;
    }
    else
    {
        surligne(champ, false);
        return true;
    }
}
/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/* FONCTION POUR TOUT VERIFIER AVANT L'ENVOI */
function verif_global(f)
{
    var pseudo_ok = verif_pseudo(f.pseudo);
    var mail_ok = verif_mail(f.email);
    var age_ok = verif_age(f.age);

    if(pseudo_ok && mail_ok && age_ok)
    {
        return true;
    }
    else
    {
        alert("Veuillez remplir correctement tous les champs");
        return false;
    }
}
/* Petit rappel : pour autoriser ou bloquer l'envoi, il suffit de renvoyer true ou false lorsque le formulaire est envoyé : */
                        /* <form [..] onsubmit="return false"> */
/* Voici donc la modification à effectuer pour bloquer l'envoi si le formulaire est mal rempli : */
                        /* <form action="page.php" onsubmit="return verifForm(this)"> */


/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/* 
        Au risque de me répéter, cette vérification n'est pas fiable.
        Elle précède, mais ne remplace pas une vérification des données côté serveur (en PHP par exemple).
*/