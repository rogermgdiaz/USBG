const steps = document.querySelectorAll(".step");
let currentStep = 0;

function showStep(index) {
  steps.forEach((step, i) => {
    step.classList.toggle("active", i === index);
  });
}

document.querySelectorAll(".next").forEach(button =>
  button.addEventListener("click", () => {
    if (currentStep < steps.length - 1) {
      currentStep++;
      showStep(currentStep);
    }
  })
);

document.querySelectorAll(".prev").forEach(button =>
  button.addEventListener("click", () => {
    if (currentStep > 0) {
      currentStep--;
      showStep(currentStep);
    }
  })
);

document.getElementById("multiStepForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Form submitted!");
  // Aquí puedes usar fetch() para enviar los datos a Formspree o tu backend
});