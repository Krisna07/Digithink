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
  try {
    // Validate file
    if (!file) {
      throw new Error("No file provided");
    }

    // Check file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      throw new Error("File size too large. Maximum 10MB allowed.");
    }

    // Check file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];
    if (!allowedTypes.includes(file.type)) {
      throw new Error("Invalid file type. Only JPEG, PNG, WebP, and GIF are allowed.");
    }

    console.log("Uploading file:", { name: file.name, size: file.size, type: file.type });

    const asset = await client.assets.upload("image", file);
    console.log("Upload successful:", asset);

    return asset._id; // Ensure this returns the correct asset ID
  } catch (error) {
    console.error("Image upload error:", error);
    throw error;
  }
}

export async function addPost(post: Post) {
  try {
    // More robust check for image
    if (!post.image || !post.image.asset || !post.image.asset._ref || post.image.asset._ref.trim() === "") {
      console.log("Image validation failed:", post.image);
      return {
        status: 400,
        body: {
          message: "No image yet uploaded",
          error: undefined
        }
      }
    }

    // console.log("Creating post with image:", post.image.asset._ref);

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

    // console.log("Post created successfully:", result._id);

    return {
      status: 200,
      body: {
        message: "Post added succcessfully",
        post: result
      }
    };
  } catch (error) {
    return {
      status: 400,
      body: {
        message: "Error creating post",
        error: error
      }
    }
  }
}

export async function fetchAllPosts(): Promise<Post[]> {
  let posts: Post[] = [];
  try {
    const data = await client.fetch('*[_type == "post"]');
    if (data) {
      posts = data;
    }
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
