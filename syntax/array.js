//CRUD (정보 시스템의 핵심)

var a = ['A','B','C','D','E',];

for(var index = 0, size = a.length ; index < size ; ++index) {
    console.log(a[index]);
    
}

a.push('E');

console.log();


for(var index = 0, size = a.length ; index < size ; ++index) {
    console.log(a[index]);
    
}