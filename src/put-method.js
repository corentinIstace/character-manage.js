/* eslint-disable no-console */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
function put() {
  const saveChangeBtn = document.getElementById("save");

  saveChangeBtn.addEventListener("click", async () => {
    ("put");

    const heroName = document.getElementById("name").value;
    const heroShortDesc = document.getElementById("shortDescription").value;
    const heroDesc = document.querySelector(".ql-editor").innerHTML;
    const img = blah.src.replace("data:", "").replace(/^.+,/, "");

    const id = document.getElementById("tester").innerHTML;

    const data = {
      description: `${heroDesc}`,
      shortDescription: `${heroShortDesc}`,
      name: `${heroName}`,
      image: `${img}`,
    };
    // console.log(data)
    const response = await fetch(
      `https://character-database.becode.xyz/characters/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const jsonResp = await response.json();
    console.log(jsonResp);
    location.reload();
  });
}

export default put;
