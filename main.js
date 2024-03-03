function writeInk() {
    const element = document.getElementById("email");
    const placeholderElement = document.getElementsByClassName("pseudoPlaceholder");
    if (element.value == "") {
        placeholderElement[0].style.display = "block";
    } else {
        placeholderElement[0].style.display = "none";
    }
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

const validateForm = formThis => {
    const element = formThis.email;
    let elementStyle = element.style;
    if (!validateEmail(element.value)) {
        elementStyle.borderColor = "red";
        document.getElementById('invalid-email').style.display = "block";
        if (window.innerWidth <= 670) {
            document.getElementById('invalid-email').parentElement.style.gridTemplateRows = "1fr .9fr 1fr";
        }
    } else {
        elementStyle.borderColor = "";
        document.getElementById('invalid-email').style.display = "";
        document.getElementById('invalid-email').parentElement.style.gridTemplateRows = "1fr .5fr 1fr";
        element.value = '';
    }

    return false;
}