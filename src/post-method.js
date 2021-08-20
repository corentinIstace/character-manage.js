function post () {
    const saveChangeBtn = document.getElementById('save');
    
    saveChangeBtn.addEventListener("click", async () => {
        let heroName = document.getElementById('name').value
        let heroShortDesc = document.getElementById('shortDescription').value
        let heroDesc=document.querySelector(".ql-editor").innerHTML
        let img = document.getElementById('test').innerHTML 
        
        if (heroName.innerHTML == ""  ||  heroShortDesc.value == "" || heroDesc.value == "" || img.innerHTML == "") {
            
            console.log('recommence')
        }
        else {
            
            //  console.log("non") 
            let heroName = document.getElementById('name').value
            let heroShortDesc = document.getElementById('shortDescription').value
            let heroDesc=document.querySelector(".ql-editor").innerHTML
            let img = document.getElementById('test').innerHTML 
            
            const data = { description:`${heroDesc}`, shortDescription :`${heroShortDesc}`   ,name:`${heroName}` ,   image : `${img}` };
            console.log(data) 
            let response = await fetch(`https://character-database.becode.xyz/characters`,{ 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            let jsonResp = await  response.json();  
            console.log(jsonResp) 
            location.reload();
        }
    })
};

export default post;