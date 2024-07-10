export interface Author {
  name: string;
  avatar: string;
}

export interface Post {
  title: string;
  date: string;
  slug: string;
  thumbnail?: Thumbnail;
  excerpt: string;
  author?: Author;
}

export interface Thumbnail {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const meAsAuthor: Author = {
  name: "Andrew Gonzalez",
  avatar: "/images/yo_2.png",
};

// in memory until 30 posts
export const posts: Post[] = [
  {
    title: "La meta de las pruebas unitarias",
    date: "2020-08-30 22:25:00",
    excerpt:
      "Si bien se dice que hacer pruebas unitarias a tu software mejoran el diseño del mismo, este solo es un buen efecto secundario, realmente lo que se busca con las pruebas unitarias es habilitar el crecimiento sostenible de un proyecto de software.",
    slug: "la-meta-de-las-pruebas-unitarias",
    thumbnail: { "alt": "unitest_tendency", "src": "/images/posts/2020/08/unitest_tendency.png", "width": 200, "height": 200 },
  },
  {
    title: "¿Qué es una prueba unitaria?",
    date: "2020-09-12 23:41:44",
    excerpt:
      "Una prueba unitaria es una forma automatizada de comprobar pequeños pedazos de código (ó unidades, de ahí que se llame prueba unitaria), esta comprobación debe ser rápida y de manera aislada.",
    slug: "que-es-una-prueba-unitaria",
    thumbnail: { "alt": "testing", "src": "/images/posts/2020/09/testing.png", "width": 200, "height": 200 }
  },
  {
    title: "El camino hacia HTTP/2, ¿Cómo funciona?",
    date: "2020-09-13 12:40:00",
    excerpt: "HTTP por sus siglas en inglés Hypertext Transfer Protocol, es el protocolo genérico más utilizado para el intercambio de información cliente servidor.",
    slug: "el-camino-hacia-http-2-como-funciona",
    thumbnail: { "alt": "HTTP", "src": "/images/posts/2020/08/HTTP.png", "width": 200, "height": 200 },
  },
  {
    title: "Anatomía de una prueba unitaria",
    date: "2020-09-30 04:48:10",
    excerpt: "¿Cómo escribir una prueba unitara? A lo largo de este post conoceremos la estructura de una prueba unitaria que usualmente está representada por las fases de: arrange, act y assert (AAA)",
    slug: "anatomia-de-una-prueba-unitaria",
  },
  {
    title: "Los 4 pilares de una buena prueba unitaria",
    date: "2020-10-24 17:20:55",
    excerpt: "🛡️ Protección contra las regresiones. 💪 Resistencia al refactoring. ⚡ Rápida retro alimentación 🛠️ Mantenibilidad",
    slug: "4-pilares-de-una-buena-prueba-unitaria",
    thumbnail: { "alt": "4-pilars", "src": "/images/posts/2020/10/4-pilars.png", "width": 200, "height": 200 }
  },
  {
    title: "Mocks y fragilidad en las pruebas",
    date: "2020-11-25 04:19:30",
    excerpt: "A lo largo de este post conoceremos, más a detalle los mocks y los otros tipos de test doubles, también veremos como los mocks están relacionados con la fragilidad en las pruebas.",
    slug: "mocks-y-fragilidad-en-las-pruebas",
    thumbnail: { "alt": "mocks", "src": "/images/posts/2020/11/mocks1.png", "width": 200, "height": 200 },
  },
  {
    title: "Estilos de pruebas unitarias",
    date: "2021-01-27 16:31:29",
    excerpt:
      "Esta vez conoceremos 3 estilos de realizar pruebas unitarias: output-based, state-based y communication-based, es decir, estilo basado en las salidas o resultado, el estilo basado en el estado y el estilo basado en las comunicaciones.",
    slug: "estilos-de-pruebas-unitarias",
  },
  {
    title: "¿Por qué hacer pruebas de integración?",
    date: "2021-03-05 23:40:47",
    excerpt: "Las pruebas de integración juegan un papel importante en nuestra suite de pruebas, como ya dijimos en el post ¿Qué es una prueba unitaria? 🧪 las pruebas unitarias deben cumplir los siguientes criterios:",
    slug: "por-que-hacer-pruebas-de-integracion",
    thumbnail: { "alt": "integration_tests_position", "src": "/images/posts/2021/02/integration_tests_position.png", "width": 200, "height": 200 }
  },
  {
    title: "Refactorizando para tener pruebas unitarias valiosas",
    date: "2021-06-18 18:10:17",
    excerpt:
      "Es casi imposible el mejorar una suite de pruebas sin refactorizar nuestra base de código mejorandola también, ya que la suite de pruebas está intrínsecamente conectada a esta base de código.",
    slug: "refactorizando-para-tener-pruebas-unitarias-valiosas",
    thumbnail: { "alt": "amplitud_profundidad", "src": "/images/posts/2021/01/amplitud_profundidad.png", "width": 200, "height": 200 }
  },
];
