//document.getElementById("buttonsend").addEventListener("click", function () {
//    alert("From: " + document.getElementById("txtfrom").value +
//        ", Subject: " + document.getElementById("txtsubject").value + 
//        ", Message: " + document.getElementById("txtmessage").value);
//})


$("#buttonsend").click(function () {
    $("#gandimg").fadeToggle();
    alert("From: " + $("#txtfrom").val() +
        ", Subject: " + $("#txtsubject").val() +
        ", Message: " + $("#txtmessage").val());
})

