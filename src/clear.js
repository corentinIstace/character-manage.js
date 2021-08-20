/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
function clear() {
  document.getElementById("delete").addEventListener("click", () => {
    const fileInput = document.getElementById("imgInp");

    fileInput.value = "";
    blah.src = "#";
    document.getElementById("name").value = "";
    document.getElementById("shortDescription").value = "";
    document.querySelector(".ql-editor").innerHTML = "";
    document.getElementById("card").style.display = "none";
    location.reload();
  });
}

export default clear;
