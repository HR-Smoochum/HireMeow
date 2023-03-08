// LIBRARY IMPORTS
import React from 'react';

// LOCAL IMPORTS

// COMPONENT
function BlogPost({ blog }) {
  return (
    <div className="individualBlogPost">
      <div className="blogImage" />
      <div className="blogTitle">{blog.title}</div>
      <div className="blogAuthor">Mr. Bartholomue</div>
      <div className="blogDate">{blog.date}</div>
    </div>
  );
}

export default BlogPost;
