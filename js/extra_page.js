const secretInput = document.getElementById("password");
const row = document.getElementById("secret-row");

function ticketGoPics() {
  const newDiv = document.createElement("div");
  newDiv.classList.add("tkg-pic-container");

  let pic = ``;
  for (i = 1; i < 13; i++) {
    let content = `<img src= "./img/tkg/pic (${i}).jpg" class="tkg-pic">`;
    pic = content + pic;
  }
  newDiv.innerHTML = pic;
  row.append(newDiv);
}

// esunbank vue
function ticketGoWeb() {
  const newDiv = document.createElement("div");
  newDiv.classList.add("tkg-pic-container tkg-web");

  newDiv.innerHTML = `123`;
  row.append(newDiv);
}

secretInput.addEventListener("change", (e) => {
  console.log(e);
  let secretInputVal = e.target.value;
  console.log(secretInputVal);
  if (secretInputVal == "pic") {
    ticketGoPics();
  } else if (secretInputVal == "tkg") {
    ticketGoWeb();
  }
});
