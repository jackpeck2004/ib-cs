const clickMeBtn = document.querySelector("#click-me-button");

function handleClickMeBtnClick() {
  const p = document.querySelector("p.important");

  setInterval(() => {
    const classList = p.classList;
    p.classList.toggle("white");
  });
}

clickMeBtn.addEventListener("click", handleClickMeBtnClick);
