// n1. **Addition.**
let resultAddition = 0;
for (let i = 1; i < 21; i++) {
  resultAddition = resultAddition + i;
}
console.log(resultAddition);

// 2. **Es befinden sich i Bierflaschen an der Wand.**
for (let i = 1; i < 6; i++) {
  console.log(
    i === 1
      ? `Es befindet sich ${i} Flasche an der Wand`
      : `Es befinden sich ${i} Flaschen an der Wand`
  );
}

//3 **Der ungerade/gerade Reporter.
for (let i = 0; i < 21; i++) {
  console.log(i % 2 == 0 ? `${i} ist gerade ` : ` ${i} ist ungerade `);
}

//4. **Multiplikationstabellen.**
const x = 9;

for (let j = 0; j <= 10; j++) {
  console.log(x, "*", j, "=", x * j);
  //console.log(`${x}*${j}= ${x * j}`);
}

for (let i = 1; i < 11; i++) {
  for (let j = 1; j < 11; j++) {
    console.log(`${i}*${j}=${i * j}`);
  }
}

//5. **Fizz Buzz**
for (let i = 1; i < 101; i++) {
  if (i % 5 === 0 && i % 3 == 0) {
    console.log(i, ":FizzBuzz");
  } else if (i % 5 === 0) {
    console.log(i, ":Buzz");
  } else if (i % 3 === 0) {
    console.log(i, ":Fizz");
  } else {
    console.log(i);
  }
}

//6 **Sum of Multiples**
let sum = 0;
for (let i = 1; i < 1001; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    sum = sum + i;
  }
}
console.log({ sum });

//7.1 100 200 300 400 500 600 700 800 900 1000
let result71 = "";
for (let i = 1; i < 11; i++) {
  result71 += i * 100 + " ";
}
console.log({ result71 });

//7.2 (0 2 4 6 8 10)
let result72 = "";
for (let i = 0; i < 11; i = i + 2) {
  result72 += i + " ";
}

console.log({ result72 });
//7.2.1
let result721 = "";
for (let i = 0; i < 11; i++) {
  if (i % 2 === 0) {
    result721 += i + " ";
  }
}
console.log({ result721 });

//7.3   (3 6 9 12 15)
let result73 = "";
for (let i = 3; i < 16; i = i + 3) {
  result73 += i + " ";
}
console.log({ result73 });

//7.4 (9 8 7 6 5 4 3 2 1 0)
let result74 = "";
for (let i = 9; i > -1; i--) {
  result74 += i + " ";
}
console.log({ result74 });

//7.5(1 1 1 2 2 2 3 3 3 4 4 4)
let result75 = "";

for (let i = 1; i < 5; i++) {
  result75 += `${i} ${i} ${i} `;
}
console.log({ result75 });

//7.6 (0 1 2 3 4 0 1 2 3 4 0 1 2 3 4)
let result76 = "";

for (let i = 0; i < 16; i++) {
  result76 += (i % 5) + " ";
}
console.log({ result76 });

//8  **isPalindrome.**

const str = "madam";
const arrStr = str.split("").reverse().join("");
if (str === arrStr) {
  console.log("ist Palindrom");
} else {
  console.log("ist kein Palindrome");
}
//8.1 option 2
const str1 = "tarrattarrat";
const arrStr1 = str1.split("").reverse().join("");
console.log(str1 === arrStr1 ? "ist Palindrom" : "ist kein Palindrome");
