

const api = "./api.json"

fetch(api)
 .then(response => response.json())
 .then(data => {
    const arrayMovies = data

    arrayMovies.map(element => {
       let title = element.Title
       let image = element.Poster
       console.log(title)


       const poster = `
       <div>
            <img src="${image}">
            <h2>${title}</h2>
       </div>
       `
        document.getElementById("container").innerHTML += poster


    })

 })


 .catch(error => console.log(error))