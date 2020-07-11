// Import stylesheets
import './style.css';
function getUnique(array){
        var uniqueArray = [];
        
        // Loop through array values
        for(var value of array){
            if(uniqueArray.indexOf(value) === -1){
                uniqueArray.push(value);
            }
        }
        return uniqueArray;
    }
    
    var names = ["John", "Peter", "Clark", "Harry", "John", "Alice"];
    var uniqueNames = getUnique(names);
    console.log(uniqueNames); // Prints: ["John", "Peter", "Clark", "Harry", "Alice"]
// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h3>Remove Duplicate Array List in Javascript</h3>`;