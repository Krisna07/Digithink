"use client";
import React, { useState } from "react";
import { addPost, Post, uploadImage } from "@/sanity/schemas/post";

const AddPost: React.FC = () => {
  const [post, setPost] = useState<Post>({
    title: "",
    description: "",
    date: "",
    readTime: "",
    creator: [],
    image: undefined,
    blogBody: {
      introduction: "",
      sections: [],
      conclusion: "",
    },
  });

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageId = await uploadImage(file);
      setPost({ ...post, image: { asset: { _ref: imageId } } });
    }
  };

  const handleAddSection = () => {
    setPost({
      ...post,
      blogBody: {
        ...post.blogBody,
        sections: [...post.blogBody.sections, { title: "", content: "" }],
      },
    });
  };

  const handleSectionChange = (index: number, field: string, value: string) => {
    const newSections = post.blogBody.sections.map((section, i) =>
      i === index ? { ...section, [field]: value } : section
    );
    setPost({
      ...post,
      blogBody: {
        ...post.blogBody,
        sections: newSections,
      },
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addPost(post);
  };

  return (
    <form
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
    </form>
  );
};

export default AddPost;
