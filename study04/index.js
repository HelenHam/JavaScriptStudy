function 더하기(){
    a = Number(document.querySelector("#a").value);
    b = Number(document.querySelector("#b").value);
    document.querySelector("#result").innerText = (a + b);
}

function 빼기(){
    a = Number(document.querySelector("#a").value);
    b = Number(document.querySelector("#b").value);
    document.querySelector("#result").innerText = (a - b);
}

function 곱하기(){
    a = Number(document.querySelector("#a").value);
    b = Number(document.querySelector("#b").value);
    document.querySelector("#result").innerText = (a * b);
}