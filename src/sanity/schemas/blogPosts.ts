import client from "@/utils/sanityClient";
import { File } from "sanity";

export interface BlogPost {
  title: string;
  description: string;
  date: string;
  readTime: string;
  creator: string[];
  image?: File;
  blogBody: {
    introduction: string;
    sections: {
      title: string;
      content: string;
    }[];
    conclusion: string;
  };
}

export async function uploadImage(file: File): Promise<string> {
  const asset = await client.assets.upload("image", file as unknown as Buffer);
  return asset._id;
}

export async function addBlogPost(blogPost: BlogPost) {
  try {
    const result = await client.create({
      _type: "blogPost",
      title: blogPost.title,
      description: blogPost.description,
      date: blogPost.date,
      readTime: blogPost.readTime,
      creator: blogPost.creator,
      image: blogPost.image,
      blogBody: blogPost.blogBody,
    });
    console.log("Blog post created:", result);
  } catch (error) {
    console.error("Error creating blog post:", error);
  }
}

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  const query = `*[_type == "blogPost"]{
    title,
    description,
    date,
    readTime,
    creator,
    image,
    blogBody
  }`;
  const blogPosts = await client.fetch(query);
  return blogPosts;
}
