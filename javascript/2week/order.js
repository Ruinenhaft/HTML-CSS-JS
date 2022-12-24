var cbx = document.querySelector("#shippingInfo");

cbx.addEventListener("click", function(){
    if(cbx.checked == true){
        document.querySelector("#shippingName").value = document.querySelector("#billingName").value;
        document.querySelector("#shippingTel").value = document.querySelector("#billingTel").value;
        document.querySelector("#shippingAddr").value = document.querySelector("#billingAddr").value;
    }else{
        document.querySelector("#shippingName").value = "";
        document.querySelector("#shippingTel").value = "";
        document.querySelector("#shippingAddr").value = "";
    }
});

var id_add_attr = document.createAttribute("value");
id_add_attr.value = "4~15자리의 영문과 숫자로 입력"
document.querySelector("#billingName").setAttribute(id_add_attr);