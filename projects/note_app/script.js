const addBtn = document.getElementById("add");

// localstorage get item
const notes = JSON.parse(localStorage.getItem("notes"));
if (notes) {
  notes.forEach((note) => {
    addNewNote(note);
  });
}
addBtn.addEventListener("click", () => {
  addNewNote((text = ""));
});

//addNote
function addNewNote(text = "") {
  const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `
      <div class="tools">
        <button class="edit" id="edit">
          <i class="fas fa-edit"></i>
        </button>
        <button class="delete" id="delete">
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
      <div class="main ${text ? "" : "hidden"}"></div>
      <textarea class="textarea ${
        text ? "hidden" : ""
      }" name="" id="content" cols="30" rows="10"></textarea>
  `;

  // edit and delete
  const editBtn = note.querySelector(".edit");
  const deleteBtn = note.querySelector(".delete");
  const textArea = note.querySelector(".textarea");
  const main = note.querySelector(".main");

  // text = textArea.value;
  textArea.value = text;
  main.innerHTML = marked(text);

  deleteBtn.addEventListener("click", () => {
    note.remove();
    updateLs();
  });

  editBtn.addEventListener("click", () => {
    main.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
  });

  textArea.addEventListener("input", (e) => {
    const { value } = e.target;
    main.innerHTML = marked(value);
    updateLs();
  });

  document.body.appendChild(note);
}

function updateLs() {
  const noteText = document.querySelectorAll("textarea");
  const notes = [];

  noteText.forEach((note) => {
    notes.push(note.value);
  });
  console.log(notes);
  localStorage.setItem("notes", JSON.stringify(notes));
}

// localStorage.setItem("name", JSON.stringify());
// JSON.parse(localStorage.setItem("name"));
// localStorage.removeItem("name");
