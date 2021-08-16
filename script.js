( async () => {
    
            // CHARACTER'S TEMPLATE //
    
    const response = await fetch("https://character-database.becode.xyz/characters");
    const characters = await response.json();
    // console.log(characters);
    
    characters.forEach((character) => {
        
    let showCharacter = () =>{

        let template = document.getElementById("tpl-character");
        let target = document.getElementById("target");
        let clone = template.content.cloneNode(true);
        
        
        clone.querySelector("#character-img").src = `data:image/JPEG;base64,${character.image}`;
        clone.querySelector("#character-name").innerHTML = character.name;
        clone.querySelector("#character-shortDescription").innerHTML = character.shortDescription;
        clone.querySelector("#character-description").innerHTML = character.description;
        clone.querySelector("#character-id").innerHTML = character.id;
        
        target.appendChild(clone);
        };
        showCharacter();
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
        
        let names =[]
        characters.forEach(character =>{
            names.push(character.name) 
        });
        // console.log(names)
        // creer un tableau et y inclure tous les noms des characters présent dans l'API du même nom
        let result = names.filter((name) => {
            return name.includes(input)
        });
        console.log(result);
        // filtre les noms du tableau creer ci-dessus afin de ne retourner que les noms comportant le ou les carractères
        // rentrés par l'utilisateur dans l'input
        let suggestion = "";
        if (input != ""){
            result.forEach(resultName=> 
                suggestion += `<div id ="suggestion">${resultName}</div>`
                )};
                document.getElementById("suggestion").innerHTML = suggestion;
                // si l'utilisateur écrit dans l'input, il aura des propositions de characters ayant dans leur nom les 
                // carractères qu'il aura tapé, celles-ci seront écrites dans l'élément html "suggestion"
                
        if (input != ""){
                const displayCharacters = (characters) => {
                    // console.log(characters);
                    let show =characters.map((characters) =>{
                        return characters; 
                    })
                    document.getElementById("target").innerHTML = show;
                };
                displayCharacters(result);
            };
      
    });
            
            
            
})();



