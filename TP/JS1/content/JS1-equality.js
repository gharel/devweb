undefined == null;
null === undefined;

let example;
example == undefined;
example === undefined;
example == null;
example === null;

example = null;
example == undefined;
example === undefined
example == null;
example === null;

let sExample, iExample, bExample;
sExample = '1';
iExample = 1;
bExample = true;
sExample == iExample;
sExample === iExample;
iExample == bExample;
iExample === bExample;
sExample == bExample;
sExample === bExample;

let oExample0 = {a : 0};
let oExample1 = {a : 0};
oExample0 == oExample0;
oExample0 === oExample0;
oExample0 == oExample1;

let tExample0 = [0];
let tExample1 = [0];
tExample0 == tExample0;
tExample0 === tExample0;
tExample0 == tExample1;
tExample0[0] == tExample1[0];
tExample0[0] === tExample1[0];

"" == false;       
"" === false;       
"" == 0;           
true == "true";     
true == "1";        
"10" + 5 == 15;
"10" + 5 == 105;
"10" + 5 === 105;
