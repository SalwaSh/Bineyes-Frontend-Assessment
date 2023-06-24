$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
        $('html,body').animate({
            scrollTop: target.offset().top
        }, 1000);
        return false;
        }
    }
    });
});

//defining a function to display error message
function printError(elemId, errMsg){
    document.getElementById(elemId).innerHTML = errMsg;
}

//define a function to validate form
function validateForm(){
    //retrieving the values of form elements
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    //defining error variables with a default value
    var nameErr = emailErr = true;
    //Validate name
    if (name == ""){
        printError("nameErr", "Please enter your name");
    }else{
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false){
            printError("nameErr", "Please enter a valid name");
        }else{
            nameErr = false;
        }
    }
    //Validate email address
    if (email == ""){
        printError("emailErr", "Please enter your email address");
    }else{
        //regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false){
            printError("emailErr", "Please enter a valid email address");
        }else{
            emailErr = false;
        }
    }
    //Prevent the form from being submitted if there are any errors
    if (nameErr || emailErr){
        return false;
    }else{
        return true;
    }
}


