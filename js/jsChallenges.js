// Challenge 1 Part 1
document.querySelector("#subscribe").addEventListener("click", function(){
    console.log("this works");
    if (this.checked){
        document.getElementById("emailDiv").style.display = "block";
    }
    else{
        document.getElementById("emailDiv").style.display = "none";
        console.log("else statement")
    }
})

// Challenge 1 Part 2
document.addEventListener("click", function(){
    let currentTime = new Date();
    alert("Current time:" + currentTime);
})