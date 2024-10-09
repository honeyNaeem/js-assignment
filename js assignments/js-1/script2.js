//                                         -CLASS # 6 ASSIGNMENT-

var correctEmail = "haramnaeem04@gmail.com"
var correctPass = "HaramNaeem468"

let userEmail = prompt("Enter Email")

if (userEmail.length == 0) {
    document.write("please enter your email")
}
else if (correctEmail == userEmail){
    let userPass = prompt("Enter password");
     if (userPass.length == 0){
        document.write("please enter your password")
    }else if (correctPass == userPass){
        document.write("Welcome you are login")
    }else{
        document.write("Wrong password")
    }
}else{
    document.write("Incorrect Email")
}