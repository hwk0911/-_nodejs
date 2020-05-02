var f = function() {
    console.log(1+1);
    console.log(1+2);
    
    
}

var a = [f];
a[0]();

var o = {
    func:f
}
o.func();

/*
o = 객체
f = 함수
즉 객체에 함수를 담았다.
*/