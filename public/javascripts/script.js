import "../sass/style.scss";

//gumbi handler
const gumbi = [...document.querySelectorAll(".onoff__gumb")];
const status = document.querySelector(".onoff__status");
gumbi.forEach(gumb => {
  gumb.addEventListener("click", () => {
    const URL = `${window.location.href}rele/${gumb.dataset.stanje}`;
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        status.innerHTML = `Stanje: ${data.stanje}`;
      });
  });
});
