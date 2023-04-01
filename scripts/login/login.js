
function getData() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  console.log(username);
  console.log(password);

  const usernameList = ['omrani.sina14@gmail.com', 'goldencode.web@gmail.com'];
  const searchUser = usernameList.includes(username);

  const passwordList = ['python-python', '159753'];
  const searchPassword = passwordList.includes(password);
  
  if (searchUser == false){
    alert("username false");
  }else{
    if (searchPassword == false ){
        alert("password false")
    }else{
        alert("login in true")
    }
  }


    

  
}
