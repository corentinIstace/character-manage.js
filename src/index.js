/* eslint-disable no-console */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable no-shadow */
/* eslint-disable no-plusplus */
/* eslint-disable import/extensions */
// import createCharacter from "./createCharacter.js";
import loadPage from "./loader.js";
import searchBar from "./searchBar.js";
import put from "./put-method.js";
import post from "./post-method.js";
import adding from "./adding.js";
import deleted from "./deleted.js";
import clear from "./clear.js";

// --------------------------------- WINDOW LOADER -------------------------------------- //

loadPage();

(async () => {
  // --------------------------------- CHARACTER template -------------------------------------- //
  const response = await fetch(
    "https://character-database.becode.xyz/characters"
  );
  const characters = await response.json();
  // console.log(characters);
  characters.forEach((character) => {
    const showCharacter = () => {
      const template = document.getElementById("tpl-character");
      const target = document.getElementById("target");
      const clone = template.content.cloneNode(true);

      clone.querySelector(
        "#character-img"
      ).src = `data:image/JPEG;base64,${character.image}`;
      clone.querySelector("#character-name").innerHTML = character.name;
      clone.querySelector("#character-shortDescription").innerHTML =
        character.shortDescription;
      clone.querySelector("#character-id").innerHTML = character.id;

      target.appendChild(clone);
    };
    showCharacter();
  });
  // --------------------------------- CHARACTER BUTTONS -------------------------------------- //
  function addEventListenerList(list, event, fn) {
    for (let i = 0, len = list.length; i < len; i++) {
      list[i].addEventListener(event, fn, false);
    }
  }

  const butArray = document.querySelectorAll("#character-button");
  addEventListenerList(butArray, "click", async (e) => {
    // --------------------------------- MASK ALL CARDS -------------------------------------- //

    for (
      let i = 0, len = document.querySelectorAll("#character-button").length;
      i < len;
      i++
    ) {
      document.querySelectorAll("#character-button")[
        i
      ].parentNode.style.display = "none";
    }
    document.getElementById("main-adding").style.display = "none";
    document.getElementById("search").style.display = "none";
    const kik = e.currentTarget.parentNode;
    const id = kik.children[4].innerHTML;
    console.log(id);

    const response = await fetch(
      `https://character-database.becode.xyz/characters/${id}`
    );
    const character = await response.json();

    document.querySelector(".single-page").style.display = "flex";
    bla.src = `data:image/JPEG;base64,${character.image}`;
    document.querySelector(".card__title").innerHTML = `${character.name}`;
    document.querySelector(
      ".card__subtitle"
    ).innerHTML = `${character.shortDescription}`;
    document.querySelector(
      ".card__copy"
    ).innerHTML = `${character.description}`;
    document.getElementById("tester").innerHTML = id;

    document
      .getElementById("delete-single")
      .addEventListener("click", async () => {
        // console.log("delete-single")
        const id = document.getElementById("tester").innerHTML;
        const response = await fetch(
          `https://character-database.becode.xyz/characters/${id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const jsonResp = await response.json();
        console.log(jsonResp);
        location.reload();
      });

    document.getElementById("udapte").addEventListener("click", () => {
      const updateCharacter = () => {
        document.querySelector(".single-page").style.display = "none";
        console.log(
          character.name,
          character.description,
          `data:image/JPEG;base64,${character.image}`,
          character.shortDescription
        );
        document.getElementById("card").style.display = "flex";
        blah.src = `data:image/JPEG;base64,${character.image}`;
        document.getElementById("name").value = `${character.name}`;
        shortDescription.value = `${character.shortDescription}`;
        document.querySelector(
          ".ql-editor"
        ).innerHTML = `${character.description}`;
        document.querySelector("input").value = character.image;
        document.getElementById("tester").innerHTML = id;
      };
      updateCharacter();
      put();
      deleted();
    });
  });

  // --------------------------------- SEARCH BAR -------------------------------------- //

  searchBar();
})();

// --------------------------------- UPDATE -------------------------------------- //

const fileInput = document.getElementById("imgInp");
console.log(fileInput);
const saveChangeBtn = document.getElementById("save");
const x = "";

fileInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  console.log(file);
  const reader = new FileReader();

  reader.onloadend = () => {
    const base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
    // Put the url into the img atribute
    blah.src = reader.result;
    // console.log("ok")
    document.getElementById("test").innerHTML = `${base64String}`;
  };
  reader.readAsDataURL(file);
});
// --------------------------------- SAVE CHANGE BUTTON PUT METHOD -------------------------------------- //

put();

// --------------------------------- SAVE CHANGE BUTTON POST METHOD -------------------------------------- //

post();

// --------------------------------- DELETED CHARACTER -------------------------------------- //

deleted();

// --------------------------------- REINISIALISATION OF CHARACTER -------------------------------------- //

clear();

// --------------------------------- MARKDOW BAR -------------------------------------- //

const markdowBar = new Quill("#editor-container", {
  modules: {
    toolbar: [
      ["bold", "italic", "strike"],
      ["blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ align: "" }, { align: "center" }, { align: "right" }],
    ],
  },
  placeholder: "Compose an epic...",
  theme: "snow",
});

const countName = () => {
  const nameval = document.getElementById("name").value;
  // console.log(nameval)
  contentLen.innerHTML = `${nameval.length} on max 20 char`;
};

const countDescription = () => {
  const shortDescription = document.getElementById("shortDescription").value;
  // console.log(shortDescription)
  shortdesctLen.innerHTML = `${shortDescription.length} on max 70 char`;

  const description = document.querySelector(".ql-editor").innerText;
  // console.log(description)
  desctLen.innerHTML = `${description.length} on max 350 char`;
};

document.getElementById("name").addEventListener("input", countName);
document
  .getElementById("shortDescription")
  .addEventListener("input", countDescription);
document
  .querySelectorAll(".ql-editor")[0]
  .addEventListener("input", countDescription);

// --------------------------------- ADDING NEW CHARACTER -------------------------------------- //

adding();