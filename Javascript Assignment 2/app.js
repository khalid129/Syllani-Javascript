// CHAPTER 21-25
// Task 1
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName = firstName+lastName;
// alert(fullName);

// Task 2
// var mobileModel = prompt("Enter your favourite Mobile model name");
// var modelLenght = mobileModel.length;
// alert("My favourite Phone is "+mobileModel+"\r\n Lenght of string is : "+modelLenght);

// Task 3
// var countryName = "Pakistani";
// var indexName = countryName.indexOf("n");
// alert("String : "+countryName+"\r\nIndex of 'n' : "+indexName);

// Task 4
// var name = "Hello World";
// var indexName = name.lastIndexOf("l");
// alert("String : "+name+"\r\nIndex of 'l' : "+indexName);

// Task 5
// var countryName = "Pakistani";
// var indexName = countryName.charAt(3);
// alert("String : "+countryName+"\r\nCharacter at index 3 : "+indexName);

// Task 6
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName = firstName.concat(lastName);
// alert(fullName);

// Task 7
// var cityName = "Hyderabad";
// var replacement = "Islam"
// var sliceName = cityName.slice(5);
// var fullCityName = replacement.concat(sliceName);
// alert("City : "+cityName+"\r\nAfter Repplacement : "+fullCityName);

// Task 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var afterReplacement = message.replace("and","&");
// alert(afterReplacement);

// Task 9
// var beforeConvert = "472";
// var afterConvert = parseInt(beforeConvert);
// alert("Value : "+beforeConvert+"\r\nType : String\r\nValue : "+afterConvert+"\r\nType : Number"); 

// Task 10
// var dryFruitName = prompt("Enter your favourite Dry fruit Name");
// var changeInUppercase = dryFruitName.toUpperCase();
// alert("User Input : "+dryFruitName+"\r\nUpper Case : "+changeInUppercase);

// Task 11:
// var userInput = prompt("Enter some text");
// var firstchar = userInput.slice(0,1);
// firstchar = firstchar.toUpperCase();
// var otherchar = userInput.slice(1);
// otherchar = otherchar.toLowerCase();
// var result = firstchar+otherchar;
// alert("User Input : "+userInput+"\r\n"+"Title case : "+result);

// Task 12:
// var num = "36.36";
// var beforeNum = num.slice(0,2);
// var afterNum = num.slice(3);
// var intNum = beforeNum+afterNum;
// var totalNum = parseInt(intNum);
// alert("Number : "+num+"\r\nResult : "+totalNum);

// Task 13
// var userName = prompt("Enter your Name");
// var userLength = userName.length;
// for (var i=0 ; i<userLength ; i++){
//     if (userName.slice(i,i+1)=="@" || userName.slice(i,i+1)=="!" || userName.slice(i,i+1)=="," ||userName.slice(i,i+1)=="."){
//         alert("Enter a Valid User Name");
//     }
// }

// Task 14
// var menu = ["cake","apple pie","cookie","chips","patties"];
// var enterMenu = prompt("Enter your Order");
// var count = 0;
// for(var i=0 ; i < menu.length ; i++){
//     if(enterMenu===menu[i]){
//         var check = menu[i];
//         alert(menu[i]+" is avaiable index "+i);
//         break;
//     }
// } 
// if(enterMenu!==check){
//     alert("Sorry "+enterMenu+" is not available in our bakery"); 
//  }

// Task 15
// var password = prompt("Enter your Password");
// var passwordLenght = password.length;
// var a = /^[0-9A-Za-z]+$/;
// if(password.match(a)){
//     alert("succes");
// }
// else{
//     alert("Failed");
// }

// Task 16
// var str = prompt("Enter your name")
// var res = str.split("");
// for(var i=0 ; i<res.length ; i++){
// document.write(res[i]+"<br>");
// }

// Task 17
// var str = prompt("Enter a Text");
// var strLength = str.length;
// var lastChar = str.charAt(strLength-1);
// alert("User Input : "+str+"\r\n"+"Last Character : "+lastChar);

