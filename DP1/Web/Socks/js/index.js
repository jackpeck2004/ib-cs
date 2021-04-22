const socks = [];

function renderSocks() {
  const socksDiv = document.querySelector("#socks");
  socksDiv.innerHTML = null;
  socks.map((sock, _) => {
    const spanElement = document.createElement("span");
    spanElement.innerHTML = sock;
    socksDiv.appendChild(spanElement);
  });
}

function handleFormSubmit(event) {
  event.preventDefault();
  const sockInput = document.querySelector("#sock-input");
  const sockValue = sockInput.valueAsNumber;
  if (sockValue) {
    socks.push(sockValue);
    renderSocks();
  }
  sockInput.value = "";
}

const form = document.querySelector("#sock-form");

form.addEventListener("submit", handleFormSubmit);
