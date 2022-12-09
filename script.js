$( document ).ready(function() {
 $(".hire_success").hide();
});


function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,

        company: document.getElementById("company").value,
        phone: document.getElementById("phone").value,
        title: document.getElementById("title").value,
    };



    const serviceID = "service_o25i80g";
    const templateID = "template_wy0peoj";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";

            document.getElementById("company").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("title").value = "";
            console.log(res);
            // alert("Your message sent successfully!!");
            $(".hire_window").hide();
            $(".hire_success").show();
        })
        .catch(err => console.log(err));

}