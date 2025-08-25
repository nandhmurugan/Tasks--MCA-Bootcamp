let a=123;
let sum=0;
let c = a%10;
sum= sum*10+c;

a=Math.floor(a/10);
c=a%10;
sum= sum*10+c;

a=Math.floor(a/10);
c=a%10;
sum= sum*10+c;

console.log(sum);