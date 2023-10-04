console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const successMessage = document.querySelector('[data-js="success"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

function showSuccessMessage() {
  successMessage.removeAttribute("hidden");
}

function hideSuccessMessage() {
  successMessage.setAttribute("hidden", "");
}

// --v-- write your code here --v--
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const formDataObject = Object.fromEntries(formData.entries());

  if (!formDataObject.tos || formDataObject.tos !== "on") {
    event.target.elements.tos.focus();
    showTosError();
    //Why is ther no focus?
    hideSuccessMessage();
    return;
  }

  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  alert("Form submitted");
  showSuccessMessage();
});

tosCheckbox.addEventListener("change", () => {
  if (tosCheckbox.checked == true) {
    hideTosError();
  }
});
