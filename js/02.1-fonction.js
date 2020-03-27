/* Créer une fonction */
/* -------------------------------------------------------------------- */


/* Une fonction est une suite d'instructions ayant un rôle précis (pour ne pas dire une fonction précise...).

    On lui donne (éventuellement) des arguments (également appelés paramètres) entre les parenthèses qui suivent le nom de cette fonction.

    Certaines fonctions nous renvoient une valeur, que l'on peut par exemple enregistrer dans une variable. */


    var message = prompt('Entrez un texte');

    /*     On appelle la fonction prompt()

    On lui fournit un seul argument, qui est 'Entrez un texte' (c'est le message d'invite qui sera affiché dans la boîte de dialogue).

    Cette fonction nous renvoie le texte saisi par l'utilisateur, qu'on enregistre ici dans la variable message. */

    /* -------------------------------------------------------------------- */
    /* Déclarer et appeler une fonction */

    /*     
    on dit que l'on déclare une fonction lorsqu'on la "crée" : on dit à l'ordinateur qu'elle existe et ce qu'elle doit faire (on écrit le code de cette fonction).

    On pourra ensuite appeler notre fonction, ce qui veut dire qu'on va lui demande d'exécuter son code. 
    */


   /* -------------------------------------------------------------------- */
   /* Déclarer notre fonction */

   /* lors de la déclaration d'une fonction, celle-ci n'est pas exécutée, mais mise en mémoire, pour être exécutée plus tard. */

   /*
   Une fonction se déclare à l'aide d'un mot-clé, un peu à la manière d'une variable(qui est var pour les variables) : ici, il s'agit de function.

   Le nom doit être suivi de parenthèses (même si elles ne contiennent rien), qui vont contenir les éventuels arguments.
   
   J'attire votre attention sur ces parenthèses. Elles sont indispensables, même si elles sont vides.
   */

   /* function conversion() */

    /* -------------------------------------------------------------------- */
   /* Contenu de la fonction */

   /* On fait suivre cette déclaration du contenu de la fonction 
    on délimite le contenu de notre fonction grâce à des accolades { et } : on forme alors ce qu'on appelle un bloc d'instructions.
    */

    function conversion(){

        var euros = prompt('Votre valeur en euros est ? : ');
        var franc = euros * 6.55957;
        alert (euros + "Euros\n" + franc + "Frs");
    }

    /* Appeler notre fonction */
    conversion();


    