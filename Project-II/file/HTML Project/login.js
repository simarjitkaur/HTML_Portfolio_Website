

function required()
{
    var empt1 = document.forms["form1"]["text1"].value;
    var empt2 = document.forms["form1"]["text2"].value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (empt1==" ")
    {
        document.getElementById("message1").innerHTML="hello";
        email.focus;
        return false;
        
    }
    else if (!empt1.match(mailformat)) {
        alert("*Please enter valid e-mail*");
        email.focus;
        return false;
     }
    else if(empt2==""){
        alert("Please enter a password");
        passw.focus;
        return false;
    }
    else{
        window.open("index.html");
        return true;
    }
}