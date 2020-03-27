/* Les éléments, de A à Z ! */
/* 
Tableau schémas : 
https://openclassrooms.com/fr/courses/146276-tout-sur-le-javascript/144456-les-formulaires-de-bons-amis
*/

/* 
    Bouton* : regroupe les balises <button> ainsi que les <input /> de types button, reset et submit

    Case* : regroupe les <input /> de types checkbox et radio

    Select : balise <select>

    Textarea : balise <textarea>

    Texte* : regroupe les <input /> de types text, password et file (nous ne nous attarderons pas sur ce dernier)
*/

/* ------------------------------------- */
/* Attributs spécifiques aux formulaires */
/* ------------------------------------- */

/* Tous les éléments de formulaire possèdent ces attributs : */

/*  
    form : le formulaire auquel appartient l'élément

    name : nom de l'objet (le fameux nom qui nous sert à désigner cet objet en JS)

    type : type de l'objet (button, select, textarea, ou l'attribut HTML "type" dans le cas d'un input) 
*/

/* 
    checked et defaultchecked : valeur booléenne, true si la case est cochée (cochée par défaut dans le cas de defaultchecked), false sinon

    disabled : si cet attribut vaut true, l'objet est grisé (impossible à modifier / cliquer)

    maxlength : nombre de caractères maximal que peut contenir ce champ

    readonly : si cet attribut vaut true, l'utilisateur ne peut pas modifier le contenu du champ

    size : nombre de caractères / d'options qui sont affichés simultanément

    value et defaultvalue : valeur (valeur par défaut dans le cas de defaultvalue) de l'élément
*/
/* Quelques éléments particuliers : */

/* 
    textarea : rows et cols spécifient respectivement le nombre de lignes et de colonnes affichées

    select : multiple indique si on peut sélectionner plusieurs choix ou non ; 
    options est un tableau contenant les option, qui sont au nombre de length ; 
    et selectedindex est l'indice (dans le tableau d'options) du choix sélectionné.
*/

/* Quels attributs pour quels éléments

Se rajoutent les champs cachés (type hidden). */


/* ------------------------------------- */
/* L'objet option */ /*----------------- */
/* ------------------------------------- */
/* Abordons séparément les attributs de l'objet option (ce sont les choix des menus déroulants select). */

/* 
    disabled, form et value ont déjà été explicités plus haut

    index : indice du choix parmi le tableau options de l'élément select

    label : désigne le groupe auquel appartient ce choix

    selected et defaultselected : vaut true si ce choix est sélectionné / sélectionné par défaut
*/

/* ------------------------------------- */
/* Méthodes spécifiques aux formulaires */
/* ------------------------------------- */

/*     
    focus : donne le focus à cet élément (pour une zone de texte, place le curseur à l'intérieur)

    blur : enlève le focus de cet élément (en quelque sorte le contraire de focus)

    click : simule un clic de souris sur cet élément

    select : sélectionne ("surligne") le texte de ce champ 
*/

/* ------------------------------------- */
/* Évènements spécifiques aux formulaires */
/* ------------------------------------- */

/* 
    onFocus : lorsque l'élément reçoit le focus (pour une zone de texte, quand on place le curseur à l'intérieur)

    onBlur : lorsque l'élément perd le focus (en quelque sorte le contraire de onFocus)

    onChange : lorsque la valeur / l'état de l'élément change (quand on coche la case, qu'on modifie le texte, etc.)

    onSelect : lorsqu'on sélectionne (quand on "surligne") le texte de ce champ
*/