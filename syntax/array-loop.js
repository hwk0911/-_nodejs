var number = [1, 2, 3, 4, 555];

var sum = 0;

for (var index = 0, size = number.length ; index < size ; ++index) {
    sum += number[index];
}

console.log('sum : ' + `${sum}`);
