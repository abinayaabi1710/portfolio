function sendMail(){
    var params ={
        name:document.getElementById("name").value,
        phonenumber:document.getElementById("phonenumber").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value,
    };
    const serviceID = "service_bef9e1o";
    const templateID = "template_kbst0xw";

emailjs
    .send(serviceID,templateID,params)
    .then((res)=>{
        document.getElementById("name").value="";
        document.getElementById("phonenumber").value="";
        document.getElementById("email").value="";
        document.getElementById("message").value="";

        console.log(res);
        alert("Your Message Sent Successfully");
    })
.catch((err)=>console.log(err));
}
