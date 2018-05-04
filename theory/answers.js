let str1 = 'antelope rocks out';
let str2 = 'antelopes rock out';
let str3;
let str4;

let regex = /antelopes? rocks? out/
console.log(regex.test(str1));
console.log(regex.test(str2));

str1 = 'goat';
str2 = 'moat';
str3 = 'boat';
regex = /(g|m)oat/;

console.log(regex.test(str1));
console.log(regex.test(str2));
console.log(!regex.test(str3));

str1 = '2000-10-12';
str2 = '1999-1-20';
str3 = '1999-01-20';
str4 = '812-2-10';
regex = /\d{1,4}-\d{1,2}-\d{1,2}/;

console.log(regex.test(str1));
console.log(regex.test(str2));
console.log(regex.test(str3));
console.log(regex.test(str4));

//////////////////////

regex = /ESC\[(1\w+|\d+;\d+\w+)/
// regex = /\e\[(1\w+|\d+;\d+\w+)/ \e doesn't work in node
str1 = 'ESC[12;45f';
str2 = 'ESC[1m';

console.log(regex.test(str1));
console.log(regex.test(str2));