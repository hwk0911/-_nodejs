var fs = require('fs');

//readFileSync

/*
console.log('A');
var result = fs.readFileSync('syntax/sample.txt', 'utf8');
console.log(result);
console.log('C');

*/

console.log('A');
fs.readFile('syntax/sample.txt', 'utf8', function(err, result) {
    console.log(result);
});
console.log('C');

/*
위 주석 코드의 경우 A, B, C 순으로 출력이 된다.
하지만 아래의 코드의 경우 비동기 방식으로 A, C, B 순으로 출력이된다.
*/