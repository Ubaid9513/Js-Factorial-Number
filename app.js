var a = document.getElementById("a");
function factorial(){
    var user = document.getElementById("userInp").value;
    if (user < 0) {
        a.innerHTML = (`The factorial of ${user} is 1`);
    }else if(user == 1){
        a.innerHTML = (`The factorial of ${user} is 1`);
    }else{
        let fac = 1;
        for(var i = 1;i<=user;i++){
            fac = fac*i;
            user.innerHTML = "";
    }
    // create li Ele
    var li = document.createElement("li");
    a.appendChild(li);
    li.innerHTML = `The factorial of ${user} is ${fac}`;


    return false;
}
}
function deleteAll(){
    li.innerHTML = "";
}