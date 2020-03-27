function calculette(){

    var operation = new Array();
       operation["+"] = function(x,y){ return x+y; };
       operation["-"] = function(x,y){ return x-y; };
       operation["*"] = function(x,y){ return x*y; };
       operation["/"] = function(x,y){ return x/y; };
       operation["moy"] = function(x,y){ return (x+y)/2; };
 
     var nbr1 = parseFloat(prompt("Premier nombre ? : "))
     var op = prompt("Fonction d'opération à appliquer ? : ")
     var nbr2 = parseFloat(prompt("Deuxieme nombre ? : "))
     
    
     var resultat = operation[op](nbr1, nbr2);
     alert("Resultat : " + resultat);
     
    }