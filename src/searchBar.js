const searchBar = () => {
    search.addEventListener("keyup", async() => {
      const response = await fetch("https://character-database.becode.xyz/characters");
      const characters = await response.json();
      target.innerHTML = "";
      const search = document.getElementById("search");
      const input = search.value;
  
      let result = characters.filter((character) => {
          return character.name.includes(input)
      });
      // console.log(result);
      // filtre les noms du tableau creer ci-dessus afin de ne retourner que les noms comportant le ou les carractères
      // rentrés par l'utilisateur dans l'input
  
      // let suggestion = "";
      // if (input != ""){
      //     result.forEach(resultName=> {   
      //         suggestion += `<div id ="suggestion">${resultName.name}</div>`
      //     });
      // };
      // document.getElementById("suggestion").innerHTML = suggestion;
        // si l'utilisateur écrit dans l'input, il aura des propositions de characters ayant dans leur nom les 
        // carractères qu'il aura tapé, celles-ci seront écrites dans l'élément html "suggestion"
  
        // console.log(characters);
        result.forEach((result) =>{             
          const displayResult = () => {
            let template = document.getElementById('tpl-character')
            let templateClone = template.content.cloneNode(true);
         
            templateClone.getElementById("character-img").src = `data:image/JPEG;base64,${result.image}`;
            templateClone.getElementById("character-name").innerHTML = result.name;
            templateClone.getElementById("character-shortDescription").innerHTML = result.shortDescription;
            templateClone.getElementById("character-description").innerHTML = result.description;
            target.append(templateClone);
        };
        displayResult()
      });   
    });
};

export default searchBar;