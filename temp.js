

console.log('hey');
let v = -12212

let st = setInterval(() => {
    if(v==10){
        clearInterval(st)
    }else{
        v++;
        console.log('hey');
    }
}, 100);








