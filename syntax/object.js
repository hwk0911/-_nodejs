var member = ['cafecoder', 'hwk0911', 'hwk'];

console.log(member[1]); //hwk0911

var roles = {'programmer': 'cafeCoder', 'coder': 'hwk0911', 'no1': 'hwk'};

for(var name in roles) {
    console.log('object => ', name);
}