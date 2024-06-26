export interface Author {
  name: string
  avatar: string
}

export interface Post {
  title: string
  date: Date
  slug: string
  thumbnail: Thumbnail
  excerpt: string
  author: Author
}

export interface Thumbnail {
  src: string
  alt: string
  width: number
  height: number

}

const meAsAuthor: Author = {
  name: "Andrew Gonzalez",
  avatar: "/images/yo_2.png"

}

// in memory until 30 posts
export const posts: Post[] = [
  {
    title: "My first post",
    date: new Date(),
    slug: "my-first-post",
    excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eaque veniam reprehenderit quod quisquam corporis autem est. Laudantium eius cum nam quia at. Debitis facilis quia dolorem delectus ipsa illum!",
    author: meAsAuthor,
    thumbnail: {
      src: "/images/hobbies/videogames.png",
      alt: "I like videogames",
      width: 250,
      height: 250
    }
  },
  {
    title: "My first post",
    date: new Date(),
    slug: "my-first-post",
    excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eaque veniam reprehenderit quod quisquam corporis autem est. Laudantium eius cum nam quia at. Debitis facilis quia dolorem delectus ipsa illum!",
    author: meAsAuthor,
    thumbnail: {
      src: "/images/hobbies/videogames.png",
      alt: "I like videogames",
      width: 250,
      height: 250
    }
  }
]
