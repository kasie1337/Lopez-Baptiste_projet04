function editNav() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


// DOM Elements
const modalbg = document.querySelector(".bground");

const modalbg2 = document.querySelector(".bgRound2");

const subMit = document.querySelectorAll(".closesubmit");

const modalBtn = document.querySelectorAll(".modal-btn");

const formData = document.querySelectorAll(".formData");

const closeModal = document.querySelectorAll(".close");


// launch modal event
modalBtn.forEach((btn) => {

    btn.addEventListener("click", launchModal)


});
closeModal.forEach((span) => {
    span.addEventListener("click", closemodal)

});
function resetForm() {
    (document.getElementById("formulaire").reset());
}

function dontreset() {
    (document.document.getElementById("formulaire")).reset.disabled;
}
// launch modal form
function launchModal() {
    modalbg.style.display = "block";

}

function closemodal() {
    modalbg.style.display = "none";
    modalbg2.style.display = "none";
    subMit.style.display = "none";
}



function validateFirstname(field) {
    let parentFirstname = field.parentNode;

    if (field.value === "") {
        console.log("prénom obligatoire");
        parentFirstname.dataset.error = "Prénom obligatoire";
        parentFirstname.dataset.errorVisible = 'true';
        return false;

    } else if (field.value.length < 2) {
        parentFirstname.dataset.error = "Prénom doit comporter minimum 2 caractères";
        parentFirstname.dataset.errorVisible = 'true';
        console.log("Prénom doit avoir minimum 2 caractères");
        return false;
    } else {
        parentFirstname.dataset.error = "";
        parentFirstname.dataset.errorVisible = 'false';
        return true;
    }
}


function validateLastname(field) {
    let parentLastname = field.parentNode;
    if (field.value === "") {
        console.log("name obligatoire");
        parentLastname.dataset.error = "Nom obligatoire";
        parentLastname.dataset.errorVisible = 'true';
        return false;

    } else if (field.value.length < 2) {
        parentLastname.dataset.error = "Nom doit comporter minimum 2 caractères";
        parentLastname.dataset.errorVisible = 'true';
        console.log("name doit avoir minimum 2 caractères");
        return false;

    } else {
        parentLastname.dataset.error = "";
        parentLastname.dataset.errorVisible = 'false';
        return true;
    }

}

function validEmail(field) {
    let emailRegExp = RegExp('^[a-zA-Z0-9.-_]+[@][a-zA-Z0-9.-_]+[.][a-z]{2,10}$', 'g');
    let parentEmail = field.parentNode;
    let testMail = emailRegExp.test(field.value);
    console.log(testMail);

    if (field.value === "") {
        parentEmail.dataset.error = "Email obligatoire";
        parentEmail.dataset.errorVisible = 'true';
        return true;
    }
    if (field.value === testMail) {
        return true;
    }
    if (!field.value === testMail) {
        parentEmail.dataset.error = "Email non valide";
        parentEmail.dataset.errorVisible = 'true';
        return false;
    } else {
        parentEmail.dataset.error = "";
        parentEmail.dataset.errorVisible = 'false';
        return true;
    }
}

function validBirthday(field) {

    const birthdate = field.value;
    let dateOfBirthdate = new Date(birthdate);
    let parentBirthday = field.parentNode;

    if (dateOfBirthdate.getDay()) {
        let today = new Date();
        let today_date = today.toISOString();
        let date_birth = dateOfBirthdate.toISOString();

        console.log(today_date);
        console.log(date_birth);


        if (today_date > date_birth) {

            parentBirthday.dataset.error = "";
            parentBirthday.dataset.errorVisible = 'false';
            return true;
        }
        if (today_date < date_birth) {
            parentBirthday.dataset.error = "Veuillez entrer une date inférieur a la date du jour";
            parentBirthday.dataset.errorVisible = 'true';
            return false;
        }
    } else {
        parentBirthday.dataset.error = "Veuillez entrer une date d'anniversaire";
        parentBirthday.dataset.errorVisible = 'true';
        return false;
    }

}

function validQuantity(field) {
    const parse = parseInt(field.value);
    let parentQuantity = field.parentNode;
    console.log(parse);
    if (parse === parseInt(field.value)) {
        parentQuantity.dataset.error = "";
        parentQuantity.dataset.errorVisible = 'false';
        return true;
    }

    if (Number.isNaN(parse)) {
        parentQuantity.dataset.error = "Veuillez entre un nombre";
        parentQuantity.dataset.errorVisible = 'true';
        return false;
    }

}

const validCity = (field) => {

    let val = "";
    for (let q = 0; q < field.length; q++) {
        if (field[q].checked) {
            let parentCheck = field[q].parentNode;
            val = field[q].value;
            console.log(val);
            parentCheck.dataset.error = "";
            parentCheck.dataset.errorVisible = 'false';
            return true;
        } else {
            let parentCheck = field[q].parentNode;
            parentCheck.dataset.error = "Veuillez sélectionné une ville";
            parentCheck.dataset.errorVisible = 'true';
        }
    }
    return false;
}

function validCheck(field) {
    let parentCase = field.parentNode;


    if (field.checked === false) {
        parentCase.dataset.error = "Vous devez vérifier que vous acceptez les termes et conditions.";
        parentCase.dataset.errorVisible = 'true';
        return false
    }
    if (field.checked === true) {
        parentCase.dataset.error = "";
        parentCase.dataset.errorVisible = 'false';
        return true;
    }
}

function validate() {

    let errors = 0;
    console.log(errors);
    const firstInput = document.getElementById("first");
    const lastInput = document.getElementById("last");
    const mail = document.querySelector("#email");
    const birthdaySelect = document.querySelector("#birthdate");
    const quantityNum = document.getElementById("quantity");
    const checkCity = document.getElementsByName('location');
    const caseOn = document.querySelector("#checkbox1");


    if (!validateFirstname(firstInput)) {
        errors++;
    }
    if (!validateLastname(lastInput)) {
        errors++
    }
    if (!validEmail(mail)) {
        errors++;
    }
    if (!validBirthday(birthdaySelect)) {
        errors++;
    }
    if (!validQuantity(quantityNum)) {
        errors++;
    }
    if (!validCity(checkCity)) {
        errors++;
    }

    if (!validCheck(caseOn)) {
        errors++;
    }

    if (errors !== 0) {
        return false;
    }else{
        return true;
    }


}
document.getElementById("formulaire").addEventListener("submit", function(e){
    if(!validate()){
        e.preventDefault();
    }else{

        modalbg2.style.display = "block";
        modalbg.style.display = "none";

        e.preventDefault();

    }



});










