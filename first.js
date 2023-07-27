var mybtn = document.getElementById("mybtn");


mybtn.addEventListener("click",function(){

    
    var task = prompt("Enter your Name");
    if(task.length>0){
      alert("You are successfully registered");
    }
    else alert("No Name Entered");
})