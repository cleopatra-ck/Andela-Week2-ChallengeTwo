 function fizzBuzz(list1, list2) {
    // Your code here

    var combinedlength= list1.concat(list2);
    
    var x  = combinedlength.length;
    
            if(x% 3===0 && x%5===0){
console.log("fizzbuzz");

        }
else if (x%3 === 0){console.log("Fizz");
}
else if (x%5 === 0) {console.log("Buzz");
       }
else {console.log()}

   }



module.exports = fizzBuzz;