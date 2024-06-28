

const api = "./api.json"

const $containerMovies = document.getElementById("container")

fetch(api)
 .then(response => response.json())
 .then(data => {
    const arrayMovies = data

   let templateMovies = arrayMovies.map(element => {
       let title = element.Title
       let image = element.Poster
       console.log(title)


       const poster = `
       <div>
            <img src="${image}">
            <h2>${title}</h2>
       </div>
       `
       return poster
       


    })

    let joinedTemplateMovies = templateMovies.join('')
    displayElement($containerMovies,joinedTemplateMovies)

    let checkbox = SetXpropiedad(arrayMovies,"Distributors")

    
    

 })


 .catch(error => console.log(error))

// capturas elementos del HTML
 const buscador = document.getElementById("buscador")
 const contenedorCheck = document.getElementById("checkbox-container")





//  CREACION E IMPRESION DE ELEMENTOS DINAMICOS
function SetXpropiedad (array,property){
    arrayOfproperty = array.map( item => item[property])
   return Array.from( new Set (arrayOfproperty))
}


function checkboxTemplate (pelicula){

   return ` <input type="checkbox" name="" id="${pelicula}">
            <label for="checkbox">${pelicula}</label>
            `
}




//  FILTROS DE USUARIO
function filtroXnombre(array,text,property){
   let  value = text.toLoweCase()
   let filter = array.filter( movie => movie[property].toLoweCase().includes(value))
  
   return filter
}

function filtroCheck(array,checkSelected,property){

   if(checkSelected.length == 0){
      return array
   }

  let filter = array.filter(item => checkSelected.includes(item[property]))

   // checkSelected

}


   //  buscador.addEventListener("change",()=>{
   //    console.log(buscador.value)
   //  })


function displayElement(container,template){

   container.innerHTML = template

}