//UC-1 Check Whether the input year is a leap year or not..

var readlineSync = require('readline-sync');

var year = readlineSync.question("Enter the year :")

if (year % 400 == 0)
{
    console.log("It is a leap year");

}
else if (year % 100 == 0)
{
    console.log(" It is not a leap year");
}
else if (year % 4 == 0)
{
    console.log("It is a leap year");
}
else
{
    console.log("It is not a leap year");
}
