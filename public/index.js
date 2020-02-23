
var arr = [];
function ch() { 
   
var element = document.getElementById("ch").value;
console.log(element.length);
console.log(element.charAt(element.length - 1));
    
document.getElementById("count").innerHTML = `${element.length}`;

element = element.toUpperCase();

var to = document.getElementsByTagName("h3");
    
var t = element.split("");
    
var counta = t.filter(x => x === "A").length;
var counte = t.filter(x => x === "E").length;
var counti = t.filter(x => x === "I").length;  
var counto = t.filter(x => x === "O").length;
var countu = t.filter(x => x === "U").length;
    

    
    document.getElementsByTagName("h2")[0].innerHTML = `A ${counta}`;
    document.getElementsByTagName("h2")[1].innerHTML = `E ${counte}`;
    document.getElementsByTagName("h2")[2].innerHTML = `I ${counti}`;
     document.getElementsByTagName("h2")[3].innerHTML = `O ${counto}`;
     document.getElementsByTagName("h2")[4].innerHTML = `U ${countu}`;
}