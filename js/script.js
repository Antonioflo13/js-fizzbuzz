var numeri = [];

for (i = 1; i <= 100; i ++) {
    
    if (((i % 3) == 0 ) && ((i % 5) == 0)) {
        numeri.push("FizzBuzz");
        console.log("FizzBuzz"); 
        
    } else if ((i % 3) == 0 ) {
        numeri.push("Fizz");
        console.log("Fizz");

    } else if ((i % 5) == 0 ) {
        numeri.push("Buzz");
        console.log("Buzz");

    } else {
        numeri.push(i);
        console.log(i);
    } 
}
for (i = 0; i < 100; i ++) {

    console.log(numeri[i]);
    document.getElementById("result").innerHTML+= "<li>" + numeri[i] + "</li>";
}
