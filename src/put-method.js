function put () {
    const saveChangeBtn = document.getElementById('save');

    saveChangeBtn.addEventListener("click", async () => {    
           console.log("put") 
           
           let heroName = document.getElementById('name').value
           let heroShortDesc = document.getElementById('shortDescription').value
           let heroDesc=document.querySelector(".ql-editor").innerHTML
           let img = blah.src .replace("data:", "")
           .replace(/^.+,/, "");
  
          let id = document.getElementById("tester").innerHTML
                            
              const data = {description:`${heroDesc}`, shortDescription:`${heroShortDesc}`, name:`${heroName}`, image :`${img}`};
              // console.log(data) 
              let response = await fetch(`https://character-database.becode.xyz/characters/${id}`,{ 
                  method: 'PUT',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(data),
                  });
              let jsonResp = await response.json();  
              console.log(jsonResp) 
              location.reload();   
    });
};

export default put;