// Task 18
// var r = "The quick brown fox jumps over The lazy dog."; 
// var a = (r.match(/The/g)).length; 
// alert(r+"\r\n"+"Ocuurance of word 'The' is "+a);

//CHAPTER 26-30
// Task 1
// var userInput = prompt("Enter a positive decimal number");
// var ceilNum = Math.ceil(userInput);
// var floorNum = Math.floor(userInput);
// var round = Math.round(userInput);
// alert("User Input number : "+userInput+"\r\nRound off value : "+round+"\r\nFloor value : "+floorNum+"\r\nCeil value : "+ceilNum);

// Task 2
// var userInput = prompt("Enter a negative decimal number");
// var ceilNum = Math.ceil(userInput);
// var floorNum = Math.floor(userInput);
// var round = Math.round(userInput);
// alert("User Input number : "+userInput+"\r\nRound off value : "+round+"\r\nFloor value : "+floorNum+"\r\nCeil value : "+ceilNum);

// Task 3
// var userInput = prompt("Enter a number");
// var absoluteNum = Math.abs(userInput);
// alert("The value of "+userInput+" is "+absoluteNum);

// Task 4
// var diceNumber = Math.floor(Math.random()*6)+1;
// alert("Random dice value is "+diceNumber);

// Task 5
// var coinNumber = Math.floor(Math.random()*2)+1;
// if (coinNumber==1){
//     alert(coinNumber+"\r\nRandom coin value : Tail");
// }
// else{
//     alert(coinNumber+"\r\nRandom coin value : Head");
// }

// Task 6
// var randomNumber = Math.floor(Math.random()*100)+1;
// alert("The Random number is "+randomNumber);

// Task 7
// var weight = prompt("Enter your weight");
// alert("Your weight is "+weight+" Kilogram");

// Task 8
// var randomNumber = Math.floor(Math.random()*10)+1;
// var userSecretNumber = prompt("Guess a number between 1 to 10");
// if(randomNumber==userSecretNumber){
//     alert("Bingo Your secret number is "+userSecretNumber);
// }
// else{
//     alert("Sorry please try again the number is "+randomNumber);
// }

//CHAPTER 31-34

// Task 1
// var today = new Date();
// document.write(today);

// Task 2
// var day = new Date()
// var month = day.getMonth();
// var monthNames = ['January', 'February', 'March','April', 'May', 'June', 'July','August', 'September', 'October', 'November', 'December'];
// document.write("Current Month is "+monthNames[month]);

// Task 3
// var d = new Date();
// var day = d.getDay();
// var dayName = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
// document.write("Today is "+dayName[day]);

// Task 4
// var d = new Date();
// var day = d.getDay();
// if (day==0 || day ==6){
// alert("It's Fun day");}
// else{
//     alert("It's not a funday");
// }

// Task 5
// var d = new Date()
// var date = d.getDate();
// if (date >= 1 && date <= 15){
//     alert("First Fifteen days of the Month");
// }
// else{
//     alert("last fifteen days of the Month");
// }

// Task 6
// var d = new Date();
// var milliSecond = d.getTime();
// document.write("Current Date : "+d+"<br>");
// document.write("Elapsed Millisecond Since January 1, 1970 "+milliSecond+"<br>");
// milliSecond = (milliSecond/1000/60);
// document.write("Elapsed Minutes Since January 1, 1970 "+milliSecond);

// Task 7
// var d = new Date();
// var time = d.getUTCHours()
// if(time >= 0 && time <=11)
// {
//     alert("It's AM");
// }
// else{
//     alert("It's PM");
// }

// Task 8
// var lastDate = new Date('May 31, 2020')
// alert(lastDate);

// Task 9
// var ramdanDate = new Date('April 24,2020');
// var ramdanTime = ramdanDate.getTime();
// var todayDate = new Date();
// var todayTime = todayDate.getTime();
// var diff = todayTime - ramdanTime;
// var days = Math.floor(diff/(1000*60*60*24));
// alert(days +" days has been past since 1st Ramdan 2020");

