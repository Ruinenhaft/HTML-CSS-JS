//자바 스크립트 코드를 작성.

var input_number = prompt("숫자를 입력해주세요")//그냥 입력받으면 string으로 처리.
if(input_number == ''){//값을 입력 안했을 때, 앞에서 Number 형변환을 시행할 경우 0으로 카운트.
    alert("값을 입력해주세요.");
}else if(input_number == null){//취소 버튼 case
    alert("취소하셨습니다.")
}else{
    var num = Number(input_number);//형변환시 typeof로 문자열 검사해도 number로 확인하기 때문에.
    if(isNaN(num)==false){//문자일때 해당값을 직접 찍었을 때 NaN값이 들어있기 때문에 isNaN함수 활용 검사.
        if(num > 0){
            document.querySelector("#result").innerHTML = num+"는 양수입니다."
        }else if(num == 0){
            document.querySelector("#result").innerHTML = num+"는 0입니다."
        }else{
            document.querySelector("#result").innerHTML = num+"는 음수입니다."
        }
    }else{
        alert("입력한 값은 문자열입니다.")
    }

}

var userNumber = prompt("숫자를 입력하세요.");
var displayArea = document.querySelector('#result');
if (userNumber != null) {
    if (userNumber > 0) {
        displayArea.innerHTML = "입력한 숫자 " + userNumber + "는 양수입니다.";
    }
    else if (userNumber == 0) {
        displayArea.innerHTML = "입력한 숫자 " + userNumber + "는 0 입니다.";	
    }
    else if (userNumber < 0) {
        displayArea.innerHTML = "입력한 숫자 " + userNumber + "는 음수 입니다.";	
    }
    else if (typeof(userNumber) == "string") {
        displayArea.innerHTML = "입력하신건 숫자가 아닌 문자열 입니다.";
    }
    else {
        displayArea.innerHTML = "입력하신건 숫자가 아닌 공백 입니다.";
    }
}
else {
    alert("입력이 취소됐습니다.");
    displayArea.innerHTML = "숫자만 입력해주세요 ㅠㅠㅠㅠ";
}