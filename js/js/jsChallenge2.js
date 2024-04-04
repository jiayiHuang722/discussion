// When the box is checked the “Billing Address” shows up in the “Home Address” field 
// When the box is checked you can’t edit the “Home Address” field
// Fix the Accessibility Error on the page

document.querySelector("#bill").addEventListener("click", function(){
    console.log("this works");
    if (this.checked){
        document.getElementById("#sameAddress").style.display = "block";
    }
    else{
        document.getElementById("#sameAddress").style.display = "none";
        console.log("else statement")
    }
})