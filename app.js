

const api = "./api.json"

const $containerMovies = document.getElementById("container")

fetch(api)
 .then(response => response.json())
 .then(data => {

    const arrayMovies = data

    arrayMovies.sort((a,b) =>  a.Year - b.Year  )

   let templateMovies = arrayMovies.map(element => {
      
      return posterTemplate(element)  

    })

    let joinedTemplateMovies = templateMovies.join('')
    displayElement($containerMovies,joinedTemplateMovies)

    let checkbox = SetXpropiedad(arrayMovies,"Distributors")

    createCheckbox(checkbox,contenedorCheck)


     // Escuchador de eventos
   buscador.addEventListener("input",filtroCruzado)
    contenedorCheck.addEventListener("change",filtroCruzado)


       // main filter
      function filtroCruzado (){
      let checked = document.querySelectorAll("input[type='checkbox']:checked")
      const checkedValues = Array.from(checked).map( checkbox => checkbox.value)
     
      let checkUser = filtroCheck(arrayMovies,checkedValues,"Distributors")
     
      let buscadorMovies = filtroXnombre(checkUser,buscador.value,"Title")

         console.log(buscadorMovies)

         let templateForRender =""
         for ( movie of buscadorMovies) {
            templateForRender += posterTemplate(movie)  
         }
      
    displayElement($containerMovies,templateForRender)
        

   
    }

 
    

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

function createCheckbox (list,container) {
   let template = ""
   for(item of list){
       template += checkboxTemplate(item)
   }
   displayElement(container,template)


}

// templates

function checkboxTemplate (categoria){

   return ` <input type="checkbox" value="${categoria}"  id="${categoria}">
            <label for="${categoria}">${categoria}</label>
            `
}
function posterTemplate(element){

   const poster = `
       <div>
            <img src="${element.Poster}">
            <h2>${element.Title}</h2>
       </div>
       `
       return poster
   
}
    
    //  FILTROS DE USUARIO
    function filtroXnombre(array,text,property){
      let  value = text.toLowerCase()
      let filter = array.filter( movie => movie[property].toLowerCase().includes(value))
     
      return filter
   }
   
      function filtroCheck(array,checkSelected,property){
   
      if(checkSelected.length == 0){
         return array
      }
   
     let filter = array.filter(item => checkSelected.includes(item[property]))
   
     return filter
   
   }
       


function displayElement(container,template){

   container.innerHTML = template

}