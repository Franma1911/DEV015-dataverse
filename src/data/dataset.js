const pinturas = [
  {
    id: 1,
    name: "La noche estrellada",
    shortDescription: "Una famosa pintura de Vincent van Gogh",
    description: "La noche estrellada es una de las obras más famosas de Vincent van Gogh. Representa una interpretación soñadora de la vista desde la habitación del asilo del artista en Saint-Rémy-de-Provence durante la noche, aunque fue pintada de memoria durante el día.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1200px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
    author: "Vincent van Gogh",
    year: 1889,
    style: "Postimpresionismo",
    facts: {
      location: "Museo de Arte Moderno, Nueva York",
      medium: "Óleo sobre lienzo",
      dimensions: "73.7 cm × 92.1 cm"
    },
    extraInfo: "La pintura fue creada durante la estancia de Van Gogh en el asilo de Saint-Paul-de-Mausole."
  },
  {
    id: 2,
    name: "La Mona Lisa",
    shortDescription: "Un retrato pintado por Leonardo da Vinci",
    description: "La Mona Lisa es un retrato de medio cuerpo pintado por el artista italiano Leonardo da Vinci. Se considera una obra maestra arquetípica del Renacimiento italiano y ha sido descrita como 'la obra de arte más conocida, la más visitada, la más escrita, la más cantada y la más parodiada del mundo'.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/73/Leonardo_da_Vinci_-_Mona_Lisa_%28Louvre%2C_Paris%29.jpg",
    author: "Leonardo da Vinci",
    year: 1503,
    style: "Renacimiento",
    facts: {
      location: "Museo del Louvre, París",
      medium: "Óleo sobre tabla de álamo",
      dimensions: "77 cm × 53 cm"
    }
  },
  {
    id: 3,
    name: "El Grito",
    shortDescription: "Una icónica obra de Edvard Munch",
    description: "El Grito es una serie de cuadros del artista noruego Edvard Munch, creada en 1893. La pintura muestra una figura con una expresión de angustia y horror en un paisaje que parece vibrar con colores intensos.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9d/The_Scream_by_Edvard_Munch%2C_1893_-_Nasjonalgalleriet.png",
    author: "Edvard Munch",
    year: 1893,
    style: "Expresionismo",
    facts: {
      location: "Galería Nacional de Noruega, Oslo",
      medium: "Óleo, temple y pastel sobre cartón",
      dimensions: "91 cm × 73.5 cm"
    }
  },
  {
    id: 4,
    name: "La última cena",
    shortDescription: "Una obra maestra de Leonardo da Vinci",
    description: "La última cena es una pintura mural de Leonardo da Vinci, creada entre 1495 y 1498. Representa la escena de la última cena de Jesús con sus discípulos, una de las imágenes más icónicas del arte religioso.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_32x16.jpg/300px-The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_32x16.jpg",
    author: "Leonardo da Vinci",
    year: 1498,
    style: "Renacimiento",
    facts: {
      location: "Convento de Santa Maria delle Grazie, Milán",
      medium: "Tempera y óleo sobre yeso",
      dimensions: "460 cm × 880 cm"
    }
  },
  {
    id: 5,
    name: "La persistencia de la memoria",
    shortDescription: "Una pintura de Salvador Dalí",
    description: "La persistencia de la memoria es una pintura de 1931 del artista Salvador Dalí y una de sus obras más reconocibles. Se exhibió por primera vez en la Galería Julien Levy en 1932 y ha estado en la colección del Museo de Arte Moderno (MoMA) en Nueva York desde 1934.",
    imageUrl: "https://historia-arte.com/_/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbSI6WyJcL2FydHdvcmtcL2ltYWdlRmlsZVwvbnljLTItMjY4LmpwZyIsInJlc2l6ZSw4MDAiXX0.oHuiNXMeCqBT1fa5I9ddteiMiKkLQ_e1lyF6l8uUsWo.jpg",
    author: "Salvador Dalí",
    year: 1931,
    style: "Surrealismo",
    facts: {
      location: "Museo de Arte Moderno, Nueva York",
      medium: "Óleo sobre lienzo",
      dimensions: "24 cm × 33 cm"
    }
  },
  {
    id: 6,
    name: "Guernica",
    shortDescription: "Una poderosa obra de Pablo Picasso",
    description: "Guernica es un famoso mural pintado por Pablo Picasso en 1937. La obra es un poderoso testimonio contra la guerra y representa el bombardeo de la ciudad vasca de Guernica durante la Guerra Civil Española.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Mural_del_Gernika.jpg/640px-Mural_del_Gernika.jpg",
    author: "Pablo Picasso",
    year: 1937,
    style: "Cubismo",
    facts: {
      location: "Museo Reina Sofía, Madrid",
      medium: "Óleo sobre lienzo",
      dimensions: "349 cm × 776 cm"
    },
    extraInfo: "La obra fue encargada para la Exposición Internacional de París de 1937."
  },
  {
    id: 7,
    name: "El nacimiento de Venus",
    shortDescription: "Una obra renacentista de Sandro Botticelli",
    description: "El nacimiento de Venus es una pintura del artista renacentista Sandro Botticelli, creada en la década de 1480. Representa a Venus, la diosa romana del amor, emergiendo del mar como una mujer adulta.",
    imageUrl: "https://www.visituffizi.org/img/artworks/botticelli-birth-venus.jpg",
    author: "Sandro Botticelli",
    year: 1485,
    style: "Renacimiento",
    facts: {
      location: "Galería Uffizi, Florencia",
      medium: "Tempera sobre lienzo",
      dimensions: "172.5 cm × 278.9 cm"
    }
  },
  {
    id: 8,
    name: "Las Meninas",
    shortDescription: "Una obra maestra de Diego Velázquez",
    description: "Las Meninas es una pintura de Diego Velázquez, creada en 1656. La obra es conocida por su compleja composición y su innovador uso de la perspectiva. Representa a la infanta Margarita Teresa y sus damas de compañía en una escena del palacio real.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/99/Las_Meninas_01.jpg",
    author: "Diego Velázquez",
    year: 1656,
    style: "Barroco",
    facts: {
      location: "Museo del Prado, Madrid",
      medium: "Óleo sobre lienzo",
      dimensions: "318 cm × 276 cm"
    }
  },
  {
    id: 9,
    name: "El jardín de las delicias",
    shortDescription: "Un tríptico de Hieronymus Bosch",
    description: "El jardín de las delicias es un tríptico pintado por Hieronymus Bosch entre 1490 y 1510. La obra es conocida por su detallada y compleja representación de escenas bíblicas y simbólicas, incluyendo el Jardín del Edén y el Infierno.",
    imageUrl: "https://cdn.culturagenial.com/es/imagenes/el-bosco-y-el-jardin-de-las-delicias-historia-y-analisis-og.jpg",
    author: "Hieronymus Bosch",
    year: 1500,
    style: "Renacimiento del Norte",
    facts: {
      location: "Museo del Prado, Madrid",
      medium: "Óleo sobre tabla",
      dimensions: "220 cm × 389 cm"
    },
    extraInfo: "El tríptico se cierra mostrando una imagen gris y monocromática del tercer día de la creación del mundo."
  },
  {
    id: 10,
    name: "La joven de la perla",
    shortDescription: "Una pintura de Johannes Vermeer",
    description: "La joven de la perla, también conocida como La muchacha con el turbante, es una pintura de Johannes Vermeer, creada alrededor de 1665. La obra es famosa por su uso magistral de la luz y la representación detallada de la joven con una perla en la oreja.",
    imageUrl: "https://historia-arte.com/_/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbSI6WyJcL2FydHdvcmtcL2ltYWdlRmlsZVwvcGVybGEuanBnIiwicmVzaXplLDIwMDAsMjAwMCJdfQ.P7QSbpwRsVYrcTORhHoI3q-qFjHhjv2DRE5oPeGoi00.jpg",
    author: "Johannes Vermeer",
    year: 1665,
    style: "Barroco",
    facts: {
      location: "Museo Mauritshuis, La Haya",
      medium: "Óleo sobre lienzo",
      dimensions: "44.5 cm × 39 cm"
    }
  },
  {
    id: 11,
    name: "El beso",
    shortDescription: "Una obra icónica de Gustav Klimt",
    description: "El beso es una pintura del artista simbolista Gustav Klimt, creada entre 1907 y 1908. La obra muestra a una pareja abrazándose, con elaborados patrones dorados y geométricos que los envuelven.",
    imageUrl: "https://media.admagazine.com/photos/618a648c938f88774ad53f26/master/w_1600%2Cc_limit/75326.jpg",
    author: "Gustav Klimt",
    year: 1908,
    style: "Simbolismo",
    facts: {
      location: "Galería Belvedere, Viena",
      medium: "Óleo sobre lienzo",
      dimensions: "180 cm × 180 cm"
    }
  },
  {
    id: 12,
    name: "La creación de Adán",
    shortDescription: "Una parte de la Capilla Sixtina de Miguel Ángel",
    description: "La creación de Adán es un fresco pintado por Miguel Ángel alrededor de 1512. Es una de las escenas más famosas de la bóveda de la Capilla Sixtina y representa el momento en que Dios da vida a Adán.",
    imageUrl: "https://medialab.unmsm.edu.pe/chiqaqnews/wp-content/uploads/2021/01/adan.jpg",
    author: "Miguel Ángel",
    year: 1512,
    style: "Renacimiento",
    facts: {
      location: "Capilla Sixtina, Ciudad del Vaticano",
      medium: "Fresco",
      dimensions: "280 cm × 570 cm"
    }
  },
  {
    id: 13,
    name: "La ronda de noche",
    shortDescription: "Una pintura de Rembrandt",
    description: "La ronda de noche es una famosa pintura de Rembrandt, creada en 1642. La obra representa a la milicia cívica de Ámsterdam en una escena animada y dinámica.",
    imageUrl: "https://example.com/la-ronda-de-noche.jpg",
    author: "Rembrandt",
    year: 1642,
    style: "Barroco",
    facts: {
      location: "Rijksmuseum, Ámsterdam",
      medium: "Óleo sobre lienzo",
      dimensions: "363 cm × 437 cm"
    }
  },
  {
    id: 14,
    name: "La libertad guiando al pueblo",
    shortDescription: "Una obra emblemática de Eugène Delacroix",
    description: "La libertad guiando al pueblo es una pintura de Eugène Delacroix, creada en 1830. La obra conmemora la Revolución de Julio en Francia y muestra a la diosa de la libertad liderando al pueblo sobre las barricadas.",
    imageUrl: "https://example.com/la-libertad-guiando-al-pueblo.jpg",
    author: "Eugène Delacroix",
    year: 1830,
    style: "Romanticismo",
    facts: {
      location: "Museo del Louvre, París",
      medium: "Óleo sobre lienzo",
      dimensions: "260 cm × 325 cm"
    }
  },
  {
    id: 15,
    name: "El hijo del hombre",
    shortDescription: "Una pintura surrealista de René Magritte",
    description: "El hijo del hombre es una famosa pintura de René Magritte, creada en 1964. La obra muestra a un hombre con un sombrero de bombín, cuyo rostro está cubierto por una manzana verde flotante.",
    imageUrl: "https://example.com/el-hijo-del-hombre.jpg",
    author: "René Magritte",
    year: 1964,
    style: "Surrealismo",
    facts: {
      location: "Colección privada",
      medium: "Óleo sobre lienzo",
      dimensions: "116 cm × 89 cm"
    }
  },
  {
    id: 16,
    name: "La dama del armiño",
    shortDescription: "Un retrato de Cecilia Gallerani por Leonardo da Vinci",
    description: "La dama del armiño es un retrato pintado por Leonardo da Vinci alrededor de 1489-1490. La obra representa a Cecilia Gallerani, una joven noble de la corte de Milán, sosteniendo un armiño.",
    imageUrl: "https://example.com/la-dama-del-ermino.jpg",
    author: "Leonardo da Vinci",
    year: 1490,
    style: "Renacimiento",
    facts: {
      location: "Museo Czartoryski, Cracovia",
      medium: "Óleo sobre tabla",
      dimensions: "54 cm × 39 cm"
    }
  },
  {
    id: 17,
    name: "La escuela de Atenas",
    shortDescription: "Un fresco de Rafael",
    description: "La escuela de Atenas es un famoso fresco pintado por Rafael entre 1509 y 1511. La obra representa a los filósofos y científicos más importantes de la antigüedad clásica, reunidos en un majestuoso espacio arquitectónico.",
    imageUrl: "https://example.com/la-escuela-de-atenas.jpg",
    author: "Rafael",
    year: 1511,
    style: "Renacimiento",
    facts: {
      location: "Stanza della Segnatura, Ciudad del Vaticano",
      medium: "Fresco",
      dimensions: "500 cm × 770 cm"
    }
  },
  {
    id: 18,
    name: "La noche estrellada sobre el Ródano",
    shortDescription: "Otra obra maestra de Vincent van Gogh",
    description: "La noche estrellada sobre el Ródano es una pintura de Vincent van Gogh, creada en 1888. Representa la vista nocturna del río Ródano con las luces de la ciudad de Arles reflejadas en el agua.",
    imageUrl: "https://example.com/la-noche-estrellada-sobre-el-rodano.jpg",
    author: "Vincent van Gogh",
    year: 1888,
    style: "Postimpresionismo",
    facts: {
      location: "Museo de Orsay, París",
      medium: "Óleo sobre lienzo",
      dimensions: "72.5 cm × 92 cm"
    }
  },
  {
    id: 19,
    name: "El jardín de las Hespérides",
    shortDescription: "Una obra de Frederic Leighton",
    description: "El jardín de las Hespérides es una pintura del artista británico Frederic Leighton, creada en 1892. La obra representa una escena mitológica de las Hespérides, las ninfas que cuidaban el jardín con los manzanos dorados.",
    imageUrl: "https://example.com/el-jardin-de-las-hesperides.jpg",
    author: "Frederic Leighton",
    year: 1892,
    style: "Prerrafaelita",
    facts: {
      location: "Museo Lady Lever Art Gallery, Reino Unido",
      medium: "Óleo sobre lienzo",
      dimensions: "188 cm × 123 cm"
    }
  },
  {
    id: 20,
    name: "Impresión, sol naciente",
    shortDescription: "Una pintura de Claude Monet",
    description: "Impresión, sol naciente es una pintura de Claude Monet, creada en 1872. La obra es famosa por haber dado nombre al movimiento impresionista y representa el puerto de Le Havre al amanecer.",
    imageUrl: "https://example.com/impresion-sol-naciente.jpg",
    author: "Claude Monet",
    year: 1872,
    style: "Impresionismo",
    facts: {
      location: "Museo Marmottan Monet, París",
      medium: "Óleo sobre lienzo",
      dimensions: "48 cm × 63 cm"
    },
    extraInfo: "El título de la obra fue usado por primera vez en una exposición de 1874 que marcó el inicio del impresionismo."
  },
  {
    id: 21,
    name: "El violinista azul",
    shortDescription: "Una obra de Marc Chagall",
    description: "El violinista azul es una pintura del artista ruso-francés Marc Chagall, creada en 1947. La obra muestra a un violinista azul flotando en el aire, una imagen característica del estilo onírico de Chagall.",
    imageUrl: "https://example.com/el-violinista-azul.jpg",
    author: "Marc Chagall",
    year: 1947,
    style: "Surrealismo",
    facts: {
      location: "Museo Guggenheim, Nueva York",
      medium: "Óleo sobre lienzo",
      dimensions: "98 cm × 65 cm"
    }
  },
  {
    id: 22,
    name: "La danza",
    shortDescription: "Una vibrante obra de Henri Matisse",
    description: "La danza es una pintura de Henri Matisse, creada en 1910. La obra muestra a cinco figuras desnudas bailando en un círculo, con colores vivos y formas simplificadas que capturan el movimiento y la alegría.",
    imageUrl: "https://example.com/la-danza.jpg",
    author: "Henri Matisse",
    year: 1910,
    style: "Fauvismo",
    facts: {
      location: "Museo de Arte Moderno, Nueva York",
      medium: "Óleo sobre lienzo",
      dimensions: "260 cm × 391 cm"
    }
  },
  {
    id: 23,
    name: "El juramento de los Horacios",
    shortDescription: "Una obra neoclásica de Jacques-Louis David",
    description: "El juramento de los Horacios es una pintura de Jacques-Louis David, creada en 1784. La obra representa una escena legendaria de la historia romana, donde los tres hermanos Horacios juran defender a Roma.",
    imageUrl: "https://example.com/el-juramento-de-los-horacios.jpg",
    author: "Jacques-Louis David",
    year: 1784,
    style: "Neoclasicismo",
    facts: {
      location: "Museo del Louvre, París",
      medium: "Óleo sobre lienzo",
      dimensions: "330 cm × 425 cm"
    }
  },
  {
    id: 24,
    name: "La noche estrellada de nuevo",
    shortDescription: "Otra vista de La noche estrellada por Vincent van Gogh",
    description: "Una segunda interpretación de La noche estrellada por Vincent van Gogh, creada en 1889. Similar a la primera, esta obra también representa una vista nocturna del cielo estrellado, pero con una composición ligeramente diferente.",
    imageUrl: "https://example.com/la-noche-estrellada-de-nuevo.jpg",
    author: "Vincent van Gogh",
    year: 1889,
    style: "Postimpresionismo",
    facts: {
      location: "Colección privada",
      medium: "Óleo sobre lienzo",
      dimensions: "73.7 cm × 92.1 cm"
    }
  }
];

export default pinturas