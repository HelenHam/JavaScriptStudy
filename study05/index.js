function 구구단() {

    a = Number(document.querySelector("#a").value);
    re = ""
    console.log(a + "단")

    for (i = 1 ; i < 10 ; i++){
        re += (a + " * " + i + " = " + (a*i) + "<br>");
    }

    document.querySelector("#result").innerHTML = re
}