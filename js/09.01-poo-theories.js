/* Qu'est-ce qu'un objet ? */

/* D'abord, une classe... */

/* En POO, on va définir des classes d'objets, qui regroupent :

    des variables, appelées attributs, qui caractériseront l'objet : 
    ce sont les bases de notre "structure". Un attribut peut très bien être un objet : 
    on dira alors que c'est un sous-objet de notre classe.

    des fonctions, appelées méthodes, qui permettront (entre autre) d'agir sur cet objet.

    En JS, certains objets possèdent également des évènements, que l'utilisateur pourra utiliser pour déclencher un script.
    C'est un peu particulier, c'est pourquoi nous en parlons séparément. */




/*  Dans notre cas, on va définir notre classe "ordinateur" par les attributs :

    cpu : la fréquence du processeur

    disqueDur : la capacité du disque dur

    ram : la quantité de mémoire vive

    carteGraphique : le nom de la carte graphique */



/*  On pourra définir les méthodes suivantes :

    description() qui retourne (sous forme de phrase) les caractéristiques de l'ordinateur. 
    Du style : "Cet ordinateur est équipé d'un processeur cadencé à xx GHz, d'un disque dur d'une capacité de ... blabla..."

    caracteristiques() : renvoie une liste en HTML des composants avec leur(s) caractéristique(s)

    plusDeRamQue(x) : renvoie true si l'ordi possède plus de x Mo de Ram, sinon false

    etc. selon les besoins / votre imagination  */


    /* Des exemples de classes d'objets */

/*     On peut imaginer, comme l'a fait M@teo21 dans son cours sur le C/C++, 
    un objet "personnage" représentant un personnage dans un jeu de rôle. 
    Parmi les attributs, on trouvera la vie, la mana, la force, etc. 
    et parmi les méthodes, on aura attaquer, boire une potion, changer d'arme, etc. */