"use client";
import { addBlogPost, BlogPost } from "@/sanity/schemas/blogPosts";
import React, { useState } from "react";

const AddBlog: React.FC = () => {
  const [blogPost, setBlogPost] = useState<BlogPost>({
    title: "",
    description: "",
    date: "",
    readTime: "",
    creator: [],
    image: "",
    blogBody: {
      introduction: "",
      sections: [],
      conclusion: "",
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addBlogPost(blogPost);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-4 bg-white shadow-md rounded-lg"
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
          value={blogPost.title}
          onChange={(e) => setBlogPost({ ...blogPost, title: e.target.value })}
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
          value={blogPost.description}
          onChange={(e) =>
            setBlogPost({ ...blogPost, description: e.target.value })
          }
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
          type="text"
          placeholder="Date"
          value={blogPost.date}
          onChange={(e) => setBlogPost({ ...blogPost, date: e.target.value })}
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
          value={blogPost.readTime}
          onChange={(e) =>
            setBlogPost({ ...blogPost, readTime: e.target.value })
          }
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
          value={blogPost.creator.join(", ")}
          onChange={(e) =>
            setBlogPost({ ...blogPost, creator: e.target.value.split(", ") })
          }
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="image"
        >
          Image URL
        </label>
        <input
          id="image"
          type="text"
          placeholder="Image URL"
          value={blogPost.image}
          onChange={(e) => setBlogPost({ ...blogPost, image: e.target.value })}
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
          value={blogPost.blogBody.introduction}
          onChange={(e) =>
            setBlogPost({
              ...blogPost,
              blogBody: { ...blogPost.blogBody, introduction: e.target.value },
            })
          }
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      {/* Add inputs for sections and conclusion as needed */}
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Add Blog Post
      </button>
    </form>
  );
};

export default AddBlog;
