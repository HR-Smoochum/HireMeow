// LIBRARY IMPORTS
import React from 'react';

// LOCAL IMPORTS
// COMPONENT
function BlogPost({ blog }) {
  return (
    <div className="individualBlogPost">
      <img className="blogImage" src={blog.image} alt="cat working" />
      <div className="blogPostContentContainer" >
        <div className="blogTitle">{blog.title}</div>
        <div className="blogDate">{blog.date}</div>
      </div>
    </div>
  );
}

export default BlogPost;
