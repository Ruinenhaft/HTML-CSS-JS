// 입금
// 음료 선택
// 개수
// 가격에 따라 몇개의 음료를 살 수 있는지
// 거스름 금액 출력.
// 가격이 부족할때는 살수 없다는 문구와 부족한 금액을 출력

var cola = 1000;
var cider = 1500;
var fanta = 2000;
var input_money = prompt("입금");
var select_beverage = prompt("음료 선택 : 콜라 1000원, 환타 2000원, 사이다 1500원");
var count_beverage = prompt("개수");
var displayArea = document.querySelector('#result');

switch(select_beverage){
    case '콜라':
        if(cola * count_beverage > input_money){
            //가격부족
            alert(((cola * count_beverage) - input_money) + "원이 부족합니다.");
            break;
        }else{
            // 가격에 따라 몇개의 음료를 살 수 있는지
            alert(Math.floor(input_money/cola) + "개의 콜라를 살 수 있습니다. 거스름 돈은 " 
            + (input_money - (cola*count_beverage)) + "원 입니다.")
            break;
        }
    case '환타':
        if(fanta * count_beverage > input_money){
            //가격부족
            alert(((fanta * count_beverage) - input_money) + "원이 부족합니다.")
            break;
        }else{
            // 가격에 따라 몇개의 음료를 살 수 있는지
            //var fanta_count = math.floor()
            alert(Math.floor(input_money/fanta) + "개의 환타를 살 수 있습니다. 거스름 돈은 " 
            + (input_money - (fanta*count_beverage)) + "원 입니다.")
            break;
        }
    case '사이다':
        if(cider * count_beverage > input_money){
            //가격부족
            alert(((cider * count_beverage) - input_money) + "원이 부족합니다.")
            break;
        }else{
            // 가격에 따라 몇개의 음료를 살 수 있는지
            alert(Math.floor(input_money/cider) + "개의 사이다를 살 수 있습니다. 거스름 돈은 " 
            + (input_money - (cider*count_beverage)) + "원 입니다.")
            break;
        }

}

