

                    //    QUESTIONS AND ANSWERS




// QUE 1) What is the value of y after evaluating the expression given below?
//  o y+=++y + y-- + --y; when let y=8

// let y=8
//  y+=++y + y-- + --y;
// console.log(y)

//  output is:- 33

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~





// QUE 2)Give the output of the following expression:
// o a+=a++ + ++a + --a + a--; when a=7


// let a=7;
//  a+=a++ + ++a + --a + a--;
// console.log(a)
// console.log(23+6+7)

// output is:- 39

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~






//  QUE 3) If let y=10 then find:
// o z=(++y * (y++ +5));

// let y=10 ;
// let z=(++y * (y++ +5));
// console.log(z)

// output is:- 176

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~







//  QUE 4). What are the values of x and y when the following statements are executed?

// let a = 63, b = 36;
// let x = (a < b ) ? true : false;

// console.log(x)   
// output :- false

// let y= (a > b ) ? a : b;

// console.log(y)
//  output is:- 63

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~









//  QUE 5)Name the operators listed below:

// i.   <   :- less than
// ii.  ++  :- increament operator
// iii. &&  :- and operator
// iv.  ?:  :- conditional operator

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~









//  QUE 6) 6. Write a program to average of 36, 45 and 53 using variables

// function main()
// {
// let a= 36;
// let b= 45;
// let c= 53;

// let z= (a+b+c)/3
 
// console.log("Average = " + z);
// }
//  main();

//  output is:- Average =44.666666666666664

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~










//  QUE 7)Write a program to input the Principal, Rate and Time and calculate the 
//  Simple Interest.
//  Simple Intrest = (Principle*Rate*Time)/100

// function main()
// {
    // let p=prompt('Enter the Principle');
    // let r=prompt('Enter the Rate');
    // let t=prompt('Enter the Duration');
    // let si;

    // si=p*r*t/100;

    // document.write(si);
// }
//   main();              

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~









//  QUE 8) State the difference between = = and = = =.

//  == is used for comparing two variables, 
//  but it ignores the datatype of variable.
//   It allows implicit conversion.

//  === is used for comparing two variables,
//   but this operator also checks datatype and compares two values.
//  It does not allow implicit conversion.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~










// QUE 9) Convert the following if else if construct into switch case.

// let a=6;

// if (a==1)
// console.log("good");
// else if(a==2)
// console.log("better");
// else if(a==3)
// console.log("best");
// else
// console.log("invalid");

//  Coverted into Switch Case.

// let a=parseInt(prompt("Enter any no."))
// switch(a)
// {
//     case 1:
//         document.write("good");
//     break;
//     case 3:
//         document.write("better");
//     break;
//     case 8:
//         document.write("best");
//     break;
//     default:
//         document.write("invalid");
// }

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~











// QUE 10)1Write a program to accept a mark obtained by a student in computer 
//  science and print the grades accordingly:

// function main()
// {
//     let a=parseInt(prompt("Enter your marks"))

// if(a>=90)
// document.write("Grade A");
// else if( a>=70 && a<90)
// document.write("Grade B");
// else if( a>=50 && a<70 )
// document.write("Grade C");
// else
// document.write("Grade D");
// }

//  main()

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~











//  QUE 11)A cloth showroom has announced the following festival discounts on 
//  the purchase of items, based on the total cost of the items purchased:

// function main(){
//     let tc=parseInt(prompt("Enter Amount"))
// let d;

//     if(tc<=2000)
//     d=(5/100)*tc
    
//     else if(tc>=2001 && tc<=5000)
//     d=(25/100)*tc
//     else if(tc>=5001 && tc<=10000)
//     d=(35/100)*tc 
//     else 
//     d=(50/100)*tc
//     ap=tc-d
//     document.write("ammount payable"+ap)
// }
// main()

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~










// QUE 12).An electronics shop has announced the following seasonal discounts on 
//  the purchase of certain items.



// function main(){
//     let nm=prompt("Enter your Name")
//     let add=prompt("Enter your Address")
//     let tc=parseInt(prompt("Enter Amount of your Device"))
//     let type=prompt("select type of device = 'Laptop' or 'Desktop' ")
// let d;

//     if(tc<=25000){
//         switch(type)
//         {
//             case "Laptop":
//                 d=(0.0/100)*tc 
//                 break;

//                 case "Desktop" :
//                 d= (5.0/100)*tc  
//                 break; 
//                 default:
//                   alert("Enter device name properly") 
//         }
       
//     }
       
    
//     else if(tc>=25001 && tc<=57000){
//         switch(type)
//         {
//             case "Laptop":
//                 d=(5.0/100)*tc 
//                 break;
//                 case "Desktop" :
//                 d= (7.5/100)*tc 
//                 break;
//                 default:
//                   alert("Enter device name properly")   
//         }
//     }
    
//     else if(tc>=57001 && tc<=100000){
//         switch(type)
//         {
//             case "Laptop":
//                 d=(7.5/100)*tc 
//                 break;
//                 case "Desktop" :
//                 d= (10.0/100)*tc  
//                 break; 
//                 default:
//                   alert("Enter device name properly") 
//         }
//     }

