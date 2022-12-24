function newRegister(){
    var newP = document.createElement("p");// newP는 요소 p로 만들어져있다.
    var userName = document.querySelector("#userName");//userName은 input에서 받은 이름이다.
    var newText = document.createTextNode(userName.value);//newtext는 userName에서 받은 값을 TextNode 형식으로 가지고 있다.
    newP.appendChild(newText);// 요소 p에 newText값을 자식으로 가지게 한다.


    var newSpan = document.createElement("span");//span을 p요소 userName 뒷편에  넣어준다.
    newSpan.innerText = "X";
    newP.append(newSpan);

    var attr = document.createAttribute("class");//span에 속성을 부여
    attr.value = "del";
    newSpan.setAttributeNode(attr);

    var nameList = document.querySelector("#nameList"); //nameList는 출력할 div창 id이다
    nameList.insertBefore(newP, nameList.childNodes[0]);//변수에 담아서 노드를 p-text-p-text-p-text형식으로 최신값을 0번 노드에 넣어준다.
    userName.value="";

    var removeBtns = document.querySelectorAll(".del");//삭제의 경우 

    for(let i=0; i<removeBtns.length;i++){//for문을 통해 <span id='del'>X</span> id del인 요소에 클릭 이벤트를 부여한다.
        removeBtns[i].addEventListener("click", function(){
            if(this.parentNode.parentNode)//p-text-p-text-p-text 이와같은 구성에서 부모에 부모 노드를 확인한다는건 p요소를 흝는다는것.
                this.parentNode.parentNode.removeChild(this.parentNode);//removechild가 관계를 끊은 해당 노드의 참조를 반환해서
        });//p1-text1-p2-text2-p3-text3 -> p1-text1-p3-text3 text2 p2로 거슬러가 p2를 제거하고 해당 요소가 참조하고 있던 text1의
        // 주소를 반환받아 p3가 이어받게 된다.
    }//추가. 주소값을 이어서 받는게 아니라
}//newP 노드를 nameList라는 노드 리스트에 추가하게 되는데 이때 삭제한 노드 참조 반환, 즉 관계를 끊은 노드가 참조하고 있던 
