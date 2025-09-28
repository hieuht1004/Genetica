 const startBtn = document.getElementById("startBtn");
  const orangeCard = document.getElementById("orangeCard");
  const cardsContainer = document.querySelector(".cards");

  startBtn.addEventListener("click", (e) => {
    e.preventDefault();
    cardsContainer.classList.add("hide-others"); // ẩn 2 card kia
    orangeCard.classList.add("expand"); // mở rộng card cam
  });