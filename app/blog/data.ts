export interface Author {
  name: string;
  avatar: string;
}


export interface Thumbnail {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface CodeSnippet {
  code: string;
  language: string;
}

export interface Post {
  title: string;
  date: string;
  slug: string;
  thumbnail?: Thumbnail;
  excerpt: string;
  author?: Author;
  code?: CodeSnippet;
  videoId?: string;
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
    slug: "meta-pruebas-unitarias",
    thumbnail: { "alt": "unitest_tendency", "src": "/images/posts/unitest_tendency.png", "width": 432, "height": 227 },
  },
  {
    title: "¿Qué es una prueba unitaria?",
    date: "2020-09-12 23:41:44",
    excerpt:
      "Una prueba unitaria es una forma automatizada de comprobar pequeños pedazos de código (ó unidades, de ahí que se llame prueba unitaria), esta comprobación debe ser rápida y de manera aislada.",
    slug: "que-es-una-prueba-unitaria",
    thumbnail: { "alt": "testing", "src": "/images/posts/testing.png", "width": 200, "height": 200 }
  },
  {
    title: "El camino hacia HTTP/2, ¿Cómo funciona?",
    date: "2020-09-13 12:40:00",
    excerpt: "HTTP por sus siglas en inglés Hypertext Transfer Protocol, es el protocolo genérico más utilizado para el intercambio de información cliente servidor.",
    slug: "camino-hacia-http2",
    videoId: "CvVCMq2Q3Es",
  },
  {
    title: "Anatomía de una prueba unitaria",
    date: "2020-09-30 04:48:10",
    excerpt: "¿Cómo escribir una prueba unitara? A lo largo de este post conoceremos la estructura de una prueba unitaria que usualmente está representada por las fases de: arrange, act y assert (AAA)",
    slug: "anatomia-prueba-unitaria",
    code: {
      language: 'javascript',
      code: `it('Anatomy of unit test 🧪', () => {
    // Arrange
    const customer = new Customer()
    customer.setMoney(1000)
    // Act
    customer.spend(100)
    // Assert
    expect(customer.moner).toBe(900)
})`
    }
  },
  {
    title: "Los 4 pilares de una buena prueba unitaria",
    date: "2020-10-24 17:20:55",
    excerpt: "🛡️ Protección contra las regresiones. 💪 Resistencia al refactoring. ⚡ Rápida retro alimentación 🛠️ Mantenibilidad",
    slug: "4-pilares-pruebas-unitarias",
    thumbnail: { "alt": "4-pilars", "src": "/images/posts/4-pilars.png", "width": 125, "height": 125 }
  },
  {
    title: "Mocks y fragilidad en las pruebas",
    date: "2020-11-25 04:19:30",
    excerpt: "A lo largo de este post conoceremos, más a detalle los mocks y los otros tipos de test doubles, también veremos como los mocks están relacionados con la fragilidad en las pruebas.",
    slug: "mocks-fragilidad-en-las-pruebas",
    thumbnail: { "alt": "mocks", "src": "/images/posts/mocks1.png", "width": 150, "height": 150 },
  },
  {
    title: "Estilos de pruebas unitarias",
    date: "2021-01-27 16:31:29",
    excerpt:
      "Esta vez conoceremos 3 estilos de realizar pruebas unitarias: output-based, state-based y communication-based.",
    slug: "estilos-pruebas-unitarias",
    code: {
      language: "java",
      code: `package codelapps.transition_fa;
import java.io.File;
import java.util.List;

public class FileContent implements Comparable<FileContent> {
  public final String filePath;
  public final List<String> lines;

  public FileContent(String filePath, List<String> lines) {
    this.filePath = filePath;
    this.lines = lines;
  }

  @Override
  public int compareTo(FileContent o) {
    return filePath.compareTo(o.filePath);
  }
}`
    }

  },
  {
    title: "¿Por qué hacer pruebas de integración?",
    date: "2021-03-05 23:40:47",
    excerpt: "Las pruebas de integración juegan un papel importante en nuestra suite de pruebas, como ya dijimos en el post ¿Qué es una prueba unitaria? 🧪 las pruebas unitarias deben cumplir los siguientes criterios:",
    slug: "porque-hacer-pruebas-integracion",
    thumbnail: { "alt": "integration_tests_position", "src": "/images/posts/integration_tests_position.png", "width": 432, "height": 227 }
  },
  {
    title: "Refactorizando para tener pruebas unitarias valiosas",
    date: "2021-06-18 18:10:17",
    excerpt:
      "Es casi imposible el mejorar una suite de pruebas sin refactorizar nuestra base de código mejorandola también, ya que la suite de pruebas está intrínsecamente conectada a esta base de código.",
    slug: "refactorizando-pruebas-unitarias-valiosas",
    thumbnail: { "alt": "amplitud_profundidad", "src": "/images/posts/amplitud_profundidad.png", "width": 432, "height": 227 }
  },
];