//     else {
//         switch(type)
//         {
//             case "Laptop":
//                 d=(10.0/100)*tc 
//                 break;
//                 case "Desktop" :
//                 d= (15.0/100)*tc  
//                 break;
//                 default:
//                   alert("Enter device name properly") 
//         }
//     }
   
//     ap=tc-d
//     document.write("Name: "+nm ,"<br>")
//     document.write("Address: "+add ,"<br>")
//     document.write("amount payable :  "+ap)
// }
// main()  

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~










//  QUE 13)Given below is a hypothetical table showing rates of Income Tax for 
//  male citizens below the age of 65 years:


// function main(){
//     let age=parseInt(prompt("Enter your age"))
//     let gender=prompt("Enter your gender")
    
    
//     if(age > 65 || gender=="female")
//     {
//     alert("wrong category")
//     }

//     else
//     {

//         let taxableincome=parseInt(prompt("Enter your income"))
//     let incometax;

//     if(taxableincome <= 1,60,000)
//     incometax="nill";
    
//     else if(taxableincome >= 1,60,000 && taxableincome <= 5,00,000)
//     incometax=((taxableincome - 1,60,000)*10/100)

//     else if(taxableincome >= 5,00,000 && taxableincome<=8,00,000)
//     incometax=((taxableincome - 5,00,000)*20/100)+34,000 
    
//     else 
//     incometax=((taxableincome - 8,00,000)*30/100)+94,000

//     document.write("Income Tax "+ incometax)
//     }

    
// }
// main()

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~










//  QUE 14).Write a program to input an integer and find its factorial. Factorial of a 
// number is the product of all natural numbers till that number. For 
//  example, factorial of 5 is 120 since 1×2×3×4×5=120.

// let x=parseInt(prompt())
// function facto(){
//     let sum = 1;
//     for(
//         let i = 1; i <= x; i++){
//             sum=i*sum;
//         }
//     return sum;
// }
// result= facto();
// document.write("factorial no is :-" +result)

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~












//  QUE 15 ).Write a program to input an integer and check whether it is a prime 
// number or not

// function isprime()
//     {
//         let n=prompt("enter any no.")
//         let count=0
//         for (i=2;i<=n-1;i++)
// {
// if(n%i==0)
// {
//     count++
//     break;
// }
// }
// if(count>0){
//     document.write("not a prime number ",n)

// }
// else{
//     document.write("yes it is a prime number ",n)
// }
//     }
//     isprime();

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~











// // QUE 16)Write a program to find the sum of all 3-digit even natural numbers

// function main(){
//     let i,s=0;
//     for(i=100;i<=998;i+=2)
//     {
//         s+=i;
//     }
//     console.log("sum="+s);
// }

// main()

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~












//  QUE 17)Write a program to find the sum of all 3 digit odd natural numbers, 
//  which are multiples of 5.


// 	function main()
// 	{
//         let s=parseInt(prompt("enter a no."))
// 		let i;
// 		for(i=101;i<=999;i+=2)
// 		{
// 			if (i%5==0)
// 			s=s+i;
           
// 		}
// 		document.write(s);
// 	}

// main();

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~









//  QUE 18)Write a program to input an integer and find its factorial.
//  Factorial of a number is the product of all natural numbers till that number.
//  For  example factorial of 5 is 120 since 1×2×3×4×5=120.

// let x=parseInt(prompt())
// function factorial(){
//     let sum = 1;
//     for(
//         let i = 1; i <= x; i++){
//             sum=i*sum;
//         }
//     return sum;
// }
// result= factorial();
// document.write("factorial no is :-" +result)

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~











//  QUE 19)Write a program to find the sum of 1st 10 numbers of Lucas series i.e. 
//  2,1,3,4,7,11,18,…. Lucas series is such a series which starting from 2 and 
//  1, and subsequent numbers are the sum of the previous two numbers.

// function lucasseries(){
//     let a=3;
//     let b= -1;
//     let c;
//     let n=parseInt(prompt("Enter the length of lucas:"))
// for(let i=1;i<=n;i++){
//     c=a+b;
//     document.write("lucas series is:"+c,"<br>")
//     a=b;
//     b=c;
// }
// }
// lucasseries();

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~









//  QUE 20)Write a program to print the first 15 numbers of the Pell series.
//  Pell series is such a series which starts from 1 and 2 , and subsequent 
//  numbers is the sum of twice the previous number and the number 
//  previous to the previous number. Pell series: 1, 2, 5, 12, 29, 70, 169, 408, 
//  985, 2378, 5741, 1386


// function pellseries(){
//     let a=1;
//     let b=0;
//     let c;
//     let n= prompt("Enter length of series:");
//     for(let i=1;i<=n;i++){
//         c=a+(2*b);
//         document.write("pell series is:"+c,"<br>");
//         a=b;
//         b=c;
//     }
// }
// pellseries()