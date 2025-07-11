console.log("Hello, Node.js!");

//get input. from the terminal 
const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

r1.question('Enter your name: ', (name) => {
  console.log(`Hello, ${name}!`);
  r1.close();
});

//input from browser
  let name = prompt("What's your name?");
  alert("Hello, " + name + "!");



const readline = require('readline');


const r2 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

r2.question("What's your name? ", function(name) {
  console.log(`Hello, ${name}!`);
  r2.close();
});


const a=[1,2,3,4,5]
for(const n of a)
{
    console.log(n)
}

const b=a.map((n)=>n*2)
console.log(b)


const n1 = new Map();
n1.set('1',1)
n1.set('a',2)
console.log(n1.get('a'))
for(const [k,v] of n1)
{
    console.log(k,v)
}


const o={
    g1:"Nfs",
    g2:"Nf2"
}
for(const a in o)
{
    console.log(a,0[a])
}


