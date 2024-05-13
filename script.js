function login() {
        let username = prompt("Sign Up Username : ");
        let password = prompt("Sign Up Password : ");
        if (username != null && username != "" && password != null && password != ""){
        let user = username;
        let pass = password;

        alert("Sign Up Success");
       let konfirmasi = confirm("Do you want to continue login?");
        if(konfirmasi){
        let loginUser = prompt("Login Username : ");
        let loginPassword = prompt("Login Password : ");
        
        if(loginUser == user && loginPassword == pass){
            
        }
        else if(loginUser == user || loginPassword == pass){
            if(loginUser != user && loginPassword == pass){
                alert("Wrong Username");
            }
            else if(loginUser == user && loginPassword != pass){
           alert("Wrong Password");
            } 
        }
        else {
            alert("<p>Wrong Password and Username </p>");
        }
    } else {
        alert("Login Failed");
    }
    } else {
        alert("Sign Up Failed");
    }
    }