function validatation(event){
    var value = event.target.value;
    if(value){
        event.target.style.border = " 1px solid grey"
    }else{
        event.target.style.border = " 4px solid red"
    }
}

function answer(){
    const userInput = document.getElementById("Name");
  userName = userInput.value
    alert( userName + " "+ "inshaAllah, we will contact you soon!")
}