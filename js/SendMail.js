var submitButt = document.getElementById('submit');
var emailId = document.getElementById('emailField');
var message = document.getElementById('messageField');
var subject = document.getElementById('subjectField');
var name = document.getElementById('nameField');
var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

var isValidEmail= (emailFrom) => {

  if(emailFrom.match(emailPattern)){
    return true;
  }

  return false;
};

var retainMessageAndSubject = () =>{
  subject.value = subject.value;
  message.value = message.value;
}

submitButt.onclick = function(){
    // check for validity of the email first
    var isValid = isValidEmail(emailId.value.trim());
    if(!isValid){
      console.log("is invalid");
      window.alert(emailId.value.trim() + " is not a valid email, Please enter a valid email");
      emailId.value = "";
      retainMessageAndSubject();
    }else if(message.value.trim().length < 100 || subject.value.trim().length <= 0){
        window.alert("Either Message is less than 50 characters or Subject line is empty!");
        retainMessageAndSubject();
    }else{

    }

}
