var section = document.querySelector("section")
fetch("https://jsonplaceholder.typicode.com/posts")
    .then (res => res.json())
    .then (data => {
        for(var i=0; i<data.length; i++){
            var para = document.createElement("div");               
            para.innerHTML = `<h2>${data[i].title}</h2> <p>${data[i].body}</p>`              
            section.appendChild(para);  
        }
    })

        

    


    