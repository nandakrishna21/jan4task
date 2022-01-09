var username = document.getElementById('username');
var email = document.getElementById('email');
var password = document.getElementById('password');
var password2 = document.getElementById('password2');
var usernameerror = document.getElementById('usernameerror') ;
var btn = document.getElementById('btn');
var emailerror=  document.getElementById("emailerror");
var passworderror=  document.getElementById("passworderror");
var password2error= document.getElementById("password2error");

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    submit();
});



function  submit(){
    var count=0;
   
     
     if(username.value==''){
        usernameerror.textContent=" Invalid UserName";
        usernameerror.style.visibility="visible";
        username.style.border="2px solid red ";
        usernameerror.style.color="red"
       

     }
     else if(username.value.length >10 )
     { 
        usernameerror.textContent=" Name does not extend above 10 characters";
        usernameerror.style.visibility="visible";
        usernameerror.style.color="red";
        username.style.border="2px solid red ";

     }
     else{
        username.style.border="2px solid green ";
        usernameerror.style.visibility="hidden";
        count+=1;

     }
     if(email.value==""){
         emailerror.textContent=" Invalid Email ";
         emailerror.style.visibility="visible";
         emailerror.style.color="red";
         email.style.border="2px solid red";

     }
     else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)){
       
        email.style.border="2px solid green ";
        emailerror.style.visibility="hidden";
        count+=1;
     }
    else{
        emailerror.textContent="Email not valid";
        emailerror.style.visibility="visible";
        emailerror.style.color="red";
        email.style.border="2px solid red";
    }
    if(password.value==""){
        passworderror.style.visibility="visible";
        passworderror.style.color="red";
        passworderror.textContent="Enter valid password ";
        password.style.border="2px solid red ";

          
    }
    else if(! password.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/)){
        passworderror.textContent="Password must contains one Uppercase, one lower case,one special chartacters ,one number and minimum 10 letters";
        passworderror.style.visibility="visible";
        passworderror.style.color="red";
        password.style.border="2px solid red";
        password.style.marginBottom="10px";
    }
    else{
        password.style.border="2px solid green";
        passworderror.style.visibility="hidden";
        count+=1;
    }
    if (password2.value==""){
        password2error.style.visibility="visible";
        password2error.textContent="wrong password";
        password2error.style.color="red";
        password2.style.border="2px solid red";
    }
    else if(password.value==password2.value){
        password2.style.border="2px solid green";
        password2error.style.visibility="hidden";
        count+=1;
    }
    else{
       password2error.style.visibility="visible";
       password2error.textContent="Password does not match";
       password2error.style.color="red";
       password2.style.border="2px solid red";
    }
  if(count==4){
      
      console.log(username.value);
      console.log(email.value);
      console.log(password.value);
      console.log(password2.value);
  }
  else{
      console.log("Not provided proper data ");
      console.log("Submit button doesn't work");
  }

 }