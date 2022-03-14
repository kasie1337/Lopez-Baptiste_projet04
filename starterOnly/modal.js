function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}




// DOM Elements
const modalbg = document.querySelector(".bground");
console.log(modalbg);
const modalBtn = document.querySelectorAll(".modal-btn");
console.log(modalBtn);
const formData = document.querySelectorAll(".formData");
console.log(formData);



// launch modal event
modalBtn.forEach((btn) => {
    console.log(btn);
    btn.addEventListener("click", launchModal)
});

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}


