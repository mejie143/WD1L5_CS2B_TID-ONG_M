//log.js
// login using conditional statement
// first retrieve data form local storage
//2, check if LS is not null/blank
//3. split the string data into an aray => assign variables

function loginUser () {
    let savedRecord = localStorage.getItem("savedUser");

    if(savedRecord === null){
        document.getElementById("logMessage").innerHTML =
        "No user record found. Register first";
        return;
    }

    //convert saved JSON back into an object
    let userData = JSON.parse(savedRecord);

    //retrieve user input via login form
    let login_uname = document.getElementById("login_uname").value;
    let login_pword = document.getElementById("login_pword").value;

    //check credentials with conditional statement
    if (login_uname === userData.uname &&
        login_pword === userData.pword

    ){
        alert("Welcome " + userData.fname +
             "! You may now add item");

        window.location.href = "list.html";

    } else {
        document.getElementById("logMessage").innerHTML = 
        "Invalid User Credentials!";
    }
}