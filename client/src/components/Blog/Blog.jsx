// LIBRARY IMPORTS
import React, { useState } from 'react';
import Header from '../Header/Header.jsx';

// LOCAL IMPORTS
import CatSuit from './cats/catSuitTie.png';
import BlogPost from './BlogPost.jsx';

// COMPONENT
function Blog() {
  const featured = [
    {
      id: 1,
      title: 'Wonderful Life of Cats',
      description: 'You will never really ever believe that there is a whole world that cats lead when you are not home at the moment. This is not going to make any sense and will surprise you but it\'s still a sentence.',
      date: '2023-03-06',
      image: './catTwoAgain.png',
    },
    {
      id: 2,
      title: 'What Cats do when You\'re at w=Work',
      description: 'This is not going to make any sense and will surprise you but it\'s still a sentence. These are by far the most famous cats you\'ll ever encounter when you attempt to go visit the world. Of course this just going to just be a bunch of random words about cat and music.',
      date: '2023-03-06',
      image: './catOne.png',
    },
    {
      id: 3,
      title: 'You\'ll Never Believe What My Cat Said Yesterday',
      description: 'These are by far the most famous cats you\'ll ever encounter when you attempt to go visit the world. Of course this just going to just be a bunch of random words about cat and music. Sample and review various types of cat food and treats.',
      date: '2023-03-06',
      image: './catTwo.png',
    },
    {
      id: 4,
      title: 'Ancient Cats in Egypt',
      description: 'These are by far the most famous cats you\'ll ever encounter when you attempt to go visit the world. Of course this just going to just be a bunch of random words about cat and music. Chew and swat at electrical systems and wiring.',
      date: '2023-03-05',
      image: './catThree.png',
    },
    {
      id: 5,
      title: 'World\'s Most Famous Cats',
      description: 'Celebrities love cats too and we can talk about them liking cats or loving cats as long as there is a sentence. These are by far the most famous cats you\'ll ever encounter when you attempt to go visit the world. Of course this just going to just be a bunch of random words about cat and music.',
      date: '2023-03-05',
      image: './catFour.png',
    },
    {
      id: 6,
      title: 'Best Food for your Cat',
      description: 'These are by far the most famous cats you\'ll ever encounter when you attempt to go visit the world. Of course this just going to just be a bunch of random words about cat and music. Complete covert missions and gather intelligence.',
      date: '2023-03-05',
      image: './catFive.png',
    },
  ];

  const [featuredBlogs, setFeaturedBlogs] = useState(featured);

  return (
    <div className="blogContainer">
      <Header />
      <div className="blogHeaderContainer">
        <div className="blogSectionHighlights">News</div>
        <div className="blogSeparator" />
        <div className="blogSectionHighlights">Tips & Tricks</div>
        <div className="blogSeparator" />
        <div className="blogSectionHighlights">Industry</div>
        <div className="blogSeparator" />
        <div className="blogSectionHighlights">Research</div>
        <div className="blogSeparator" />
        <div className="blogSectionHighlights">Inspiration</div>
      </div>
      <div className="highlightContainer">
        <div className="highlightImageContainer">
          <img src={CatSuit} alt="cat dressed in suit" className="highlightImage" />
        </div>
        <div className="highlightBlogContainer">
          <div className="highlightTitle">The best ways to land the job you want - and still get all the best toys</div>
          <div className="highlightAuthor">by Madame Mayburry Whiskers</div>
          <div className="highlightDate">March 2, 2023</div>
          <button className="readMore" type="button">Read article</button>
        </div>
      </div>
      <div className="featuredBlogsContainer">
        <i className="prevButton fa-solid fa-angles-left fa-xl" />
        <div className="featuredBlogPostsList">
          {
            featuredBlogs.map((blog) => {
              return <BlogPost blog={blog} key={blog.id} />;
            })
          }
        </div>
        <i className="prevButton fa-solid fa-angles-right fa-xl" />
      </div>
    </div>
  );
}

export default Blog;
