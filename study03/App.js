import {list} from "./Test.js";

function show(){
    console.log(list);

    document.querySelector("#list").innerHTML = list;
}


document.querySelector("#click").addEventListener("click", show)
// 이건 안 됨

// window.show = show;
// 브라우저 콘솔에서도 사용 가능