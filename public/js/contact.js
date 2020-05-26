const joiningBtn = document.querySelector(".joining-btn");
const contactForm = document.querySelector(".contact-form");
const cleavePhone = new Cleave(".input-phone", {
  phone: true,
  phoneRegionCode: "US",
});

joiningBtn.addEventListener("click", () => {
  contactForm.style.display = "block";
  joiningBtn.style.display = "none";
});
