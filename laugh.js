// Write an anonymous function expression that 
// stores a function in a variable called "laugh" 
// and outputs the number of "ha"s that you pass 
// in as an argument.

/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function(num) {
    var h = "";
    for(var i = 1; i <= num; i++) {
       h += "ha";
    }
    return h + "!";
};

console.log(laugh(10));
