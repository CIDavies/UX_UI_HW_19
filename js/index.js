var modal = document.getElementById("contactModal");

var a = document.getElementById("contactNav");

var span = document.getElementsByClassName("close")[0];

a.addEventListener("click", function(){
    modal.style.display = "block";
});

span.addEventListener("click", myClickEvent);

window.addEventListener("click", function(event) {
    if (event.target == modal){
        modal.style.disaply = "none";
    }
});

function myClickEvent () {
    modal.style.display = "none"
};
