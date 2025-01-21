import client from "@/utils/sanityClient";

export interface BlogPost {
  title: string;
  description: string;
  date: string;
  readTime: string;
  creator: string[];
  image: string;
  blogBody: {
    introduction: string;
    sections: {
      title: string;
      content: string;
    }[];
    conclusion: string;
  };
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
