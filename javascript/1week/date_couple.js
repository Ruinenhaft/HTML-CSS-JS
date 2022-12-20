var today = new Date();
var firstDay = new Date("2018-03-30");//new Date(prompt("해당 양식에 맞춰 날짜를 입력해주세요"));//
var toNow = today.getTime();
var toFirst = firstDay.getTime();
var passedTime = toNow - toFirst;
var passedDay = Math.round(passedTime/(1000*60*60*24));
document.querySelector("#accent").innerText = passedDay + "일";

const day = document.getElementsByTagName("input");
const btn = document.querySelector("button");
btn.onclick = function (){
    for(var i=0; i < day.length; i++){
        fun_input = day[i].value;
        calcDate(fun_input, i);
    }
}






function calcDate(days, num){
    const day_ms = 1000*60*60*24;
    var future = toFirst + days*day_ms;
    var someday = new Date(future);
    var year = someday.getFullYear();
    var month = someday.getMonth() + 1;
    var date = someday.getDate();
    document.querySelectorAll(".item-date")[num].innerText = year+"년 "+month+"월 "+date+"일";
}

