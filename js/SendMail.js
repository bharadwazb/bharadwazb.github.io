const submitButt = document.getElementById('submitBut');
const emailId = document.getElementById('emailField');
const message = document.getElementById('messageField');
const subject = document.getElementById('subjectField');
const name = document.getElementById('nameField');
const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

var isValidEmail= (emailFrom) => {

  if(emailFrom.match(emailPattern)){
    return true;
  }

  return false;
};

var stopRefresh = (event) =>{
  event.preventDefault();
};

var sendEmail = (event, fromName, fromEmail, sub, msg)=>{
  window.open('mailto:bhumabharadwaz@gmail.com?subject=sub&body=msg');
};

submitButt.onclick = function(event){

    var isValid = isValidEmail(emailId.value.trim());
    if(!isValid){
      window.alert(emailId.value.trim() + " is not a valid email, Please enter a valid email");
      emailId.value = "";
      stopRefresh(event);

    }else if(message.value.trim().length < 100 || subject.value.trim().length <= 0){

        window.alert("Either Message is less than 50 characters or Subject line is empty!");
        stopRefresh(event);
    }else{

        console.log("Submitting");
        window.open('mailto:bharadwazbhuma98@yahoo.com?subject='+subject.value+'&body='+message.value);
        // stopRefresh(event);
    }

}
