// 1. Сума
function calcSum(){
    var x = parseFloat(document.f1.x.value);
    var S = 0;

    for(var k = 1; k <= 10; k++){
        S = S + (x * x) / (k + 2);
    }

    document.f1.res.value = S;
}


// 2. Масив
function processArray(){
    var arr = [5, 0, 3, 0, 0, 8, 0];

    for(var i = 1; i < arr.length; i++){
        if(arr[i] == 0){
            arr[i] = arr[i - 1];
        }
    }

    document.f2.res2.value = arr;
}