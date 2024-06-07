/* eslint-disable indent */
export const renderItems = (data) => {
  //Crear un elemento <ul> utilizando el método createElement//
  const ul = document.createElement("ul")
  //Recorrer la data mediante un forEach, lo que le decimos al codigo es que por cada elemento del bucle haga cierta acción// 
  data.forEach(function(pintura){
    //Crear un elemento <li> usando el método createElement//
  const li = document.createElement("li")
    //se le da a los elementos <li> los atributos de microdatos itemscope e itemtype//
    li.setAttribute("itemscope", "")
    li.setAttribute("itemtype", "https://schema.org/Painting")
    //dentro de los elementos <li> se crean otros elementos para los distintos datos que hay en las pinturas//
    const name = document.createElement("h3")
    //acceder a los keyvalues de los objetos del array pinturas, se le dice que el texContent de la const name (el <h3> va a ser el keyvalue name de pinturas//
    name.textContent = pintura.name
    //se le da el atributo itemprop al <h3> el atributo está basado en scheme.org//
    name.setAttribute("itemprop", "name")
    //se le inserta el h3 al li//
    li.appendChild(name)
    //el mismo proceso para img//
   // eslint-disable-next-line indent
   const image = document.createElement("img") 
    image.setAttribute("src", pintura.imageUrl) //directamenre se obtiene del objeto dataset.js
    image.setAttribute("itemprop", "image") 
    li.appendChild(image)
    //el mismo proceso para author//
    const author = document.createElement("p")
    author.textContent = pintura.author
    author.setAttribute("itemprop", "creator")
    li.appendChild(author)
    //el mismo proceso para style//
    const genre = document.createElement("p")
    genre.textContent = pintura.style
    genre.setAttribute("itemprop", "genre")
    li.appendChild(genre)
    //el mismo proceso para la descripción//
    const description = document.createElement("p")
    description.textContent = pintura.description
    description.setAttribute("itemprop", "description")
    li.appendChild(description)
    //el mismo proceso para el año//
    const year = document.createElement("p")
    year.textContent = pintura.year
    genre.setAttribute("itemprop", "dateCreated")
    li.appendChild(year)
    //el mismo proceso para medium//
    const material = document.createElement("p")
    material.textContent = pintura.facts.medium //acá se accede al keyvalue del objeto de facts que a su vez está dentro del objeto pintura//
    material.setAttribute("itemprop", "material")
    li.appendChild(material)
    //el mismo proceso para location//
    const museum = document.createElement("p")
    museum.textContent = pintura.facts.location
    museum.setAttribute("itemprop", "contentLocation")
    li.appendChild(museum)
    //el mismo proceso para size//
    const size = document.createElement("p")
    size.textContent = pintura.facts.dimensions
    size.setAttribute("itemprop", "size")
    li.appendChild(size) 
    ul.appendChild(li)
  });
  console.log(ul);
  return ul
};
