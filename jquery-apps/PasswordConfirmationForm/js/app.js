//Problem: Hints are shown even when form is valid
//Solution: Hide and show them at appropriate times

//Hide Hints
$('form span').hide();

function passordEvent() {
    //Find out if password is valid
    if($(this).val().length > 8) {
        //Hide hint if valid
        $(this).next().hide();
    } else {
        //else show hint
        $(this).next().show();
    }   
}

//When event happens on password input
$('#password').focus(passordEvent).keyup(passordEvent);
    
//When event happens on confirmaiton input
    //Find out if passord and confirmaiton match
    //Hide hint if match
    //else show hint