// Task 10
// var startDate = new Date('January 1, 2020');
// var startTime = startDate.getTime();
// var todayDate = new Date();
// var todayTime = todayDate.getTime();
// var diff = todayTime - startTime;
// diff = Math.floor(diff/1000);
// alert("On the reference date set "+todayDate+"\r\n"+diff+" second has passed begining of 2020");

// Task 11
// var d =new Date();
// alert(d);

// Task 12
// var m = ["January","Febuary","March","April","May","June","July","August","September","October","November","December"];
// var d = new Date();
// var month = d.getMonth();
// for(var i=0 ; i<m.length ; i++){
//     if (month==i){
//         month = m[i];
//     }
// }
// var date = d.getDate();
// var year = d.getFullYear()-100;
// var yearAgo = d.toDateString(year);
// alert(d+"\r\n"+yearAgo);

// Task 13
// var a = prompt("Enter your age");
// var age = parseInt(a);
// var d = new Date();
// var year = d.getFullYear();
// var birthYear = year - age;
// alert("Your age is "+age+"\r\nYour Birth year is "+birthYear);

// Task 14

// var m = ["January","Febuary","March","April","May","June","July","August","September","October","November","December"];
// var d = new Date();
// var month = d.getMonth();
// for(var i=0 ; i<m.length ; i++){
//     if (month==i){
//         month = m[i];
//     }
// }
// var customerName = "Muhammad Khalid";
// var numberOfUnit = 150;
// var chargesOfUnit = 16;
// document.write("<h1>K-Electric Bill</h1>");
// document.write("Customer Name : "+customerName+"<br>");
// document.write("Current Month : "+month+"<br>");
// document.write("No of Unit : "+numberOfUnit+"<br>");
// document.write("Charges per Unit : "+chargesOfUnit+"<br>"+"<br>");
// document.write("Net Amount Payable (With Due Date) : "+numberOfUnit*chargesOfUnit+"<br>");
// document.write("Late payment charges : "+250+"<br>");
// var total = (numberOfUnit*chargesOfUnit)+250;
// document.write("Total Payable Amount (After due Date) : "+total);

// CHAPTER 35-38
// Task 1
// function dateFunction(){
//     var d = new Date();
//     return d;
// }
// var date = dateFunction();
// alert(date);

// Task 2
// function fullName (firstName,lastName){
//     return(firstName +" "+lastName);
// }
// var fName = prompt("Enter your first name");
// var lName = prompt("Enter your last name");
// var fulName = fullName(fName,lName);
// alert("Your Full Name is "+fulName);

// Task 3
// function calculate(num1,num2){
//     return(num1+num2);
// }
// var firstNum = prompt("Enter first number");
// var number1 = parseInt(firstNum);
// var secondNum = prompt("Enter second number");
// var number2 = parseInt(secondNum);
// var sum = calculate(number1,number2);
// alert("The sum of your number is "+sum);

// Task 4
// function calculator (num1,operator,num2){
//     if(operator=='+'){
//         var sum = num1+num2;
//         alert("Sum of your two number is "+sum);
//     }
//     else if(operator=='-'){
//         var sub = num1-num2;
//         alert("Subtraction of your two number is "+sub);
//     }
//     else if(operator=='*'){
//         var mul = num1*num2;
//         alert("Multiplication of your two number is "+mul);
//     }
//     else if(operator=='/'){
//         var div = num1/num2;
//         alert("Division of your two number is "+div);
//     }
//     else{
//         alert("Invalid Operator");
//     }
// }
// var firstNum = prompt("Enter first number");
// var number1 = parseInt(firstNum);
// var operator = prompt("Enter your desired operator e.g: +,-,/,*");
// var secondNum = prompt("Enter second number");
// var number2 = parseInt(secondNum);
// calculator(number1,operator,number2);

// Task 5
// function square (number){
//     var sqr = number*number;
//     alert("Square of your number "+number+" is "+sqr);
// }
// var input = prompt("Enter a number to find its square");
// var s = parseInt(input);
// square(s);

