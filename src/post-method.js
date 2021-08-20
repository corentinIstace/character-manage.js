/* eslint-disable no-console */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-shadow */
/* eslint-disable eqeqeq */
function post() {
  const saveChangeBtn = document.getElementById("save");

  saveChangeBtn.addEventListener("click", async () => {
    const heroName = document.getElementById("name").value;
    const heroShortDesc = document.getElementById("shortDescription").value;
    const heroDesc = document.querySelector(".ql-editor").innerHTML;
    const img = document.getElementById("test").innerHTML;

    if (
      heroName.innerHTML == "" ||
      heroShortDesc.value == "" ||
      heroDesc.value == "" ||
      img.innerHTML == ""
    ) {
      console.log("recommence");
    } else {
      //  console.log("non")
      const heroName = document.getElementById("name").value;
      const heroShortDesc = document.getElementById("shortDescription").value;
      const heroDesc = document.querySelector(".ql-editor").innerHTML;
      const img = document.getElementById("test").innerHTML;

      const data = {
        description: `${heroDesc}`,
        shortDescription: `${heroShortDesc}`,
        name: `${heroName}`,
        image: `${img}`,
      };
      console.log(data);
      const response = await fetch(
        "https://character-database.becode.xyz/characters",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const jsonResp = await response.json();
      console.log(jsonResp);
      location.reload();
    }
  });
}

export default post;
