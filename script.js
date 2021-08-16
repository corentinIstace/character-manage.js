( async () => {
    
            // CHARACTER'S TEMPLATE //
    
    const response = await fetch("https://character-database.becode.xyz/characters");
    const characters = await response.json();
    // console.log(characters);

    let showCharacter = (character) =>{

        let template = document.getElementById("tpl-character");
        let target = document.getElementById("target");
        let clone = template.content.cloneNode(true);
        
        
        clone.querySelector("#character-img").src = `data:image/JPEG;base64,${character.image}`;
        clone.querySelector("#character-name").innerHTML = character.name;
        clone.querySelector("#character-shortDescription").innerHTML = character.shortDescription;
        clone.querySelector("#character-id").innerHTML = character.id;
        
        target.appendChild(clone);
    };
    
    characters.forEach((character) => {

        showCharacter(character);
    });
    
    // SINGLE CHARACTER // 
    
    const button = document.querySelector("#character-button");
    button.addEventListener("click", function() {
        target.style.display = "none";
        
        // console.log(characters)
        for (let character of characters){
            // console.log(character);
            let showPers = () =>{
                let persTemplate = document.getElementById("tpl-personnage");
                let tag = document.getElementById("tag");
                let clonePers = persTemplate.cloneNode(true).content;
                
                clonePers.getElementById("personnage-img").src = `data:image/JPEG;base64,${character.image}`;
                clonePers.getElementById("personnage-name").innerHTML = character.name;
                clonePers.getElementById("personnage-shortDescription").innerHTML = character.shortDescription;
                clonePers.getElementById("personnage-description").innerHTML = character.description;
                clonePers.getElementById("personnage-id").innerHTML = character.id;
                
                tag.appendChild(clonePers);
                
            };
            showPers()
        };
        // deleted //

document.getElementById("delete").addEventListener("click", async() => {
                    
    try{
    const id = document.getElementById("personnage-id").innerHTML;
        const responseId = await fetch(`https://character-database.becode.xyz/characters/${id}`,
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if(! responseId.ok){
            throw new Error("no character with this id");
        }
        }
        catch(error){
        alert(error);
        }        
        });
      
    });

    // SEARCH BAR //
    
    search.addEventListener("keyup", function() {
        const search = document.getElementById("search");
        const input = search.value;
    
        let result = characters.filter((character) => {
            return character.name.includes(input)
        });
        console.log(result);
        // filtre les noms du tableau creer ci-dessus afin de ne retourner que les noms comportant le ou les carractères
        // rentrés par l'utilisateur dans l'input
    
        let suggestion = "";
        if (input != ""){
            result.forEach(resultName=> {
                
                suggestion += `<div id ="suggestion">${resultName.name}</div>`
            });
        };
                document.getElementById("suggestion").innerHTML = suggestion;
                // si l'utilisateur écrit dans l'input, il aura des propositions de characters ayant dans leur nom les 
                // carractères qu'il aura tapé, celles-ci seront écrites dans l'élément html "suggestion"
        
        let image =""
        let nom = "";     
        let shortDescription = "";       
        let description = "";    
        // for(let i =0; i< document.querySelectorAll("li").length; i++){
        //    document.querySelectorAll("li")[i].style.display = "none" 
        // };
        if (character.name.includes(input)){
          result.forEach(result => {
              image += `data:image/JPEG;base64,${result.image}`
              nom += result.name
              shortDescription += result.shortDescription
              description += result.description
          });
        };
        document.getElementById("character-img").src = image;
        document.getElementById("character-name").innerHTML = nom;
        document.getElementById("character-shortDescription").innerHTML = shortDescription;
        document.getElementById("character-description").innerHTML = description;
        });
    
})();



