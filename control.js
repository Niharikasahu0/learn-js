// Control flow=Control flow means how our program runs line by line .
//IF
const temperature=57
if (temperature===44){
    console.log("less than 50");

}else{
    console.log("more than");
}
//nested if else
const balance=1000
if (balance<500){
    console.log("less than");
}else if(balance<750){
    console.log("less than 750");
}else if(balance<900){
    console.log("less than 900");}
else     {
    console.log("less than 1200");
    
}
//
const userLoggdIn=true
const debitCard=true
if (userLoggdIn&&debitCard){
    console.log("allow to purchase")
    
}

// switch 
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
const month = 3;

switch (month) {
    case 1:
        console.log("January");
        break;

    case 2:
        console.log("February");
        break;

    case 3:
        console.log("March");
        break;

    default:
        console.log("Invalid month");
        break;
}
//  Truthy and Falsy values
const userEmail="@123"
if (userEmail){
     console.log("have email")
}
  else{
    console.log("dont have email")
    
  }
    

// there are 7 falsy values 
// false
// 0
// -0
// ""       
// null
// undefined
// NaN
