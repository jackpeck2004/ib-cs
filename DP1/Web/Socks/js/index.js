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

function maxMinInArray(array) {
  let max = array[0];
  let min = array[0];
  for (let i = 1; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
    if (min > array[i]) {
      min = array[i];
    }
  }

  return [max, min];
}

function handleCountBtnClick() {
  const [max, min] = maxMinInArray(socks);
  const freq = [];

  for (let i = min; i <= max; i++) {
    freq.push(0);
  }

  for (let i = 0; i < socks.length; i++) {
    const sock = socks[i];
    freq[sock - min]++;
  }

  let pairs = 0;

  for (let i = 0; i < freq.length; i = i + 1) {
    let f = freq[i];
    if (f % 2 == 1) {
      f--;
    }
    pairs += f / 2;
  }
  alert(pairs);
}

const form = document.querySelector("#sock-form");
form.addEventListener("submit", handleFormSubmit);

const countBtn = document.querySelector("#count-button");
countBtn.addEventListener("click", handleCountBtnClick);
