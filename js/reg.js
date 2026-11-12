// reg.js
//step 1 get user details, concatenate
function saveUserRecord() {
    let userRecord = {
    fname: document.getElementById("full_name").value,
    address: document.getElementById("address").value,
    uname: document.getElementById("uname").value,
    email: document.getElementById("email").value,
    pword: document.getElementById("pword").value
    }
    //create a form checker using conditional statement 
    //to solve this issue use REQUIRED in <form> / create own

    if(
        userRecord.fname === "" ||
        userRecord.address === "" ||
        userRecord.uname === "" ||
        userRecord.email === "" ||
        userRecord.pword === "" 
    ) {
        document.getElementById("regMessage").innerHTML =
        "Please complete all required details";
        return;
    }

    //save it to local storage
    //convert object into JSON before saving
    localStorage.setItem("savedUser", JSON.stringify(userRecord));

    document.getElementById("regMessage").innerHTML =
    "<span style = 'color:green'>User details has been recorded!</span"

    //go to next window/page
    window.location.href = "login.html";
}
