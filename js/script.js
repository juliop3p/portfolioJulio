const links = document
  .querySelectorAll(".js-scroll-trigger")
  .forEach((link) => {
    link.addEventListener("click", clickHandler);
  });

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth",
  });
}

const calculateAge = (birthday) => {
  var ageDifMs = Date.now() - birthday.getTime();
  var ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

document.querySelector("#age").innerText = calculateAge(new Date(1999, 12, 17));
