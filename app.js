const frmEmail = document.getElementById("frm-email");
frmEmail.addEventListener("submit", sendEmail);

const serviceId = "service_yi9z08w";
const templateId = "template_vbm7h3j";
const apiKey = "tuSpS9Gl27lFdrduO";

function sendEmail(event) {
  event.preventDefault();
  emailjs.init(apiKey);
  emailjs.sendForm(serviceId, templateId, frmEmail)
    .then(result => {
      Swal.fire({
        icon: "success",
        title: "Mensaje enviado",
        text: "Su mensaje se envió correctamente"
      });
    })
    .catch(error => {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo enviar el mensaje"
      });
    });
}
