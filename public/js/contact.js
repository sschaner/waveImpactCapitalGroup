const joiningBtn = document.querySelector(".joining-btn");
const contactForm = document.querySelector(".contact-form");
const cleavePhone = new Cleave(".input-phone", {
  phone: true,
  phoneRegionCode: "US",
});
const logo = document.querySelector(".contact-form__logo");
const logoSky = document.getElementById("sky");

joiningBtn.addEventListener("click", () => {
  contactForm.style.display = "block";
  joiningBtn.style.display = "none";
});

logo.addEventListener("mouseenter", () => {
  logoSky.style.fill = "green";
  console.log("enter");
});

logo.addEventListener("mouseleave", () => {
  logoSky.style.fill = "#233d89";
  console.log("leave");
});
