 function fizzBuzz(list1, list2) {
    // Your code here

    var combinedlength= list1.concat(list2);
   
    var res = "";
    
    var x  = combinedlength.length;
   
   
if(x% 3==0 && x%5==0){res += "Fizzbuzz";}

        
else if (x%3 == 0){res +="Fizz";}

else if (x%5 == 0) {res +="Buzz";}
       

else 
{res = x ;}
          
return res;
}

module.exports = fizzBuzz;
