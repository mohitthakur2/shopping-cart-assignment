import { pick } from "lodash";


// The source object
var obj = { 
    Name: "GeeksforGeeks", 
    username: "your_geeks"
}
  
// Using the _.pick() method 
console.log(pick(obj, ['Name', 'username']));
console.log('testing')