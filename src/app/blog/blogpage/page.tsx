"use client";
import React, { useEffect, useState } from "react";
import { fetchBlogPosts, BlogPost } from "@/sanity/schemas/blogPosts";

const BlogPage: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const getBlogPosts = async () => {
      const posts = await fetchBlogPosts();
      setBlogPosts(posts);
    };

    getBlogPosts();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      {blogPosts.map((post, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
          <p className="text-gray-700 mb-4">{post.description}</p>
          <p className="text-gray-500 text-sm mb-2">{post.date}</p>
          <p className="text-gray-500 text-sm mb-2">{post.readTime}</p>
          <div className="mb-4">
            {post.image && (
              <img
                src={`https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${post.image.asset._ref}`}
                alt={post.title}
                className="w-full h-auto rounded"
              />
            )}
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Introduction</h3>
            <p className="mb-4">{post.blogBody.introduction}</p>
            {post.blogBody.sections.map((section, idx) => (
              <div key={idx} className="mb-4">
                <h4 className="text-lg font-semibold mb-2">{section.title}</h4>
                <p>{section.content}</p>
              </div>
            ))}
            <h3 className="text-xl font-semibold mb-2">Conclusion</h3>
            <p>{post.blogBody.conclusion}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
