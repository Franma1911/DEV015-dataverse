const pinturas = [
  {
    id: "1",
    name: "La noche estrellada",
    shortDescription: "Una famosa pintura de Vincent van Gogh",
    description: "La noche estrellada es una de las obras más famosas de Vincent van Gogh. Representa una interpretación soñadora de la vista desde la habitación del asilo del artista en Saint-Rémy-de-Provence durante la noche. La pintura captura el cielo nocturno con remolinos y estrellas brillantes, creando un efecto hipnótico. Aunque fue pintada de memoria durante el día, refleja la lucha interna y la esperanza del artista.",
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
    id: "2",
    name: "La Mona Lisa",
    shortDescription: "Un retrato pintado por Leonardo da Vinci",
    description: "La Mona Lisa es un retrato de medio cuerpo pintado por el artista italiano Leonardo da Vinci. Se considera una obra maestra arquetípica del Renacimiento italiano. La pintura es famosa por la expresión enigmática de la modelo, conocida como la Gioconda, y por el uso innovador del sfumato. Ha sido descrita como 'la obra de arte más conocida, la más visitada, la más escrita, la más cantada y la más parodiada del mundo'.",
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
    id: "3",
    name: "El Grito",
    shortDescription: "Una icónica obra de Edvard Munch",
    description: "El Grito es una serie de cuadros del artista noruego Edvard Munch, creada en 1893. La pintura muestra una figura con una expresión de angustia y horror en un paisaje que parece vibrar con colores intensos. Esta obra se ha convertido en un símbolo universal de la ansiedad humana, reflejando el profundo impacto emocional del aislamiento y la desesperación.",
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
    id: "4",
    name: "La última cena",
    shortDescription: "Una obra maestra de Leonardo da Vinci",
    description: "La última cena es una pintura mural de Leonardo da Vinci, creada entre 1495 y 1498. Representa la escena de la última cena de Jesús con sus discípulos, una de las imágenes más icónicas del arte religioso. La composición captura el momento en que Jesús anuncia que uno de sus discípulos lo traicionará, y cada apóstol reacciona con emociones distintas.",
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
    id: "5",
    name: "La persistencia de la memoria",
    shortDescription: "Una pintura de Salvador Dalí",
    description: "La persistencia de la memoria es una pintura de 1931 del artista Salvador Dalí y una de sus obras más reconocibles. Se exhibió por primera vez en la Galería Julien Levy en 1932 y ha estado en la colección del Museo de Arte Moderno (MoMA) en Nueva York desde 1934. La obra presenta relojes derretidos en un paisaje onírico, simbolizando la relatividad del tiempo y la persistencia de los recuerdos.",
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
    id: "6",
    name: "Guernica",
    shortDescription: "Una poderosa obra de Pablo Picasso",
    description: "Guernica es un famoso mural pintado por Pablo Picasso en 1937. La obra es un poderoso testimonio contra la guerra y representa el bombardeo de la ciudad vasca de Guernica durante la Guerra Civil Española. Con su estilo cubista y sus figuras distorsionadas, la pintura captura el horror y la tragedia de la guerra, convirtiéndose en un ícono del arte pacifista.",
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
    id: "7",
    name: "El nacimiento de Venus",
    shortDescription: "Una obra renacentista de Sandro Botticelli",
    description: "El nacimiento de Venus es una pintura del artista renacentista Sandro Botticelli, creada en la década de 1480. Representa a Venus, la diosa romana del amor, emergiendo del mar como una mujer adulta. La obra es famosa por su belleza idealizada y la elegancia de sus líneas, capturando la esencia del Renacimiento con su enfoque en la mitología clásica y la armonía estética.",
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
    id: "8",
    name: "Las Meninas",
    shortDescription: "Una obra maestra de Diego Velázquez",
    description: "Las Meninas es una pintura de Diego Velázquez, creada en 1656. La obra es conocida por su compleja composición y su innovador uso de la perspectiva. Representa a la infanta Margarita Teresa y sus damas de compañía en una escena del palacio real. Velázquez se retrató a sí mismo pintando la escena, desafiando las convenciones artísticas de la época.",
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
    id: "9",
    name: "El jardín de las delicias",
    shortDescription: "Un tríptico de Hieronymus Bosch",
    description: "El jardín de las delicias es un tríptico del pintor neerlandés Hieronymus Bosch, creado alrededor de 1490-1510. La obra muestra una visión surrealista del paraíso, la vida terrenal y el infierno. Es conocida por sus detalles fantásticos y su simbolismo complejo, que ha sido interpretado de diversas maneras a lo largo de los siglos.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Jardin_delicias.jpg",
    author: "Hieronymus Bosch",
    year: 1505,
    style: "Renacimiento del Norte",
    facts: {
      location: "Museo del Prado, Madrid",
      medium: "Óleo sobre tabla",
      dimensions: "220 cm × 389 cm"
    }
  },
  {
    id: "10",
    name: "La joven de la perla",
    shortDescription: "Una obra de Johannes Vermeer",
    description: "La joven de la perla es una pintura de Johannes Vermeer, creada alrededor de 1665. La obra, también conocida como 'La Mona Lisa del Norte', es famosa por su luminosidad y el uso magistral de la luz y la sombra. El retrato muestra a una joven con un turbante exótico y un pendiente de perla, con una expresión enigmática que ha capturado la imaginación de los espectadores durante siglos.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Meisje_met_de_parel.jpg",
    author: "Johannes Vermeer",
    year: 1665,
    style: "Barroco",
    facts: {
      location: "Mauritshuis, La Haya",
      medium: "Óleo sobre lienzo",
      dimensions: "44.5 cm × 39 cm"
    }
  },
  {
    id: "11",
    name: "El beso",
    shortDescription: "Una obra icónica de Gustav Klimt",
    description: "El beso es una pintura del artista simbolista Gustav Klimt, creada entre 1907 y 1908. La obra muestra a una pareja abrazándose, con elaborados patrones dorados y geométricos que los envuelven. La pintura es una celebración del amor y la intimidad, utilizando el dorado para crear una atmósfera etérea y casi divina. Es una de las obras más reconocidas y reproducidas de Klimt.",
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
    id: "12",
    name: "La creación de Adán",
    shortDescription: "Una parte de la Capilla Sixtina de Miguel Ángel",
    description: "La creación de Adán es un fresco pintado por Miguel Ángel alrededor de 1512. Es una de las escenas más famosas de la bóveda de la Capilla Sixtina y representa el momento en que Dios da vida a Adán. La obra es conocida por la poderosa imagen de las manos casi tocándose, simbolizando el acto divino de la creación, y es una de las obras más icónicas del Renacimiento.",
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
    id: "13",
    name: "La ronda de noche",
    shortDescription: "Una pintura de Rembrandt",
    description: "La ronda de noche es una famosa pintura de Rembrandt, creada en 1642. La obra representa a la milicia cívica de Ámsterdam en una escena animada y dinámica. Con su uso innovador de la luz y la sombra, Rembrandt da vida a la escena nocturna, destacando a los personajes principales con una luz dramática. Es una de las obras más destacadas del Barroco y muestra el talento de Rembrandt en la representación de la vida cotidiana.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/La_ronda_de_noche%2C_por_Rembrandt_van_Rijn.jpg/1200px-La_ronda_de_noche%2C_por_Rembrandt_van_Rijn.jpg",
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
    id: "14",
    name: "La libertad guiando al pueblo",
    shortDescription: "Una obra emblemática de Eugène Delacroix",
    description: "La libertad guiando al pueblo es una pintura de Eugène Delacroix, creada en 1830. La obra conmemora la Revolución de Julio en Francia y muestra a la diosa de la libertad liderando al pueblo sobre las barricadas. Es una representación poderosa del espíritu revolucionario y un símbolo perdurable de libertad y resistencia. La figura de la Libertad es alegórica y ha influido en muchas representaciones de luchas por la libertad.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/La_Libert%C3%A9_guidant_le_peuple_-_Eug%C3%A8ne_Delacroix_-_Mus%C3%A9e_du_Louvre_Peintures_RF_129_-_apr%C3%A8s_restauration_2024.jpg/800px-La_Libert%C3%A9_guidant_le_peuple_-_Eug%C3%A8ne_Delacroix_-_Mus%C3%A9e_du_Louvre_Peintures_RF_129_-_apr%C3%A8s_restauration_2024.jpg",
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
    id: "15",
    name: "El hijo del hombre",
    shortDescription: "Una pintura surrealista de René Magritte",
    description: "El hijo del hombre es una famosa pintura de René Magritte, creada en 1964. La obra muestra a un hombre con un sombrero de bombín, cuyo rostro está cubierto por una manzana verde flotante. La imagen enigmática y provocativa desafía las percepciones y plantea preguntas sobre la identidad y la realidad. Esta obra es una de las más icónicas del surrealismo y refleja la habilidad de Magritte para fusionar lo cotidiano con lo fantástico.",
    imageUrl: "https://historia-arte.com/_/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbSI6WyJcL2FydHdvcmtcL2ltYWdlRmlsZVwvZjU5Zjk5YWI0Nzg0OWZjMDQ2MzNiOGYzZmJlZjVlM2MuanBnIiwicmVzaXplLDgwMCJdfQ.0NL9TMRSfnATqyIteTHZvFrQazj4xwBO__NPHHaQthg.jpg",
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
    id: "16",
    name: "La dama del armiño",
    shortDescription: "Un retrato de Cecilia Gallerani por Leonardo da Vinci",
    description: "La dama del armiño es un retrato pintado por Leonardo da Vinci alrededor de 1489-1490. La obra representa a Cecilia Gallerani, una joven noble de la corte de Milán, sosteniendo un armiño. El retrato es conocido por su realismo y la sutileza en la representación de la piel y las telas, así como la expresión serena de la modelo. Es una de las cuatro obras femeninas de Leonardo que sobreviven.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Lady_with_an_Ermine_-_Leonardo_da_Vinci_%28adjusted_levels%29.jpg/1200px-Lady_with_an_Ermine_-_Leonardo_da_Vinci_%28adjusted_levels%29.jpg",
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
    id: "17",
    name: "La escuela de Atenas",
    shortDescription: "Un fresco de Rafael",
    description: "La escuela de Atenas es un famoso fresco pintado por Rafael entre 1509 y 1511. La obra representa a los filósofos y científicos más importantes de la antigüedad clásica, reunidos en un majestuoso espacio arquitectónico. Es celebrada por su composición armoniosa y el uso del espacio para representar la convergencia del conocimiento. Esta pintura es una muestra del ideal renacentista de la simetría y el equilibrio.",
    imageUrl: "https://cdn.culturagenial.com/es/imagenes/la-escuela-de-atenas-de-rafael-sanzio-og.jpg",
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
    id: "18",
    name: "La noche estrellada sobre el Ródano",
    shortDescription: "Otra obra maestra de Vincent van Gogh",
    description: "La noche estrellada sobre el Ródano es una pintura de Vincent van Gogh, creada en 1888. Representa la vista nocturna del río Ródano con las luces de la ciudad de Arles reflejadas en el agua. La obra combina la fascinación de Van Gogh por el cielo nocturno con su interés por los efectos de la luz sobre el agua. Esta pintura destaca por su paleta de colores vivos y la técnica de pinceladas que transmite movimiento.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/01/Vincent_van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
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
    id: "19",
    name: "El jardín de las Hespérides",
    shortDescription: "Una obra de Frederic Leighton",
    description: "El jardín de las Hespérides es una pintura del artista británico Frederic Leighton, creada en 1892. La obra representa una escena mitológica de las Hespérides, las ninfas que cuidaban el jardín con los manzanos dorados. La pintura es notable por su atención al detalle y el uso de colores vibrantes para dar vida a la escena mitológica. Leighton, con su estilo minucioso, captura la esencia de la mitología clásica.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Frederic_Leighton_-_The_Garden_of_the_Hesperides.jpg/771px-Frederic_Leighton_-_The_Garden_of_the_Hesperides.jpg",
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
    id: "20",
    name: "Impresión, sol naciente",
    shortDescription: "Una pintura de Claude Monet",
    description: "Impresión, sol naciente es una pintura de Claude Monet, creada en 1872. La obra es famosa por haber dado nombre al movimiento impresionista y representa el puerto de Le Havre al amanecer. El uso suelto y rápido del pincel de Monet capta los efectos fugaces de la luz y el color, marcando un hito en el arte moderno. Esta pintura refleja la habilidad de Monet para captar la esencia del momento con sus pinceladas distintivas.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Monet_-_Impression%2C_Sunrise.jpg/300px-Monet_-_Impression%2C_Sunrise.jpg",
    author: "Claude Monet",
    year: 1872,
    style: "Impresionismo",
    facts: {
      location: "Museo Marmottan Monet, París",
      medium: "Óleo sobre lienzo",
      dimensions: "48 cm × 63 cm"
    }
  },
  {
    id: "21",
    name: "El violinista azul",
    shortDescription: "Una obra de Marc Chagall",
    description: "El violinista azul es una pintura del artista ruso-francés Marc Chagall, creada en 1947. La obra muestra a un violinista azul flotando en el aire, una imagen característica del estilo onírico de Chagall. La combinación de colores vivos y elementos surrealistas crean una atmósfera mágica y etérea, reflejando la capacidad de Chagall para fusionar lo cotidiano con lo fantástico en una composición única.",
    imageUrl: "https://images.auctionet.com/thumbs/large_item_2635719_bb5be320d7.jpg",
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
    id: "22",
    name: "La danza",
    shortDescription: "Una vibrante obra de Henri Matisse",
    description: "La danza es una pintura de Henri Matisse, creada en 1910. La obra muestra a cinco figuras desnudas bailando en un círculo, con colores vivos y formas simplificadas que capturan el movimiento y la alegría. Matisse utiliza un uso audaz del color y las formas para transmitir energía y vitalidad, convirtiendo la danza en una celebración visual de la vida y la libertad. Esta obra es un ejemplo destacado del Fauvismo.",
    imageUrl: "https://historia-arte.com/_/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbSI6WyJcL2FydHdvcmtcL2ltYWdlRmlsZVwvbWF0aXNzZS1kYW5jZS0xOTEwLmpwZyIsInJlc2l6ZSw4MDAiXX0.algQupJ4DIvcEXEX844h0yLi3sRIa_Sf9x5Zcjj8ei0.jpg",
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
    id: "23",
    name: "El juramento de los Horacios",
    shortDescription: "Una obra neoclásica de Jacques-Louis David",
    description: "El juramento de los Horacios es una pintura de Jacques-Louis David, creada en 1784. La obra representa una escena legendaria de la historia romana, donde los tres hermanos Horacios juran defender a Roma. Con su composición clara y su enfoque en la moralidad y el deber, esta pintura es un ejemplo destacado del Neoclasicismo. David utiliza la luz y la postura para enfatizar el dramatismo y la solemnidad del momento.",
    imageUrl: "https://static.wikia.nocookie.net/wikiart/images/3/35/Jacques-Louis_David%2C_Le_Serment_des_Horaces.jpg/revision/latest?cb=20110519140424&path-prefix=es",
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
      "id": "24",
      "name": "La gran ola de Kanagawa",
      "shortDescription": "Una famosa estampa japonesa de Katsushika Hokusai",
      "description": "Esta obra maestra de Katsushika Hokusai, creada entre 1830 y 1833, representa una ola gigante que se alza sobre tres barcas de pesca en la bahía de Kanagawa, con el monte Fuji visible en la distancia. La imagen captura la fuerza y el poder de la naturaleza, así como la fragilidad de la vida humana. Considerada una de las obras más icónicas del arte japonés, ha sido reproducida e imitada en numerosas ocasiones.",
      "imageUrl": "https://es.wikipedia.org/wiki/La_gran_ola_de_Kanagawa",
      "author": "Katsushika Hokusai",
      "year": "1830-1833",
      "style": "Ukiyo-e",
      "facts": {
        "location": "Variable (Museo Metropolitano de Arte, Museo Británico, Museo Nacional de Tokio)",
        "medium": "Grabado en madera",
        "dimensions": "73,7 cm × 92,1 cm"
    }
  }
];

export default pinturas;