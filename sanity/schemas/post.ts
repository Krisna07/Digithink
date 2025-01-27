import client from "../../utils/sanityClient";

export interface Post {
  title: string;
  description: string;
  date: string;
  readTime: string;
  creator: string[];
  image: {
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
  return asset._id; // Ensure this returns the correct asset ID
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
    return result;
  } catch (error) {
    console.error("Error creating post:", error);
  }
}

export async function fetchAllPosts(): Promise<Post[]> {
  try {
    const posts = await client.fetch('*[_type == "post"]');
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export async function fetchPostByTitle(title: string): Promise<Post | null> {
  try {
    const post = await client.fetch(
      `*[_type == "post" && title == $title][0]`,
      { title }
    );
    return post || null;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}
