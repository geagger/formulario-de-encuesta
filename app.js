// Capturando el formulario
const form = document.getElementById("survey-form");

// Agregar un manejador de eventos para el envío del formulario
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevenir el envío por defecto

  // Obtener los valores de los campos
  const name = form.elements.name.value;
  const email = form.elements.email.value;
  const number = form.elements.number.value;
  const dropdown = form.elements.dropdown.value;
  const option = form.elements.option.value;
  const checks = Array.from(form.elements.check)
    .filter(check => check.checked)
    .map(check => check.value);
  const comments = form.elements.comments.value;

  // Mostrar los valores en la consola (puedes ajustar esto según tus necesidades)
  console.log("Nombre:", name);
  console.log("Email:", email);
  console.log("Número:", number);
  console.log("Dropdown:", dropdown);
  console.log("Opción:", option);
  console.log("Campos de verificación:", checks);
  console.log("Comentarios:", comments);
});
