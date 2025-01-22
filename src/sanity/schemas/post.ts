import client from "@/utils/sanityClient";

export interface Post {
  title: string;
  description: string;
  date: string;
  readTime: string;
  creator: string[];
  image?: {
    asset: {
      _ref: string;
    };
  };
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
  const asset = await client.assets.upload("image", file);
  return asset._id;
}

export async function addPost(post: Post) {
  try {
    const result = await client.create({
      _type: "post",
      title: post.title,
      description: post.description,
      date: post.date,
      readTime: post.readTime,
      creator: post.creator,
      image: post.image,
      blogBody: post.blogBody,
    });
    console.log("Post created:", result);
  } catch (error) {
    console.error("Error creating post:", error);
  }
}

// export async function fetchAuthors(): Promise<{ _id: string; name: string }[]> {
//   const query = `*[_type == "author"]{ _id, name }`;
//   const authors = await client.fetch(query);
//   return authors;
// }

// export async function fetchCategories(): Promise<
//   { _id: string; title: string }[]
// > {
//   const query = `*[_type == "category"]{ _id, title }`;
//   const categories = await client.fetch(query);
//   return categories;
// }
