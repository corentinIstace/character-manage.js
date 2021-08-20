/* eslint-disable no-console */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
function deleted() {
  document.getElementById("delete").addEventListener("click", async () => {
    // console.log("delete")

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
    //  console.log(data)
    const response = await fetch(
      `https://character-database.becode.xyz/characters/${id}`,
      {
        method: "DELETE",
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

export default deleted;
