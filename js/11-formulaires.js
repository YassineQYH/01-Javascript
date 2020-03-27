/* L'objet "form" */  /* ---------------- */
/* ---------------- *//* ---------------- */

/* Commençons par l'objet form, qui représente le formulaire lui-même : tous les éléments du formulaire en sont des sous-objets.
Nous n'allons pas parler très longuement de lui, mais simplement présenter deux évènements qui lui sont associés : onReset et onSubmit. */

/* onSubmit */        /* ---------------- */
/* ---------------- *//* ---------------- */

/* 
    Cet évènement se produit lorsque le formulaire est envoyé. 
    Il est particulièrement intéressant, car il va nous permettre de vérifier si les champs sont bien remplis avant d'envoyer le formulaire ; 
    si ce n'est pas le cas, on pourra annuler l'envoi.
*/

                /* Pour rappel, l'envoi d'un formulaire en HTML se fait par un clic sur un élément input de type submit : */
                                            <input type="submit" value="Envoyer" />

/* Comme je vous l'ai dit, il est possible de bloquer l'envoi d'un formulaire, et ce, de cette manière : */
<form method="post" action="page.php" onsubmit="return x;"></form>

/*     Si x vaut true, le formulaire est envoyé normalement.

    En revanche, si x vaut false, alors le formulaire n'est pas envoyé (il ne se passe rien). */


    /* On va donc créer une fonction, nommée verifier dans l'exemple qui suit, qui va vérifier le contenu du formulaire, pour éventuellement en bloquer l'envoi. */

<form method="post" action="page.php" onsubmit="return verifier(this);">
      {/* ici, le contenu du formulaire */}
     <input type="submit" value="Envoyer" />
</form>

/* Et notre fonction ressemblera schématiquement à ceci  */

function verifier(f) {
    if( /* le formulaire est bien rempli */ )
         return true;
    else
    {
         alert('Le formulaire est mal rempli');
         return false;
    }
}
/* !!!!! 
    il faut toujours utiliser un bouton de type submit, 
    sinon l'envoi du formulaire devient impossible pour quelqu'un ne disposant pas de JavaScript, ou l'ayant désactivé.
!!!!! */


/* onReset */          /* ---------------- */
/* ---------------- *//* ---------------- */

/* Le second évènement typique des formulaires se nomme onReset, et est appelé lorsque le formulaire est remis à zéro par un bouton de type reset. */

/* OnReset s'utilise assez facilement, de manière semblable à onSubmit. Voyez plutôt: */
<form method="post" action="page.php" onreset="return confirm('Vraiment ?');"></form>

/* 
    Dans ce cas, si l'utilisateur veut réinitialiser le formulaire, il devra le confirmer. 
    Si il confirme son action, true est renvoyé, et le formulaire est alors réinitialisé ; 
    s'il annule, c'est false qui est retourné, et rien ne se passe.
*/

                        /* Notez qu'on peut bien sûr exploiter à la fois onSubmit et onReset pour un même formulaire. */
/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------- */