// Task 6
// function factorial(number) {
//     if (number == 1 || number == 0 ) {
//         return(1);
//     }
//     else if(number > 1){
//         for (var i = number; i >= 1; i--) {
//             return (i * (i - 1));
//         }
//     }
//     else{
//         alert("Factorial of negative number can not be calculate");
//     }
// }
// var f = prompt("Enter a number whose factorial is to be calculate");
// var fact = parseInt(f);
// var result = factorial(fact);
// alert("Factorial of "+fact+" is "+result); 

// Task 7
// function counting (num1,num2){
//     if(num1<=num2){
//     for(var i=num1 ;i<=num2 ;i++){
//         document.write(i+"<br>");
//     }}
//     else if (num1>=num2){
//         for(var j=num1 ;j>=num2 ;j--){
//             document.write(j+"<br>");
//         } 
//     }
// }
// var number1 = prompt("Enter start number");
// var startNumber = parseInt(number1);
// var number2 = prompt("Enter end number");
// var endNumber = parseInt(number2);
// counting(startNumber,endNumber);

// Task 8
// function squareRoot(h){
//     alert("Square of Hypotaneous is "+h*h);
// }
// function hypotaneousCalculation(b,p){
//     var base = b*b;
//     var perp = p*p;
//     var hyp = Math.sqrt(base+perp);
//     alert("Hypotaneous of Right angle traingle "+hyp);
//     squareRoot(hyp);
// }
// var p = prompt("Enter perpendicular of right angle triangle");
// var perpendicular = parseInt(p);
// var b = prompt("Enter base of right angle triangle");
// var base = parseInt(b);
// hypotaneousCalculation(base,perpendicular);

// Task 9
// function area (h,w){
//     return(h*w);
// }
// var h = prompt("Enter height of rectangle");
// var height = parseInt(h);
// var w = prompt("Enter width of rectangle");
// var width = parseInt(w);
// var variable = area(height,width);
// alert("Area of reactangle by your value is "+variable);
// var value = area(3,4);
// alert("Area of rectangle by value is "+value);

// Task 10
// function palindrome(str) {
//     var len = str.length;
//     var mid = Math.floor(len/2);

//     for ( var i = 0; i < mid; i++ ) {
//         if (str[i] == str[len - 1 - i]) {
//             return true;
//         }
//     }
//     alert(str+" is not palindrome string");
// }
// var a = palindrome("madam");
// if (a==true){
//     alert("madam is palindrome string");
// }

// // Task 11
// function titleCase(str) {
//     var splitStr = str.toLowerCase().split(' ');
//     for (var i = 0; i < splitStr.length; i++) {
//         splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
//     }
//     return splitStr.join(' '); 
//  }
// var str = "I'm a student of ned university of engineering and technology";
//  document.write(titleCase(str));

// Task 12
// function longestWord(string) {
//     var str = string.split(" ");
//     var longest = 0;
//     var word = null;
//     for (var i = 0; i < str.length ; i++) {
//         if (longest < str[i].length) {
//             longest = str[i].length;
//             word = str[i];
//         }
//     }
//     return word;
// }
// var b = longestWord("web developement course");
// alert("The largest word in the text is "+b);

// Task 13
// function checkCharacter(str,cha){
//     var count = 0;
//     for(var i=0 ; i < str.length ; i++){
//         if(str[i]===cha){
//             count++;
//         }
//     }
//     alert("Your Character "+cha+" is occured "+count+" time in your text");
// }
// var text = prompt("Enter some text");
// var character = prompt("Enter a character whose occurance to be count in your text");
// checkCharacter(text,character);

// Task 14
// function calcCircumference(r){
//     var circum = 2*3.142*r;
//     alert("circumference of circle is "+circum+" meter which radius is "+r);
// }
// function calcArea(r){
//     var a  = 3.142*r*r;
//     alert("Area of circle is "+a+" meter-square  which radius is "+r);
// }
// var r = prompt("Enter radius of circle");
// var radius = parseInt(r);
// calcCircumference(radius);
// calcArea(radius);