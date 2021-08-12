( async () => {
    // SEARCH BAR //
    
    const search = document.getElementById("search");
search.addEventListener("keyup", function() {
    const input = search.value;
    
    let names =[]
    characters.forEach(character =>{
        names.push(character.name) 
        // inclure ds le tableau
    });
    // console.log(names)
    let result = names.filter((name) => {
        return name.includes(input)
    });
    console.log(result);
}); 
    // CHARACTER'S TEMPLATE //

    const response = await fetch("https://character-database.becode.xyz/characters");
    const characters = await response.json();
    // console.log(characters);
    characters.forEach((character) => {
        
        let template = document.getElementById("tpl-character");
        let target = document.getElementById("target");
        let clone = template.content.cloneNode(true);
        
        
        clone.querySelector("#character-img").src = `data:image/JPEG;base64,${character.image}`;
        clone.querySelector("#character-name").innerHTML = character.name;
        clone.querySelector("#character-shortDescription").innerHTML = character.shortDescription;
        clone.querySelector("#character-description").innerHTML = character.description;
        
        target.appendChild(clone);
    });
})();


// const displayCharacter = (characters) => {
//     return characters.map((character) => {
//         let arrayName = Array(character.name)
//         console.log(arrayName);
//         arrayName.forEach(name => {
//             name.filter(name => {
//                 name.includes(input)
//             })
//         })
//     })
// }
// displayCharacter(characters);
// // console.log(displayCharacter);

        // for( character of characters) {
        //     const persons = Array(character.name)  
        //     // console.log(persons);
    
        //     let result = persons.forEach(person => {
        //             person.filter(person => {
        //                 person.name.includes(input);
        //         })
        //         console.log(result);
        //     });
// console.log(input)

//    let arrayName = Array (name);
//    console.log(arrayName);  




