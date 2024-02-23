var fruits:string[] = ["apple " , "mango" ,"banana"];
var fruits2:string[];
fruits2=["apple " , "mango" ,"banana"];
console.log(fruits);
console.log(fruits2);

console.log("next line ");
var fruits3:Array<string>;
fruits3=["apple " , "mango" ,"banana"];
console.log(fruits3);



    /// multi dimentional array

    var value:(string | number)[] = [ "shaman " , 200];

    var value2:Array<string | number>;
    value2=[ "shaman " , 200];
    console.log(value)
    console.log(value2)
    
    /// acces Array Element 

 console.log(fruits2[2])

 // Loops in Array 
 console.log("for loop in array ")

 for(var i=0;i<fruits.length;i++){
    console.log(fruits[i])
 }
    

 // Reading element using for loop with in operators 
 console.log("each loop in array ")

 for(var j in fruits){
    console.log(fruits[j])
 }




 console.log("Two Dimnetional array in Typescript ");
 ///2D Array Decleration and Initialization

 var mayarray:number[][]=[[2,3] , [4,5] , [6,7]]

 var mayarray2:Array<string | number[]>[];
     mayarray2=[["shaman", "baloch "] , ["ali " , "ahmed" ]]
console.log(mayarray)
console.log(mayarray2)


///  multi dimentional array in 2D Array 
console.log(" multi dimentional array ")

var name_id :(string | number)[][] = [ [ "shaman " ,23], ["ali " , 34] , ["naveed " , 40]]
console.log(name_id)
// Acceses  2D Array 
console.log(name_id[1][0])
console.log(name_id[1][1])

