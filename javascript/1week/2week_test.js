var n = 10
var even_sum = 0;
var odd_sum = 0;
/*while(i < number+1){
    result *= i;
    i++;
}
document.write(`<div>${number}! = ${result}</div>`)*/

for(var i = 1 ; i <= n ; i++){
    if(i % 2 == 0)
        even_sum += i;
    else
        odd_sum += i;
    
}
document.write(`짝수의 합 = ${even_sum}`)
document.write(`홀수의 합 = ${odd_sum}`)


var fruit_var = "apple";
document.write(fruit_var + "<br>");
var fruit_var = "banana";
document.write(fruit_var + "<br>");
let fruit_let = "apple";
document.write(fruit_let + "<br>");
fruit_let = "banana"; // let을 사용해서 재선언을 했을 때는 불가능
document.write(fruit_let + "<br>");
const fruit_const = "apple";
document.write(fruit_const + "<br>");
// const fruit_const = "banana"; // const를 사용해서 재선언을 했을 때는 불가능
fruit_const = "banana"; // const는 재할당도 불가능하기 때문
document.write(fruit_const + "<br>");


// 전역변수와 지역변수의 차이 -> 일반적인 프로그래밍언어(C, JAV, Python)과 동일한 개념
// Python은 전역변수를 사용하기 위해서 global 을 선언해야 하지만
// JS에서는 var을 새로 선언하지 않는다면 전역변수로 사용 가능하다.


//let, const의 스코프 영역 확인
for(var i = 0; i < 3; i++){
    document.write(i+"<br>");//0, 1, 2
}// 전역변수처럼 활용되어 3까지 출력, 참조가 가능해서
document.write(i+"<br>"); //3

for(let j = 0; j < 3; j++){
    document.write(j+"<br>");//0, 1, 2
}// 지역변수처럼 활용되어 for문 밖에서는 j의 값을 알수가 없다.
document.write(j+"<br>"); //?


let x = 1;
const y = 2;
if(x === 1 ){ //자료형까지 조건을 검색한다, let과 const는 블록 레벨의 스코프, 메모리에 등재가 가능하다.
    let x = 2;
    const y = 5;

    document.write("if문 내의 let x는 " + x + "<br>");//2
    document.write("if문 내의 const y는 " + y + "<br>");//5
}
// 블록레벨에서 나오면 원래 값이 적용된다.
document.write("if문 내의 let x는 " + x + "<br>");//1
document.write("if문 내의 const y는 " + y + "<br>");//2

//let, const는 재할당 불가.
x = 5;
document.write("let의 재할당 x는 " + x + "<br>");//2
y = 10;
document.write("let의 재할당 y는 " + y + "<br>");//5

//대부분 var로 해결되지만
//효율적인 코딩을 위해서라면 차이점을 파악하고 혼용하는것이 좋다.