function vowelcount(phrase){

var vowels = phrase.match(/[aeiou]/gi);
var stripped = "";
for (i = 0; i < phrase.length; i++) {
  if(vowels.indexOf(phrase[i]) >= 0) stripped += phrase[i];

}
 var b = phrase.match(/[aeiou]/gi).length;
     

 return [stripped,b] 
}

     
console.log( vowelcount (" Women In Technology Are Awesome"));