

var big_image = document.querySelector("#cup");
var small_images = document.querySelectorAll(".small");


for(let i = 0; i < small_images.length ; i++){
    small_images[i].onclick = showBig;
}

function showBig(){
    var newPic = this.src;
    big_image.setAttribute("src", newPic);
}


var show_view = document.querySelector('#view');
var show_detail = document.querySelector('#detail');

show_view.onclick = function(){
    
    if(show_detail.style.display == "none"){
        show_detail.style.display = "block";
        show_view.innerHTML = "설명 닫기";
    }else{
        show_detail.style.display = "none";
        show_view.innerHTML = "상세 설명 보기";
    }
}