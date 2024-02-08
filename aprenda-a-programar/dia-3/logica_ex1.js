//Análise os pedaços de código a seguir e tente prever qual será o console.log resultante, A ou B.

let a = 10
let b = true
let c = []
let d = [1,2,3,4]
let e = "Nome"

let test = 1
if (a == 10) {
    console.log(`Teste  ${test} é A`);
} else {
    console.log(`Teste  ${test} é B`);
}
test = 2
if (a > 10) {
    console.log(`Teste  ${test} é A`);
} else {
    console.log(`Teste   ${test} é B`);
}
test = 3
if (a >= 10) {
    console.log(`Teste  ${test} é A`);
} else {
    console.log(`Teste  ${test} é B`);
}
test = 4
if (b == true) {
    console.log(`Teste  ${test} é A`);
} else {
    console.log(`Teste  ${test} é B`);
}
test = 5
if (b) {
    console.log(`Teste  ${test} é A`);
} else {
    console.log(`Teste  ${test} é B`);
}
test = 6
if (c) {
    console.log(`Teste  ${test} é A`);
} else {
    console.log(`Teste  ${test} é B`);
}
test = 7
if (d) {
    console.log(`Teste  ${test} é A`);
} else {
    console.log(`Teste  ${test} é B`);
}
test = 8
if (d[0] == 1) {
    console.log(`Teste  ${test} é A`);
} else {
    console.log(`Teste  ${test} é B`);
}
test = 9
if (d[1] == 1) {
    console.log(`Teste  ${test} é A`);
} else {
    console.log(`Teste  ${test} é B`);
}
test = 10
if (typeof(e) == 'string') {
    console.log(`Teste  ${test} é A`);
} else {
    console.log(`Teste  ${test} é B`);
}
