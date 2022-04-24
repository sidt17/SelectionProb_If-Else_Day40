//UC1

let A = Math.floor(Math.random()*900)+100;
let B = Math.floor(Math.random()*900)+100;
let C = Math.floor(Math.random()*900)+100;
let D = Math.floor(Math.random()*900)+100;
let E = Math.floor(Math.random()*900)+100;
console.log("Three digit numbers are " +A,B,C,D,E);


if (A>B && A>C && A>D && A>E)
{
 console.log("Maximum Value Is " +A);
}
else if (A<B && A<C && A<D && A<E)
{
    console.log("Min number is " + A);
}

 if(B>A && B>C && B>D && B>E)
{
    console.log("Maximum Value Is " +B);
}
else if(B<A && B<C && B<D && B<E)
{
    console.log("Min number is " + B);
}

if (C>A && C>B && C>D && C>E)
{
    console.log("Maximum value Is " +C);
}
else if(C<A && C<B && C<D && A<E)
{
   console.log("Min number is " + C);
}

if(D>A && D>B && D>C && D>E)
{
    console.log("MAximum Value Is " +D);
}
else if(D<A && D<B && D<C && D<E)
{
   console.log("Min number is " + D);
}
if(E>A && E>B && E>C && E>D)
{
    console.log ("Maximum value Is " +E);
}
else if(E<A && E<B && E<C && E<D)
{
   console.log("Min number is " + E);
}




