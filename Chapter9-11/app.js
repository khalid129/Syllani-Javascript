// CHAPTER 9-11
// Task 1
// var cities=["Karachi","Lahore","Islamabad","Faisalabad"];
// var input=prompt("Enter your city");
// for(var i=0;i<cities.length-1;i++){
//     var check=cities[i]
//     if(check=="Karachi"){
//         alert("Welcome to City of light")
//     }
// }

// Task 2
// var gender=prompt("Enter your Gender");
// if (gender=="male"||gender=="Male"){
//     alert("Good Morning Sir");
// }
// else if(gender=="female"||gender=="Female"){
//     alert("Good Morning Madam");
// }
// else{
//     alert("Good Morning");
// }

// Task 3
// var color=prompt("Enter color");
// if (color=="red"){
//     alert("Must stop");
// }
// else if(color=="yellow"){
//     alert("Ready to move");
// }
// else if(color=="green"){
//     alert("Move now");
// }
// else{
//     alert("wait for light turn green");
// }

// Task 4
// var fuel=prompt('Enter amount of fuel remaining in your car');
// var a =parseFloat(fuel);
// if (a<0.25){
//     alert("please refuel your car");
// }
// else{
//     alert('your fuel is quit enough');
// }

// Task 5
// var a = 4; 
// if (++a === 5)
// { alert("given condition for variable a is true"); }

// var b = 82; 
// if (b++ === 83)
// { alert("given condition for variable b is true"); }

// var c = 12;
// if (c++ === 13)
// { alert("condition 1 is true"); } 
// if (c === 13)
// { alert("condition 2 is true"); } 
// if (++c < 14){ alert("condition 3 is true"); } 
// if(c === 14){ alert("condition 4 is true"); }

// var materialCost = 20000; 
// var laborCost = 2000; 
// var totalCost = materialCost + laborCost; 
// if (totalCost === laborCost + materialCost)
// { alert("The cost equals"); }

// if (true)
// { alert("True"); }
// if (false)
// { alert("False"); }

// if("car" < "cat")
// { alert("car is smaller than cat"); }
// else{
//     alert('The condition are false');
// }

// Task 6
// document.write("<h1>Mark Sheet</h1>" + "<br>");
// document.write("Total Marks : 300"+ " <br>");
// var num1 = prompt("Enter Fisrt subject Number");
// var num2 = prompt("Enter Second subject Number");
// var num3 = prompt("Enter Third subject Number");
// var a = parseInt(num1)
// var b = parseInt(num2)
// var c = parseInt(num3)
// var obtained = a+b+c;
// document.write("Marks Obtained :"+" " + obtained +" <br>");
// var percentage = ((obtained)*100)/300;
// document.write("Percentage :" + percentage + " %"+" <br>");
// if(percentage>=80){
//     var grade = 'A-One';
//     var remarks = "Excellence";
// }
// else if(percentage>=70){
//     var grade = 'A';
//     var remarks = "Good";
// }
// else if(percentage>=60){
//     var grade = 'B';
//     var remarks = "You need to be improve";
// }
// else {
//     var grade = 'Fail';
//     var remarks = "Sorry";
// }
// document.write("Grade :"+" " + grade+" <br>");
// document.write("Remarks :"+" " + remarks+" <br>");

// Task 7
// var number = prompt("Guess which number i am Thinking from 1 to 10 and Enter that number");
// var num = parseInt(number);
// var guess = Math.random()*10;
// var guessNumber = Math.floor(guess);
// if(num==guessNumber){
//     alert("Bingo you are correct");
// }
// else{
//     alert("Sorry you are wrong the number is "+guessNumber);
// }

// Task 8
// var number = prompt("Enter a number");
// var d = parseInt(number);
// if(d%3==0){
//     alert("The number is divisible by 3");
// }
// else{
//     alert("Number is not divisible by 3");
// }

// Task 9
// var number = prompt("Enter a number");
// var d = parseInt(number);
// if(d%2==0){
//     alert("The number is even");
// }
// else{
//     alert("The Number is odd");
// }
