import { MetadataRoute } from 'next'
import { posts } from "./blog/data";
import { jobs } from "./work/data";

function baseURL(path: string[] = []) {
  return ['https://andrewgm.me'].concat(path).join('/')
}

function generateBlogUrls(): MetadataRoute.Sitemap {
  return posts.map(post => ({
    url: baseURL(['blog', 'posts', post.slug]),
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.6,
  }))
}

function generateWorkUrls(): MetadataRoute.Sitemap {
  return jobs.map(job => ({
    url: baseURL(['work', 'items', job.slug]),
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }))
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseURL(),
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: baseURL(['about']),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: baseURL(['work']),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...generateWorkUrls(),
    {
      url: baseURL(['blog']),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    ...generateBlogUrls()
  ]
}
