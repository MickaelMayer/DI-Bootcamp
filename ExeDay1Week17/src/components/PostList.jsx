import React, { useState, useEffect } from "react";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/data.json") // Ensure the correct path
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        return response.json();
      })
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Post List</h2>
      {posts.length === 0 ? (
        <p>Loading posts...</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id} className="mb-4 p-4 border rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{post.title}</h3>
              <p className="text-gray-700">{post.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostList;