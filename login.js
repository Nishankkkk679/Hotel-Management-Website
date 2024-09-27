function password(){
    temp_value = document.getElementById("check");
    temp_p = document.getElementById("passwd");
    if(temp_value.checked==true){
      alert("The Textbox is checked");
      temp_p.type="text"
    }
    else{
      temp_p.type="password";
    }
  }
  function validator(){
      temp_usr = document.getElementById("usr-name").value;
      temp_passwd = document.getElementById("passwd").value;

      if(temp_usr=='admin' && temp_passwd =='xavier'){
          document.getElementById("valid").innerHTML='Login Success!';
          document.getElementById("valid").className='success';
      }
      else{
          document.getElementById("valid").innerHTML='Login Failed, try again!';
          document.getElementById("valid").className='fail';
      }
  }