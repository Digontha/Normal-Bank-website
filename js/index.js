document.getElementById("submit-btn").addEventListener('click',function(){

    const inputFiledOfEmail = document.getElementById("input-email")
    const inputTextOfEmail = inputFiledOfEmail.value;
     
    const inputFiledOfPassword = document.getElementById("input-password")
    const inputTextOfPassword = inputFiledOfPassword.value;
    
    if(inputTextOfEmail=="abc@gmail.com" && inputTextOfPassword=='digontha'){
    window.location.href = 'index2.html';
    }else{
        alert("invalid user")
    }
})