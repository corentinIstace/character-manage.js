/* eslint-disable no-plusplus */
/* eslint-disable import/extensions */
import post from "./post-method.js";
import clear from "./clear.js";

const adding = () => {
  document.getElementById("main-adding").addEventListener("click", () => {
    document.getElementById("card").style.display = "flex";
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
    post();
    clear();
  });
};

export default adding;
