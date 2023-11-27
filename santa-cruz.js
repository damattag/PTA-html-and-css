const themeButton = document.getElementById("theme-button");

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});

const cards = document.getElementsByClassName("card");

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", () => {
    cards[i].style.backgroundColor = "#151515";
    cards[i].style.color = "#fff";
  });
}

const input = document.getElementsByTagName("input")[0];

input.addEventListener("input", (event) => {
  const inputValue = event.target.value.toLowerCase();
  for (let i = 0; i < cards.length; i++) {
    const isVisible = cards[i].textContent.toLowerCase().includes(inputValue);
    if (isVisible === true) cards[i].style.display = "flex";
    else cards[i].style.display = "none";
  }
});
