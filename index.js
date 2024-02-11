//q1
const prompt=require("prompt-sync")();
const obj={
  arsh:90,
  khushboo:99,
amit:78,
akash:55}
// for(let i=0;i<Object.keys(obj).length;i++) console.log(obj[Object.keys(obj)[i]])

//using for in loop
// for(let student in obj) console.log(obj[student])


//q3
let number=8;
let inp;
while(inp!=number){
  inp=prompt("enter a number")
  alert('Try again')
}
alert('Its a correct number')

//Q4
const mean=(n1,n2,n3,n4,n5)=>{
  return (n1+n2+n3+n4+n5)/5;
}