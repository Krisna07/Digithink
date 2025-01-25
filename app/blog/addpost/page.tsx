"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import generateBlogContext from "../../../utils/generate";
import type { BlogPost } from "../../../utils/generate";

interface PostData {
  title: string;
  description: string;
}

const AddPost = () => {
  const router = useRouter();
  const [post, setPost] = useState<PostData>({
    title: "",
    description: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [generatedPost, setGeneratedPost] = useState<BlogPost | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setGeneratedPost(null);

    try {
      if (!post.title || !post.description) {
        throw new Error("Title and description are required");
      }

      const response = await generateBlogContext(post.title, post.description);
      setGeneratedPost(response);
      console.log(JSON.parse(generatedPost));
      // router.push("/blog");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Generate Blog Post</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg p-6 shadow-md"
      >
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
            {error}
          </div>
        )}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            id="title"
            type="text"
            placeholder="Enter blog title"
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            disabled={isLoading}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            id="description"
            placeholder="Enter blog description"
            value={post.description}
            onChange={(e) => setPost({ ...post, description: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
            disabled={isLoading}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="image"
          >
            Image Upload
          </label>
          <input
            id="image"
            type="file"
            onChange={handleImageUpload}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? "Generating..." : "Generate Blog"}
        </button>
      </form>
    </div>
  );
};

export default AddPost;
{
  /* <form
onSubmit={handleSubmit}
className="max-w-xl mx-auto p-4 bg-white  rounded-lg"
>
<div className="mb-4">
  <label
    className="block text-gray-700 text-sm font-bold mb-2"
    htmlFor="title"
  >
    Title
  </label>
  <input
    id="title"
    type="text"
    placeholder="Title"
    value={post.title}
    onChange={(e) => setPost({ ...post, title: e.target.value })}
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  />
</div>
<div className="mb-4">
  <label
    className="block text-gray-700 text-sm font-bold mb-2"
    htmlFor="description"
  >
    Description
  </label>
  <textarea
    id="description"
    placeholder="Description"
    value={post.description}
    onChange={(e) => setPost({ ...post, description: e.target.value })}
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  />
</div>
<div className="mb-4">
  <label
    className="block text-gray-700 text-sm font-bold mb-2"
    htmlFor="date"
  >
    Date
  </label>
  <input
    id="date"
    type="datetime-local"
    value={post.date}
    onChange={(e) => setPost({ ...post, date: e.target.value })}
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  />
</div>
<div className="mb-4">
  <label
    className="block text-gray-700 text-sm font-bold mb-2"
    htmlFor="readTime"
  >
    Read Time
  </label>
  <input
    id="readTime"
    type="text"
    placeholder="Read Time"
    value={post.readTime}
    onChange={(e) => setPost({ ...post, readTime: e.target.value })}
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  />
</div>
<div className="mb-4">
  <label
    className="block text-gray-700 text-sm font-bold mb-2"
    htmlFor="creator"
  >
    Creator
  </label>
  <input
    id="creator"
    type="text"
    placeholder="Creator"
    value={post.creator.join(", ")}
    onChange={(e) =>
      setPost({ ...post, creator: e.target.value.split(", ") })
    }
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  />
</div>
<div className="mb-4">
  <label
    className="block text-gray-700 text-sm font-bold mb-2"
    htmlFor="image"
  >
    Image Upload
  </label>
  <input
    id="image"
    type="file"
    onChange={handleImageUpload}
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  />
</div>
<div className="mb-4">
  <label
    className="block text-gray-700 text-sm font-bold mb-2"
    htmlFor="introduction"
  >
    Introduction
  </label>
  <textarea
    id="introduction"
    placeholder="Introduction"
    value={post.blogBody.introduction}
    onChange={(e) =>
      setPost({
        ...post,
        blogBody: { ...post.blogBody, introduction: e.target.value },
      })
    }
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  />
</div>
{post.blogBody.sections.map((section, index) => (
  <div key={index} className="mb-4">
    <label
      className="block text-gray-700 text-sm font-bold mb-2"
      htmlFor={`section-title-${index}`}
    >
      Section Title
    </label>
    <input
      id={`section-title-${index}`}
      type="text"
      placeholder="Section Title"
      value={section.title}
      onChange={(e) =>
        handleSectionChange(index, "title", e.target.value)
      }
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
    <label
      className="block text-gray-700 text-sm font-bold mb-2"
      htmlFor={`section-content-${index}`}
    >
      Section Content
    </label>
    <textarea
      id={`section-content-${index}`}
      placeholder="Section Content"
      value={section.content}
      onChange={(e) =>
        handleSectionChange(index, "content", e.target.value)
      }
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
  </div>
))}
<button
  type="button"
  onClick={handleAddSection}
  className="mb-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
>
  Add Section
</button>
<div className="mb-4">
  <label
    className="block text-gray-700 text-sm font-bold mb-2"
    htmlFor="conclusion"
  >
    Conclusion
  </label>
  <textarea
    id="conclusion"
    placeholder="Conclusion"
    value={post.blogBody.conclusion}
    onChange={(e) =>
      setPost({
        ...post,
        blogBody: { ...post.blogBody, conclusion: e.target.value },
      })
    }
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  />
</div>
<button
  type="submit"
  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
>
  Add Post
</button>
</form> */
}
