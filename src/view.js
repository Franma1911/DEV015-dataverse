export const renderItems = (data) => {
  //Crear un elemento <ul> utilizando el método createElement//
  const ul = document.createElement("ul")
  //Recorrer la data mediante un forEach, lo que le decimos al codigo es que por cada elemento del bucle haga cierta acción// 
  data.forEach(function(pintura){
    // Función para crear la tarjeta de una pintura
    const card = document.createElement('li');
    card.setAttribute("itemscope", "")
    card.setAttribute("itemtype", "https://schema.org/Painting");
    card.innerHTML= `
      <img src="${pintura.imageUrl}" alt="${pintura.name}" itemprop = "image">
      <h3 itemprop = "name">${pintura.name}</h3>
      <p itemprop="description">${pintura.shortDescription}</p>
      <p itemprop="creator"><strong>Autor:</strong> ${pintura.author}</p>
      <p itemprop="dateCreated"><strong>Año:</strong> ${pintura.year}</p>
      <p itemprop="genre"><strong>Estilo:</strong> ${pintura.style}</p>
      <p itemprop="location"><strong>Ubicación:</strong> ${pintura.facts.location}</p>
  `;
    //agregar tarjeta al ul//
    ul.appendChild(card)
  });
  //obtener el elemento en donde se insertarán la ul con las tarjetas//
  const section = document.getElementById("root")
  //agregar el elemento ul al section//
  section.appendChild(ul)
};  
