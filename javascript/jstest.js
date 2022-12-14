//자바 스크립트 코드를 작성.
function showPrice(){
    var originPrice = document.querySelector("#oPrice").value;
    var rate = document.querySelector("#rate").value;
    var result = originPrice*(rate)/100;


    document.querySelector("#showResult").innerHTML = "상품의 원래 가격은 " + originPrice + "원이고, " + "할인율은 "
     + rate + "% 입니다."+ result + "원을 절약한 " + (originPrice - result) + "원에 살 수 있습니다."; 
}
