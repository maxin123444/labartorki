// 1. Обчислення суми
function calcSum(){
    let x = parseFloat(document.getElementById("x").value);

    if(isNaN(x)){
        alert("Введіть число!");
        return;
    }

    let S = 0;

    for(let k = 1; k <= 10; k++){
        S += (x * x) / (k + 2);
    }

    document.getElementById("sumResult").innerText = S.toFixed(2);
}


// 2. Обробка масиву
function processArray(){
    let arr = [5, 0, 3, 0, 0, 8, 0];

    for(let i = 1; i < arr.length; i++){
        if(arr[i] === 0){
            arr[i] = arr[i - 1];
        }
    }

    document.getElementById("arrayResult").innerText = arr.join(", ");
}